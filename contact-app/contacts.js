const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');

if (!fs.existsSync('data')) {
  fs.mkdirSync('data');
};

if (!fs.existsSync('data/contacts.json')) {
  fs.writeFileSync('data/contacts.json', '[]', 'utf-8');
};

const loadContact = () => {
  const fileBuffer = fs.readFileSync('data/contacts.json');
  const newContact = JSON.parse(fileBuffer);
  return newContact;
}

const saveContact = (nama, noHp, email) => {
  const contact = { nama, noHp, email };
  const newContact = loadContact();

  const duplicate = newContact.find(c => c.nama === nama);
  if (duplicate) {
    console.log(chalk.red.inverse.bold('Kontak sudah terdaftar'))
    return false;
  }

  if (email) {
    if (!validator.isEmail(email)) {
      console.log(chalk.red.inverse.bold('Email tidak valid'));
      return false;
    }
  }

  if (!validator.isMobilePhone(noHp, 'id-ID')) {
    console.log(chalk.red.inverse.bold('Nomor handphone tidak valid'));
    return false;
  }

  newContact.push(contact);
  fs.writeFileSync('data/contacts.json', JSON.stringify(newContact));
  console.log(chalk.green.inverse.bold("Terima kasih sudah memasukkan data"));

}

const showList = () => {
  const contacts = loadContact();
  console.log(chalk.cyan.inverse.bold("Daftar Kontak : "));
  contacts.forEach((contact, i) => {
    console.log(`${i + 1}. ${contact.nama} - ${contact.noHp}`)
  })
}

const showDetailContact = (noHp) => {
  const contacts = loadContact();
  const contact = contacts.find(contact => contact.noHp === noHp);

  if (!contact) {
    console.log(chalk.red.inverse.bold(`Nomor ${noHp} tidak ditemukan`));
    return false;
  }

  console.log(chalk.green.inverse.bold(`\nNama : ${contact.nama}`));
  console.log(`Nomor HP : ${contact.noHp}`);
  if (contact.email) {
    console.log(`Email : ${contact.email}`);
  }
}

const deleteContact = (noHp) => {
  const contacts = loadContact();
  const newContacts = contacts.filter(contact => contact.noHp !== noHp);

  if (contacts.length === newContacts.length) {
    console.log(chalk.red.inverse.bold(`Nomor ${noHp} tidak ditemukan`));
    return false;
  }

  fs.writeFileSync('data/contacts.json', JSON.stringify(newContacts));
  console.log(chalk.green.inverse.bold(`Data dari nomor ${noHp} berhasil dihapus`))

}

module.exports = { saveContact, showList, showDetailContact, deleteContact }