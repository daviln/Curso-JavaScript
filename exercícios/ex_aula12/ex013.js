var agora = new Date()
var hora = agora.getHours() //pegando a hora atual

if (6 <= hora && hora <= 23) {
    console.log(`Agora são exatamente ${hora} horas`)
} else if (hora == '0') {
    console.log('Já é meia noite!!!')
} else {
    console.log(`Agora já são ${hora} da madrugada!`)
}

if (6 <= hora && hora < 12) {
    console.log('Bom dia!')
} else if (12 <= hora && hora <= 18) {
    console.log('Boa tarde!')
} else if (18 < hora && hora <= 23) {
    console.log('Boa noite!')
} else if (0 <= hora && hora < 6) {
    console.log('Vai dormir!')
}