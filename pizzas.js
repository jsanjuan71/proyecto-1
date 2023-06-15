const IVA = 0.16
const tamanos = {
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

class Pizza {
    nombre = null
    tamano = null
    ingredientes = null
    precio = null
    foto = null

    constructor(nombre, tamano, ingredientes) {
        this.nombre = nombre
        this.tamano = tamano
        this.ingredientes = ingredientes
        this.obtenerPrecio()
    }

    presentar() {
        return `${this.nombre} (${this.tamano})
        Ingredientes: ${this.ingredientes}
        Precio: $${this.precio}`
    }

    obtenerPrecio() {
        var precio = tamanos[ this.tamano ].precio
        this.precio =  precio * (1 + IVA)
        this.precio = this.precio.toFixed(2)
    }
}

const pizzas = []

var pizza = new Pizza("Peperoni", "individual", ["peperoni", "queso mozzarella"])

pizzas.push( pizza )

var pizza2 = new Pizza("Hawaiana", "mediana", ["piña", "jamón", "queso mozzarella"])

pizzas.push( pizza2 )

//console.log( pizzas[1].presentar() )

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

numeros.push(10)

pizzas.forEach( pizza => console.log( pizza.presentar() ) )