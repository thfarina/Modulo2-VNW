// Crie um objeto que receba ao menos três propriedades sobre você.
let obj = {
  Nome: "Thalita",
  Cidade: "Rio de Janeiro",
  Cor: "Verde"
}
// Adicione uma nova propriedade sem alterar seu objeto inicial.
obj.Hora = 23
// Remova uma propriedade desse objeto.
delete obj.Cor
//Mostre no console todas as propriedades desse objeto.
console.log(obj);

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
let cadastro = [
  {
  Nome: "mônica",
  Idade: 6,
  Telefone: 40028922,
  Amigos: ["magali", "cebolinha", "cascão","chico bento"]
},
  {
  Nome: "magali",
  Idade: 6,
  Telefone: 40028922,
  Amigos: ["monica", "cebolinha", "cascão","chico bento"]
},
  {
  Nome: "cebolinha",
  Idade: 6,
  Telefone: 40028922,
  Amigos: ["cascão", "magali", "monica", "chico bento"]
},
  {
  Nome: "cascão",
  Idade: 6,
  Telefone: 40028922,
  Amigos: ["chico bento", "magali", "monica","cebolinha"]
},
  {
  Nome: "chico bento",
  Idade: 6,
  Telefone: 40028922,
  Amigos: ["cebolinha", "magali", "cascão","monica"]
}
]

// Mostre no console o nome de um amigo de cada lista.
for(let obj = 0 ; obj <= 4 ; obj ++){
  console.log(cadastro[obj].Amigos[0])
}