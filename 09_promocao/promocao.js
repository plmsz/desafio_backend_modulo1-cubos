const precos = [200, 150, 50, 100];
const precos2 = [150, 50];

//Usando o for
function solucao(precos) {
    let custoTotal = 0;
    let menorPreco = precos[0];
    for (let item of precos) {
        if (precos.length >= 3) {
            if (item <= menorPreco) {
                menorPreco = item;
            }
        } else {
            menorPreco = 0;
        }
        custoTotal += item;
    }
    custoTotal -= menorPreco * 0.5;
    console.log(custoTotal)
}

solucao(precos);

//Usando o sort e o reduce
function solution(precos) {
    const precosEmOrdem = precos.sort((a, b) => a - b);
    let menorPreco = 0;
    if (precos.length >= 3) {
        menorPreco = -0.5 * precos[0];
    }
    custoTotal = precosEmOrdem.reduce((acc, item) => acc + item, menorPreco);
    console.log(custoTotal)
}

solution(precos);