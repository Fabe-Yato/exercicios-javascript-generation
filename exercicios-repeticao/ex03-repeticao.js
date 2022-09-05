/*

    2- Desenvolver um sistema que efetue a soma de todos os números ímpares que são múltiplos de três e que se encontram no conjunto dos números de 1 até 500.      

*/
let soma = 0;
for(let contador = 0; contador <= 500; contador++){

    if( (contador % 2 != 0) && (contador % 3 == 0)){

        console.log(`O número é: ${contador}`)
        soma += contador

    }

}

console.log(`A soma resulta em : ${soma}`)