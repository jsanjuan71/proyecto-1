

let pizza = {
    "costoEnvio": 30,  
    "nombre" : "peperoni",
    "ingredientes" : [
        "peperoni", "queso mozzarella"
    ],
    "tamanos" : {
        "individual" : {
            "rebanadas" : 2,
            "precio" : 50
        },
        "chica" : {
            "rebanadas" : 4,
            "precio" : 70
        },
        "mediana": {
            "rebanadas" : 6,
            "precio" : 90
        },
        "grande": {
            "rebanadas" : 8,
            "precio" : 110
        },
        "familiar": {
            "rebanadas" : 12,
            "precio" : 200
        }
    }
}

const objetoComoString = JSON.stringify(pizza)
console.log( objetoComoString )


console.log( JSON.parse(objetoComoString) )


pizza.tamanos.jumbo = {
    "rebanadas" : 16,
    "precio" : 300
}

pizza.tamanos["armala"] = {
    "rebanadas" : 8,
    "precio": 150
}

// iteración de objetos
const attributes = Object.keys(pizza)
for (const attribute of attributes) {
    console.log("atributo", attribute)
    console.log("valor", pizza[attribute] )
}


for(let attribute in pizza) {
    console.log("atributo", attribute)
    console.log("valor", pizza[attribute] )
}

console.log(pizza)

let costo = 100
let nombre = "julio"

costo = costo * 1.16

let { ingredientes, costo:costoEnvio, costoEnvio:costoDeEnvioSinIva , nombre:NombreDePizza } = pizza

console.log(`Pizza ${pizza.tamanos.individual.rebanadas} -> Costo envío ${costoDeEnvioSinIva}`)

var datosPersonales = ["Julio", 32, 1.71]

let [nombreUcamper, edad, estatura] = datosPersonales

nombreUcamper

datosPersonales[0]