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

const changeCalculator = () => { // ir dividiendo y cuando me de con resto, sigo con la próxima unidad; pushear a array la cantidad de billetes que corresponden sabiendo que cada posición corresponde a un billete

}