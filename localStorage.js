

localStorage.setItem( 'hasCreditCard', false ); // crea un item en el localStorage

localStorage.setItem( 'nombre' , "julio" )

localStorage.setItem( 'creditCards' , [ "amex" , "bbva" , "stori" ]  )

let creditCards = localStorage.getItem( 'creditCards' ) // obtiene el item creditCards

creditCardsArray = creditCards.split( "," )

console.log( creditCards )

console.log( creditCardsArray )

let jsonString = JSON.stringify( { hasCreditCard: false, "account" : "3653456525676532" } )

console.log( jsonString )

let jsonObject = JSON.parse( jsonString )

console.log( jsonObject )

localStorage.setItem( 'creditCards2', JSON.stringify( [ "amex" , "bbva" , "stori" ] )  )

let creditCards2 = JSON.parse( localStorage.getItem( 'creditCards2' ) )

console.log( creditCards2 )


localStorage.clear() // borra todo el localStorage

localStorage.removeItem( 'creditCards2' ) // borra solo el item creditCards2


let button = {
    id: "btn_alert",
    text: "Linkedin",
    link: "linkedin.com"
}

const buttons = [
    button
]

localStorage.setItem( 'buttons', JSON.stringify( buttons ) )