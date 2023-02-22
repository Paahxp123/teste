let nomeDoProduto = 'camisa nike';
console.log('Nome do produto:');
console.log(nomeDoProduto);
let precoDoProduto = 1200.00;
console.log('Preço do produto:');
console.log(precoDoProduto);
let descontoDoProduto = 0.10; // Valor percentual
console.log('Desconto:');
console.log(descontoDoProduto);
let descontoValido = true;
console.log('O desconto é valido?');
console.log(descontoValido);

let precoFinal;
if(descontoValido==true){
    precoFinal= precoDoProduto*(1-descontoDoProduto);
}else{
    precoFinal=precoDoProduto;
}
console.log('Preço final:');
console.log(precoFinal);

if(precoFinal>1000){
    console.log('Preço final acima de R$ 1000. Aplica regra de desconto de R$ 50');
    precoFinal=precoFinal-50;
}else{
    console.log('Preço final abaixo de R$ 1000. Não aplica regra de desconto.');
}

console.log(precoFinal);


let demandas=[10,2,1,30,5];
let totalDosClientes=[];

for(let i=0;i<demandas.length;i++){
    let precoFinalDoCliente=demandas[i]*precoFinal;
    let frase = `O cliente ${i+1} deverá pagar: R$ ${precoFinalDoCliente}`;
    console.log(frase);
    totalDosClientes.push(precoFinalDoCliente);
}

console.log('Array com o total de cada cliente:');
console.log(totalDosClientes);

let lucroTotal = totalDosClientes.reduce(function(soma,valor){
    return soma + valor
},0);

console.log(`O total do lucro é de R$ ${lucroTotal}`);
