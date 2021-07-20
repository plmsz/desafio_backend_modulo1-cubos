//Usando o filter
const minimo = 2;
const maximo = 10;
const lista = [0, 5, 6, 10, 11];

function solucao(min, max, valores) {
    const valoresPermitidos = valores.filter((valor) => {
        return (valor >= min && valor <= max);
    })
    console.log(valoresPermitidos);
}

solucao(minimo, maximo, lista);

//Usando o for ... e 

function solution(min, max, valores) {
    const valoresPermitidos = []
    for (let item of valores) {
        if (item >= min && item <= max) {
            valoresPermitidos.push(item)
        }
    }
    console.log(valoresPermitidos);

}

solucao(minimo, maximo, lista);
