
function solucao(carta) {
    const cartas = ["Q", "J", "K", "A", "2", "3"]

    let indice = cartas.indexOf(carta) + 1; 
    if (indice < cartas.length) {
        console.log(cartas[indice])
    } else {
        console.log(cartas[0])
    }
}



// solucao("Q");
solucao("3");