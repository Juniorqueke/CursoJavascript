//Estratégia 1 para gerar um valor padrão
function soma1(a, b, c) {
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return (a + b) / c
}

console.log(soma1()), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0);

// Estratégia 2 para gerar um valor padrão
function soma2(x, y, z) {
    x = x !== undefined ? x : 1;
    y = 1 in arguments ? y : 1;
    z = isNaN(z) ? 1 : z;
    return x + y + z;
}

console.log(soma2()), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0);

// Valor padrão EcmaScript2015
function teste3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(teste3()), teste3(3), teste3(1, 2, 3), teste3(0, 0, 0);