const lzstring = require('lz-string')
const _ = require('lodash')
const fs = require('fs')

let spellnameraw = fs.readFileSync('../../docs/assets/database/spellname.json')
let spellname = JSON.parse(spellnameraw)

let spellmiscraw = fs.readFileSync('../../docs/assets/database/spellmisc.json')
let spellmisc = JSON.parse(spellmiscraw)

let spellraw = fs.readFileSync('../../docs/assets/database/spell.json')
let spell = JSON.parse(spellraw)

let spells = _.zipWith(spellname, spellmisc, spell, (obj1, obj2, obj3) => {
	console.log(obj1, obj2, obj3)

	return {
		'ID': obj1['ID'],
		'Name_lang': obj1['Name_lang'],
		"NameSubtext_lang": obj2['NameSubtext_lang'],
		"Description_lang": obj2['Description_lang'],
		"AuraDescription_lang": obj2['AuraDescription_lang'],
		"Attributes[0]": obj3['Attributes[0]'],
		"Attributes[1]": obj3['Attributes[1]'],
		"Attributes[2]": obj3['Attributes[2]'],
		"Attributes[3]": obj3['Attributes[3]'],
		"Attributes[4]": obj3['Attributes[4]'],
		"Attributes[5]": obj3['Attributes[5]'],
		"Attributes[6]": obj3['Attributes[6]'],
		"Attributes[7]": obj3['Attributes[7]'],
		"Attributes[8]": obj3['Attributes[8]'],
		"Attributes[9]": obj3['Attributes[9]'],
		"Attributes[10]": obj3['Attributes[10]'],
		"Attributes[11]": obj3['Attributes[11]'],
		"Attributes[12]": obj3['Attributes[12]'],
		"Attributes[13]": obj3['Attributes[13]'],
		"DifficultyID": obj3['DifficultyID'],
		"CastingTimeIndex": obj3['CastingTimeIndex'],
		"DurationIndex": obj3['DurationIndex'],
		"RangeIndex": obj3['RangeIndex'],
		"SchoolMask": obj3['SchoolMask'],
		"Speed": obj3['Speed'],
		"LaunchDelay": obj3['LaunchDelay'],
		"MinDuration": obj3['MinDuration'],
		"SpellIconFileDataID": obj3['SpellIconFileDataID'],
		"ActiveIconFileDataID": obj3['ActiveIconFileDataID'],
		"ContentTuningID": obj3['ContentTuningID']
	}
})

let result = JSON.stringify(spells)
fs.writeFileSync('../../docs/assets/database/spells.json', result)
fs.writeFileSync('../../docs/assets/database/spells.db', lzstring.compressToUTF16(result))