const yargs = require('yargs');
const { saveContact, showList, showDetailContact, deleteContact } = require('./contacts');

yargs.command({
  command: 'add',
  describe: 'Menambahkan kontak baru',
  builder: {
    nama: {
      describe: 'Nama lengkap',
      demandOption: true,
      type: 'string'
    },
    email: {
      describe: 'Email',
      demandOption: false,
      type: 'string'
    },
    noHp: {
      describe: 'nomor handphone',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    saveContact(argv.nama, argv.noHp, argv.email)
  }
}).demandCommand();

yargs.command({
  command: "list",
  describe: "Menampilkan nama dan no HP semua contact",
  handler() {
    showList();
  }
});

yargs.command({
  command: "detail",
  describe: "Menampilkan detail kontak berdasarkan nomor handphone",
  builder: {
    noHp: {
      describe: 'nomor handphone',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    showDetailContact(argv.noHp);
  }
});

yargs.command({
  command: 'del',
  describe: "Menghapus data kontak berdasarkan nomor handphone",
  builder: {
    noHp: {
      describe: "nomor handphone",
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    deleteContact(argv.noHp)
  }
})

yargs.parse();