function calcularMedia(a,b){
    const media = (a+b)/2
    return media
}

const resultado = calcularMedia(5,2)
//para armazenar o valor da function em uma variavel 
//e depois querer apresentar ele vc precisa colocar a variavel como return

console.log(resultado)

function criarProduto(nome,preco){
    const produto = {
        nome,
        preco,
        estoque:1
    }
    return produto 
}
const notebook = criarProduto('intel core i3',2500)

console.log(notebook)
//ou console.log(criarProduto('intel core i3',2500)

function areaRetangular(base,altura){
    return base * altura
}

console.log(areaRetangular(3,5))

function ola(){
    let texto = "..."
    return texto //só vai funcionar o que estiver a cima do return, não adianta querer alterar varailvel depois
    texto = "olá mundo"
    console.log(texto)
}
console.log(ola())