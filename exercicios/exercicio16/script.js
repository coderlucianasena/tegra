function dardos() {
    var tent1 = Number(document.getElementById('arremesso1').value)
    var tent2 = Number(document.getElementById('arremesso2').value)
    var tent3 = Number(document.getElementById('arremesso3').value)
    var result = document.getElementById('resultado')

    var tentativas = [tent1, tent2, tent3]
    var maior = tent1

    for (var i = 0; i < 3; i++) {
        if (tentativas[i] > maior) {
            maior = tentativas[i]
        }
    }

    result.innerHTML = `Maior: ${maior}`
}