const imprimirResultado = function(nota) {
    if (nota > 7) {
        console.log('Aprovado!');
    } else {
        console.log('Reprovado!');
    }
}

imprimirResultado(5)
imprimirResultado(8.6)
imprimirResultado('Epa') // Cuidado ao passar valores de String, irá gerar um false