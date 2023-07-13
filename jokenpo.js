const prompt = require ('prompt-sync')();

function maquina (){
const escolhamaq = [1, 2, 3];
let num =  Math.floor(Math.random() * escolhamaq.length);
return num;
}

console.log("=====================");
console.log("BEM VINDO AO JOKENPO");
console.log("=====================");

let i, maq = 0, us = 0;

do {
    let PC = maquina()
    let V = parseInt(prompt(`Escolha '1' para Pedra, '2' para Papel ou '3' para Tesoura:  `));
    
    if (V > 3 || V < 1) {
        console.log("Inválido");
    } else { 
        if (V == PC) {
            console.log("\nEMPATOU\n");
        } else {
            if (V == 1) {
                if (PC == 2){
                    maq += 1
                    console.log(`\nVOCÊ PERDEU :(`);
                    console.log("A máquina escolheu papel\n");
                } else {
                    us += 1
                    console.log(`\nVOCÊ VENCEU!`);
                    console.log("A máquina escolheu tesoura\n");
                }
            }
            if (V == 2) {
                if (PC == 1) {
                    us += 1
                    console.log(`\nVOCÊ VENCEU!`);
                    console.log("A máquina escolheu pedra\n");
                } else {
                    maq += 1
                    console.log(`\nVOCÊ PERDEU:(`);
                    console.log("A máquina escolheu tesoura\n");
                }
            }
            if (V == 3) {
                if (PC == 1) {
                    maq += 1
                    console.log(`\nVOCÊ PERDEU:(`);
                    console.log("A máquina escolheu pedra\n");
                } else {
                    us += 1
                    console.log(`\nVOCÊ VENCEU!`);
                    console.log("A máquina escolheu papel\n");
                }            
            }
        }
    }
    
    i = prompt("Deseja continuar?: ")

} while (i == 's' || i == 'sim');

console.log("\n        PLACAR            ");
console.log(`Usuário ${us} x ${maq} Máquina\n`);
console.log("====================");
console.log("OBRIGADO POR JOGAR!");
console.log("====================");