const frase1 = "cAPS"
const frase2 = "CAPS"
const frase3 = "lock"
const frase4 = "lOCk"


function solucao(input) {
    if (input.substr(0, 1) == input.substr(0, 1).toLowerCase() && input.substr(1) == input.substr(1).toUpperCase()) {
        console.log(`${input.substr(0, 1).toUpperCase()}${input.substr(1).toLowerCase()}`);
    } else if (input == input.toUpperCase()) {
        console.log(input.toLowerCase())
    } else {
        console.log(input)
    }

}

solucao(frase1)
solucao(frase2)
solucao(frase3)
solucao(frase4)
