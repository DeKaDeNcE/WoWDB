const _ = require('lodash')
const fs = require('fs')

let spellraw = fs.readFileSync('../../docs/assets/database/spell.json')
let spell = JSON.parse(spellraw)

let spellnameraw = fs.readFileSync('../../docs/assets/database/spellname.json')
let spellname = JSON.parse(spellnameraw)

let spells = _.zipWith(spellname, spell, (obj1, obj2) => ({...obj1, ...obj2}))

let result = JSON.stringify(spells)
fs.writeFileSync('../../docs/assets/database/spells.json', result)