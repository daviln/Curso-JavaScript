var num = [5, 2, 9, 3, 1]
num[5] = 8 //adiciono um elemento no indice 5
num.push(7) //adiciono o elemento 7 no final do array
num.sort()
console.log(`O vetor tem ${num.length} posições`) //length é um atributo, e não um método, por isso não tem () - quantidade de elementos dentro do meu array
console.log(num)
num.sort()
console.log(`Nosso vetor em ordem crescente é o ${num}`)
console.log(`O primeiro valor é ${num[0]}`)

for (var pos=0; pos<num.length; pos++) {
    console.log(`A posição ${pos+1} tem o valor ${num[pos]}`)

}

//jeito mais prático de fazer mas igual:

for (var pos in num) {
    console.log(`Posição: ${parseInt(pos) + 1} --> Valor: ${num[pos]}`)
}

console.log(num.indexOf(7)) //para buscar um valor dentro do meu vetor
console.log(num.indexOf(4)) //não tem o valor 4, então vai retornar -1 - posso usar um if pos == -1 para retornar uma frase dizendo que o valor não foi encontrado

