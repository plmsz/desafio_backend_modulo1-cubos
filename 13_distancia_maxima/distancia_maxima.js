const input =
    "3\n0 0\n0 3\n4 0\n"

const input2 =
    "5\n3.56 17\n-5.1 36.3\n0.0002 -2\n5 5\n-9.01 -17.7\n"

function distancia(input) {

    //Tratando os dados da entrada

    //Removendo os espacos e quebras de linha e trasnformando o string em um array
    //Convertendo string com ParseInt(string,sistema de numeracao)
    const linhas = (input.trim().split("\n"))
    const numFuncionarios = parseInt(linhas[0]);

    //Criando um array de objetos (coordenadas por pessoa) a partir do array anterior (linhas)
    //Pecorre o array com for
    const coordenadas = []
    for (let i = 1; i < linhas.length; i++) {
        //Separando coord. x e y
        const coord = linhas[i].split(" ")
        //Adicionando as coordenadas no novo array
        coordenadas.push({
            x: parseFloat(coord[0]),
            y: parseFloat(coord[1])
        })
    }
    //Distancia maxima = raiz((x2 - x1)^2 + (y2 - y1)^2)
    let distancia;
    let maiorDist = 0;

    //Comparando a distancia de cada elemento por vez, em relacao aos outros do array
    for (let coor1 = 0; coor1 < numFuncionarios; coor1++) {
        for (let coor2 = coor1; coor2 < numFuncionarios; coor2++) {
            distancia = Math.sqrt((coordenadas[coor2].x - coordenadas[coor1].x) ** 2 + (coordenadas[coor2].y - coordenadas[coor1].y) ** 2);
            maiorDist = distancia > maiorDist ? distancia : maiorDist
        }
    }
    console.log(maiorDist);
}

distancia(input)
distancia(input2)


