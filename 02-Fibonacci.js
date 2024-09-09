/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, 
ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;*/

const prompt = require('prompt-sync')();

console.log('\n------------ SEQUÊNCIA DE FIBONACCI ------------\n');

let entrada = parseInt(prompt('Informe um numero para verificar se pertence ou não a sequência: '));

let elementoAnterior = 1;
let elemento = 1;
let flag = false;
let textoFB = '\nSequência de Fibonacci => { 0, ';

for (let i = 0; i < entrada; i++) {
    textoFB += elemento + ', ';
    elementoAnterior = elemento - elementoAnterior;
    elemento += elementoAnterior;
    if (elemento === entrada) flag = true;
}

textoFB += '...}';

console.log(textoFB);
if (flag) {
    console.log(`O número ${entrada} pertence a sequência!\n`);
} else {
    console.log(`O número ${entrada} não pertence a sequência!\n`);
}