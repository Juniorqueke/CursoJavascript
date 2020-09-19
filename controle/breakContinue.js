const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (indice in numbers) {
    if (indice == 5) {
        break;
    }
    console.log(`indice ${indice} = ${numbers[indice]}`);
}

for (indice in numbers) {
    if (indice == 5) {
        continue;
    }
    console.log(`indice ${indice} = ${numbers[indice]}`);
    // NÃO UTILIZAR ESTE TIPO DE ESTRUTRA
}

externo:
    for (a in numbers) {
        for (b in numbers) {
            if (a == 2 && b == 3) break externo
            console.log(`Par = ${a},${b}`);
            // NÃO UTILIZAR ESTE TIPO DE ESTRUTRA
        }
    }

console.log('Fim');