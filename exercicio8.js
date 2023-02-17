console.log("Loop For");

let destinoInternacional = new Array(
    'New York',
    'Los Angeles',
    'Berlim',
    'Paris',
    'Taipei',
);

const idadeViajante = 15;
const acompanhante = true;
const destino = 'Los Angeles';

console.log("Destinos Internacionais disponíveis: ["+ destinoInternacional+"]");

const podeComprar =  (idadeViajante>= 18 || acompanhante == true);

let destinoExiste = false;

for(let contador=0; contador < destinoInternacional.length; contador++){
    if(destinoInternacional[contador] == destino){
        destinoExiste = true;
    } 
}
console.log("Destino existe?", destinoExiste);

if(podeComprar && destinoExiste == true){
    console.log("Boa viagem!");
} else{
    console.log("Algum valor é inválido.");
}