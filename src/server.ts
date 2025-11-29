import express from "express";
import { PrismaClient } from "../generated/prisma/client";

const prisma = new PrismaClient();
const port = 3000;
const app = express();

app.get("/movies", (req, res) => {
    res.send("listagem de filmes");
});

app.listen(port, () => {
    console.log(`Servidor em execução em http://localhost:${port}`);
});