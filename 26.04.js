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

// Ordenacao de array con strings 

const pessoas = ['joao', 'ana', 'carlos', 'beatriz'];

pessoas.sort();

console.log(pessoas);

// 