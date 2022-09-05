/*
    6) Elabore um sistema que dada a idade de um nadador classifique-o em uma das seguintes categorias:
    
    Infantil A = 5 a 7 anos
    Infantil B = 8 a 11 anos
    Juvenil A = 12 a 13 anos
    Juvenil B = 14 a 17 anos
    Adultos = Maiores de 18 anos

*/

const prompt = require("prompt-sync")();

console.log("==== Confira a classificação dos nadadores ====\n");

let nome = prompt("Digite o seu nome: ");
let idadeNadador = Number(prompt("Digite a idade do nadador: "));


if(idadeNadador >= 5 && idadeNadador <= 7){
    console.log(`O nadador ${nome} é classificado como Infantil A`);
}
else if(idadeNadador >= 8 && idadeNadador <= 11){
    console.log(`O nadador ${nome} é classificado como Infantil B`);
}
else if(idadeNadador >= 12 && idadeNadador <= 13){
    console.log(`O nadador ${nome} é classificado como Juvenil A`);
}
else if(idadeNadador >= 14 && idadeNadador <= 17){
    console.log(`O nadador ${nome} é classificado como Juvenil B`);
}
else if(idadeNadador >= 18){
    console.log(`O nadador ${nome} é classificado como Adultos`);
}
else{
    console.log("Idade inválida para os nadadores");
}