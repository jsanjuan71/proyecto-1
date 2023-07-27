/*# Implement a function that given an array of integers returns another array 
# with the positive values present in the given array which has its negative equivalent.

# Example:
# Input: [-1, -2, -3] => Output: []
# Input: [-3, 2, -1, -4, 3, -2, 1, 5] => Output: [1, 2, 3]
# Input: [-2, -1, 0 ]
# Input: [-4, -2, -1, 1, 2, 3]*/


/*
 - Para saber el equivalente de cada uno hay que multiplicarlo por -1
 - Hay que ordenarlos de manera ascendente primero para optimizar la busqueda porque pueden quedar juntos
 - Una vez ordenado solo puede estar su equivalente a la derecha
 - Si se encuentra hay que evaluar que no exista ya en la lista de equivalentes
 - Debe empujarse el valor positivo
 - Si el número es cero, evitar la busqueda
*/

function findEquivalents( inputs ) {
  const equivalents = []
  
  inputs = inputs.sort()
  inputs.forEach( (number, index) =>  {
  	if(number === 0 ) return 
    let itsEquivalent = number * -1
    let hasEquivalent = inputs.slice(index + 1 ).includes( itsEquivalent )
    let positiveNumber = Math.abs(number)
    if(hasEquivalent && !equivalents.includes( positiveNumber ) ) {
    	equivalents.push( positiveNumber )
    }
  })
	
  return equivalents
}


console.log( findEquivalents( [-1, -2, -3] ) )





