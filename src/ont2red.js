const path = require('path')
const fs = require('fs')

let out = []

let data = fs.readFileSync(path.join(__dirname, '../dist/pubg.ont'), 'utf8').toString()

if (data.charCodeAt(0) === 0xFEFF) {
    data = data.slice(1)
}

data = data.split(/\n/)

console.log('[UBG]', data.length)

// czytamy kolejne wiersze

data.forEach((item, i) => {
    let row = data[i]
    out.push(row)
})

fs.writeFileSync('./dist/pubg-red.ont',  '\ufeff' + out.join('\n'), {encoding: 'utf-8'})
