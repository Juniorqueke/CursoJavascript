function tratarErroELanca(erro) {
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNome(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELanca(e)
    } finally {
        console.log('Erro detectado')
    }

}

const obj = { name: 'Edgar' }
imprimirNome(obj)