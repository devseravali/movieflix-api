import express from "express";
import { PrismaClient } from "@prisma/client";
import swaggerUi from "swagger-ui-express";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const swaggerDocument = require("../swagger.json");

const prisma = new PrismaClient();
const app = express();
const port = 3000;

app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/movies", async (_, res) => {
    try {
        const movies = await prisma.movie.findMany({
            orderBy: { title: "asc" },
            include: {
                genre: true,
                language: true,
            },
        });
        res.json(movies);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar filmes" });
    }
});

app.post("/movies", async (req, res) => {
    const { title, genre_id, language_id, oscar_count, release_date } =
        req.body;

    try {
        const movieWithSameTitle = await prisma.movie.findFirst({
            where: { title: { equals: title, mode: "insensitive" } },
        });

        if (movieWithSameTitle) {
            return res
                .status(409)
                .json({ message: "Já existe um filme com esse título" });
        }

        await prisma.movie.create({
            data: {
                title,
                genre_id,
                language_id,
                oscar_count,
                release_date: new Date(release_date),
            },
        });

        res.status(201).send();
    } catch (error) {
        res.status(500).json({ message: "Falha ao cadastrar um filme" });
    }
});

app.put("/movies/:id", async (req, res) => {
    const id = Number(req.params.id);

    try {
        const movie = await prisma.movie.findUnique({ where: { id } });

        if (!movie) {
            return res.status(404).json({ message: "Filme não encontrado" });
        }

        const data = {
            ...req.body,
            release_date: req.body.release_date
                ? new Date(req.body.release_date)
                : undefined,
        };

        await prisma.movie.update({
            where: { id },
            data,
        });

        res.status(200).send();
    } catch (error) {
        res.status(500).json({ message: "Falha ao atualizar o filme" });
    }
});

app.delete("/movies/:id", async (req, res) => {
    const id = Number(req.params.id);

    try {
        const movie = await prisma.movie.findUnique({ where: { id } });

        if (!movie) {
            return res.status(404).json({ message: "Filme não encontrado" });
        }

        await prisma.movie.delete({ where: { id } });

        res.status(200).json({ message: "Filme deletado com sucesso" });
    } catch (error) {
        res.status(500).json({ message: "Não foi possível deletar o filme" });
    }
});

app.get("/movies/:genreName", async (req, res) => {
    try {
        const movies = await prisma.movie.findMany({
            include: { genre: true },
            where: {
                genre: {
                    name: {
                        equals: req.params.genreName,
                        mode: "insensitive",
                    },
                },
            },
        });

        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({
            message: "Não foi possível buscar os filmes por gênero",
        });
    }
});

app.listen(port, () => {
    console.log(`Servidor em execução em http://localhost:${port}`);
});
