const prompt = require ('prompt-sync')();

function maquina (){
const escolhamaq = [1, 2, 3];
let num =  Math.floor(Math.random() * escolhamaq.length);
return num;
}

console.log("=====================");
console.log("BEM VINDO AO JOKENPO");
console.log("=====================");

let i, placar, maq = 0, us = 0;
const PV = "VENCEU", PP = "PERDEU";

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
                    placar = PP
                    console.log(`\nVOCÊ ${placar} :(`);
                    console.log("A máquina escolheu papel\n");
                } else {
                    placar = PV
                    console.log(`\nVOCÊ ${placar}!`);
                    console.log("A máquina escolheu tesoura\n");
                }
            }
            if (V == 2) {
                if (PC == 1) {
                    placar = PV
                    console.log(`\nVOCÊ ${placar}!`);
                    console.log("A máquina escolheu pedra\n");
                } else {
                    placar = PP
                    console.log(`\nVOCÊ ${placar}:(`);
                    console.log("A máquina escolheu tesoura\n");
                }
            }
            if (V == 3) {
                if (PC == 1) {
                    placar = PP
                    console.log(`\nVOCÊ ${placar}:(`);
                    console.log("A máquina escolheu pedra\n");
                } else {
                    placar = PV
                    console.log(`\nVOCÊ ${placar}!`);
                    console.log("A máquina escolheu papel\n");
                }            
            }
        }
    }
    //CONTAGEM DO PLACAR
    if (V == PC) {
        maq += 0;
        us += 0
    } else {
        if (placar == PV) {
            us += 1
        } else {
            if (placar == PP) {
                maq += 1
            }
        }
    }
    
    i = prompt("Deseja constinuar? s/n: ")

} while (i == 's' || i == 'sim');

console.log("\n        PLACAR            ");
console.log(`Usuário ${us} x ${maq} Máquina\n`);
console.log("====================");
console.log("OBRIGADO POR JOGAR!");
console.log("====================");