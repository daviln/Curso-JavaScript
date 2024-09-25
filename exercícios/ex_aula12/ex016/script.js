function verificar() {
    var data = new Date()
    var ano = data.getFullYear() //vai pegar o ano completo, 4 digitos (ex:. 2024)
    var fano = document.getElementById('txtano') //ano colocado no input do formulário
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) { //se o ano não foi digitado ou o valor é maior do que o ano atual --> erro
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto') //mesma coisa que ir no html e criar um img id='foto' /fazendo agora no js
       img.style.display = 'block'
       img.style.margin = '10px auto'
    
       if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade < 10) {
            //Criança
            img.setAttribute('src', 'babyboy.png')
        } else if (idade < 21) {
            //Adolescente
            img.setAttribute('src', 'teenboy.png')
        } else if (idade < 60) {
            //Adulto
            img.setAttribute('src', 'adultman.png')
        } else {
            //Idoso
            img.setAttribute('src', 'oldman.png')
        }
       } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >= 0 && idade < 10) {
            //Criança
            img.setAttribute('src', 'babygirl.png')
        } else if (idade < 21) {
            //Adolescente
            img.setAttribute('src', 'teengirl.png')
        } else if (idade < 60) {
            //Adulto
            img.setAttribute('src', 'adultwoman.png')
        } else {
            //Idoso
            img.setAttribute('src', 'oldwoman.png')
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos`
       res.appendChild(img) //para adicionar a imagem correta após mostrar a idade
    }
}