// Saber se e-mail e valido. Tem que ter um @ e um ponto depois do @
const possivelEmail = 'jose@cubos.academy';
const indexArroba = possivelEmail.indexOf('@');
const indexPonto = possivelEmail.indexOf('.',indexArroba);

if (indexPonto > indexArroba) {
    console.log('Email atende os requisitos');
} else {
console.log('Não há nenhum ponto após o arroba')
}

// Obter apenas os dois ultimos digitos do estado 

const cidade = 'Salvador-BA';

const penultimoIndex = cidade.length - 2;
let estado = cidade.slice(penultimoIndex);
console.log(estado);

// Alterar uma string que esta em 97.50 para 97,50

const numero ='97.50';

const variavelAlterada = numero.replace('.',',');
console.log(numero);
console.log(variavelAlterada);

// Transformar numero em string

const numero = 97.50;
const numeroString = String(numero);
console.log(numeroString)

// Alterar uma string que esta em 1,350,000 para 1.350.000

let numero = '1,350,000';
while (numero !== numero.replace(',','.')) {
    numero = numero.replace(',','.');
}

console.log(numero);

// imprimir data com 3 parametros, dia, mes e ano. Essa funcao deve imprimir 8 digitos no total

function data (dia, mes, ano) {
const diaFormatado = String(dia).padStart(2, '0');
const mesFormatado = String(dia).padStart(2, '0')
console.log(`${diaFormatado}/${mesFormatado}/${ano}`);
}
data(1,1,2021)