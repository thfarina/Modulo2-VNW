//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18
let idade = 20
if (idade >= 18){
  console.log("Welcome to the real world. It sucks. You’re gonna love it.");
} else {
  console.log("Lucky bastard.");
}
//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true
let condicaoHumana = false
if ((idade >= 18) && (condicaoHumana == true)){
  console.log("Hello, human.");
} else if (condicaoHumana == false){
  console.log("101011110001010101");
} else {
  console.log("Programa não recomendado para crianças.");
}
//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro
let mesAniversario = "novembro"
if ((mesAniversario == "janeiro") || (mesAniversario == "dezembro")){
  console.log("prbns");
} else {
  console.log("aguarde para ficar mais velha");
}
//*** Exercícios bônus
//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R
let name = "Rihanna"
if (name.charAt(0) == "R"){
  console.log("o rato roeu a roupa do rei de roma");
} else {
  console.log("oh na na whats my name");
}

//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E
let surname = "Fenty"
if ((surname.count > 6) || (name.charAt(0) == "E")){
  console.log("condição true");
} else {
  console.log("condição false");
}