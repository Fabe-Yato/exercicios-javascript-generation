/*
    4) Faça um sistema que leia um número inteiro e mostre uma mensagem indicando se este número é par ou ímpar, e se é positivo ou negativo.

*/ 

const prompt = require("prompt-sync")();

let numero = Number(prompt("Digite um número: "));

if(numero % 2 == 0){
    console.log(`O número ${numero} é par`);
}
else{
    console.log(`O número ${numero} é impar`);
}

if(numero >= 0){
    console.log("O número é positivo");
}
else{
    console.log("O número é negativo");
}