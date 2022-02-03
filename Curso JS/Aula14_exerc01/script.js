function contar() {
    var e_inicio = document.getElementById('inicio')
    var e_fim = document.querySelector('input#fim')
    var e_passo = document.getElementById('passo')
    var e_contagem = document.querySelector('div#contagem')
    var vini = e_inicio.value
    var vfim = e_fim.value
    var vpasso = e_passo.value
    
    //alert(vini)
    e_contagem.innerHTML = ""

    if  (vini.length == 0 || vfim.length ==0 || vpasso.length ==0)  {
        e_contagem.innerHTML = 'Digite todos os dados...'
    }  else {
        vini = Number(vini)
        vfim = Number(vfim)
        vpasso = Number(vpasso)
        if (vpasso == 0) {
            alert('Será considerado PASSO 1')
            vpasso = 1
        }

        if (vini <= vfim) {
            // contagem crescente
            while (vini <= vfim) { 
                e_contagem.innerHTML += String(vini)+" \u{1F449}"
                //alert(vini)
                vini += vpasso
            }    
        } else if (vini > vfim) {
            // contagem decrescente
            for (x = vini; x >= vfim; x-=vpasso) {
                e_contagem.innerHTML += String(x)+ " \u{1F449}"
            }
        }
        e_contagem.innerHTML += " \u{1F3C1}"
    }
}