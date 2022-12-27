/* EJERCICIO: Los números romanos
Implementar una librería que convierta números entre 1 y 9999 a un string con su
representación como número romano. La librería debe permitir versiones en minúscula
o mayúscula según un modificador que se recibe como parámetro.
*/


// al número en decimal, lo chequeamos decrecientemente contra los posibles valores del diccionario romano
// cuando se cumple, pusheamos la letra correspondiente y restamos la cantidad al número que estamos transformando
// siempre que el resto > 0, hacemos recursión

const { decimalToRomanUpper, decimalToRomanLower } = require('./3. romanizeDictionaries/decimalToRoman') // creamos dos diccionarios correspondientes para números romanos en mayúsculas y en minúsculas (ver archivo -^)

const romanizeNumber = (rest, shouldConvertToUpperCase = true, _latinized = '', _toSubstract = 0) => { // pasamos a la función los argumentos que corresponden a:
// el número a convertir,
// si debemos convertir o no a mayúscula (mayúsculas por defecto)
// y tenemos luego las 2 variables que vamos a utilizar para guardar los valores que utilizará la función:
// el del número convertido
// y el de las restas al número a convertir (para chequear si debe continuarse con la recursión)
  const converter = shouldConvertToUpperCase ? decimalToRomanUpper : decimalToRomanLower // la fn elige el diccionario correspondiente

  switch (true) { // utilizamos switch por tener mejor performance que if...else; va directamente a la condición que corresponde
    case (rest <= 0): // caso base 1
      return "Sorry, can't convert numbers smaller than 1!"
    case (rest > 9999): // caso base 2
      return "Sorry, can't convert numbers bigger than 9999!"
    case (rest > 999):
      _toSubstract = Math.floor(rest / 1000) * 1000 // aislamos el dígito que queremos convertir
      _latinized += converter[_toSubstract] // concatenamos al número final el dígito que convertimos
      break
    case (rest > 99):
      _toSubstract += Math.floor(rest / 100) * 100
      _latinized += converter[_toSubstract]
      break
    case (rest > 9):
      _toSubstract += Math.floor(rest / 10) * 10
      _latinized += converter[_toSubstract]
      break
    default: // si el resto es menor a 10, realizamos la conversión final y retornamos el resultado
      return _latinized += converter[rest]
  }
  if (rest - _toSubstract > 0) { // si aún queda "resto" por convertir, se da lugar a la recursión
    return romanizeNumber(rest - _toSubstract, shouldConvertToUpperCase, _latinized)
  } else return _latinized // ... en caso negativo, se retorna el resultado
}

// romanizeNumber(-45, true)
// romanizeNumber(0)
// romanizeNumber(1, true)
// romanizeNumber(2, false)
// romanizeNumber(9)
// romanizeNumber(90, false)
// romanizeNumber(95, false)
// romanizeNumber(62, false)
// romanizeNumber(100, true)
// romanizeNumber(4514, true)
// romanizeNumber(4532, false)
// romanizeNumber(10000, true)
