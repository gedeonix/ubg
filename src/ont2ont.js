const path = require('path')
const fs = require('fs')

let data = fs.readFileSync(path.join(__dirname, './pubg-red.ont'), 'utf8').toString()
fs.writeFileSync('../dist/pubg-red.ont', data, {encoding: 'utf-8'})

let out = data.replace(/<FR>/g, '').replace(/<Fr>/g, '')

fs.writeFileSync('../dist/pubg.ont', out, {encoding: 'utf-8'})
