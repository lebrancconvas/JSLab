let wording = ['General','Gened','Geneta','Margenta','Bishop','Ragena']
let genmatch = /(gen)/
let result = wording
    .filter(x => genmatch.test(wording))
    .map(x => x.replace(genmatch,'[$1]'))

console.log(result)