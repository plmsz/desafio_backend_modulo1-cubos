//Usando o metodo reduce
const lista = [1, 2, 3, 4]

function solucao() {

    const somar = lista.reduce((acc, item) => acc + item);
    console.log(somar);
}

solucao(lista);

//Usando o for ... of
let soma = 0;
function solution() {
    for (item of lista) {
        soma = soma + item;
    }
    console.log(soma);
}

solution(soma);