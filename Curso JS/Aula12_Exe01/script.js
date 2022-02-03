function carregar() {
    var msg = window.document.getElementById('msg')
    var img =window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.jpg'
        document.body.style.background = "gray"
    } else if (hora < 18) {
        img.src = 'tarde.jpg'
        document.body.style.background = "brown"
    } else {
        img.src = 'noite.jpg'
        document.body.style.background = "#000000"

    }
}

