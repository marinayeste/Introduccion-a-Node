const supervillains = require('supervillains')
const factorial = require('./modulo')

for (let i = 0; i < 4; i++) {

    console.log(supervillains.all[factorial(Math.floor(Math.random() * 5) + 1)])
}