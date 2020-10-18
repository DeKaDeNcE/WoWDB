const lzstring = require('lz-string')
const fs = require('fs')

let data = fs.readFileSync('../../docs/assets/database/chrraces.json')
let result = JSON.stringify(JSON.parse(data))
fs.writeFileSync('../../docs/assets/database/chrraces.db', lzstring.compressToUTF16(result))