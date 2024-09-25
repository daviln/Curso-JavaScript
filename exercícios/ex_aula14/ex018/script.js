function tabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = '' //para limpar a tabuada antiga e gerar uma nova na caixa vazia
        while (c <= 10) {
             var item = document.createElement('option') //mesma coisa que ir no html e criar um option<>/option, mas crio no js pq quero criar de forma dinâmica
             item.text = `${n} x ${c} = ${n*c}`
             item.value = `tab${c}`
             tab.appendChild(item) //para adicionar ao seltab
             c++ //incremento para o contator partir de 1 para 2 para 3...
        } 
    }

}