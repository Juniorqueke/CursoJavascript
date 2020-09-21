let dobro = function(a) {
    return 2 * a;
}

dobro1 = (b) => {
    return 2 * b;
}

dobro2 = c => 2 * c; // Retorno implicito
console.log(dobro2(Math.PI));

let ola = function() {
    return 'Olá';
}

ola = () => 'Olá';
ola = _ => 'Olá'; // Possui um parametro
console.log(ola());