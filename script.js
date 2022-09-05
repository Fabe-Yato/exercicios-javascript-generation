const prompt = require("prompt-sync")()  //require traz informações das dependencias

let nome = prompt("Digite o seu nome: ");


let idade = Number(prompt("Digite a sua idade: "))

console.log(`Bom dia ${nome} \nSua idade é ${idade}`);