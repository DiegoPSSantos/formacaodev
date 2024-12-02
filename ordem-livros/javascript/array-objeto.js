const autores = [
    {
        id: '1',
        nome: "J.R.R. Tolkien",
        idade: 65,
    },
    {
        id: '2',
        nome: "George R.R. Martin",
        idade: 66,
    },
    {
        id: '3',
        nome: "Stephen King",
        idade: 75,
    }
]

console.log(autores[0].nome);
console.log(autores[1].nome);
console.log(autores[2].nome);
console.log(autores[3]?.idade);

console.log('Fim!!!');

const serieHarryPotter =
    {
        id: '1',
        nome: "Harry Potter",
        descricao: "Serie de livros de fantasia escrita por J.K. Rowling",
        genero: "Fantasia",
        livros: [
            {
                id: '1',
                titulo: "Harry Potter e a Pedra Filosofal",
                ano: 1997,
                autor: autores[0]
            },
            {
                id: '2',
                titulo: "Harry Potter e a Câmara Secreta",
                ano: 1998,
                autor: autores[0]
            },
            {
                id: '3',
                titulo: "Harry Potter e o Prisioneiro de Azkaban",
                ano: 1999,
                autor: autores[0]
            }
        ]
    }

    console.log(serieHarryPotter.livros[0]?.titulo);