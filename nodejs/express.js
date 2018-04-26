const express = require('express');
const jokes = require('./jokes/create');

const app = express();

app.get('/', function(req, res){

    res.send('ok');
});

app.get('/adam/:name', (req, res) => {
    let name = req.params.name;
//    let dogName = req.query.dog;
    res.send('hello ' + name)
});

app.get('/joke/:id', (req, res) => {
    let id = req.params.id;
    res.json({
        joke: jokes(id)
    })

});

app.listen(8080);