let comparaComThis = function(parametro) {
    console.log(this === parametro);
}

comparaComThis(global);
const objeto = {}
comparaComThis = comparaComThis.bind(objeto);
comparaComThis(global);
comparaComThis(objeto);

let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow(global);
comparaComThisArrow(module.exports);
comparaComThisArrow(objeto);
comparaComThisArrow(module.exports);