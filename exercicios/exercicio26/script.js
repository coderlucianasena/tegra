function calculaVogal() {
    var texto = document.getElementById('string').value
    var result = document.getElementById('resultado')
    var contVog = 0
    var contCon = 0

    texto = texto.toLowerCase()

    for (var i = 0; i < texto.length; i++) {
        if (texto.charAt(i) == 'a' || texto.charAt(i) == 'e' || texto.charAt(i) == 'i' || texto.charAt(i) == 'o' || texto.charAt(i) == 'u') {
            contVog++
        }
        else {
            contCon++
        }
    }

    result.innerHTML = `Vogais: ${contVog} <br> Consoantes: ${contCon}`
}