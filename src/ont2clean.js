const path = require('path')
const fs = require('fs')

let data = fs.readFileSync(path.join(__dirname, './pubg-red.ont'), 'utf8').toString()
let out = data
    .replace(/<FR>/g, '')
    .replace(/<Fr>/g, '')
    .replace(/<PS>/g, '')
    .replace(/<Ps>/g, '')
    .replace(/<HE>/g, '')
    .replace(/<He>/g, '')

fs.writeFileSync('./pubg-text.ont', out, {encoding: 'utf-8'})
// fs.writeFileSync('../../scripture/bmc/pubg-text.ont', out, {encoding: 'utf-8'})
