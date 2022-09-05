/*
    2- Faça um programa que pegue um número do teclado e calcule a soma de todos os números de 1 até ele. Ex.: o usuário entra 7, o programa vai mostrar 28, pois 1+2+3+4+5+6+7=28.

*/

const prompt = require("prompt-sync")();

console.log("=== Soma de todos os números até o correspondente ===");

let numero = Number(prompt("Digite um número: ")); 
let soma = 0;
let contador = 1;

do{
    soma += contador;
    contador++
} while(contador <= numero)

console.log(`A soma de todos os números resulta em: ${soma}`);