const numeros1 = [1, 1, 1];
const numeros2 = [1, 2, 2, 1, 2, 2, 3, 4, 3];

function solucao(numeros) {
    //Usar o reduce para somar todos os elementos
    let soma = numeros.reduce((acc, item) => acc + item)

    const tamanho = numeros.length

    //Fazer dois contadores com while, uma para decrescer a soma e outra para determinar a posição do jogador    
    let contador = 1;

    while (soma > 1) {
        if (contador == tamanho) {
            contador = 0;
        }
        soma--;
        contador++;
    }
    console.log(contador)
}

solucao(numeros1);
solucao(numeros2);

//Usando o resto da divisão
function solution(numeros) {
    let soma = 0;
    for (let item of numeros) {
        soma = soma + item;
    }
    const resto = soma % numeros.length;
    if (resto === 0) {
        console.log(numeros.length);
    } else {
        console.log(resto);
    }
}

solution(numeros1);
solution(numeros2);