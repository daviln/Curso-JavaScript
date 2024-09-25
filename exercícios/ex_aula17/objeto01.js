var amigo = {nome:'Davi',sexo:'M',peso:82.5}
console.log(amigo)

//outra forma de escrever usando uma function dentro do objeto

var amigo2 = {nome: 'davi', 
sexo:'m',
peso:82,
engordar(p=0){
    console.log('engordou')
    this.peso += p
}}
console.log(amigo2)
console.log(amigo2.nome)
console.log(`${amigo2.nome} pesa ${amigo2.peso}kg`)
amigo2.engordar(3)
console.log(`${amigo2.nome} engordou e agora está pesando ${amigo2.peso}kg`)