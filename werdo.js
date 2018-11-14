let list = ['Coconut','Apricot','Aquamarine','Azure','Carmine','Cerise','Cerulean','Champagne',
            'Chartreuse Green','Chocolate','Cobalt blue','Coffee']

let result = list
    .filter(x => /(co)/gi.test(x))
    .map(x => x.replace(/(co)/gi,'[$1]'))

console.log(`list: ${list.join(', ')}`)
console.log(`result: ${result.join(', ')}`)