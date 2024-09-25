function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        res.innerHTML = 'ERRO! Dados insuficientes... Impossível realizar a contagem!'    
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value) 
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando passo 1')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c}  \u{1F680}` //+= nesse caso de concatenação, e não adição
            }
            
        } else {
            //Contagem decrescente
            for(let c = i; c >= f; c -=p) {
                res.innerHTML += ` ${c}  \u{1F680}` //unicode emoji list para código de emoji
            }
        } 
        res.innerHTML += `\u{1F3C1}`
    } 
}