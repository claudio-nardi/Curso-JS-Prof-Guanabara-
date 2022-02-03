function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value > ano || ano-fano.value > 130) {
        res.innerHTML = 'Preencha os dados acima para ver o resultado!'
        window.alert('ERRO! Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName ('radsex')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        var gênero = ''
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            gênero = 'masculino'
            if (idade < 11) {
                //Criança
                img.setAttribute('src','criancamenino.jpg')
            } else if (idade < 28) {
                //jovem
                img.setAttribute('src','jovemhomem.jpeg')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src','adultohomem.jpeg')
            } else {
                //idoso
                img.setAttribute('src','idoso.jpeg')
            }
        } else if (fsex[1].checked) {
            gênero = 'feminino'
            if (idade < 11) {
                //Criança
                img.setAttribute('src','criancamenina.jpeg')
            } else if (idade < 28) {
                img.setAttribute('src','jovemmulher.jpeg')
                //jovem
            } else if (idade < 60) {
                img.setAttribute('src','adultomulher.jpeg')
                //adulto
            } else {
                //idoso
                img.setAttribute('src','idosa.jpeg')
            }
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Gênero ${gênero}, idade ${idade} anos<p>` 
        res.appendChild(img)



    }
    //alert(res)
    //console.log(res)
}