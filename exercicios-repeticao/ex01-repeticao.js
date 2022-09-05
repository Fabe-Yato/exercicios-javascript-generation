/*
    2- Obtenha um número digitado pelo usuário e repita a operação de multiplicar ele por três (imprimindo o novo valor) até que ele seja maior do que 100. Ex.: se o usuário digita 5, deveremos observar na tela a seguinte sequência: 5 15 45 135. (WHEN)
*/

const prompt = require("prompt-sync")();

console.log("\n=== Multiplicação sucessiva por 3 ===\n");

let numero = Number(prompt("Digite um número: "));
console.log(`O número está com o valor ${numero}`);

while(numero <= 100){
    numero *= 3;
    console.log(`O número está com o valor: ${numero}`);
}