# Ejercicios de evaluación para DevOps en Mikroways (2022)
En este repositorio pueden encontrarse ejercicios para la evaluación mencionada, particularmente los de las secciones "Lenguajes de programación" y "Markup".

## Lenguajes de programación
- Pueden probarse los ejercicios corriendo npm test.

## Markup

### Sobre json
- Puede verse mi CV en formato JSON en el archivo "KlosterM.resume.json" o bien la forma definitiva online en https://registry.jsonresume.org/Nekrocow

### Sobre yaml
- Para correr el conversor de CSV a Json/Yaml, ubicarse primero en la carpeta "Markup_csvConverter".
- El comando para utilizar el conversor tiene la siguiente estructura: node csvConverter.js [formatoDeSalida] [csvFuente] [archivoDeSalida]
Ej1: node csvConverter.js json toConvert.csv output.json
Ej2: node csvConverter.js yaml toConvert.csv output.yaml
