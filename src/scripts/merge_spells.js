const lzstring = require('lz-string')
const _ = require('lodash')
const fs = require('fs')

let spellraw = fs.readFileSync('../../docs/assets/database/spell.json')
let spell = JSON.parse(spellraw)

let spellnameraw = fs.readFileSync('../../docs/assets/database/spellname.json')
let spellname = JSON.parse(spellnameraw)

let spellmiscraw = fs.readFileSync('../../docs/assets/database/spellmisc.json')
let spellmisc = JSON.parse(spellmiscraw)

spellmisc.map(sm => {
	sm['OldID'] = sm['ID']
	sm['ID'] = sm['SpellID']

	delete sm['SpellID']

	return sm
})

let spells = _.zipWith(spellname, spell, spellmisc, (obj1, obj2, obj3) => ({...obj1, ...obj2, ...obj3}))

let result = JSON.stringify(spells)
fs.writeFileSync('../../docs/assets/database/spells.json', result)
fs.writeFileSync('../../docs/assets/database/spells.db', lzstring.compressToUTF16(result))