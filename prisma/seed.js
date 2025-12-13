import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const genres = await prisma.genre.createMany({
        data: [
            { name: "Drama" },
            { name: "Ação" },
            { name: "Romance" },
            { name: "Ficção Científica" },
            { name: "Fantasia" },
            { name: "Suspense" },
            { name: "Comédia" },
            { name: "Animação" },
            { name: "Terror" },
            { name: "Aventura" },
        ],
        skipDuplicates: true,
    });

    const languages = await prisma.language.createMany({
        data: [
            { name: "Inglês" },
            { name: "Português" },
            { name: "Espanhol" },
            { name: "Francês" },
            { name: "Coreano" },
        ],
        skipDuplicates: true,
    });

    const genreList = await prisma.genre.findMany();
    const languageList = await prisma.language.findMany();

    const getGenreId = (name) =>
        genreList.find((g) => g.name === name)
            ?.id ?? null;

    const getLanguageId = (name) =>
        languageList.find((l) => l.name === name)
            ?.id ?? null;

    await prisma.movie.createMany({
        data: [
            {
                title: "O Poderoso Chefão",
                release_date: new Date("1972-03-24"),
                genre_id: getGenreId("Drama"),
                language_id: getLanguageId("Inglês"),
                oscar_count: 3,
            },
            {
                title: "Titanic",
                release_date: new Date("1997-12-19"),
                genre_id: getGenreId("Romance"),
                language_id: getLanguageId("Inglês"),
                oscar_count: 11,
            },
            {
                title: "Matrix",
                release_date: new Date("1999-03-31"),
                genre_id: getGenreId("Ficção Científica"),
                language_id: getLanguageId("Inglês"),
                oscar_count: 4,
            },
            {
                title: "O Senhor dos Anéis: A Sociedade do Anel",
                release_date: new Date("2001-12-19"),
                genre_id: getGenreId("Fantasia"),
                language_id: getLanguageId("Inglês"),
                oscar_count: 4,
            },
            {
                title: "Forrest Gump",
                release_date: new Date("1994-07-06"),
                genre_id: getGenreId("Drama"),
                language_id: getLanguageId("Inglês"),
                oscar_count: 6,
            },
            {
                title: "Gladiador",
                release_date: new Date("2000-05-05"),
                genre_id: getGenreId("Ação"),
                language_id: getLanguageId("Inglês"),
                oscar_count: 5,
            },
            {
                title: "Parasita",
                release_date: new Date("2019-05-30"),
                genre_id: getGenreId("Suspense"),
                language_id: getLanguageId("Coreano"),
                oscar_count: 4,
            },
            {
                title: "Toy Story",
                release_date: new Date("1995-11-22"),
                genre_id: getGenreId("Animação"),
                language_id: getLanguageId("Inglês"),
                oscar_count: 0,
            },
            {
                title: "O Iluminado",
                release_date: new Date("1980-05-23"),
                genre_id: getGenreId("Terror"),
                language_id: getLanguageId("Inglês"),
                oscar_count: 0,
            },
            {
                title: "Indiana Jones e os Caçadores da Arca Perdida",
                release_date: new Date("1981-06-12"),
                genre_id: getGenreId("Aventura"),
                language_id: getLanguageId("Inglês"),
                oscar_count: 4,
            },
        ],
    });

    console.log("Seed completo: gêneros, idiomas e filmes inseridos!");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
