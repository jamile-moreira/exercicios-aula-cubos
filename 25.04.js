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

// exemoplo do uso do metodo some()

const nomes = ['joao','maria', 'jose', 'rodrigo'];

const minhaFuncaoCallback = (nome) => {
    return nome === 'joao';
}
const resultado = nomes.some(minhaFuncaoCallback);

console.log(resultado);

// OU

const resultado = nomes.some((nome) => {
    return nome === 'joao';
});

console.log(resultado);

// Criar uma funcao que percorra um array com nomes de arquivos. A funcao deve verificar se existe ao menos um arquivo com a entensao '.bat'

const arquivos = [
    'teste.txt',
    'foto.png',
    'contrato.doc',
    'instalador.exe'
];

const antiVirus = (arrayArquivos) => {
    const resultado = arrayArquivos.some((arquivo) => {
        const existeExtensao = arquivo.indexOf('.bat');

        return existeExtensao !== -1;
    });

    if (resultado) {
        console.log('Virus detectado!')
    } else{
        console.log('Nenhum virus encontrado');
    }
}
antiVirus(arquivos);

// uso do metodo find()

const usuarios = [
    {nome: 'joao', idade: 23},
    {nome: 'maria', idade: 18},
    {nome: 'ana', idade: 30},
    {nome: 'rodrigo', idade: 17}
];

const resultado = usuarios.find((usuario) => {
    return usuario.nome === 'jamile';
});
console.log(resultado);

// Crie uma funcao que receba nome da marca de um carro e um array de objetos contendo as propriedades nome, marca, ano e cor. A funcao deve encontrar os dados do carro 

const carros = [
    {nome: 'corola', marca:'toyota', ano: '2020', cor: 'prata'},
    {nome: 'argo', marca:'fiat', ano: '2021', cor: 'preto'},
    {nome: 'ranger', marca:'ford', ano: '2021', cor: 'prata'},
    {nome: 'hilux', marca:'toyota', ano: '2018', cor: 'branco'}
];
const buscarCarro = (marca, arrayCarros) => {
    return arrayCarros.find((carro) => {
        return carro.marca === marca;
    });
};
const resultado = buscarCarro('toyota', carros);
console.log(resultado);

// exemplo de uso metodo findIndex

const nomes = ['joao', 'ana', 'rodrigo'];
const resultado = nomes.findIndex((nome) => {
    return nome === 'jose';
});

console.log(resultado);

// exemplo do uso do metodo filter()

const numeros = [1, 4, 4, 5, 3, 1, 8];

const resultado = numeros.filter((numero) => {
    return numero === 3;
})

console.log(resultado);

// exemplo de uso do metodo map()

const usuarios = [
    { nome: 'Guido', sobrenome: 'Cerqueira', idade: 31},
    { nome: 'Daniel', sobrenome: 'Lopes', idade: 29},
    { nome: 'Vitor', sobrenome: 'Vidal', idade: 28}
]
const novoArray = usuarios.map((usuario) => {
    return{
    nomeCompleto: `${usuario.nome} ${usuario.sobrenome}` , idade: usuario.idade
    }    
});
console.log(novoArray);

// Criar um novo array de produtos contendo nome, preco e desconto. Valor de desconto =10%

const produtos = [
    { nome: 'arroz', preco: 500},
    { nome: 'carne', preco: 3200},
    { nome: 'biscoito', preco: 450},
    { nome: 'banana', preco: 320}   
]
const produtosDescontos = produtos.map((produto) => {
    return {
        nome: produto.nome,
        preco: produto.preco,
        desconto: produto.preco * 0.1 
    }
});
console.log(produtosDescontos);