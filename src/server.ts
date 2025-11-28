import express from 'express';
import { PrismaClient } from './generated/prisma/client';

const prisma = new PrismaClient({});
const port = 3000; 
const app = express();

app.get('/movies', (req, res) => { 
    res.send('listagem de filmes');
});

app.get('/movies', async (req, res) => {
    const movies = await prisma.movies.findMany({
        orderBy: { title: 'asc' },
        include: { genres: true, languages: true },
    });
    res.json(movies);
});  

app.listen(port, () => {
    console.log(`Servidor em execução ${port}`);
});