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
  let changeExpected = payment - price // calculamos el cambio esperado por el pagador
  if (payment < 1 || price < 1 || changeExpected < 0) return "Please, enter valid amounts!" // contemplamos los casos excepcionales
  if (changeExpected === 0) return "You don't need change!"

  const expectedBills = [] // creamos un array para ir pusheando los billetes correspondientes al vuelto
  const billsArray = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1]
  billsArray.forEach(e => {
    while (changeExpected >= e) {
      expectedBills.push(e)
      changeExpected -= e
    }
  })

  return expectedBills
}

// NOTA: es posible también ofrecer una solución utilizando un objeto que devuelva las cantidades de cada billete como clave-valor —ej., para 3204, { 1000: 3, 200: 1, 2: 2 }—, pero que solo dejamos planteada sin desarrollar ya que el ejemplo daba a entender cuál era el formato de respuesta esperado.

// changeCalculator(100, 100) // [0]
// changeCalculator(100, 75) // [20, 5]
// changeCalculator(200, 75) // [100, 20, 5]
// changeCalculator(1000, 442) // [500, 50, 5, 2, 1]
// changeCalculator(500, 50) // [200, 200, 50]
// changeCalculator(1889, 1) // [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1]
// changeCalculator(39, 1)
// changeCalculator(200, 75)
// changeCalculator(8000, 50)

// changeCalculator(-1, 75)
// changeCalculator(50, -1)
// changeCalculator(50, 75)
