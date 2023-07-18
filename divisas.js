
async function exchange_convert_async(url) {
    const response = await fetch(url)
    const data = await response.json()
    let exchange_result = document.getElementById("exchange_result")
    unit_exchange_quantity = document.getElementById("unit_exchange_quantity").value
    exchange_result.innerHTML = data[destination] * unit_exchange_quantity  + destination
}

function formatMoney(amount, currency) {
    return "$" + amount.toFixed(2) + " " + currency
}

function exchange_convert() {
    let origin = document.getElementById("exchange_origin_selector").value  
    let destination = document.getElementById("exchange_destination_selector").value


    const EXCHANGE_API = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${origin}/${destination}.json`

    console.log("EXCHANGE_API: ", EXCHANGE_API)

    /*fetch(EXCHANGE_API)
        .then(response => {
            console.log("response: ", response)
            response.json().then(data => { 
                console.log("data: ", data)
            })
            .catch(error => {    
                console.log("error: ", error)
            })
        })
        .catch(error => {
            console.log("error: ", error)
        })*/

    fetch(EXCHANGE_API)
        .then(response => response.json())
        .then(data => {
            console.log("data: ", data)

            let exchange_result = document.getElementById("exchange_result")
            unit_exchange_quantity = document.getElementById("unit_exchange_quantity").value
            let amount = data[destination] * unit_exchange_quantity
            exchange_result.innerHTML = formatMoney(amount, destination)
        })
        .catch(error => {
            console.log("error: ", error)
        })

    //exchange_convert_async(EXCHANGE_API)
    

    
    
}

/** Colocar la imagen del QR */
let qr_code_img = document.getElementById("qr_code_img")
let texto =  "https://utel.edu.mx"
qr_code_img.src = `https://api.qrserver.com/v1/create-qr-code/?data=${texto}&size=240x240`


/** Colocar la imagen del pato */
const randomQuackUrl = "https://random-d.uk/api/v2/random"
const random_quack_img = document.getElementById("random_quack_img")
fetch(randomQuackUrl)
    .then(response => response.json())  
    .then(data => {
        console.log("data: ", data)
        random_quack_img.src = data.url
    })
    .catch(error => {
        console.log("error: ", error)
        random_quack_img.src = "https://random-d.uk/api/v2/randomimg"
        random_quack_img.alt = "Random quack image"
        random_quack_img.setAttribute("width", "128")
    })

    