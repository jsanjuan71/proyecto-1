
let btn_h1 = document.getElementById("btn_h1")
let nombre = "Juan"

btn_h1.addEventListener("click", (event) => {
    let nuevo_h1 = document.createElement("h1")
    nuevo_h1.textContent = `Bienvenido`
    document.body.append(nuevo_h1)
    console.log( nuevo_h1.textContent )
})

let btn_p = document.querySelector("#btn_p")

btn_p.addEventListener("click", (event) => {
    let nuevo_p = document.createElement("p")
    nuevo_p.textContent = `Este sitio web es creado desde javascript usando eventos DOM`
    document.body.append(nuevo_p)
})

let btn_alert = document.querySelector("#btn_alert")

btn_alert.addEventListener("click", (event) => {
    window.alert("Hola soy un alert")
})

console.log(document.body.children)
