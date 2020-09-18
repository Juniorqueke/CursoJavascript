const notas = [6.7, 8.5, 9.2, 3.14, 8.79];

for (let i in notas) {
    //  console.log("indice", i, notas[i]);
}

const pessoa = {
    name: "Junior",
    surname: "Queke",
    age: 25,
    country: "Brasil"
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`);
}