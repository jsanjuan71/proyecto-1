
/*
lista de invitados

Julio
Guadalupe
X David
Maria
Jorge
*/

const PI = 3.1416

const listaInvitados = [ "Julio", "Guadalupe", true, 1, PI ]


const frutas = ["platano", "fresa", "mango", "melon", "uva", "pera"]

console.log( "Hay "+ frutas.length + " frutas" )

console.log( frutas[2] )

console.log( frutas[6] )

frutas[1] = "moras" //cambiar el valor de un elemento del array

frutas[1] = frutas[1] + "s" // modificar un valor 

console.log( frutas[1] )

frutas[ frutas.length ] = "sandia" // agregar un elemento nuevo

console.log( frutas[ frutas.length - 1 ] ) // acceder al ultimo elemento

console.log(frutas[frutas.length-1]) // acceder al ultimo elemento


console.log("INDICES", frutas)

// STACK | PILA 

frutas.push("kiwi") // Agrega un elemento


frutas.pop() // devuelve y elimina el ultimo que llegó -> fila STACK  LIFO


var siguienteEnCola = frutas.shift()  // devuelve y elimina el primero que llegó -> cola QUEUE FIFO


frutas.splice( 2, 1 ) // elimina el elemento desde la posición 2, solo borra 1

var primerasTres = frutas.slice( 1, 4 ) // pedazo del array que va desde el 0 hasta el 2

console.log( primerasTres )

frutas.unshift("papaya") // insertar al inicio del array (encolar)

console.log(frutas)


function esMenorEdad(edad){
    if( edad < 21 ) {
        return true
    } else {
        return false
    }
}

const edades = [ 32, 24, 16, 34, 21, 34, 13 ]

for(let indice = 0; indice < edades.length; indice++ ) {
    console.log( edades[ indice ] )

    if( esMenorEdad(  edades[ indice ] ) === true ) console.log(" es menor de edad")

}

function duplicarEdad(edad) {
    //console.log(edad * 2)
    return edad * 2
}

function imprimirEdad(edad){
    var duplicado = duplicarEdad(edad)
    console.log( duplicado )
}

//duplicarEdad(32)

edades.forEach( imprimirEdad )

edades.forEach( function(edad){
    var duplicado = duplicarEdad(edad)
    console.log( duplicado )
})

edades.forEach( edad => console.log( duplicarEdad(edad) ) )


console.log( edades.map( edad => duplicarEdad(edad) ) )

var edadesDuplicadas = edades.map( edad => duplicarEdad(edad) ) 





//console.log( frutas[:,-2] )



function impares(inicio, fin) {
    for(let indice = inicio; indice<=fin; indice++){
        if( indice % 2 !== 0 ) {
            console.log(indice)
        }
    }
}

impares(1, 100)