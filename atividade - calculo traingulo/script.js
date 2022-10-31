//atividade calculo do triangulo



//area triangulo - 1
const triangulo=(base,alt)=>{

    let result = (base* alt) / 2

    return result
}

//area retangulo - 2
const retangulo=()=>{
    
    let base = Number(prompt('Digite a medida da Base: '))
    let altura = Number(prompt('Digite a medida da Altura:'))

    let result = base * altura

    return result
}
//area quadrado - 3
const quadrado=(lado)=>{

    let result = lado**2

    return result
}

//area trapezio - 4
const trapezio =()=>{
    let baseMaior = Number(prompt('Digite a medida da Base Maior:'))
    let baseMenor = Number(prompt('Digite a medida da Base Menor:'))
    let altura = Number(prompt('Digite a medida da altura:'))
    
    let result = (baseMaior + baseMenor) + altura/2

    return result
    
}

//area circulo - 5
const circulo =(raio)=>{

    let result = Math.PI * (raio**2)

    return result
}  

let opc = ""

do{

    opc = prompt('Olá, digite a opção que deseja realizar:'+
        '\n1 - Calcular Área do triângulo:'+// 
        '\n2 - Calcular Área do retângulo:'+//
        '\n3 - Calcular Área do quadrado:'+// 
        '\n4 - Calcular Área do trapézio:'+// 
        '\n5 - Calcular Área do círculo:'+// 
        '\n\n0 - Sair'+
        '\nObservação: Digitar a medida em Centímetros (cm)')



        switch(opc){
            case '1':
                let base = Number(prompt('Digite a medida da Base:'))
                let altura = Number(prompt('Digite a medida da Altura:'))

                let AreaTriangulo = triangulo(base,altura)

                alert(`Área do Triângulo: ${AreaTriangulo}`)

                break

            case '2':

                let AreaRetangulo = retangulo()

                alert(`Área do Retângulo: ${AreaRetangulo}`)

                break

            case '3':

                let lado = Number(prompt('Digite a medida da Base:'))
                
                let AreaQuadrado = quadrado(lado)

                alert(`Área do Quadrado: ${AreaQuadrado}`)

                break

            case '4': 

                let AreaTrapezio = trapezio()

                alert(`Área do Trapézio: ${AreaTrapezio}`)

                break
            
            case '5':

                let raio = Number(prompt('Digite a medida do Raio:'))

                let areaCirculo = circulo(raio)

                alert(`Área do Círculo: ${areaCirculo.toFixed(3)}`)

                break

            case '0':

                alert('Saindo...')

                break

            default:

                alert('Opção Invalida, Digite novamente !')
      
        }


}while(opc != 0)



