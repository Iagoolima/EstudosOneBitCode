let name = prompt('Olá turista, digite seu nome !  ')
let cidades = ""
let contagem = 0
let opc = prompt('Você já visitou outra cidade ? \n \n SIM / NÃO  ')

while(opc === "sim"){
    let cidade = prompt('legal, qual o nome dessa cidade ?')
    cidades += " - " + cidade + "\n"
    contagem++
    opc = prompt("voce visitou mais alguma outra cidade ? \n \n SIM / NÃO  ")
}
alert(
`TURISTA: ${name}\n
Quantidade de cidades: ${contagem}\n
Cidades:\n ${cidades}`
)


    

