const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const mainData = require('./routes/main'); 
const users = require('./routes/users');

const app = express();
app.set('view engine', 'ejs'); 
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')));

app.use(mainData.routes);
app.use(users);

app.use((req, res, next) => {
    res.status(404).render('404', {
        pageTitle: '404'
    })
})



app.listen(3000);