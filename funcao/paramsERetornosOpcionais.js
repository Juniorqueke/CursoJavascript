function area(largua, altura) {
    const area = largua * altura;
    if (area > 20) {
        console.log(`Valor acima do máximo permitido: ${area}m2.`);
    } else {
        return area;
    }
}

console.log(area(2, 2));
console.log();
console.log(area(10, 10));
console.log(area(2, 5, 15, 22)); // Faz a multiplicação com os dois primeiros numeros e ignora o resto