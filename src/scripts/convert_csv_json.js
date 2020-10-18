const csvToJson = require('convert-csv-to-json')

let fileInputName = '../../docs/assets/database/manifestinterfacedata.csv'
let fileOutputName = '../../docs/assets/database/manifestinterfacedata.json'

csvToJson.fieldDelimiter(',').formatValueByType().generateJsonFileFromCsv(fileInputName, fileOutputName)