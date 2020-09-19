// Criar função de uma forma literal
function funcao1() {}

//Amazenar função em uma variavel
const funcao2 = function() {}

// Amazenar função em um array
const array = [function(a, b) { return a + b }, funcao1, funcao2]
console.log(array[0](2, 3));

// Armazenar função dentro de um atributo de objeto
const objeto = {};
objeto.falar = function() { return 'Hello World!' }
console.log(objeto.falar());

// Passar função como parametro para outra função
function run(fun) {
    fun();
}
run(function() { console.log('Stars...') })

// Uma função pode retornar/conter outra função
function soma(x, y) {
    return function(c) {
        console.log((x + y) * c);
    }
}

soma(2, 5)(3);