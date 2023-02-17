console.log("Condicional com operador lógico encadeado");

let destinoInternacional = new Array(
    'New York',
    'Los Angeles',
    'Berlim',
    'Paris',
    'Taipei',
);
let destinoNacional = new Array(
    'São Paulo',
    'Fortaleza',
    'Natal',
    'Recife',
    'Porto Alegre'
);
const idadeViajante = 15;
const idadeAcompanhante = 20;
let passagemComprada = false;
const opcao = 1;

if(idadeViajante >=18 || (idadeViajante <=17 && idadeAcompanhante >=18) ){
        console.log("Você está habilitado para fazer sua comprar!");
        console.log("(1)para passagem internacional e (2)para passagem nacional");
    if(opcao == 1){
        console.log("Você escolheu a opção de passagens internacionais! Escolha o número de acordo com as opções abaixo");
        console.log('(0)New York (1)Los Angeles (2)Belim (3)Paris (4)Taipei');
        destinoInternacional.splice(1,1);
        passagemComprada = true;
    } else if (opcao == 2){
        console.log("Você escolheu a opção de passagens nacionais! Escolha o número de acordo com as opções abaixo");
        console.log('(0)São Paulo (1)Fortaleza (2)Natal (3)Recife (4)Porto Alegre');
        destinoNacional.splice(1,1); 
        passagemComprada = true;
    } else{
        console.log("Opção invalida!");
    }
} else {
    console.log("Não é possível fazer a compra pois é menor de idade e não tem acompanhante.");
    passagemComprada = false;
}

//
if(passagemComprada === true){
    console.log("Bom embarque!");
}
console.log("Destinos internacionais restantes: "+ destinoInternacional);