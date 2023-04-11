function calculaAreaeValor() {
    var numLarg = document.getElementById('numLargura')
    var numCompri = document.getElementById('numComprimento')
    var valorMetro = document.getElementById('numMetroQuad')
    var areaResult = document.getElementById('Area')
    var precoResult = document.getElementById('ValorTotal')

    var comprimento = Number(numCompri.value)
    var largura = Number(numLarg.value)

    var area = comprimento * largura
    areaResult.innerHTML = `A area total é de ${area.toFixed(2)}m²`

    var preco = Number(valorMetro.value)
    var total = area * preco
    precoResult.innerHTML = `O valor total é de R$ ${total.toFixed(2)}`
}