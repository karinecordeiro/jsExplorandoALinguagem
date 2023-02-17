console.log("Condicionais simples");

let cidades = new Array('São Paulo', 'Rio de Janeiro', 'Salvador', ); //lista
console.log("Lista de cidades 1: ["+ cidades+ "]");

const idadeComprador = 17;

if(idadeComprador >=18){
    console.log("Comprador maior de idade");
    cidades.splice(1,1); // excluir item SPLICE (n1 >> número do indice, n2 >> quantidade para remover)
} else{
    console.log("Você é menor de idade");
}
    console.log("Cidades disponiveis: "+cidades);