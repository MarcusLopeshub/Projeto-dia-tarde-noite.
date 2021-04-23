function carregar() {
    var msg = window.document.getElementById('msg')
    var abaixo = window.document.getElementById('down')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() //Hora em tempo real
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'Manha.png'
        down.innerHTML = `BOM DIA =D`
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'Tarde.png'
        down.innerHTML = `BOA TARDE =)`
    } else {
        img.src = 'Noite.png'
        down.innerHTML = `BOA NOITE =}`
    }
}