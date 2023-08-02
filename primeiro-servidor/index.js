// importando a biblioteca para dentro do arquivo e utilizando um dos seus métodos
const lodash = require('lodash')

const array = [1, 2, 4, 4, 6, 7, 1]
// para exibir os números de forma única

const arrayUniuco = lodash.uniq(array)
console.log(arrayUniuco)

// É possível escolher os métodos que eu desejo utilizar, fazendo isso por meio da desestruturação

const { uniq } = require('lodash')
const array = [1, 2, 4, 4, 6, 7, 1]
const arrayUniuco = uniq(array)
console.log(arrayUniuco)
