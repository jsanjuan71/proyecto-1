


const precios = [ 100, 10.5, 50, 1, 43, -65, 23, 323 ]

var todosPositivos = precios.every(num => num > 0) // si todos cumplen

var hayUnoMayorACien = precios.some(num => num > 100 ) // si al menos uno cumple

console.log( precios.reverse() )

console.log( precios.sort() ) 

var totalPrecios = precios.reduce( (total, precio) => total + precio )
console.log("Total Precios", totalPrecios)

const pais = "México"

function mostrarPrecio(precio){
    console.log( "$" + precio )
}

precios.map( mostrarPrecio )

/*precios.map( function (precio){
    console.log( "$" + precio + " MXN. "+ pais )
} )*/

//precios.map( precio => console.log(`$ ${precio} MXN. ${pais}`) )

var primerMayorCincuenta = precios.find( precio => precio > 50 )

console.log("primero", primerMayorCincuenta)

var mayoresACincuenta = precios.filter( precio => precio > 10 )

console.log("todos", mayoresACincuenta ) 


var primerMayorCincuentaIndice = precios.findIndex( precio => precio > 50 )

console.log("indice primero", primerMayorCincuentaIndice)

precios.splice(primerMayorCincuentaIndice, 1)

console.log( precios )



var mayoresACincuentaIndices = precios.map( (precio, index) => {
    if(precio > 40) return index
} )

var resultado = precios
for(let indice = 0; indice <= precios.length; indice++){
    if( precios[indice] > 40 ) {
        resultado.splice( indice, 1 )
    }
}

console.log("todos mayores indices", mayoresACincuentaIndices)
console.log("final", resultado, precios)

const bootcamps = ["fullstack", "marketing", "ui/ux","diseño web","programacion", "fullstack web"]

var webs = bootcamps.filter( bootcamp =>  bootcamp.includes("web") )

console.log(webs)


const parrafo = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n"
 +"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"

const parrafo_template = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
 Lorem Ipsum has been the industry's standard dummy 
 text ever since the 1500s, when an ${pais} printer 
 took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`