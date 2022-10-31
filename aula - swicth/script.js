let numero = prompt('digite um numero em metros')
let opc = prompt('voce deseja trasnformar pra que medida \n 1-Milimitro(mm) \n 2-centimetro(cm) \n 3-quilometro(km)')

switch(opc){

    case "1":
        
        alert('em milimmetro ' + numero * 1000)
        break

    case "2":
        let cm = numero * 100 
        alert('em cm ' + cm )  
        break 

    case "3":
        let km = numero / 10 
        alert('em km ' + km )  
        break     
}