function rand([min = 0, max = 1000]) {
    if (min > max)[min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}


console.log(rand([50, 40]))
    //Sorteia um número entre 50 e 40
console.log()
console.log(rand([955]))
    // Sorteia um número entre 955 e 1000 (padrão da função)
console.log()
console.log(rand([, 10]))
    // Sorteia um número entre 0 (padrão da função) e 10 
console.log()
console.log(rand([]))
    // Sorteia um número entre 0 (padrão da função) e 1000 (padrão da função)
console.log()