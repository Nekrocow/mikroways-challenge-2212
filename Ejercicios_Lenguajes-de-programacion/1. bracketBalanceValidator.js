/*  EJERCICIO: Los corchetes balanceados
Escriba una función que reciba un string que contenga corchetes en cualquier orden. La
función debe determinar si los corchetes están balanceados, esto es, que la cantidad de
corchetes de apertura y cierre se den en orden correcto.

Ejemplo:
"" => true
"[]" => true
"[][]" => true
"[[]]" => true
"[[[][]]]" => true
"][" => false
"][][" => false
"[][]][" => false
*/

const bracketBalanceValidator = (string) => {
  // Your code here:
  const validBrackets = { '[': ']' }  // creamos un diccionario con los elementos a chequear
  const openBrackets = [] // creamos una pila para ir acumulando los corchetes de apertura
  for (const bracket of string) { // recorremos el string para ir revisando cada elemento
    if (validBrackets[bracket] ) { // chequeamos si el elemento es un corchete de apertura
      openBrackets.push(bracket)  // caso afirmativo: lo sumamos a la pila
    } else if (validBrackets[openBrackets.pop()] !== bracket) { // caso negativo: no es un corchete de apertura; puede que sea de cierre. Chequeamos si difiere del último elemento de la pila
      return false // de ser así, el string no está balanceado, ya que me quedan corchetes sin pareja
    }
  }
  return !openBrackets.length // finalmente, chequeamos si no quedaron corchetes "huérfanos" en la pila y damos la respuesta final
}

// bracketBalanceValidator("[][]") //  true      
// bracketBalanceValidator("[[]]") //  true      
// bracketBalanceValidator("[[[][]]]") //  true  
// bracketBalanceValidator("]") //  false      
// bracketBalanceValidator("][") // false        
// bracketBalanceValidator("][][") // false      
// bracketBalanceValidator("[][]][") // false    
