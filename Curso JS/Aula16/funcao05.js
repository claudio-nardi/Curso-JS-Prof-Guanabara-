//Recursividade
function fat_recursiva (n) {
    if (n == 1) {return 1}
    else {
        return n*fat_recursiva(n-1)
    }
}

console.log(fat_recursiva(5))