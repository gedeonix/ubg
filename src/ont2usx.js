const path = require('path')
const fs = require('fs')

const books = [
    { code: 'GEN', abbr: 'Rdz', short: 'Rodzaju', long: 'Księga Rodzaju' },
    { code: 'EXO', abbr: 'Wj', short: 'Wyjścia', long: 'Wyjścia' },
    { code: 'LEV', abbr: 'Kpł', short: 'Kapłańska', long: 'Księga Kapłańska' },
    { code: 'NUM', abbr: 'Lb', short: 'Liczb', long: 'Księga Liczb' },
    { code: 'DEU', abbr: 'Pwt', short: 'Powtórzonego', long: 'Księga Powtórzonego Prawa' },
    { code: 'JOS', abbr: 'Joz', short: 'Jozuego', long: 'Księga Jozuego' },
    { code: 'JDG', abbr: 'Sdz', short: 'Księga Sędziów', long: 'Księga Sędziów' },
    { code: 'RUT', abbr: 'Rt', short: 'Rut', long: 'Księga Rut' },
    { code: '1SA', abbr: '1Sm', short: 'I Samuela', long: 'I Księga Samuela' },
    { code: '2SA', abbr: '2Sm', short: 'II Samuela', long: 'II Księga Samuela' },
    { code: '1KI', abbr: '1Krl', short: 'I Królewska', long: 'I Księga Królewska' },
    { code: '2KI', abbr: '2Krl', short: 'II Królewska', long: 'II Księga Królewska' },
    { code: '1CH', abbr: '1Krn', short: 'I Kronik', long: 'I Księga Kronik' },
    { code: '2CH', abbr: '2Krn', short: 'II Kronik', long: 'II Księga Kronik' },
    { code: 'EZR', abbr: 'Ezd', short: 'Ezdrasza', long: 'Księga Ezdrasza' },
    { code: 'NEH', abbr: 'Neh', short: 'Nehemiasza', long: 'Księga Nehemiasza' },
    { code: 'EST', abbr: 'Est', short: 'Estery', long: 'Księga Estery' },
    { code: 'JOB', abbr: 'Hi', short: 'Hioba', long: 'Księga Hioba' },
    { code: 'PSA', abbr: 'Ps', short: 'Psalmów', long: 'Księga Psalmów' },
    { code: 'PRO', abbr: 'Prz', short: 'Przysłów', long: 'Księga Przysłów' },
    { code: 'ECC', abbr: 'Kaz', short: 'Kaznodziei', long: 'Księga Kaznodziei' },
    { code: 'SNG', abbr: 'Pnp', short: 'Pieśń nad Pieśniami', long: 'Pieśń nad Pieśniami' },
    { code: 'ISA', abbr: 'Iz', short: 'Izajasza', long: 'Księga Izajasza' },
    { code: 'JER', abbr: 'Jr', short: 'Jeremiasza', long: 'Księga Jeremiasza' },
    { code: 'LAM', abbr: 'Lm', short: 'Lamentacje', long: 'Lamentacje' },
    { code: 'EZK', abbr: 'Ez', short: 'Ezechiela', long: 'Księga Ezechiela' },
    { code: 'DAN', abbr: 'Dn', short: 'Daniela', long: 'Księga Daniela' },
    { code: 'HOS', abbr: 'Oz', short: 'Ozeasza', long: 'Księga Ozeasza' },
    { code: 'JOL', abbr: 'Jl', short: 'Joela', long: 'Księga Joela' },
    { code: 'AMO', abbr: 'Am', short: 'Amosa', long: 'Księga Amosa' },
    { code: 'OBA', abbr: 'Ab', short: 'Abdiasza', long: 'Księga Abdiasza' },
    { code: 'JON', abbr: 'Jon', short: 'Jonasza', long: 'Księga Jonasza' },
    { code: 'MIC', abbr: 'Mic', short: 'Micheasza', long: 'Księga Micheasza' },
    { code: 'NAM', abbr: 'Na', short: 'Nahuma', long: 'Księga Nahuma' },
    { code: 'HAB', abbr: 'Ha', short: 'Habakuka', long: 'Księga Habakuka' },
    { code: 'ZEP', abbr: 'So', short: 'Sofoniasza', long: 'Księga Sofoniasza' },
    { code: 'HAG', abbr: 'Ag', short: 'Aggeusza', long: 'Księga Aggeusza' },
    { code: 'ZEC', abbr: 'Za', short: 'Zachariasza', long: 'Księga Zachariasza' },
    { code: 'MAL', abbr: 'Ml', short: 'Malachiasza', long: 'Księga Malachiasza' },

    { code: 'MAT', abbr: 'Mt', short: 'Mateusza', long: 'Ewangelia Mateusza' },
    { code: 'MRK', abbr: 'Mk', short: 'Marka', long: 'Ewangelia Marka' },
    { code: 'LUK', abbr: 'Łk', short: 'Łukasza', long: 'Ewangelia Łukasza' },
    { code: 'JHN', abbr: 'J', short: 'Jana', long: 'Ewangelia Jana' },
    { code: 'ACT', abbr: 'Dz', short: 'Dzieje', long: 'Dzieje Apostolskie' },
    { code: 'ROM', abbr: 'Rz', short: 'Rzymian', long: 'List do Rzymian' },
    { code: '1CO', abbr: '1Kor', short: 'I Koryntian', long: 'I List do Koryntian' },
    { code: '2CO', abbr: '2Kor', short: 'II Koryntian', long: 'II List do Koryntian' },
    { code: 'GAL', abbr: 'Ga', short: 'Galacjan', long: 'List do Galacjan' },
    { code: 'EPH', abbr: 'Ef', short: 'Efezjan', long: 'List do Efezjan' },
    { code: 'PHP', abbr: 'Flp', short: 'Filipian', long: 'List do Filipian' },
    { code: 'COL', abbr: 'Kol', short: 'Kolosan', long: 'List do Kolosan' },
    { code: '1TH', abbr: '1Tes', short: 'I Tesaloniczan', long: 'I List do Tesaloniczan' },
    { code: '2TH', abbr: '2Tes', short: 'II Tesaloniczan', long: 'II List do Tesaloniczan' },
    { code: '1TI', abbr: '1Tm', short: 'I Tymoteusza', long: 'I List do Tymoteusza' },
    { code: '2TI', abbr: '2Tm', short: 'II Tymoteusza', long: 'II List do Tymoteusza' },
    { code: 'TIT', abbr: 'Tt', short: 'Tytusa', long: 'List do Tytusa' },
    { code: 'PHM', abbr: 'Flm', short: 'Filemona', long: 'List do Filemona' },
    { code: 'HEB', abbr: 'Hbr', short: 'Hebrajczyków', long: 'List do Hebrajczyków' },
    { code: 'JAS', abbr: 'Jk', short: 'Jakuba', long: 'List Jakuba' },
    { code: '1PE', abbr: '1P', short: 'I Piotra', long: 'I List Piotra' },
    { code: '2PE', abbr: '2P', short: 'II Piotra', long: 'II List Piotra' },
    { code: '1JN', abbr: '1J', short: 'I Jana', long: 'I List Jana' },
    { code: '2JN', abbr: '2J', short: 'II Jana', long: 'II List Jana' },
    { code: '3JN', abbr: '3J', short: 'III Jana', long: 'III List Jana' },
    { code: 'JUD', abbr: 'Jud', short: 'Judy', long: 'List Judy' },
    { code: 'REV', abbr: 'Obj', short: 'Objawienie', long: 'Objawienie Jana' }
]

let index = fs.readFileSync(path.join(__dirname, './index.ont'), 'utf8').toString().split(/\n/).map(item => {
    let row = item.split('|')
    return {
        b: parseFloat(row[0]),
        c: parseFloat(row[1]),
        v: parseFloat(row[2])
    }
})

let data = fs.readFileSync(path.join(__dirname, './pubg-red.ont'), 'utf8').toString()

if (data.charCodeAt(0) === 0xFEFF) {
    data = data.slice(1)
}

let model = data.split(/\n/).slice(0, 31103)

console.log('[UBG]', index.length, model.length)

const convert = (index, data, meta, b, output) => {

    let out = []
    out.push('<?xml version="1.0" encoding="utf-8"?>')
    out.push('<usx version="3.0"  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="usx3.xsd">')
    out.push('  <book code="' + meta.code + '" style="id">' + meta.title + '</book>')
    out.push('  <para style="h">' + meta.h + '</para>')
    out.push('  <para style="toc1">' + meta.toc1 + '</para>')
    out.push('  <para style="toc2">' + meta.toc2 + '</para>')
    out.push('  <para style="toc3">' + meta.toc3 +'</para>')
    out.push('  <para style="mt1">' + meta.mt1 + '</para>')

    let indexChapter = 0

    index.forEach((item, index) => {
        const bc = meta.code + ' ' + item.c
        const bcv = bc + ':' + item.v

        if (item.b === b) {

            let text = model[index]
                .replace(/\r/g, '')
                .replace(/<RX [0-9]+.[0-9]+.[0-9]+>/g, '')
                .replace(/<RX [0-9]+.[0-9]+.[0-9]+-[0-9]+>/g, '')
                .replace(/<RF>([^>]*)<Rf>/g, '')
                .replace(/<HE>([^>]*)<He>/g, '')
                .replace(/<TS>([^>]*)<Ts>/g, '')
                .replace(/<FI>/g, '')
                .replace(/<Fi>/g, '')
                .replace(/<FR>/g, '')
                .replace(/<Fr>/g, '')
                .replace(/  /g, ' ')
                // .replace(/\–/g, '&ndash;')
                //.replace(/\„/g, '&bdquo;')
                //.replace(/\”/g, '&rdquo;')
                .replace(/<PS><i>/g, '<b>')
                .replace(/<\/i>[.]<Ps>/g, '.</b>')
                .replace(/<\/i>[:]<Ps>/g, ':</b>')
                .replace(/<\/i>, <i>/g, ', ')
                .replace(/<\/i>: <i>/g, ': ')

            if (item.v === 1 && item.c > 1) {
                out.push('  <chapter eid="' + meta.code + ' ' + (item.c - 1) +'" />')
            }

            if (item.v === 1) {
                indexChapter = bc
                out.push('  <chapter number="' + item.c + '" style="c" sid="' + bc +'" />')
            }

            out.push('  <para style="m">')
            out.push('    <verse number="' + item.v + '" style="v" sid="' + bcv + '" />' + text + '<verse eid="' + bcv + '" />')
            out.push('  </para>')

        }
    })

    out.push('  <chapter eid="' + indexChapter + '" />')

    out.push('</usx>')
    out.push('')
    fs.writeFileSync(output, out.join('\r\n'), { encoding: 'utf-8' })
}

books.forEach((book, i) => {
    console.log('[START] ' + book.long + ' ==> ' + book.code)
    let meta = {
        title: 'Uwspółcześniona Biblia Gdańska',
        code: book.code,
        h: book.short,
        toc1: book.long,
        toc2: book.short,
        toc3: book.abbr,
        mt1: book.long
    }
    const prefix = ((i <= 10) ? '0': '') + (i + 1)
    convert(index, data, meta, i + 1, '../dist/usx/' + prefix + book.code + '.usx')
})
