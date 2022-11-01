let car1= prompt('nome do primeiro carro')
let velocity1= prompt('velocidade do primeiro carro em km/h')

let car2= prompt('nome do segundo carro')
let velocity2= prompt('velocidade do segundo carro em km/h')

if(velocity1 > velocity2){
    alert(`${car1} é mais rapido que o ${car2}`)
}else{
    alert(`${car2} é mais rapido que o ${car1}` )
}



// ou dessa forma mais simplificada
/*
let idade = prompt('digite sua idade')

idade = (idade < 18) ? 'verdadeiro' : 'falso'

alert(idade)*/


