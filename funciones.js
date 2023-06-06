function solicitarEdad(){
    /*var edad = window.prompt("Teclea tu edad (favor de poner nu numero)")
    edad = parseInt(edad)
    var isValorNoNumerico = isNaN(edad)
    while( isValorNoNumerico === true   ) {
        edad = window.prompt("Teclea tu edad")
        edad = parseInt(edad)
        isValorNoNumerico = isNaN(edad)
    }*/
    var isValorNoNumerico
    var edad
    do{
        edad = window.prompt("Teclea tu edad (favor de poner nu numero)")
        edad = parseInt(edad)
        isValorNoNumerico = isNaN(edad)
    } while( isValorNoNumerico === true )
    
    return edad

}


function esMayorDeEdad(edad){
    if( edad >= 18 ) {
        return true
    } else {
        return false
    }
}




var edadUsuario = solicitarEdad()

if( esMayorDeEdad() ) {
    console.log("Bienvenido al sitio ")
}






