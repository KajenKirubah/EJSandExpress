const express = require('express');

const router = express.Router();

const userData = [];

router.get('/', (req,res,next) => {
    res.render('main', {
        pageTitle: 'Home Page',
        path: '/home'
    })
})

router.post('/add-user', (req,res,next) => {
    userData.push({name: req.body.name});
    console.log(userData);
    res.redirect('/');
})

exports.routes = router;
exports.data = userData;