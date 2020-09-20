const pessoa = {
    saudacao: 'Good Morning!',
    falar() {
        console.log(this.saudacao);
    }
}

pessoa.falar();

const falar = pessoa.falar;
falar(); // conflito entre paradigmas: entre programação funcional e POO

const falarPessoa = pessoa.falar.bind(pessoa);
falarPessoa();