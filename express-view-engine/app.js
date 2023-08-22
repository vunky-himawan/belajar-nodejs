const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;

/* Menggunakan EJS */
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.get('/', (req, res) => {
  const mahasiswa = [
    {
      nama: "Adam",
      email: "adam@gmail.com"
    },
    {
      nama: "Edo",
      email: "edo@gmail.com"
    },
    {
      nama: "Dony",
      email: "dony@gmail.com"
    },
  ]
  res.render('index', {
    layout: 'layouts/main-layout',
    nama: 'Budi Gunawan',
    title: "Home Page",
    mahasiswa,
  });
});

app.get('/about', (req, res) => {
  // res.send('Ini about');
  res.render('about', { layout: 'layouts/main-layout', title: "About Page" });
});

app.get('/contact', (req, res) => {
  res.render('contact', { layout: 'layouts/main-layout', title: "Contact Page" });
  // res.render('contact');
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