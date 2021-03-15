const path = require('path')
const fs = require('fs')

const books = [
    { code: 'Gen', abbr: 'Rdz', short: 'Rodzaju', long: 'Księga Rodzaju' },
    { code: 'Exod', abbr: 'Wj', short: 'Wyjścia', long: 'Wyjścia' },
    { code: 'Lev', abbr: 'Kpł', short: 'Kapłańska', long: 'Księga Kapłańska' },
    { code: 'Num', abbr: 'Lb', short: 'Liczb', long: 'Księga Liczb' },
    { code: 'Deut', abbr: 'Pwt', short: 'Powtórzonego', long: 'Księga Powtórzonego Prawa' },
    { code: 'Josh', abbr: 'Joz', short: 'Jozuego', long: 'Księga Jozuego' },
    { code: 'Judg', abbr: 'Sdz', short: 'Księga Sędziów', long: 'Księga Sędziów' },
    { code: 'Ruth', abbr: 'Rt', short: 'Rut', long: 'Księga Rut' },
    { code: '1Sam', abbr: '1Sm', short: 'I Samuela', long: 'I Księga Samuela' },
    { code: '2Sam', abbr: '2Sm', short: 'II Samuela', long: 'II Księga Samuela' },
    { code: '1Kgs', abbr: '1Krl', short: 'I Królewska', long: 'I Księga Królewska' },
    { code: '2Kgs', abbr: '2Krl', short: 'II Królewska', long: 'II Księga Królewska' },
    { code: '1Chr', abbr: '1Krn', short: 'I Kronik', long: 'I Księga Kronik' },
    { code: '2Chr', abbr: '2Krn', short: 'II Kronik', long: 'II Księga Kronik' },
    { code: 'Ezra', abbr: 'Ezd', short: 'Ezdrasza', long: 'Księga Ezdrasza' },
    { code: 'Neh', abbr: 'Neh', short: 'Nehemiasza', long: 'Księga Nehemiasza' },
    { code: 'Esth', abbr: 'Est', short: 'Estery', long: 'Księga Estery' },
    { code: 'Job', abbr: 'Hi', short: 'Hioba', long: 'Księga Hioba' },
    { code: 'Ps', abbr: 'Ps', short: 'Psalmów', long: 'Księga Psalmów' },
    { code: 'Prov', abbr: 'Prz', short: 'Przysłów', long: 'Księga Przysłów' },
    { code: 'Eccl', abbr: 'Kaz', short: 'Kaznodziei', long: 'Księga Kaznodziei' },
    { code: 'Song', abbr: 'Pnp', short: 'Pieśń nad Pieśniami', long: 'Pieśń nad Pieśniami' },
    { code: 'Isa', abbr: 'Iz', short: 'Izajasza', long: 'Księga Izajasza' },
    { code: 'Jer', abbr: 'Jr', short: 'Jeremiasza', long: 'Księga Jeremiasza' },
    { code: 'Lam', abbr: 'Lm', short: 'Lamentacje', long: 'Lamentacje' },
    { code: 'Ezek', abbr: 'Ez', short: 'Ezechiela', long: 'Księga Ezechiela' },
    { code: 'Dan', abbr: 'Dn', short: 'Daniela', long: 'Księga Daniela' },
    { code: 'Hos', abbr: 'Oz', short: 'Ozeasza', long: 'Księga Ozeasza' },
    { code: 'Joel', abbr: 'Jl', short: 'Joela', long: 'Księga Joela' },
    { code: 'Amos', abbr: 'Am', short: 'Amosa', long: 'Księga Amosa' },
    { code: 'Obad', abbr: 'Ab', short: 'Abdiasza', long: 'Księga Abdiasza' },
    { code: 'Jonah', abbr: 'Jon', short: 'Jonasza', long: 'Księga Jonasza' },
    { code: 'Mic', abbr: 'Mic', short: 'Micheasza', long: 'Księga Micheasza' },
    { code: 'Nah', abbr: 'Na', short: 'Nahuma', long: 'Księga Nahuma' },
    { code: 'Hab', abbr: 'Ha', short: 'Habakuka', long: 'Księga Habakuka' },
    { code: 'Zeph', abbr: 'So', short: 'Sofoniasza', long: 'Księga Sofoniasza' },
    { code: 'Hag', abbr: 'Ag', short: 'Aggeusza', long: 'Księga Aggeusza' },
    { code: 'Zech', abbr: 'Za', short: 'Zachariasza', long: 'Księga Zachariasza' },
    { code: 'Mal', abbr: 'Ml', short: 'Malachiasza', long: 'Księga Malachiasza' },

    { code: 'Matt', abbr: 'Mt', short: 'Mateusza', long: 'Ewangelia Mateusza' },
    { code: 'Mark', abbr: 'Mk', short: 'Marka', long: 'Ewangelia Marka' },
    { code: 'Luke', abbr: 'Łk', short: 'Łukasza', long: 'Ewangelia Łukasza' },
    { code: 'John', abbr: 'J', short: 'Jana', long: 'Ewangelia Jana' },
    { code: 'Acts', abbr: 'Dz', short: 'Dzieje', long: 'Dzieje Apostolskie' },
    { code: 'Rom', abbr: 'Rz', short: 'Rzymian', long: 'List do Rzymian' },
    { code: '1Cor', abbr: '1Kor', short: 'I Koryntian', long: 'I List do Koryntian' },
    { code: '2Cor', abbr: '2Kor', short: 'II Koryntian', long: 'II List do Koryntian' },
    { code: 'Gal', abbr: 'Ga', short: 'Galacjan', long: 'List do Galacjan' },
    { code: 'Eph', abbr: 'Ef', short: 'Efezjan', long: 'List do Efezjan' },
    { code: 'Phil', abbr: 'Flp', short: 'Filipian', long: 'List do Filipian' },
    { code: 'Col', abbr: 'Kol', short: 'Kolosan', long: 'List do Kolosan' },
    { code: '1Thess', abbr: '1Tes', short: 'I Tesaloniczan', long: 'I List do Tesaloniczan' },
    { code: '2Thess', abbr: '2Tes', short: 'II Tesaloniczan', long: 'II List do Tesaloniczan' },
    { code: '1Tim', abbr: '1Tm', short: 'I Tymoteusza', long: 'I List do Tymoteusza' },
    { code: '2Tim', abbr: '2Tm', short: 'II Tymoteusza', long: 'II List do Tymoteusza' },
    { code: 'Titus', abbr: 'Tt', short: 'Tytusa', long: 'List do Tytusa' },
    { code: 'Phlm', abbr: 'Flm', short: 'Filemona', long: 'List do Filemona' },
    { code: 'Heb', abbr: 'Hbr', short: 'Hebrajczyków', long: 'List do Hebrajczyków' },
    { code: 'Jas', abbr: 'Jk', short: 'Jakuba', long: 'List Jakuba' },
    { code: '1Pet', abbr: '1P', short: 'I Piotra', long: 'I List Piotra' },
    { code: '2Pet', abbr: '2P', short: 'II Piotra', long: 'II List Piotra' },
    { code: '1John', abbr: '1J', short: 'I Jana', long: 'I List Jana' },
    { code: '2John', abbr: '2J', short: 'II Jana', long: 'II List Jana' },
    { code: '3John', abbr: '3J', short: 'III Jana', long: 'III List Jana' },
    { code: 'Jude', abbr: 'Jud', short: 'Judy', long: 'List Judy' },
    { code: 'Rev', abbr: 'Obj', short: 'Objawienie', long: 'Objawienie Jana' }
]

let index = fs.readFileSync(path.join(__dirname, '../dist/index.ont'), 'utf8').toString().split(/\n/).map(item => {
    let row = item.split('|')
    return {
        b: parseFloat(row[0]),
        c: parseFloat(row[1]),
        v: parseFloat(row[2])
    }
})

let lines = fs.readFileSync(path.join(__dirname, '../dist/lines.ont'), 'utf8').toString().split(/\n/)
let data = fs.readFileSync(path.join(__dirname, '../dist/pubg.ont'), 'utf8').toString()

if (data.charCodeAt(0) === 0xFEFF) {
    data = data.slice(1)
}

data = data.split(/\n/)
let model = data.slice(0, 31103)
let meta = data.slice(31103)

console.log('[UBG]', index.length, lines.length, model.length, meta.length)

let spaces = [71, 511, 1787, 1850, 2954, 3574, 5206, 5335, 5652, 6049, 6665, 6965, 7214, 8689, 9116, 9512, 9832, 10702, 11696, 11905, 12803, 12859, 16305, 17503, 19256, 19556, 20638, 20804, 20844, 20965, 21963, 21993, 22417, 23009, 23175, 23925, 30878]

let out = []

// czytamy kolejne wiersze

index.forEach((item, i) => {
    let text = model[i]
        .replace(/\r/g, '')
        .replace(/<RX [0-9]+.[0-9]+.[0-9]+>/g, '')
        .replace(/<RX [0-9]+.[0-9]+.[0-9]+-[0-9]+>/g, '')
        .replace(/<RF>([^>]*)<Rf>/g, '')
        .replace(/<HE>([^>]*)<He>/g, '')
        .replace(/<TS>([^>]*)<Ts>/g, '')
        .replace(/<FI>/g, '<i>')
        .replace(/<Fi>/g, '</i>')
        .replace(/\–/g, '&ndash;')
        .replace(/\„/g, '&bdquo;')
        .replace(/\”/g, '&rdquo;')
        .replace(/<PS><i>/g, '<b>')
        .replace(/<\/i>[.]<Ps>/g, '.</b>')
        .replace(/<\/i>[:]<Ps>/g, ':</b>')
        .replace(/<\/i>, <i>/g, ', ')
        .replace(/<\/i>: <i>/g, ': ')

    /*
    let link = model[i]
        .replace(/<RX [0-9]+.[0-9]+.[0-9]+>/g, '')
        .replace(/<FI>[^>]*<Fi>/g, '<i>')
    */
    let ind = index[i]
    let number = parseFloat(ind.b) - 1;
    let row = books[number].code + ' ' + ind.c + ':' + ind.v + ' ' + text

    out.push(row)

    if (spaces.includes(out.length + 1)) {
        out.push('') //dodatkowa spacja
    }
})

out.push('') //dodatkowa końcowa spacja

fs.writeFileSync('./dist/PUBG2021_full_Bible.txt', out.join('\r\n'), {encoding: 'utf-8'})
