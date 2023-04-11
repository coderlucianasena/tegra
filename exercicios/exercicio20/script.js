function soma()
{
    var inicio = Number(document.getElementById('inicial').value)
    var fim = Number(document.getElementById('final').value)
    var result = document.getElementById('resultado')

    var total = 0

    for(var i = inicio; i <= fim; i++)
    {
        total = total + i
    }
    result.innerHTML = `${total}`
}