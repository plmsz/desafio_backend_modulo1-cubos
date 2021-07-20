//Usando if/else
lista = [10, 5, 20];

function solution(numero, limiteInferior, limiteSuperior) {
    if (numero >= limiteInferior && numero <= limiteSuperior) {
        console.log("PERTENCE");
    } else {
        console.log("NÃO PERTENCE");
    }
}
solucao(lista[0], lista[1], lista[2]);

//Refatorando usando ternario
function solucao(numero, limiteInferior, limiteSuperior) {

    const imprime = numero >= limiteInferior && numero <= limiteSuperior ? "PERTENCE" : "NAO PERTENCE";

    console.log(imprime);
}

solution(lista[0], lista[1], lista[2]);