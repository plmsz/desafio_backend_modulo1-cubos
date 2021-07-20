const jogadores = [
    {
        "nome": "Herman",
        "jogada": 1
    },
    {
        "nome": "Rhodes",
        "jogada": 0
    },
    {
        "nome": "Beach",
        "jogada": 0
    },
    {
        "nome": "Laurel",
        "jogada": 0
    },
    {
        "nome": "Beatrice",
        "jogada": 0
    },
    {
        "nome": "Alison",
        "jogada": 0
    },
    {
        "nome": "Saundra",
        "jogada": 0
    },
    {
        "nome": "Klein",
        "jogada": 0
    }
]

const jogadores2 = [
    {
        "nome": "Herman",
        "jogada": 1
    },
    {
        "nome": "Rhodes",
        "jogada": 0
    },
    {
        "nome": "Beach",
        "jogada": 1
    },
    {
        "nome": "Laurel",
        "jogada": 1
    },
    {
        "nome": "Beatrice",
        "jogada": 1
    },
    {
        "nome": "Alison",
        "jogada": 1
    },
    {
        "nome": "Saundra",
        "jogada": 1
    },
    {
        "nome": "Klein",
        "jogada": 1
    }
]

const jogadores3 = [
    {
        "nome": "Herman",
        "jogada": 1
    },
    {
        "nome": "Rhodes",
        "jogada": 1
    },
    {
        "nome": "Beach",
        "jogada": 1
    },
    {
        "nome": "Laurel",
        "jogada": 1
    },
    {
        "nome": "Beatrice",
        "jogada": 1
    },
    {
        "nome": "Alison",
        "jogada": 1
    },
    {
        "nome": "Saundra",
        "jogada": 1
    },
    {
        "nome": "Klein",
        "jogada": 1
    }
]

//Usando o filter
function solucao(jogadores) {

    let zeros = []; let uns = []; let qtdZeros = 0; let qtdUns = 0;

    zeros = jogadores.filter((x) => {
        return x.jogada == 0;
    });

    uns = jogadores.filter((x) => {
        return x.jogada == 1;
    });

    qtdZeros = zeros.length;
    qtdUns = uns.length;

    if (qtdZeros == 1) {
        console.log(zeros[0].nome);

    } else if (qtdUns == 1) {
        console.log(uns[0].nome);
    } else {
        console.log("NINGUEM")
    }
}

solucao(jogadores)
solucao(jogadores2)
solucao(jogadores3)


//Usando for ... of

function solution(jogadores) {

    let zeros = []; let uns = [];

    for (let item of jogadores) {
        if (item.jogada === 0) {
            zeros.push(item);
        } else if (item.jogada === 1) {
            uns.push(item);
        }
    }

    qtdZeros = zeros.length;
    qtdUns = uns.length;

    if (qtdZeros === 1) {
        console.log(zeros[0].nome);

    } else if (qtdUns === 1) {
        console.log(uns[0].nome);
    } else {
        console.log("NINGUEM");
    }
}

solution(jogadores)
solution(jogadores2)
solution(jogadores3)
