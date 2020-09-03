//Como criar um objeto e seus atributos
const pessoa = {
    nome: 'Asdrubal',
    idade: 5,
    endereco: {
        logradouro: 'Rua abc',
        numero: 59
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)
console.log("")

// Criar uma nova variável que receber os atributos de pessoa
const { nome: name, idade: age } = pessoa
console.log(name, age)
console.log("")


const { sobreNome, dataNascimento = true } = pessoa
console.log(sobreNome, dataNascimento)
console.log("")

//Acessando os atributos logradouro e numero dentro do metodo endereco de pessoa
const { endereco: { logradouro, numero } } = pessoa
console.log(logradouro, numero)