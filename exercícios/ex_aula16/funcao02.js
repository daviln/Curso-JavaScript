function soma(n1=0,n2=0) { //se eu não passar o parametro real para n1 ou n2, considera igual a 0
    return n1+n2
}

console.log(soma(24,-26))
console.log(soma(5)) //considerou n2 como 0, assim não da erro 