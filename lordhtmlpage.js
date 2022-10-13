const express = require('express');
const path = require('path');

//app.use(reqFilter)
const app = express();
const publicpath = path.join(__dirname, 'public')
//its ejs line 
app.set('view engine', 'ejs');
//
app.get('', (_, res) => {
  res.sendFile(`${publicpath}/index.html`)
})
app.get('/contact', (_, res) => {
  res.sendFile(`${publicpath}/contact.html`)
})
app.get('/login', (_, res) => {
  res.render('login');
})

// its use ejs engine
app.get('/profile', (_, res) => {
  const user = {
    name: 'akash',
    email: 'akashsahu482000@gamil.com',
    contact: '8949'
  }
  res.render('profile', { user });
})
//
app.get('/about', (_, res) => {
  res.sendFile(`${publicpath}/about.html`)
})
app.get('/*', (_, res) => {
  res.sendFile(`${publicpath}/pagenotfound.html`)
})
//app.use(express.static(publicpath));
app.listen(1500);
