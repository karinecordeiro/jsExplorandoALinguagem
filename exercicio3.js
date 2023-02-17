console.log("Trabalhando com listas");

let cidades = new Array('São Paulo', 'Rio de Janeiro', 'Salvador', ); //lista
console.log("Lista de cidades 1: ["+ cidades+ "]");

cidades.push('Curitiba'); // adicionando mais itens na lista com PUSH
console.log("Listas de cidades 2: ["+cidades +"]");

cidades.splice(1,2); // excluir item SPLICE (n1 >> número do indice, n2 >> quantidade para remover)
console.log(cidades);
console.log("Primeira cidadade: "+cidades[0]);// procurar elemento pela posição dele na lista (nome variavel[numero indice])
