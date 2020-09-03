// Saving one function in one variable
const imprimirSoma = function(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 8))

// Retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(8, 6))

const imprimir2 = a => console.log(a)
imprimir2("Awesome")