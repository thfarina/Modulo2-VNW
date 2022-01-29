//1 - crie uma função que exiba uma mensagem no console
function ouvindoAgora (singer, song, album){
  console.log("Singer:", singer);
  console.log("Song:", song);
  console.log("Álbum:", album);
}
ouvindoAgora("Rihanna", "Jump", "Unapologetic")
console.log("---");
//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function meuNome (nome){
  console.log("Name:", nome);
}
meuNome("Thalita")
console.log("---");
//3 - crie uma função que receba seu nome, idade, e estilo musical preferido (parâmetros) e exiba no console
function sobreMim (name, age, musicalstyle){
  console.log("Name:", name);
  console.log("Age:", age);
  console.log("Musical Style:", musicalstyle);
}
sobreMim("Thalita", 26,"Todos")
console.log("---");
//4 - crie uma função que receba o seu filme favorito, musica favorita (parâmetros) e exiba no console
function favorite(movie,song){
  console.log("Favorite movie:", movie);
  console.log("Favorite song:", song);
}
favorite("Questão de tempo", "Andar sozinho")
console.log("---");
//*Bônus

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
function triple(number){
  console.log(number);
  number = number*3
  console.log(number);
}
triple(3)