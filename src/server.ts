import express from "express";
import { PrismaClient } from "../generated/prisma/client";

const prisma = new PrismaClient();
const app = express();
const port = 3000;

app.use(express.json());

app.get("/movies", async (_, res) => {
    const movies = await prisma.movie.findMany({
        orderBy: { title: "asc" },
        include: {
            genre: true,
            language: true,
        },
    });
    res.json(movies);
});

app.post("/movies", async (req, res) => {
    const { title, genre_id, language_id, oscar_count, release_date } =
        req.body;

    try {
        const movieWithSameTitle = await prisma.movie.findFirst({
            where: {
                title: { equals: title, mode: "insensitive" },
            },
        });

        if (movieWithSameTitle) {
            return res
                .status(409)
                .send({ message: "Já existe um filme com esse título" });
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
        return res.status(500).send({ message: "Falha ao cadastrar um filme" });
    }
});

app.put("/movies/:id", async (req, res) => {
    const id = Number(req.params.id);

    const movie = await prisma.movie.findUnique({
        where: {
            id,
        },
    });

    try {
        if (!movie) {
            return res.status(404).send({ message: "Filme não encontrado" });
        }

        const data = { ...req.body };
        data.release_date = data.release_date
            ? new Date(data.release_date)
            : undefined;

        await prisma.movie.update({
            where: { id },
            data: data,
        });
    } catch (error) {
        return res.status(500).send({ message: "Falha ao atualizar o filme" });
    }
    res.status(200).send();
});

app.delete("/movies/:id", async (req, res) => { 
    const id = Number(req.params.id);

    try {
        const movie = await prisma.movie.findUnique({
            where: {
                id,
            },
        });

        if (!movie) {
            return res.status(404).send({ message: "Filme não encontrado" });
        }

        await prisma.movie.delete({
            where: { id },
        });
    } catch (error) {
        return res.status(500).send({ message: "Não foi possível deletar o filme" });
    }

    res.status(200).send({ message: "Filme deletado com sucesso" });
})

app.get("/movies/:genreName", async (req, res) => { 
    try {
        const moviesFilterdedByGenreNam = await prisma.movie.findMany({
            include: {
                genre: true,
            },
            where: {
                genre: {
                    name: {
                        equals: req.params.genreName,
                        mode: "insensitive"
                    }
                }
            }
        });
        res.status(200).send(moviesFilterdedByGenreNam);
    } catch (error) {
         res.status(500).send({ message: "Não foi possível buscar os filmes por gênero" });
    }
});

app.listen(port, () => {
    console.log(`Servidor em execução em http://localhost:${port}`);
});