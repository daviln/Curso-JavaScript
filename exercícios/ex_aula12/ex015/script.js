function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6 && hora < 12) {
        // BOM DIA!
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'

    } else if (0 <= hora && hora < 6) {
         // BOA NOITE!
       img.src = 'noite.png'
       document.body.style.background = '#515154'

    } else if ( 18 < hora && hora <=23) {
        img.src = 'noite.png'
        document.body.style.background = '#515154'
    }
    
} 
