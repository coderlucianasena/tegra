function calculaSalario() {
    var name = document.getElementById('nome').value
    var valoHora = Number(document.getElementById('valorHora').value)
    var qtadeHora = Number(document.getElementById('quantidadeHora').value)
    var result = document.getElementById('resultado')

    var total = qtadeHora * valoHora

    result.innerHTML = `O pagamento para ${name} deve ser R$${total.toFixed(2)}`
}