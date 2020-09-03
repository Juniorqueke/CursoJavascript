let valor
console.log(valor)
console.log("")

const produto = {}
console.log(produto.preco)
console.log("")
console.log(produto)
produto.preco = 3.50
console.log("")
console.log(produto)

produto.preco = undefined // Não atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // Sem preço
console.log(!!produto.preco)
console.log(produto)