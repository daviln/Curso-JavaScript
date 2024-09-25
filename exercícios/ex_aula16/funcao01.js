function parimp(n) { //n é um parametro formal
    if (n % 2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}
console.log(parimp(8))
var res = parimp(27) //27 é um parametro real
console.log(res)