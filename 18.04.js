// Declarar uma variável que armazena um objetos com nome, idade, profissao e altura. Fazer uma função com parâmetro e que não retorna valores. A função deve imprimir: 'Olá! Meu nome é João, sou um Jovem de 12 anos, 1.4m de altura e sou estudante'

const dados = {
    nome: 'João',
    idade: 12,
    profissao: 'Estudante',
    altura: 1.4
}

function apresentacao (dados) {
    console.log(`'Olá! Meu nome é ${dados.nome}, sou um jovem de ${dados.idade} anos, ${dados.altura}m de altura e sou ${dados.profissao}'`)
}
apresentacao(dados);

// Fazer uma funcao com parametro idade, que determina a faixa etaria. A funcao deve retornar um string que informa se essa pessoa e jovem, adulto ou idoso

function pessoa (idade) {
    if (idade <= 21) {
        return 'jovem';
    } else if 
        (idade >= 22 && idade<= 65) {
        return 'adulto(a)';
    } else
        return 'idoso(a)';
}


const valorRetornadoPelaFuncao = pessoa(20)
console.log(`Você é uma pessoa ${valorRetornadoPelaFuncao}`)

// Uma funcao de apresentacao que determina faixa etaria onde a saida deve ser 'Olá! Meu nome é João, sou um Jovem de 12 anos, 1.4m de altura e sou estudante'. A palavra jovem devem vir de retorno de outra funcao. 

function pessoa (idade) {
    if (idade <= 21) {
        return 'jovem';
    } else if 
        (idade >= 22 && idade<= 65) {
        return 'adulto(a)';
    } else
        return 'idoso(a)';
}
function apresentacao (info) {
    
    const faixaEtaria = pessoa(dados.idade);
    
    console.log(`'Olá! Meu nome é ${dados.nome}, sou um ${faixaEtaria} de ${dados.idade} anos, ${dados.altura}m de altura e sou ${dados.profissao}'`)
}
const dados = {
    nome: 'João',
    idade: 66,
    profissao: 'Estudante',
    altura: 1.4
}
apresentacao(dados);

