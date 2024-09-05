// Exercicio 2
function pertenceFibonacci(num) {
    // Iniciando os dois primeiros valores da sequência de Fibonacci
    let a = 0;
    let b = 1;

    // Caso o número seja 0 ou 1, já pertence à sequência
    if (num === 0 || num === 1) {
        return `O número ${num} pertence à sequência de Fibonacci.`;
    }

    // Calculando os próximos números da sequência até que b seja maior ou igual ao número informado
    while (b < num) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    // Verifica se o número informado pertence à sequência
    if (b === num) {
        return `O número ${num} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${num} NÃO pertence à sequência de Fibonacci.`;
    }
}

// Exemplo de uso
let numero = 21; // Você pode alterar esse valor ou capturar a entrada do usuário
console.log(pertenceFibonacci(numero));