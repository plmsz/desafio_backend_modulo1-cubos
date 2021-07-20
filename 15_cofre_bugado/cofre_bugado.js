const input = " cubos\ncuggbyos\n"
const input2 = "cubos \n  ewvelrabsocaeln\n"

function solucao(input) {
    //Removendo espaços e quebras de linha
    const linhas = input.trim().split("\n");
    const senha = linhas[0];
    let digitos = linhas[1];

    //Pecorrendo o string da senha, verificando se a mesma letra exite no array digitos(senha digitada errada)
    for (let item of senha) {
        const indice = digitos.indexOf(item);
        //Uma vez que a letra não é encontrada, o indexOf retorna -1, após return encerra 
        if (indice === -1) {
            console.log("NAO");
            return
            //Usando o substr para modificar o array que comecará a partir do proximmo indice 
        } else {
            digitos = digitos.substr(indice)
        }
    }
    //Se no for encontrar todas as letras na ordem correta, o programa imprimira "SIM"
    console.log("SIM");
}

solucao(input)
solucao(input2)
