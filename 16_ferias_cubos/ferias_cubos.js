const grupos = "1 1 1 1";
const grupos2 = "2 1 4 3";
const grupos3 = "4 0 2 3";

function solucao(input) {
    const entradas = input.trim().split(" ");
    let solo = parseInt(entradas[0]);
    let dupla = parseInt(entradas[1]);
    let trio = parseInt(entradas[2]);
    let quarteto = parseInt(entradas[3]);

    let taxis = quarteto;
    quarteto = 0;

    taxis += Math.floor(dupla / 2);
    dupla = dupla % 2;

    const umComTres = Math.min(solo, trio);
    taxis += umComTres;
    solo -= umComTres;
    trio -= umComTres;

    if (trio === 0) {
        taxis += Math.ceil((solo + dupla * 2) / 4);
    } else {
        taxis += (trio + dupla);
    }
    console.log(taxis);
}

solucao(grupos)
solucao(grupos2)
solucao(grupos3)

