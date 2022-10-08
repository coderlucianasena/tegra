function main()
{
 var resp = document.getElementById('resp');
 var num1 = parseFloat(document.getElementById("num1").value);
 var num2 = parseFloat(document.getElementById("num2").value);
 var num3 = parseFloat(document.getElementById("num3").value);
 var num4 = parseFloat(document.getElementById("num4").value);
//  var valorFinal = (num1 * num2).toFixed(2);
 var texto='';

//  if(document.getElementById('soma').checked)
//   texto = soma(num1, num2);
//  if(document.getElementById('subtracao').checked)
//   texto = subtracao(num1, num2);
 if(document.getElementById('multiplicacao').checked)
  texto = multiplicacao(num1, num2);
//  if(document.getElementById('divisao').checked)
//   texto = divisao(num1, num2);

 resp.innerHTML = "R$" + texto;
}

// function soma(x, y)
// {
  
//   return (x+y);
// }

// function subtracao(x, y)
// {
  
//   return (x-y);
// }

function multiplicacao(x, y)
{
  
  return (x*y);
}

// function divisao(x, y)
// {
  
//   return (x/y);
// }