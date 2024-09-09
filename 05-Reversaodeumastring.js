/* 5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;*/

const prompt = require('prompt-sync')();

function inverterString(str) {
    let stringInvertida = "";
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }
    return stringInvertida;
}

let stringOriginal = prompt("Digite a string que deseja inverter: ");
let stringInvertida = inverterString(stringOriginal);

console.log("String informada:", stringOriginal);
console.log("String invertida:", stringInvertida);
