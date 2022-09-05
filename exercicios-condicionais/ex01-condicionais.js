/*
    3) Desenvolva um sistema em que:
 *Leia 4 (quatro) números;
 *Calcule o quadrado de cada um;
 *Se o valor resultante do quadrado do terceiro for >= 1000, imprima-o e finalize;
 *Caso contrário, imprima os valores lidos e seus respectivos quadrados.

*/

const prompt = require("prompt-sync")();

console.log("=== Números ao Quadrado ===\n")

let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o primeiro número: "));
let num3 = Number(prompt("Digite o primeiro número: "));
let num4 = Number(prompt("Digite o primeiro número: "));

num1 = Math.pow(num1, 2);
num2 = Math.pow(num2, 2);
num3 = Math.pow(num3, 2);
num4 = Math.pow(num4, 2);

if(num3 >= 1000){
    console.log(`O valor do terceiro número é: ${num3}`);
}
else{
    console.log(`Os valores são: \nNumero 1: ${num1}\nNumero 2: ${num2}
    \nNumero 3: ${num3}\nNumero 4: ${num4}`);
}

