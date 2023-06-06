var edad = window.prompt("Teclea tu edad (favor de poner nu numero)")

edad = parseInt(edad)

var isValorNoNumerico = isNaN(edad)

/*if( isValorNoNumerico == true ) {
    window.alert("El numero que ingresaste no es valido")
} */

while( isValorNoNumerico === true   ) {
    edad = window.prompt("Teclea tu edad")
    edad = parseInt(edad)
    isValorNoNumerico = isNaN(edad)
}

if( isValorNoNumerico === 1 ) {
    window.alert("El numero que ingresaste no es valido triple igual")
}

if( edad >= 18 ) {
    console.log("Eres mayor de edad")
} else {
    console.log("No eres mayor de edad, no puedes ingresar al sitio")
}


var pais = window.prompt("Teclea tu pais en formato abreviado (MX, US, CO, BR, RU, ES)")

if( pais == "MX" ) {
    console.log("Bienvenido amigo Mexicano")
} else if( pais == "US" ) {
    console.log("Bienvenido amigo Estadounidense")
} else if( pais == "CO" ) {
    console.log("Bienvenido amigo Colombiano")
} else if( pais == "BR" ) {
    console.log("Bienvenido amigo Brasileño")
} else if( pais == "RU" ) {
    console.log("Bienvenido amigo Ruso")
} else if( pais == "ES" ) {
    console.log("Bienvenido amigo Español")
} else {
    console.log("Lo sentimos, no reconocemos tu país")
}

switch( pais ) {
    case "MX":
        console.log("Bienvenido amigo Mexicano")
        break
    case "US":
        console.log("Bienvenido amigo Estadounidense")
        break
    case "CO":
        console.log("Bienvenido amigo Colombiano")
        break
    case "BR":
        console.log("Bienvenido amigo Brasileño")
        break
    case "RU":
        console.log("Bienvenido amigo Ruso")
        break
    case "RU":
        console.log("Bienvenido amigo Español")
        break
    default:
        console.log("Lo sentimos, no reconocemos tu país")
}

for( var numero = 100; numero > 0; numero-- ) {
    console.log(numero)
    //numero = 50

    if(numero * 2 == 60) {
        break
    }
}


/*
var numero = 1 //-> declarando variable

console.log(numero)

if(numero <= 100){ // condicional

}

numero++ // incremento en 1
*/
