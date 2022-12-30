/* EJERCICIO: Los números romanos
Implementar una librería que convierta números entre 1 y 9999 a un string con su
representación como número romano. La librería debe permitir versiones en minúscula
o mayúscula según un modificador que se recibe como parámetro.
*/


// al número en decimal, lo chequeamos decrecientemente contra los posibles valores del diccionario romano
// cuando se cumple, pusheamos la letra correspondiente y inputamos la cantidad al número que estamos transformando
// siempre que el inputo > 0, hacemos recursión

const { decimalToRomanUpper, decimalToRomanLower } = require('./romanizeDictionaries/decimalToRoman') // creamos dos diccionarios correspondientes para números romanos en mayúsculas y en minúsculas (ver archivo -^)

const romanizeNumber = (input, shouldConvertToUpperCase = true) => { // pasamos a la función los argumentos que corresponden a:
  // el número a convertir,
  // si debemos convertir o no a mayúscula (mayúsculas por defecto)
  const converter = shouldConvertToUpperCase ? decimalToRomanUpper : decimalToRomanLower // la fn elige el diccionario correspondiente
  let latinized = '' // la usaremos para ir concatenando los números convertidos a romano
  let toSubstract = 0 // para ir restando los dígitos ya convertidos

  // chequeamos los dos casos extremos
  if (input <= 0) return "Sorry, can't convert numbers smaller than 1!"
  if (input > 9999) return "Sorry, can't convert numbers bigger than 9999!"

  while (input > 0) { // procedemos a convertir
    // aislamos el dígito que queremos convertir
    if (input > 999) toSubstract = Math.floor(input / 1000) * 1000
    else if (input > 99) toSubstract = Math.floor(input / 100) * 100
    else if (input > 9) toSubstract = Math.floor(input / 10) * 10
    else toSubstract = input
    latinized += converter[toSubstract] // concatenamos el dígito que convertimos al resultado en romano
    input -= toSubstract // reducimos el número original, quitando el dígito ya cubierto
  }
  return latinized // devolvemos el número final en romano
}

// romanizeNumber(-45, true)
// romanizeNumber(0)
// romanizeNumber(10000, true)
// romanizeNumber(1, true)
// romanizeNumber(2, false)
// romanizeNumber(9)
// romanizeNumber(62, false)
// romanizeNumber(90, false)
// romanizeNumber(95, true)
// romanizeNumber(100, true)
// romanizeNumber(4514, true)
// romanizeNumber(4532, false)
