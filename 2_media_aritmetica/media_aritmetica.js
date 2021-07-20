//Usando o reduce

lista = [2, 3, 4];

function media() {

    const media = (lista.reduce((acc, item) => acc + item)) / lista.length;
    console.log(media);
}

media(lista);

//Usando for ... of
function solution() {
    let soma = 0;

    for (let item of lista) {
        soma = item + soma;
    }

    const media = soma / lista.length;

    console.log(media);
}

solution(lista)