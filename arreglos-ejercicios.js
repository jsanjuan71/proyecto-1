
function tablaMultiplicar(multiplicador){
    for(let multiplicando = 1; multiplicando <=10; multiplicando++) {
        console.log(`${multiplicador} X ${multiplicando} = ${multiplicador *  multiplicando} `)
    }
}

tablaMultiplicar(5)
tablaMultiplicar(2)


const nombres = ['alberto', 'paty', 'Jose', 'daniel', 'luis', 'antonio', 'Luis', 'paty', 'luis', 'LuIs']
const nombreMayusculas = []

nombres.forEach( nombre => {
    let mayusculas = nombre.toUpperCase()
    nombreMayusculas.push(mayusculas)
} )

//nombres.forEach( nombre => nombreMayusculas.push(nombre.toUpperCase()) )

console.log("nombres mayusculas", nombreMayusculas)

var nombresMinusculas = nombreMayusculas.map( nombre => nombre.toLowerCase() )

console.log("nombres minusculas", nombresMinusculas )

var luises = nombres.filter( nombre => nombre.toUpperCase() == "LUIS" )

console.log("luises", luises)

const numeros = [2,4,6,8,10]

var total = numeros.reduce( (acumulador, actual) => acumulador + actual )

console.log("Total = " + total)
