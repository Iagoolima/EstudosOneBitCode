function dobro(x){//valor dentro dos () é como fosse uma variavel
    alert('o dobro de '+ x +' é '+ (x*2))
}
//depois vc chama a função e de o valor de x que no caso é 2
//dobro(2) 


function dizerOla(nome){
    alert('ola ' + nome )
}
//dizerOla("iago")


function soma(a,b){
    alert('o resultado da soma é ' + (a + b))
}
//soma(5,2)
//soma(3,6)

function criarUsuario(nome,email,senha,tipo = 'admin'){// quando o valor for padrão, sempre deixar ele em ultimo para respeitar a ordem 
    const usuario = {
        nome,
        email,
        senha,
        tipo
    }
    console.log(usuario)
}
//criarUsuario('iago','iago@silva.com','123')
