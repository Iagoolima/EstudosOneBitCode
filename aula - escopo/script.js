// pra usar a variavel dentro da função e depois fora da função voce precisa declara ela antes, caso o contrario ela não funciona
let carro  = "golf"

function trocar(){
    carro = "jetta"
}

console.log(carro)// aqui aparece o carro golf
trocar()//quando chama a função ele muda o valor da variavel
console.log(carro)//agora carro se torna jetta



//esse é um exemplo que não funciona 
function animal(){
    let cachorro = "fred"
}
//animal()
//console.log(cachorro)//diz que não foi definido até por que está fora do escopo


function moto(motor){
    if(motor>600){
        var rapida = "forte"//aqui funciona, mas por conta de dar erro nos let, ele não aparece
        let veloz = "veloz"//erro
    }else{
        var normal = "moto normal"//certo
        let devagar = "normal"//erro
    }

    console.log(rapida)
    //console.log(veloz)//erro
    console.log(normal)
   // console.log(devagar)//erro
}
moto(700)



