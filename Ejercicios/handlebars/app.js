const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, './handlebars/views')));
console.log(path.join(__dirname));

app.engine('hbs', exphbs.engine({
    defaultLayout: 'main',
    extname: '.hbs',
}));

app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    res.render('home');
});


app.listen(3000, () =>{
    console.log('listening on http://localhost:3000');
});