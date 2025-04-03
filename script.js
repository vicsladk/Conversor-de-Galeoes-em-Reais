function conversor() {
valorGaleao = prompt('Digite o valor em Galeão');
umGaleao = 32.50;
valorGaleao = parseFloat(valorGaleao);
valorConvertido = (valorGaleao * umGaleao).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
alert("O valor convertido em reais é R$ " + valorConvertido);
}