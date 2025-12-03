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
            language: true
        }
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

app.listen(port, () => {
    console.log(`Servidor em execução em http://localhost:${port}`);
});