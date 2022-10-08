Var
   codigo : inteiro
   turno, categoria : caractere
   valorHoraTrabalhada, horasTrabalhadas, salarioMinimo : real
   nome : caractere
   
Inicio
 
i = 1
enquanto(i<=10) faça
 
    escreva("Digite o nome do funcionário ")
    leia(nome)
    escreva("digite as horas trabalhadas ")
    leia(horasTrabalhadas)
    escreva("digite o valor das horas trabalhadas ")
    leia(valorHoraTrabalhada)
    escreva("digite o valor do salário mínimo ")
    leia(salarioMinimo)
    escreva("digite o turno de trabalho: M – matutino; V – vespertino; N – noturno  ")
    leia(turno)
    escreva("digite a categoria: O – operário; ou G – gerente ")
    leia(categoria)
    
    se (categoria == "G") entao
       se (turno == "N")) entao
            horaTrabalhada <- salarioMinimo * 0.18
       senao
           horaTrabalhada <- (salarioMinimo * 0.15)
       fimse
    senao (categoria == "O")
       se (turno == "N") entao
         horaTrabalhada <- (salarioMinimo * 0.13)
       senao
         horaTrabalhada <- (salarioMinimo * 0.10)
      fimse
    fimse  
 
    se(salarioMinimo <= 300) entao
       auxilio <- (salarioMinimo * 0.20)
    senao (salarioMinimo <= 600) entao
       auxilio <- (salarioMinimo * 0.15)
    senao (salarioMinimo > 600) entao
       auxilio <- (salarioMinimo * 0.5)
    fimse
 
    salarioFinal = salario + auxilio
 
    escreva("Nome: ", nome)
    escreva("Categoria: ", categoria)
    escreva("Horas Trabalhadas: ", horasTrabalhadas)
    escreva("Valor por hora: ", valorHoraTrabalhada)
    escreva("Valor do auxilio alimentacao: ", auxilio)
    escreva("Salário ", salarioFinal)
 
    i = i + 1