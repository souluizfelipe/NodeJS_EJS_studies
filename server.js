const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (rec, res) => {
    res.render('pages/index');
});

app.get('/sobre', (rec, res) => {
    res.render('pages/about');
});

app.listen(9999);
console.log('working...');
