// Faca uma funcao que recebe parametros do tipo string e imprime uma string invertida (Usara Reverse)

function inverterString(texto) {

const arrayDeLetras = texto.split('');
arrayDeLetras.reverse();
// console.log(arrayDeLetras)

let textoInvertido = '';
for (let letra of arrayDeLetras) {
    // textoInvertido = textoInvertido + letra;
    textoInvertido += letra; // mesmo que a linha acima 
}
console.log(textoInvertido);
}
inverterString('Cubos Academy');

// Melhorar o codigo anterior usando join()

function inverterString(texto) {

    const arrayDeLetras = texto.split('');
    arrayDeLetras.reverse();

    const textoInvertido = arrayDeLetras.join('');
    console.log(textoInvertido);
    }
    inverterString('Cubos Academy');

    
// Criar uma funcao onde descarta 10% do inicio e final, aproveitando os 80% centrais 

function filtrar80(dados) {
    const startIndex = Math.round(dados.length * 10/100);
    const endIndex = Math.floor(dados.length * 90/100);
    const fatia = dados.slice(startIndex, endIndex);
    console.log(startIndex, endIndex)
    console.log(fatia);
}

const dados = [0,1,5,7,10,33,5,60,57,85,45,68,49,57,89,639,57,33,24,11,5,3,1,0,0];

filtrar80(dados);


// versatilidade do splice 
array = ['a','b','c','d','e'];
array.splice(1, 0,'f');
console.log(array);

// splice equivalente ao push ('f')

array = ['a','b','c','d','e'];
array.splice(array.length, 0, 'f');
console.log(array);

// splice equivalente ao pop ()

array = ['a','b','c','d','e'];
array.splice(array.length -1, 1);
console.log(array)

//splice equivalente ao shift ()

array = ['a','b','c','d','e'];
array.splice(0, 1);
console.log(array)

// plice equivalente ao unshift('f')
array = ['a','b','c','d','e'];
array.splice(0, 0, 'f')
console.log(array)

// Exemplo de comportamento de number, string, objetos, array
//number
let numero1 = 5;
let numero2 = numero1;
numero1 = 10;
console.log('numero1 = ', numero1);
console.log('numero2 = ', numero2);

//string
let texto1 = 'abra';
let texto2 = texto1;
texto1 = texto1 + 'cadabra';
console.log('texto1 = ', texto1);
console.log('texto2 = ', texto2);

//objetos
let obj1 = { prop: 5};
let obj2 = obj1;
obj1.prop = 10;
obj2.prop = 20;
console.log('objt1 = ', obj1);
console.log('objt2 = ', obj2);

//array
let array1 = [1,2,3];
let array2 = array1;
array1.push(4);
array2.push(5);
console.log('arr1 = ', array1);
console.log('arr2 = ', array2);

