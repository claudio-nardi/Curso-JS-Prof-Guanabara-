let vinpnum = document.getElementById('inpnum')
let vselnum = document.querySelector('select#selnum')
let vdivres = document.querySelector('div#res')
let vinpfin = document.querySelector('input#inpfin')
let vnumlista = []

window.onkeypress = atualiza()

function atualiza() {
    let vnum = vinpnum.value
    //alert(vnum)
    if (vnum.length != 0) {
        vnum = Number(vnum)
        if (vnum < 1 || vnum > 100) {
            vinpnum.value = undefined
            alert('Valor fora do range de 1 e 100')
        } else {
            //for (i = 0; i < vselnum.length; i++) 
            if (vnumlista.indexOf(vnum) == -1) {
                vnumlista.push(vnum)
                vselnum.appendChild(new Option(`Valor ${vnum} adicionado`, vnum))
                vinpnum.value = null
                vdivres.innerHTML = ""
                vinpfin.disabled = false
            } else {
                alert('Valor já adicionado')
                vinpnum.value = undefined
            }
        }
    }
    vinpnum.focus()
    
}

function finaliza() {

if (vselnum.length > 0) {
    let vatual = Number(vselnum.options[0].value)
    let vmax = vatual
    let vmin = vatual
    let vsoma = vatual
    for (i = 1; i < vselnum.length; i++) {
        vatual = Number(vselnum.options[i].value)
        vmax = Math.max(vmax, vatual)
        vmin = Math.min(vmin, vatual)
        vsoma += vatual
    }

    vdivres.innerHTML += `Ao todo, temos ${vselnum.length} números cadastrados` 
    vdivres.innerHTML += `<br>O maior valor informado foi ${vmax}`
    vdivres.innerHTML += `<br>O menor valor informado foi ${vmin}`
    vdivres.innerHTML += `<br>Somando todos os valores temos ${vsoma}`
    vdivres.innerHTML += `<br>A média dos valores digitados é ${vsoma/vselnum.length}`
    vinpnum.focus()
    vinpfin.disabled = true
}

// alert('Finaliza')
}

function recomeca() {
    while (vselnum.length > 0) { vselnum.remove(0) }
    vnumlista = []
    vdivres.innerHTML = ''
    inpnum.focus()

}

function teclou() {
    //inpnum.addEvent('keypress', function(e))
    //alert('teclou')
}
