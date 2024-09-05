// Exercicio 4
//  faturamento por estado
const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

// Calculando o faturamento total
const faturamentoTotal = Object.values(faturamentoPorEstado).reduce((total, valor) => total + valor, 0);

// Calculando o percentual de cada estado
function calcularPercentuais(faturamentoPorEstado, faturamentoTotal) {
    const percentuais = {};
    for (const estado in faturamentoPorEstado) {
        percentuais[estado] = ((faturamentoPorEstado[estado] / faturamentoTotal) * 100).toFixed(2);
    }
    return percentuais;
}

// Executando o cálculo
const percentuaisDeFaturamento = calcularPercentuais(faturamentoPorEstado, faturamentoTotal);

// Exibindo os percentuais de cada estado
console.log(`Faturamento Total: R$${faturamentoTotal.toFixed(2)}`);
for (const estado in percentuaisDeFaturamento) {
    console.log(`${estado}: ${percentuaisDeFaturamento[estado]}%`);
}
