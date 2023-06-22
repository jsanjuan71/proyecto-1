

const img = document.querySelector('img')

console.log( img.getAttribute("xd") )

let height = img.getAttribute("height")

height = height.replace("px", "")

console.log("height", height )

height = parseInt( height )

let doubleHeight = height * 2

console.log( doubleHeight )

img.setAttribute("height", doubleHeight + "px")


//const botones = document.getElementsByTagName("button")

const botones = document.querySelectorAll("button.ctrlCuadrado")

console.log( botones )

function clickEnBoton( event ) {

    let action = event.target.getAttribute("action")
    let cuadrado = document.querySelector(".cuadrado")
    switch ( action ) {    
        case "background":
            cuadrado.style.backgroundColor = "red"
            break;
        case "size":
            cuadrado.style.width = "200px"
            cuadrado.style.height = "200px"
            break;
        case "border":
            cuadrado.style.border = "5px solid blue"
            break;
        case "radius":
            cuadrado.style.borderRadius = "25%"
            break;
        default:
            console.log("no hay accion")
    }

}

botones.forEach( (boton) => {
    let len = botones.length
    boton.addEventListener("click", clickEnBoton)
})

