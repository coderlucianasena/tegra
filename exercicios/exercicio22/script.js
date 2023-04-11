function tabuada() {
    var num = Number(document.getElementById('x').value)
    var result = document.getElementById('resultado')
    var total

    for (i = 1; i <= 10; i++) {
        total = num * i
        result.innerHTML += `${num} X ${i} = ${total}<br>`
    }
}