const fs = require('fs');

/* try {
  fs.writeFileSync('data/text.txt', 'Hello World Syncronous!');
} catch (err) {
  console.log(err)
} */

/* fs.writeFile('data/text.txt', 'Hello World Asyncronous', 'utf-8', err => {
  if (err) {
    throw err;
  }
}) */

/* const data = fs.readFileSync('data/text.txt', 'utf-8');
console.log(data) */

/* fs.readFile('data/text.txt', 'utf-8', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data)
}) */

/* fs.appendFile('data/contacs.json', `[{"nama":"adit"}]`, 'utf-8', err => {
  if (err) throw err;
  console.log('suseks')
}) */



// Readline
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question(`What's your name: `, nama => {
  rl.question(`Masukkan no hp : `, noHp => {
    const newContact = { nama, noHp }
    const fil = fs.readFileSync('data/contacs.json');
    const contact = JSON.parse(fil);
    contact.push(newContact)
    fs.writeFileSync('data/contacs.json', JSON.stringify(contact))
    rl.close();
  })
})
