// Exercicio 3
// Dados de faturamento 
const faturamentoDiario = [
    {"dia": 1, "faturamento": 200.0},
    {"dia": 2, "faturamento": 0.0},    // Sem faturamento
    {"dia": 3, "faturamento": 150.0},
    {"dia": 4, "faturamento": 0.0},    // Sem faturamento
    {"dia": 5, "faturamento": 180.0},
    {"dia": 6, "faturamento": 220.0},
    {"dia": 7, "faturamento": 250.0}
    // ... outros dias do mês
];

function calcularFaturamento(faturamentoDiario) {
    // Filtrando os dias com faturamento (ignorando dias com 0 de faturamento)
    const diasComFaturamento = faturamentoDiario.filter(dia => dia.faturamento > 0);

    // Calculando o menor e maior faturamento
    const menorFaturamento = Math.min(...diasComFaturamento.map(dia => dia.faturamento));
    const maiorFaturamento = Math.max(...diasComFaturamento.map(dia => dia.faturamento));

    // Calculando a média mensal (somente para dias com faturamento)
    const totalFaturamento = diasComFaturamento.reduce((total, dia) => total + dia.faturamento, 0);
    const mediaMensal = totalFaturamento / diasComFaturamento.length;

    // Contando os dias com faturamento acima da média
    const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.faturamento > mediaMensal).length;

    // Retornando os resultados
    return {
        menorFaturamento: menorFaturamento,
        maiorFaturamento: maiorFaturamento,
        diasAcimaDaMedia: diasAcimaDaMedia
    };
}

// Executando a função
const resultado = calcularFaturamento(faturamentoDiario);

console.log(`Menor faturamento: ${resultado.menorFaturamento}`);
console.log(`Maior faturamento: ${resultado.maiorFaturamento}`);
console.log(`Dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`);
