const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  /* res.json({
    nama: "Budi",
    email: 'budi@gmail.com',
    noHp: "128471938247"
  }) */
  res.sendFile('./index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
  // res.send('Ini about');
  res.sendFile('./about.html', { root: __dirname });
});

app.get('/contact', (req, res) => {
  res.sendFile('./contact.html', { root: __dirname });
  // res.send('Ini tes');
});

app.get('/product/:id/category/:idCat', (req, res) => {
  res.send(`Product ID : ${req.params.id} <br> Category ID : ${req.params.idCat}`);
});

app.get('/product/:id', (req, res) => {
  res.send(`Product ID : ${req.params.id} <br> Category ID : ${req.query.category}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});