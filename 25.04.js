// callbacks exemplo

// const imprimirNome = (nome) => {
//     console.log(nome)
// }
// imprimirNome('Jamile')

const imprimirJamile = () => {
    console.log('Jamile Moreira')
}

setTimeout(imprimirJamile, 5000)

// calback na construcao com uma arrow function
setTimeout(() => {
    console.log('Cubos Academy')
}, 5000)

// funcao tradicional

setTimeout(function(){
    console.log('Cubos Academy')
}, 5000)

// uso do setInterval
setInterval(() => {
    console.log('Ola pessoal!')
}, 2000)

const imprimir = () => {
    console.log('Ola novamente')
}
setInterval(imprimir, 2000)

// usando o clearInterva para interromper a funcao

const imprimir = () => {
    console.log('Oi')
    clearInterval(interval)
}
const interval = setInterval(imprimir, 2000)

// usando funcao tradicional 

let numero = 0

const contador = setInterval(function(){
    console.log(numero)
        numero ++
}, 1000)

// funcao que degrementa 

let numero = 10

const contador = setInterval(function(){
    console.log(numero)
    numero --
    if (numero === 0) {
        console.log('Boooooomm!')
        clearInterval(contador)
    }
}, 1000)

// exemplo do uso do every (funcao tradicional)


const frutas = ['abacaxi', 'manga', 'melancia'];

const resultado = frutas.every(function(elementoAtual){
    return elementoAtual !== 'banana';
});
console.log(resultado);

// exemplo do uso do every (arrow function)
const frutas = ['abacaxi', 'manga', 'melancia'];

const resultado = frutas.every((elementoAtual) => {
    return elementoAtual !== 'banana';
});
console.log(resultado);

// Criar uma funcao que receba um array de objetos que contem as propriedades nomes e idades. A funcao deve vericar a idade dos usuarios.

const usuarios = [
    {nome: 'joao', idade: 23},
    {nome: 'maria', idade: 18},
    {nome: 'ana', idade: 30},
    {nome: 'rodrigo', idade: 17}
];

const fiscalizarFesta = (arrayObjetos) => {
    const resultado = arrayObjetos.every((objeto) => {
        return objeto.idade > 17;
    });
    if (resultado) {
        console.log('Festa liberada!');
    }else{
        console.log('Tem menor de iade')
    }
}
fiscalizarFesta(usuarios);