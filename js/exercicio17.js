var botaoAdicionar = document.querySelector(".botao-calcular");
    botaoAdicionar.addEventListener("click", function(event) {
      event.preventDefault();
      var form = document.querySelector(".formulario");
      var n1 = parseInt(form.variavel1.value);
      var n2 = parseInt(form.variavel2.value);
      var resposta = document.querySelector(".resposta");
      if(n1>n2 || n1 == n2) {
        var resultado = n1/n2;
        if(Number.isInteger(resultado)){
          resposta.textContent = 'Os números são múltiplos';
        }else{
          resposta.textContent ='Os números não são múltiplos';
        };
      }else {
        var resultado = n2/n1;
        if(Number.isInteger(resultado)){
          resposta.textContent = 'Os números são múltiplos';
        }else{
          resposta.textContent = 'Os números não são múltiplos';
        };
      }
      });