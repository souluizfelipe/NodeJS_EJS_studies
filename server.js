const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const subtitle = 'é muito legal aprender EJS'

const quality = [
    {
        title: 'A',
        message: 'mor',
    },
    {
        title: 'B',
        message: 'ola',
    },
    {
        title: 'C',
        message: 'arro',
    },
]

app.get('/', (rec, res) => {
    res.render('pages/index', {
        qualitys: quality,
        subtitle: subtitle,
    });
});

app.get('/sobre', (rec, res) => {
    res.render('pages/about');
});

app.listen(9999);
console.log('working...');
