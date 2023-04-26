// uso do metodo sort() = ordenacao padrao
// segue a tabela unicode

const numeros = [1, 30, 4, 6, 80,34];
numeros.sort();
console.log(numeros);

// uso do metodo sort() = ordenacao com funcao callback - CRESCENTE

const numeros = [1, 30, 4, 6, 80,34];

numeros.sort((primeiroElemento, segundoElemento) => {
    if (primeiroElemento < segundoElemento) {
        return -1;
    }
    if (primeiroElemento > segundoElemento) {
        return 1;
    }

    return 0;
});
console.log(numeros);

// uso do metodo sort() = ordenacao com funcao callback - DECRESCENTE

const numeros = [1, 30, 4, 6, 80,34];

numeros.sort((primeiroElemento, segundoElemento) => {
    if (primeiroElemento < segundoElemento) {
        return 1;
    }
    if (primeiroElemento > segundoElemento) {
        return -1;
    }

    return 0;
});
console.log(numeros);

// Exemplo de refatoracao do codigo anterior - CRESCENTE

const numeros = [1, 30, 4, 6, 80,34];

numeros.sort((a, b) => {
    return a - b;
});
console.log(numeros);

// - DECRESCENTE

const numeros = [1, 30, 4, 6, 80,34];

numeros.sort((a, b) => {
    return b - a;
});
console.log(numeros);

// Dado o array, faca a ordenacao dos resultados crescente segundo o id de cada usuario. Depois faca a ordenacao decrescente 

const usuarios = [
    { id: 11, nome: 'joao', idade: 23},
    { id: 2, nome: 'maria', idade: 18},
    { id: 4, nome: 'ana', idade: 30},
    { id: 1, nome: 'rodrigo', idade: 17},
    { id: 123, nome: 'rodrigo', idade: 17},
];

console.log(usuarios)

usuarios.sort((primeiro, segundo) => {
    return primeiro.id - segundo.id;
});

console.log(usuarios);

// DECRESCENTE 

const usuarios = [
    { id: 11, nome: 'joao', idade: 23},
    { id: 2, nome: 'maria', idade: 18},
    { id: 4, nome: 'ana', idade: 30},
    { id: 1, nome: 'rodrigo', idade: 17},
    { id: 123, nome: 'rodrigo', idade: 17},
];

console.log(usuarios)

usuarios.sort((primeiro, segundo) => {
    return segundo.id - primeiro.id;
});

console.log(usuarios);

// Ordenacao de array con strings - letras minusculas e sem acentos 

const pessoas = ['joao', 'ana', 'carlos', 'beatriz'];

pessoas.sort();

console.log(pessoas);

// exemplo de ordenacao string crescente e decrescente - usando metodo localeCompare()
//-CRESCENTE
const pessoas = ['Joao', 'ana', 'carlos', 'beatriz'];

pessoas.sort((a, b) => {
    return a.localeCompare(b);
});

console.log(pessoas);

//-DECESCENTE
const pessoas = ['Joao', 'ana', 'carlos', 'beatriz'];

pessoas.sort((a, b) => {
    return b.localeCompare(a);
});

console.log(pessoas);

// Dado o array de carros, crie uma funcao que receba dois argumentos: o array e o campo a ser ordenado. 

const carros = [
    {nome: 'corola', marca:'toyota', ano: '2020', cor: 'prata'},
    {nome: 'argo', marca:'fiat', ano: '2021', cor: 'preto'},
    {nome: 'ranger', marca:'ford', ano: '2021', cor: 'prata'},
    {nome: 'hilux', marca:'toyota', ano: '2018', cor: 'branco'}
];

const ordenarCarros = (arrayCarros,campoOrdenacao) => {
    arrayCarros.sort((primeiro, segundo) => {
        return primeiro[campoOrdenacao].localeCompare(segundo[campoOrdenacao]);
    });
    console.log(arrayCarros)
}
ordenarCarros(carros,'marca');

//somar os elementos usando for

const array = [0, 1, 2, 3, 4];

let somaTotal = array[0]
for (let i = 1; i < array.length; i++) {
    const elementoAtual = array[i];
    somaTotal = somaTotal + elementoAtual;
}
console.log(somaTotal)

// exemplo de refaturacao do codigo anterior, usando reduce()

const array = [0, 1, 2, 3, 4];

array.reduce((acumulador, valorAtual, indice, array) => {
    return acumulador + valorAtual
});
