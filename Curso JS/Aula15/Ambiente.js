let num = [5, 55, 8, 9]
num.push(1972) 
num.sort() // Ordena números como strings!!!
num.sort(function(a,b) {return a-b}) //Só assim ordena números corretamente
console.log(`Nosso vetor é o ${num} e tem ${num.length} posições`)
for (i=0;i<num.length;i++) {
    console.log(`Elemento ${i} é ${num[i]} tipo ${typeof num[i]}`)
}
for (pos in num) {
    console.log(`Elemento ${pos} é ${num[pos]}`)
}
console.log(num.indexOf(55))