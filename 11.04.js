// Cliente recebe 10% desconto pagando a vista. Ou pode parcelar em 6x sem o desconto.

// const valorDaCompra = 100;
// const numeroDeParcelas = 6;
// let totalAPagar;

// if (numeroDeParcelas === 1) {
//     totalAPagar = valorDaCompra - (valorDaCompra * 10 / 100)
//     console.log(`Você terá que pagar ${totalAPagar}`)
// }
// if (numeroDeParcelas > 1) {
//     totalAPagar = valorDaCompra / numeroDeParcelas
//     console.log(`Você terá que pagar ${numeroDeParcelas} parcelas de ${totalAPagar.toFixed(2)}`)
// }

// Caso anterior, porém agora o cliente pode parcelar de 7 - 12 x, porém com taxa de 1% de juros ao mês

const valorDaCompra = 100;
const numeroDeParcelas = 10;
let totalAPagar;
let valorAPagarComJuros;
let valorDaParcelaComJuros;

if (numeroDeParcelas === 1) {
    totalAPagar = valorDaCompra - (valorDaCompra * 10 / 100)
    console.log(`Você terá que pagar ${totalAPagar}`)
}
if (numeroDeParcelas > 2 && numeroDeParcelas <= 6) {
    totalAPagar = valorDaCompra / numeroDeParcelas
    console.log(`Você terá que pagar ${numeroDeParcelas} parcelas de ${totalAPagar.toFixed(2)}`)
}
if (numeroDeParcelas > 7 && numeroDeParcelas <= 12) {
valorAPagarComJuros = valorDaCompra * (1 + 1 / 100) ** numeroDeParcelas
valorDaParcelaComJuros = valorAPagarComJuros / numeroDeParcelas
console.log(`Você terá que pagar ${numeroDeParcelas} parcelas de ${valorDaParcelaComJuros.toFixed(2)}, totalizando ${valorAPagarComJuros.toFixed(2)}`)
}