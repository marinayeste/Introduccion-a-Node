let { paises, favoritos, nombre } = require('./datos')

let paisesFavoritos = []

paisesFavoritos = paises.a.concat(paises.b, paises.c)

const paisesFinal = []

for (let i = 0; i < favoritos.length; i++) {
    paisesFinal.push(paisesFavoritos[favoritos[i]])
}

console.log(paisesFinal)

