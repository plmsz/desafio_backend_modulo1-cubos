const lista = [22, 19]

//Usando loops e condicionais

function solucao(lista) {
    const maiorDeIdade = [];
    for (let idade of lista) {
        if (idade >= 18) {
            maiorDeIdade.push(idade);
        }
    }
    if (maiorDeIdade.length === 0) {
        console.log("CRESCA E APARECA")
    } else {
        let idadeDoCacula = maiorDeIdade[0];
        for (let i = 1; i <= maiorDeIdade.length; i++) {
            if (maiorDeIdade[i] <= idadeDoCacula) {
                idadeDoCacula = maiorDeIdade[i];
            }
        }
        console.log(idadeDoCacula);
    }
}

solucao(lista)

//Usando os métodos sort (para ordenar elementos) e o filter (para filtra a menor idade)
function solucao2(lista) {
    const verificaMaior = lista.some((x) => x >= 18)
    if (verificaMaior) {
        const listaFiltradaOrdenada = lista.filter((x) => x >= 18).sort((a, b) => a - b);
        console.log(listaFiltradaOrdenada[0]);
    } else {
        console.log("CRESCA E APARECA")
    }
}

solucao2(lista)