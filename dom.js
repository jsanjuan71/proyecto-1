const contenedorRedes = document.getElementById("redesSociales")

if(contenedorRedes) {
    console.log( contenedorRedes )
}   

const linksSociales = document.getElementsByClassName("social__link")

console.log(linksSociales)

var imagenesRedes1 = []

for (const link of linksSociales) {
    imagenesRedes1.push(link.children[0])
}

console.log("imagenesRedes1", imagenesRedes1)

const images = document.getElementsByTagName("img")

console.log(images)

const imagenesRedes = document.querySelectorAll(".social__link:last-child img")

console.log(imagenesRedes)

const nuevoParrafo = document.createElement("p")

nuevoParrafo.textContent = "Hola soy un nuevo parrafo credo desde javascript"

document.body.appendChild(nuevoParrafo)

const nuevaImagen = document.createElement("img")
nuevaImagen.src = "https://placeimg.com/200/200/animals"
document.body.appendChild(nuevaImagen)

const nuevoEncabezado = document.createElement("h1")

nuevoEncabezado.textContent = "Titulo del producto"

nuevoEncabezado.classList.add("titulo1")

document.body.insertAdjacentElement("beforeend", nuevoEncabezado)

//document.body.insertBefore(nuevoEncabezado, contenedorRedes)


nuevaImagen.addEventListener("click", function(event) {
    console.log(event)

    nuevaImagen.classList.toggle("fullWidth")
})



for (const anchor of linksSociales) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault()
        console.log("click en ancla")
    })
}


var frutas = ["manzana", "pera", "uva"]

frutas.push("mango")

//frutas.toLowerCase()

frutas[0].toLowerCase()


document.addEventListener("keydown", function(event) {
    console.log( event.key )
})


const nombre =  document.getElementById("nombre")
console.log(nombre)
if(nombre) {
    nombre.addEventListener("input", function(event) {
        console.log( event.target.value )
    })
}




