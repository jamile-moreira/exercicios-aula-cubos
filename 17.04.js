// Criar um objeto, acessá-lo e imprimir desta forma: 'José tem 30 anos, 1.73m, possui CNH e tem os seguintes apelidos:
// - Jr
// - Juninho'

const pessoa = {
    Nome: 'José',
    Idade: 30,
    Altura: 1.73,
    TemCNH: true,
    Apelidos: ['Jr', 'Juninho'] 
};

let textoCNH = '';
if (pessoa.TemCNH === true) {
    textoCNH = 'possui CNH'
} else {
    textoCNH = 'não possui CNH'
}
console.log(`${pessoa.Nome} tem ${pessoa.Idade} anos, ${pessoa.Altura}m, ${textoCNH} e tem os seguintes apelidos:`);

for (let apelido of pessoa.Apelidos) {
    console.log(`- ${apelido}`);
}

// Melhorar o código anterior utilizando ternário 

const pessoa = {
    Nome: 'José',
    Idade: 30,
    Altura: 1.73,
    TemCNH: true,
    Apelidos: ['Jr', 'Juninho'] 
};

let textoCNH = pessoa.TemCNH ? 'possui CNH' : 'não possui CNH';

console.log(`${pessoa.Nome} tem ${pessoa.Idade} anos, ${pessoa.Altura}m, ${textoCNH} e tem os seguintes apelidos:`);

for (let apelido of pessoa.Apelidos) {
    console.log(`- ${apelido}`);
}

// Criar objeto que represente o cartão de consumo. Deve ter: Nome, Idade, Produtos. Cada produto deve ter: Nome, Preço e quantidade. 

let produtosConsumidos = [
    {
        nome: 'Pão de alho',
        precoUnitario: 1500,
        quanditade: 3,
},
{
        nome: 'Cerveja',
        precoUnitario: 1000,
        quanditade: 2,   
},
{
        nome: 'Agua',
        precoUnitario: 500,
        quanditade: 1        
}
] 

let cartaoConsumo = {
    nomeDoCliente: 'José',
    idadeDoCliente: 30,
    produtosConsumidos
};
console.log(cartaoConsumo);

// Imprimir nome do cliente, idade, modificar a idade do cliente, imprimir a nova idade, nome do primeiro produto e o preco unitario do ultimo produto 

console.log(cartaoConsumo.nomeDoCliente);
console.log(cartaoConsumo.idadeDoCliente);
cartaoConsumo.idadeDoCliente = 40;
console.log(cartaoConsumo.idadeDoCliente);
console.log(cartaoConsumo.produtosConsumidos[0].nome);
console.log(cartaoConsumo.produtosConsumidos[2].precoUnitario);

// Imprimir uma mensagem que chama o cliente pelo nome e informa o valor que deve ser pago 

let valorAPagarCartao = 0;
for (let produto of produtosConsumidos) {
valorAPagarCartao += produto.precoUnitario * produto.quanditade
}
console.log(`Sr(a) ${cartaoConsumo.nomeDoCliente}, o total a pagar é R$ ${(valorAPagarCartao/100).toFixed(2)}`)