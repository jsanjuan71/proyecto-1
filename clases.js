var persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 25,
    peso: 75
}

const personas = []

personas.push(persona)

persona = {
    nombre: "Joel",
    apellido: "Garcia",
    edad: 32,
    peso: 80,
    altura: 1.80
}

persona.nacionalidad = "Argentina"

persona.edad = 33


personas.push(persona)

console.log(personas)

function saludar(nombre) {
    console.log(`Hola, me llamo ${nombre}`)
}

var nombre = "Camilo"

class Persona {
    #edad = 0
    peso = null

    // Es la primera funcion que se ejecuta cuando se crea un objeto
    constructor(nombre, apellido, edad, peso, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.#edad = edad
        this.peeso = peso
        this.altura = altura
    }

    saludar() {
        console.log(`Hola, me llamo $ ${this.nombre} MXN ${this.apellido}`)
    }

    esMayorDeEdad() {
        return this.edad > 18
    }

    calcularIMC() {
        return this.peso / (this.altura * this.altura)
    }

    get edad() { // Getter
        return this.#edad
    }

    set edad(edad) { // Setter
        if (edad > 0) {
            this.#edad = edad
        }
    }
}


//new -> crear una nueva instancia de la clase
const juan = new Persona("Juan", "Perez", 25, 75, 1.80)
const persona2 = new Persona("Joel", "Garcia", 32, 80, 1.80)
const persona3 = new Persona("Maria", "Gomez", 15, 50, 1.60)

const listaPersonas = [juan, persona2, persona3]

listaPersonas[0].saludar()



juan.edad = -30

console.log(juan.edad)

juan.saludar()

persona3.saludar()

persona2.saludar()


saludar("Julio")


