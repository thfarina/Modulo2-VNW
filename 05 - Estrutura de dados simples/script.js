 // Crie um array que receba 5 itens e exiba no console.
let bairros = ["são cristóvão","tijuca","centro","saúde","santo cristo"]
console.log(bairros);

// Utilize um método para adicionar um nome ao inicio do array.
bairros.unshift("lapa")
console.log(bairros);

// Utilize um método para remover o último nome do array.
bairros.pop()
console.log(bairros);

// Utilize um método para adicionar dois nomes ao fim do array.
bairros.push("vila isabel","grajau")
console.log(bairros);

// Utilize um método para remover o primeiro nome do array.
bairros.shift()
console.log(bairros);

// Utilize um método para organizar em ordem crescente o seguinte array:
const numbers = [7,5,6,3,8,9,2,1,4]
let lowestToHighest = numbers.sort((a, b) => a - b);
console.log(lowestToHighest);