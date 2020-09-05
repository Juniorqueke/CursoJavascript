console.log('Exemplo 01)', '1' == 1, '')
    // True pois está comparando os valores e não o tipo deles
console.log('Exemplo 02)', '1' === 1)
    // False pois o primeiro 1 é uma STRING e o segundo 1 é um NUMBER
console.log('Exemplo 03)', '3' != 3)
    // False pois está comparando apenas o tipo e não o valor
console.log('Exemplo 04)', '3' !== 3)
    // True pois o primeiro 3 é uma STRING e o segundo 3 é um NUMBER
console.log('Exemplo 05)', 3 < 2)
console.log('Exemplo 06)', 3 > 2)
console.log('Exemplo 07)', 3 <= 2)
console.log('Exemplo 08)', 3 >= 2)
console.log()

const d1 = new Date(0)
const d2 = new Date(0)
console.log('Exemplo 09)', d1 == d2)
console.log('Exemplo 10)', d1 === d2)
    // False pois ele irá comparar o endereço de memória
console.log('Exemplo 11)', d1.getTime() === d2.getTime())
    // True pois irá comparar as duas datas de referencia(01/01/1970) até os milisegundos
console.log('Exemplo 12)', undefined == null)
console.log('Exemplo 13)', undefined === false)