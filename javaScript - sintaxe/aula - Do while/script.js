/*modelo 1 :
let menu = "5"
do {
    menu = prompt('Olá, digite uma opção : 1 - pesquisar / 2 - consultar / 3 - comentar / 4 - denunciar / 5 - encerrar')
    switch(menu){
        case '1': 
        alert('voce digitou 1')
        break

        case '2': 
        alert('voce digitou 2')
        break

        case '3': 
        alert('voce digitou 3')
        break

        case '4': 
        alert('voce digitou 4')
        break

        case '5': 
        alert('voce digitou 5 , encerrando...')
        break
        
    }
}while(menu !== "5")*/

//modelo 1:
let saldo = parseFloat(prompt('Olá, digite o valor que voce possui na sua conta: '))
let opc = "3"
do {
    opc = prompt(`Valor atual:R$${saldo}\n\nDigite sua opção desejada: \n1)Depositar\n2)Sacar\n\n3)sair  `)
    switch(opc){
        case "1":
        saldo += parseFloat(prompt("qual o valor a depositar ? "))
        break

        case "2":
        saldo -= parseFloat(prompt("qual o valor a sacar ? "))
        if(saldo < 0){
            alert("Sem saldo !\nPor favor, deposite ")
            saldo = 0
        }
        break
        
        case "3":
            alert("saindo...")
    }
 
}while (opc !== "3") 