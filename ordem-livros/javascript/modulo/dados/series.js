import autores from "./autores.js";

const series = [
    {
        id: '1',
        titulo: "O Senhor dos Anéis",
        ano: 2001,
        genero: "Fantasia",
        autor: autores[0].nome,
        ordem: 1,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/8/87/Ringstrilogyposter.jpg?20161022120234",
        livros: [
            {
                id: '1',
                titulo: "O Senhor dos Anéis - A Sociedade do Anel",
                ano: 1954,
                autor: autores[0].nome,
                imagem: "https://harpercollins.com.br/cdn/shop/products/9786555113631_79a81e4f-07c1-4aa8-ba58-b44033442bbf.jpg?v=1686061056"
            },
            {
                id: '2',
                titulo: "O Senhor dos Anéis - As Duas Torres",
                ano: 2002,
                autor: autores[0].nome,
                imagem: "https://m.media-amazon.com/images/I/81N9hxO6XdL._SY425_.jpg"
            },
            {
                id: '3',
                titulo: "O Senhor dos Anéis - O Retorno do Rei",
                ano: 2003,
                autor: autores[0].nome,
                imagem: "https://m.media-amazon.com/images/I/415ik3wDKML._SY445_SX342_.jpg"
            }
        ]
    },
    {
        id: '2',
        titulo: "Harry Potter",
        ano: 1997,
        genero: "Fantasia",
        autor: autores[1].nome,
        ordem: 2,
        imagem: "https://m.media-amazon.com/images/I/51-nXsSRfZL._SY445_SX342_.jpg",
        livros: [
            {
                id: '4',
                titulo: 'Harry Potter e a Pedra Filosofal',
                ano: 1997,
                autor: autores[1].nome,
                imagem: "https://m.media-amazon.com/images/I/51-nXsSRfZL._SY445_SX342_.jpg"
            },
            {
                id: '5',
                titulo: 'Harry Potter e a Câmara Secreta',
                ano: 1998,
                autor: autores[1].nome,
                imagem: "https://m.media-amazon.com/images/I/51-nXsSRfZL._SY445_SX342_.jpg"
            },
            {
                id: '6',
                titulo: 'Harry Potter e o Prisioneiro de Azkaban',
                ano: 1999,
            },
            {
                id: '7',
                titulo: 'Harry Potter e o Cálice de Fogo',
                ano: 2000,
            },
            {
                id: '8',
                titulo: 'Harry Potter e a Ordem da Fênix',
                ano: 2003,
            },
            {
                id: '9',
                titulo: 'Harry Potter e o Enigma do Príncipe',
                ano: 2005,
            },
            {
                id: '10',
                titulo: 'Harry Potter e as Relíquias da Morte',
                ano: 2007,
            },
            {
                id: '11',
                titulo: 'Harry Potter e o Príncipe Mestiço',
                ano: 2009,
            },
        ],
    },
    {
        id: '3',
        titulo: "A Guerra dos Tronos",
        ano: 1999,
        genero: "Fantasia",
        autor: autores[2].nome,
        ordem: 3,
        imagem: "https://m.media-amazon.com/images/I/81-316Z-2NL._SY425_.jpg",
        livros: [
            {
                id: '1',
                titulo: 'A Guerra dos Tronos',
            },
            {
                id: '2',
                titulo: 'A Fúria dos Reis',
            },
            {
                id: '3',
                titulo: 'A Tormenta das Espadas',
            },
            {
                id: '4',
                titulo: 'A Ascensão de Brienne',
            },
            {
                id: '5',
                titulo: 'A Dança dos Dragões',
            }
        ]
    }
]

export default series;