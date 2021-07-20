//Usando filter
let texto = "      Cuidado, pois usuarios Às vezes deixam espacos vazios no fim, do texto sem querer. "

function solution(texto) {

    let palavras = texto.split(" ");

    const palavrasSemEspacos = palavras.filter((x => x !== ""));

    if (texto != "") {
        console.log(palavrasSemEspacos.length);
        // console.log(palavrasSemEspacos);
    } else {
        console.log("0");
    }
}

solution(texto);

//Usando o for ... of

function solucao(texto) {
    let palavras = texto.split(" ");

    let qtdPalavras = 0;
    for (let palavra of palavras) {
        if (palavra !== "") {
            qtdPalavras++;
        }
    }
    console.log(qtdPalavras);
}

solucao(texto)