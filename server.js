const express = require('express');
var bodyParser = require('body-parser')

const port = 8080;
const app = express();
const path = require('path');

/**
 * @var waitList        holds waitlist object
 * @var tables          array to hold all of the tables
 * @var tableLimit      max number of tables available in the restaurant
 * 
 */

let waitlist = [{
    customerName: "Jason",
    phoneNumber: "111-222-3333",
    customerEmail: "jason@gmail.com",
    customerID: "JB"
}];
let tables = [{
    customerName: "Lauren",
    phoneNumber: "222-444-6666",
    customerEmail: "nope@gmail.com",
    customerID: "Lolo"
}];
const tableLimit = 5;


app.use(express.static('/public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/tables', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/tables.html'));
})
app.get('/reserve', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/reservations.html'));
})

app.get('/api/tables', (req, res) => {
    res.json(tables);
})

app.get('/api/waitlist', (req, res) => {
    res.json(waitlist);
})

app.post('/api/tables', (req, res) => {
    let newTable = req.body;

    if (tables.length < tableLimit) {
        tables = tables.concat(newTable);
        res.send('Reservation accepted');
    }
    else {
        waitlist = waitlist.concat(newTable);
        res.send('Reservations full. Added to waiting list');
    }

})




app.listen(port, () => {
    console.log('Hot-restaurant is listening on port: ' + port);
})