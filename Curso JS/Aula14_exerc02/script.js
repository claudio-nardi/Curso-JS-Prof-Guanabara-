function tabuada() {
    let vnum = document.querySelector("input#inp_num")
    let vsel = document.getElementById("sel_tab")
    if (vnum.value.length == 0) {
        alert("Digite um valor...")
    } else {
          for (i = 1; i <=10; i++) {
            vsel.options[i-1] = new Option(String(vnum.value)+" x "+String(i)+" = "+String(i*vnum.value))
          }
    }
}