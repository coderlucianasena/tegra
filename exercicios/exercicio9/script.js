function calculaHora() {
    var qtdeSegundos = Number(document.getElementById('segundos').value)
    var result = document.getElementById('resultado')

    var hora = qtdeSegundos / 3600 //PEGA QUANTAS HORAS 01:00:00
    var minuto = (qtdeSegundos % 3600) / 60 //O RESTO DAS HORAS EM SEGUNDOS DIVIDO POR 60 SOBRA OS MINUOTS
    var segundo = (qtdeSegundos % 3600) % 60 //O RESTO DO RESTO OU SEJA O RESTO DOS MINUOTS SAO OS SEGUNDOS

    result.innerHTML = `${hora.toFixed(0)}:${minuto.toFixed(0)}:${segundo.toFixed(0)}`
}