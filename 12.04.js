// Criar array com nome 5 paises 

let listaPaises = ['Brasil', 'Japão', 'México', 'Argentina', 'India'];

// Adicionar um país no final da lista 

listaPaises.push('Canadá');
console.log(listaPaises);

// Remover um pais do final da lista

listaPaises.pop();
console.log(listaPaises);

// Adicionar um país no início da lista

listaPaises.unshift('Nepal');
console.log(listaPaises);

// Remover um país do início da lista

listaPaises.shift();
console.log(listaPaises);

// Imprimir a lista na tela

console.log(listaPaises);

// Imprimir o último país da lista na tela 

console.log(listaPaises[4]);

// Imprimir o 2 país da lista na tela 

console.log(listaPaises[1]);

// Imprimir o país de índice 2 na tela

console.log(listaPaises[2]);

// Programa que imprima todos os elentos de um array de números

const numeros = [0, 3, 18, 2, 11];
let indice = 0;
while (indice < numeros.length) {
    console.log(numeros[indice]);
    indice++;
}

// Programa que soma e imprime cada elemento de um array

const numeros1 = [0, 5, 3, 69, 45, 18, 13, 2];
let soma = 0;
for (let i = 0; i < numeros1.length; i++){
soma = soma + numeros1[i];
}
console.log(soma);

// Contar quantas letras "a" existem numa determinada palavra, imprimir na tela

const palavra = 'abacadabra';
let contador = 0;
for (let letra of palavra) {
    if (letra === 'a'){
        contador += 1;
         }
}
console.log(contador);

// Fazer contagem regressiva de 10 à 0

for (let i = 10; i >= 0; i--) {
    console.log(i);
}

// Imprimir todos os números pares entre 1 e 50

for (let i = 1; i <= 50; i++) {
if (i % 2 === 0){    
    console.log(i);
}
}

