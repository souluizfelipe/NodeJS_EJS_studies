const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (rec, res) => {
    res.render('index');
});

app.listen(9999);
console.log('working');
