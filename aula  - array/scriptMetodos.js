const array = ['maria','joão','lucas','julia','felipe','marcos']
console.log(array)
            //adicionar elementos
// push (colocar elementos no final)
array.push('mateus')
console.log(array)

//unshift (colocar elementos no começo)
array.unshift('ana')
console.log(array)


            // remover elemento
//pop (pegar o ultimo elemento)
let pop = array.pop() //Colocar em uma variavel para apresentar depois 
console.log(pop)
console.log(array)

//shift (remover o primeiro elemento)
let shift = array.shift()
console.log(pop)
console.log(array)


            // pesquisar por um elemento
//includes (pesquisar elementos, caso tenha o elemento ira aparecer o IF ou ELSE)
const include = array.includes("maria")
console.log(include)

//indexOf (dizer qual a posição do elemnto dentro do array)
const index = array.indexOf('joão')
console.log(index)

            //cortar e concatenar
//slice (copia um grupo de elementos selecionados)
const slice = array.slice(0, 4)
const slice2 = array.slice(-4)
/*ele seleciona apenas o numero final -1, nesse caso até o numero 3
caso precise retirar da direita para esquerda, só usar o ' - num ' */
console.log(slice)
console.log(slice2)


// concatenar
const familia = array.concat(slice, 'alex')
console.log(familia)

           //Substituição dos elementos
//splice
const elementosRemovidos = array.splice(array, 5, 'thiago')
console.log(array)
console.log(elementosRemovidos)

           //iterar sobre os elementos do array
for(let array = 0; array < familia.length; array++){
    const elemento = familia[array]
    console.log(elemento + ' se encontra na posição ' +array)
}



