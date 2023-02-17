console.log("Loop While e break");

let destinoInternacional = new Array(
    'New York',
    'Los Angeles',
    'Berlim',
    'Paris',
    'Taipei',
);

const idadeViajante = 15;
const acompanhante = false;
let passagemComprada = false;
const destino = 'Los Angeles';

console.log("Destinos Internacionais disponíveis: ["+ destinoInternacional+"]");


let contador = 0;
let destinoExiste = false;
while(contador < destinoInternacional.length){
    if(destinoInternacional[contador] == destino){
        destinoExiste = true;
        break;
    } 
    contador++;
}
console.log("Destino existe?", destinoExiste);