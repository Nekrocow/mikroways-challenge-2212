/* EJERCICIO: Calcular el vuelto
Implementar un algoritmo que calcule el vuelto de un pago. Para ello se considera como
moneda el peso argentino, cuyas denominaciones son: 1, 2, 5, 10, 20, 50, 100, 200, 500
Debe implementar una función que dado un pago de X pesos, usando Y pesos, devuelva
el vuelto utilizando las denominaciones necesarias.

Ejemplo:
100, 100 => [0]
100, 75 => [20, 5]
200, 75 => [100, 20, 5]
1000, 442 => [500, 50, 5, 2, 1]
500, 50 => [200, 200, 50]
1889, 1 => [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1]
*/

const changeCalculator = (payment, price) => { // los argumentos que recibe la fn son el pago realizado y el precio a cubrir
  let changeExpected = payment - price // calculamos el vuelto esperado por el pagador
  if (payment < 1 || price < 1 || changeExpected < 0) return "Please, enter valid amounts!" // contemplamos los casos excepcionales
  if (changeExpected === 0) return "You don't need change!"

  const expectedBills = [] // creamos un array para ir pusheando los billetes correspondientes al vuelto
  const billsArray = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1] // creamos un array con los tipos de billetes
  billsArray.forEach(e => { // recorremos los tipos de billete para saber cuántos necesitamos de cada uno
    while (changeExpected >= e) { // cuando ya no quede vuelto por cubrir, se detiene el proceso
      expectedBills.push(e) // cada vez que se identifica un billete de una denominación, se agrega al array del vuelto
      changeExpected -= e // se va restando del total cada billete apartado para continuar con el siguiente
    }
  })

  return expectedBills // retornamos el array con los billetes necesarios para el vuelto
}

// NOTA: es posible también ofrecer una solución utilizando un objeto que devuelva las cantidades de cada billete como clave-valor —ej., para 3204, { 1000: 3, 200: 1, 2: 2 }—, pero que solo dejamos planteada sin desarrollar ya que el ejemplo daba a entender que el formato de respuesta esperado era utilizando un array.
