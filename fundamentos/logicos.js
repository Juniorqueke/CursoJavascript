function compras(trab1, trab2) {
    const comprarSorvete = trab1 || trab2
    const comprarTv50 = trab1 && trab2
        // const comprarTv32 = !!(trab1 ^ trab2)  Ou exclusivo XOR
    const comprarTv32 = trab1 != trab2
    const saudavel = !comprarSorvete // Operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, saudavel }

}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))