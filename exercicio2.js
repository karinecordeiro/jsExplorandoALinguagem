console.log("Trabalhando com variaveis");

console.log('2'+"2");//aqui ele vai imprimir como texto
console.log(parseInt('2')+parseInt('3'));// aqui é necessário usar parseInt para converter texto para número, porque (+) é um concatenador
console.log("10"*"2"); // aqui ele transforma o texto em número porque é multiplicação
console.log("ana"/"9"); // nan Not a Number

const primeiroNome = "Ana ";
const sobrenome = "Carolina ";
const idade = 28;
const nomeCompleto = primeiroNome + sobrenome;
console.log(`Nome: ${nomeCompleto} | Idade: ${idade}`); // interpolação ${nomeDaVariavel};

