const cetakNama = (nama) => `Hallo nama saya ${nama}`;

const PI = 3.14;

const mahasiswa = {
  nama: 'Vunky Himawan',
  nim: '2241720005',
  umur: 19,
  sayHello() {
    return `Hallo saya ${this.nama} saya ${this.umur} nim saya ${this.nim}`
  }
}

class Hewan {
  constructor() {
    console.log('Object hewan telah dibuat')
  }
}

module.exports = {cetakNama, PI, mahasiswa, Hewan}