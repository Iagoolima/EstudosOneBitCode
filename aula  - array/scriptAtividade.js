
let fila = []
let opc = "4"
let i = 1

do{

opc = prompt('olá, seja bem vindo a clínica\n\n\n'+
            'Digite a opção desejada:\n'+
            '\n 1 - Novo paciente'+
            '\n 2 - Consultar paciente'+
            '\n 3 - Ver sala de espera'+
            '\n 4 - Sair . . .')
switch(opc){
    case '1':
        if(fila == ''){
            i = 1
        }
        let pacienteEntrada = prompt('Digite o nome do novo paciente')
            fila.push('\n' + i + ' - ' + pacienteEntrada )
            i++
                break
    case '2':
        if(fila == ''){
            alert('Não tem ninguém na fila de espera')
                break
        }
        
        let pacienteSaida = fila.shift()
            alert( pacienteSaida +' entrou para consulta')
                break

    case'3':
        if(fila == ''){
            alert('Todos os pacientes já foram atendidos')
            break
        }
        alert('Sala de espera \n\n' + fila)
            break
    
    case '4':
        alert('até a proxima, encerrando . . .')

}

}while(opc != "4")

