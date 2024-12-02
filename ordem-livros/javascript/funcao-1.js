function saudacao (nome = 'Visitante', titulo = 'Sr(a)') {
    console.log("Bom Dia,", titulo, nome + "!");
    console.log("Boa Tarde,", titulo, nome + "!");
    console.log("Boa Noite,", titulo, nome + "!");
}

saudacao();
saudacao('João');
saudacao('Maria', 'Dra.');
saudacao('Pedro', 'Sr.');