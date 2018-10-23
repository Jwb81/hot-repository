const express = require('express');

const port = 8080;
const app = express();
const path = require('path');

/**
 * @var tables          array to hold all of the tables
 * @var reservations    array to hold all of the reservations\
 * 
 */
let tables = [];
let reservations = [];

app.use(express.static('/public'));


app.get('/tables', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/tables.html'));
})

app.get('/api/tables', (req, res) => {
    console.log('hello');
})

app.get('/api/reservations', (req, res) => {

})

app.post('/api/tables', (req, res) => {

})

app.post('/api/reservations', (req, res) => {

})



app.listen(port, () => {
    console.log('Hot-restaurant is listening on port: ' + port);
})