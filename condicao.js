function compnumb (n1, n2) {
    if (n1 > n2) {
        return "O primeiro número que você digitou, é maior que o segundo."
    } else if (n1 == n2) {
        return "Os números são iguais."
    } else {
        return "O segundo número que você digitou, é menor que o primeiro."
    }
}

console.log (compnumb(10,-5))