const fs = require('fs')
const { stringify } = require('yaml')
const arguments = process.argv
const convertTo = arguments[2]
const sourceCsv = fs.readFileSync(arguments[3])
const outputFile = arguments[4]

const csvConverter = (csv) => {
  const rows = csv.toString().split('\n') // convertimos la data en String y la distribuimos en un array

  const delimiter = ',' // podemos cambiar el delimitador de ser necesario

  const headers = rows[0].split(delimiter) // separamos los headers del CSV, ubicados en el índice [0]
  const data = rows.slice(1) // ... de los datos de cada fila

  let result // aquí guardaremos la info formateada

  result = []
  for (const line of data) { // recorremos las filas con la info para armar los objetos correspondientes
    const auxObj = {}
    const row = line.split(delimiter) // individualizamos cada dato para asociarlo luego al respectivo header

    for (let i = 0; i < headers.length; i++) { // rellenamos con la info correspondiente a cada header para armar el objeto actual
      const header = headers[i]
      auxObj[header] = row[i]
    }
    result.push(auxObj) // vamos agregando cada obj a nuestro array resultante
  }
  return result
}

if (convertTo === 'json') {
  const csvJsonified = csvConverter(sourceCsv, convertTo)
  const jsonString = JSON.stringify(csvJsonified, null, 2)
  fs.writeFileSync(outputFile, jsonString)

} else if (convertTo === 'yaml') {
  const csvYamlified = csvConverter(sourceCsv, convertTo)
  const yamlReady = stringify(csvYamlified)
  fs.writeFileSync(outputFile, yamlReady)
}
