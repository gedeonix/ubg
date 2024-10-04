const path = require('path')
const fs = require('fs')

let out = []

// let data = fs.readFileSync(path.join(__dirname, '../dist/pubg.ont'), 'utf8').toString()
let data = fs.readFileSync(path.join(__dirname, '../dist/pubg-red.ont'), 'utf8').toString()
if (data.charCodeAt(0) === 0xFEFF) {
    data = data.slice(1)
}
data = data.split(/\n/)

console.log('[UBG]', data.length)

/*
let input = fs.readFileSync(path.join(__dirname, '../src/arch/ubg-old.txt'), 'utf8').toString().split(/\n/)
console.log('[UBG old', input.length)
*/

// czytamy kolejne wiersze

let idx = 0

/*
data.forEach((item, i) => {
    let row = data[i]
    let detect = input[i]
    if (detect === undefined) {
        out.push(row)
    } else {
        let split = detect.split(/<[/]?J>/g);
        if (split.length > 1) {
            let line = []

            // przypadek 1

            if (split.length === 3) {
                if (split[0].length === 0 && split[2].length === 0) {
                    line.push('<J>')
                    line.push(row)
                    line.push('</J>')
                } else {
                    // przypadek 2
                    // pierwsze słowo po <J>
                    let split2 = split[1].split(' ');
                    let word = split2[0]
                    let searchIndex = row.search(word);
                    line.push(row.substring(0, searchIndex))
                    line.push('<J>')

                    let row2 = row.substring(searchIndex)
                    if ( split[2].length === 0) {
                        line.push(row2)
                    }
                    else {
                        // ostatnie słowo przd </J>
                        let lastWord = split2[split2.length - 1]
                        let searchIndex2 = row2.search(lastWord);
                        line.push(row2.substring(0, searchIndex2 + lastWord.length))
                        line.push('</J>')
                        line.push(row2.substring(searchIndex2 + lastWord.length))
                    }
                }
                out.push(line.join(''))
            }
            else {
                console.log(i, row)
                out.push(row)
            }

        } else {
            out.push(row)
        }
    }
})
*/

data.forEach((item, i) => {
    let row = data[i]
    let split = row.split(/<[/]?J>/g);
    if (split.length > 1) {
        if (split.length === 2 || split.length === 4 || split.length === 6 || split.length === 8 ) {
            out.push(row + '</J>')
        }
        else {
            out.push(row)
        }
    } else {
        out.push(row)
    }
})

fs.writeFileSync('./dist/pubg-red.ont',  '\ufeff' + out.join('\n'), {encoding: 'utf-8'})
