//inicialização ; condição ; finalização
//for tabuada 
const numero = prompt('Olá, digite um numero que deseja calcular a tabuada: ')

let resultado = ""

for(let i = 1 ; i <=10 ; i++){
   resultado += " ->" + numero + " x " + i + " = " + (numero*i) +"\n"
}
alert(`resultado da tabuada do numero ${numero}: \n\n\ ${resultado}`)

// for palíndrromo
const palavra = prompt('informe uma palavra :')
let palavraInvertida= ""

//palíndromo é uma palavra que mesmo invertida continua sendo a mesma palavra 

for (let i = palavra.length - 1; i >= 0; i--){
   //lenght é o contador de letras da palavra e o ' - 1 ' serve para iniciar do final
   palavraInvertida += palavra[i]
}
if (palavra === palavraInvertida){
   alert(palavra +" é um, palindromo!")
}else{
   alert(palavra +" não é um palindromo\n\n" +
   palavra + " é diferente de " + palavraInvertida)
}
