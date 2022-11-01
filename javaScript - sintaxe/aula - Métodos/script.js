//metodos são funcões manipuladas dentro de objetos 

let pessoa = {
    nome:'iago',
    idade: 19,
    dizerOla(){
        console.log('olá, meu nome é '+ this.nome)//esse 'this' ta se referindo para chamar a variavel dentro do obejto que no caso é nome
    }
}

console.log(pessoa)

pessoa.dizerOla()