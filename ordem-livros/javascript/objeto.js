const autor = {
    id: '1',
    nome: "J.R.R. Tolkien",
    idade: 65,
    imagem: "https://i0.wp.com/energiainteligenteufjf.com.br/wp-content/uploads/2021/03/tolkien2.jpg?fit=669%2C446&ssl=1",
    nacionalidade: "Inglaterra"
}

console.log(autor.id);
console.log(autor.nome);
console.log(autor.idade);
console.log(autor.imagem);
console.log(autor.nacionalidade);

let livro = {
    id: '1',
    titulo: "O Senhor dos Anéis",
    ano: 1954,
    genero: "Fantasia",
    autor: autor,
    ordem: 1,
    imagem: "https://harpercollins.com.br/cdn/shop/products/9786555113631_79a81e4f-07c1-4aa8-ba58-b44033442bbf.jpg?v=1686061056"
}

console.log(livro);
console.log(livro.autor.nome);