// Exercicio 5
function inverterString(str) {
    let stringInvertida = ""; // String para armazenar o resultado invertido
    
    // Percorrendo a string de trás para frente
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i]; // Adicionando cada caractere à string invertida
    }

    return stringInvertida;
}

// Exemplo de uso
let stringOriginal = "exemplo";
let stringInvertida = inverterString(stringOriginal);

console.log(`String original: ${stringOriginal}`);
console.log(`String invertida: ${stringInvertida}`);
