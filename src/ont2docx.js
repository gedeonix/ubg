const path = require('path')
const fs = require('fs')

const officegen = require('officegen')
officegen.setVerboseMode ( true )

const books = [
    { code: 'Ge', abbr: 'Rdz', short: 'Rodzaju', long: 'Księga Rodzaju' },
    { code: 'Ex', abbr: 'Wj', short: 'Wyjścia', long: 'Wyjścia' },
    { code: 'Le', abbr: 'Kpł', short: 'Kapłańska', long: 'Księga Kapłańska' },
    { code: 'Nu', abbr: 'Lb', short: 'Liczb', long: 'Księga Liczb' },
    { code: 'Dt', abbr: 'Pwt', short: 'Powtórzonego', long: 'Księga Powtórzonego Prawa' },
    { code: 'Jos', abbr: 'Joz', short: 'Jozuego', long: 'Księga Jozuego' },
    { code: 'Jug', abbr: 'Sdz', short: 'Księga Sędziów', long: 'Księga Sędziów' },
    { code: 'Ru', abbr: 'Rt', short: 'Rut', long: 'Księga Rut' },
    { code: '1Sa', abbr: '1Sm', short: 'I Samuela', long: 'I Księga Samuela' },
    { code: '2Sa', abbr: '2Sm', short: 'II Samuela', long: 'II Księga Samuela' },
    { code: '1Ki', abbr: '1Krl', short: 'I Królewska', long: 'I Księga Królewska' },
    { code: '2Ki', abbr: '2Krl', short: 'II Królewska', long: 'II Księga Królewska' },
    { code: '1Ch', abbr: '1Krn', short: 'I Kronik', long: 'I Księga Kronik' },
    { code: '2Ch', abbr: '2Krn', short: 'II Kronik', long: 'II Księga Kronik' },
    { code: 'Ezr', abbr: 'Ezd', short: 'Ezdrasza', long: 'Księga Ezdrasza' },
    { code: 'Ne', abbr: 'Neh', short: 'Nehemiasza', long: 'Księga Nehemiasza' },
    { code: 'Es', abbr: 'Est', short: 'Estery', long: 'Księga Estery' },
    { code: 'Job', abbr: 'Hi', short: 'Hioba', long: 'Księga Hioba' },
    { code: 'Ps', abbr: 'Ps', short: 'Psalmów', long: 'Księga Psalmów' },
    { code: 'Pr', abbr: 'Prz', short: 'Przysłów', long: 'Księga Przysłów' },
    { code: 'Ec', abbr: 'Kaz', short: 'Kaznodziei', long: 'Księga Kaznodziei' },
    { code: 'So', abbr: 'Pnp', short: 'Pieśń nad Pieśniami', long: 'Pieśń nad Pieśniami' },
    { code: 'Is', abbr: 'Iz', short: 'Izajasza', long: 'Księga Izajasza' },
    { code: 'Je', abbr: 'Jr', short: 'Jeremiasza', long: 'Księga Jeremiasza' },
    { code: 'La', abbr: 'Lm', short: 'Lamentacje', long: 'Lamentacje' },
    { code: 'Eze', abbr: 'Ez', short: 'Ezechiela', long: 'Księga Ezechiela' },
    { code: 'Da', abbr: 'Dn', short: 'Daniela', long: 'Księga Daniela' },
    { code: 'Ho', abbr: 'Oz', short: 'Ozeasza', long: 'Księga Ozeasza' },
    { code: 'Joe', abbr: 'Jl', short: 'Joela', long: 'Księga Joela' },
    { code: 'Am', abbr: 'Am', short: 'Amosa', long: 'Księga Amosa' },
    { code: 'Ob', abbr: 'Ab', short: 'Abdiasza', long: 'Księga Abdiasza' },
    { code: 'Jon', abbr: 'Jon', short: 'Jonasza', long: 'Księga Jonasza' },
    { code: 'Mic', abbr: 'Mic', short: 'Micheasza', long: 'Księga Micheasza' },
    { code: 'Na', abbr: 'Na', short: 'Nahuma', long: 'Księga Nahuma' },
    { code: 'Hab', abbr: 'Ha', short: 'Habakuka', long: 'Księga Habakuka' },
    { code: 'Zep', abbr: 'So', short: 'Sofoniasza', long: 'Księga Sofoniasza' },
    { code: 'Hag', abbr: 'Ag', short: 'Aggeusza', long: 'Księga Aggeusza' },
    { code: 'Zec', abbr: 'Za', short: 'Zachariasza', long: 'Księga Zachariasza' },
    { code: 'Mal', abbr: 'Ml', short: 'Malachiasza', long: 'Księga Malachiasza' },

    { code: 'Mt', abbr: 'Mt', short: 'Mateusza', long: 'Ewangelia Mateusza' },
    { code: 'Mk', abbr: 'Mk', short: 'Marka', long: 'Ewangelia Marka' },
    { code: 'Lk', abbr: 'Łk', short: 'Łukasza', long: 'Ewangelia Łukasza' },
    { code: 'Jn', abbr: 'J', short: 'Jana', long: 'Ewangelia Jana' },
    { code: 'Ac', abbr: 'Dz', short: 'Dzieje', long: 'Dzieje Apostolskie' },
    { code: 'Ro', abbr: 'Rz', short: 'Rzymian', long: 'List do Rzymian' },
    { code: '1Co', abbr: '1Kor', short: 'I Koryntian', long: 'I List do Koryntian' },
    { code: '2Co', abbr: '2Kor', short: 'II Koryntian', long: 'II List do Koryntian' },
    { code: 'Ga', abbr: 'Ga', short: 'Galacjan', long: 'List do Galacjan' },
    { code: 'Eph', abbr: 'Ef', short: 'Efezjan', long: 'List do Efezjan' },
    { code: 'Php', abbr: 'Flp', short: 'Filipian', long: 'List do Filipian' },
    { code: 'Col', abbr: 'Kol', short: 'Kolosan', long: 'List do Kolosan' },
    { code: '1Th', abbr: '1Tes', short: 'I Tesaloniczan', long: 'I List do Tesaloniczan' },
    { code: '2Th', abbr: '2Tes', short: 'II Tesaloniczan', long: 'II List do Tesaloniczan' },
    { code: '1Ti', abbr: '1Tm', short: 'I Tymoteusza', long: 'I List do Tymoteusza' },
    { code: '2Ti', abbr: '2Tm', short: 'II Tymoteusza', long: 'II List do Tymoteusza' },
    { code: 'Tt', abbr: 'Tt', short: 'Tytusa', long: 'List do Tytusa' },
    { code: 'Phm', abbr: 'Flm', short: 'Filemona', long: 'List do Filemona' },
    { code: 'Heb', abbr: 'Hbr', short: 'Hebrajczyków', long: 'List do Hebrajczyków' },
    { code: 'Jas', abbr: 'Jk', short: 'Jakuba', long: 'List Jakuba' },
    { code: '1Pe', abbr: '1P', short: 'I Piotra', long: 'I List Piotra' },
    { code: '2Pe', abbr: '2P', short: 'II Piotra', long: 'II List Piotra' },
    { code: '1Jn', abbr: '1J', short: 'I Jana', long: 'I List Jana' },
    { code: '2Jn', abbr: '2J', short: 'II Jana', long: 'II List Jana' },
    { code: '3Jn', abbr: '3J', short: 'III Jana', long: 'III List Jana' },
    { code: 'Jud', abbr: 'Jud', short: 'Judy', long: 'List Judy' },
    { code: 'Re', abbr: 'Obj', short: 'Objawienie', long: 'Objawienie Jana' }
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

let docx = officegen('docx')
docx.on('finalize', function(written) {
    console.log('Finish to create a Microsoft Word document.')
})
docx.on('error', function(err) {
    console.log(err)
})

{
    docx.createP().addText('')
    docx.createP({ align: 'center'}).addText('PISMO ŚWIĘTE', { font_size: 40 })
    docx.createP({ align: 'center'}).addText('STARY I NOWY TESTAMENT',  { font_size: 18 })
    docx.createP().addText('')
    docx.createP().addText('')
    docx.createP({ align: 'center'}).addText('Pilnie i wiernie przetłumaczone w 1632 roku')
    docx.createP({ align: 'center'}).addText('z języka greckiego i hebrajskiego na język polski,')
    docx.createP({ align: 'center'}).addText('z uwspółcześnioną gramatyką i uaktualnionym słownictwem')
    docx.createP().addText('')
    docx.createP().addText('')
    docx.createP({ align: 'center'}).addText('Fundacja Wrota Nadziei')
    docx.createP({ align: 'center'}).addText('Toruń 2020')
    docx.putPageBreak()
    docx.createP().addText('© 2020 Fundacja Wrota Nadziei')
    docx.createP().addText('Wydawca wyraża zgodę na kopiowanie i rozpowszechnianie')
    docx.createP().addText('całości lub części publikacji, jednak bez czerpania z tego')
    docx.createP().addText('korzyści finansowych i bez wprowadzania jakichkolwiek zmian.')
    docx.createP().addText('Powielanie do celów komercyjnych wymaga pisemnej zgody Fundacji.')
    docx.createP().addText('')
    docx.createP().addText('')
    docx.createP().addText('build: 2020-12-11')
    docx.putPageBreak()
}

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

    let ind = index[i]
    let number = parseFloat(ind.b) - 1;
    let book = books[number];
    let name = book.code + ' ' + ind.c + ':' + ind.v

    // Księga
    if (ind.c === 1 && ind.v === 1) {
        let pObj = docx.createP({ align: 'center'})
        pObj.setStyle('heading 1')
        pObj.addText(book.long, { font_size: 22, color: '4E6277' })
    }

    // Rozdział
    if (ind.v === 1) {
        let pObj = docx.createP()
        pObj.setStyle('Nagwek2')
        pObj.addText('Rozdział ' + ind.c, { font_size: 18, color: '4E6277' })
    }

    // Werset
    {
        let pObj = docx.createP()
        pObj.addText('[[@Bible:' + book.code + ' ' + ind.c + ':' + ind.v + ']] [[' + ind.c + ':' + ind.v + '|bible:' + name + ']]' + ' ');
        // pObj.addText('[[@Bible:' + book.code + ' ' + ind.c + ':' + ind.v + ']] [[' + ind.c + ':' + ind.v + ' >> ' + book.code + ' ' + ind.c + ':' + ind.v + ']]' + ' ');
        // pObj.addText('{{field-on:bible}} ')
        pObj.addText(text)
        //pObj.addText('{{field-off:bible}}')
    }
})

let out = fs.createWriteStream('./dist/Biblia UBG LOGOS.docx')
out.on('error', function(err) {
    console.log(err)
})

docx.generate(out)
