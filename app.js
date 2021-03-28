const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./config/database.config');

const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json());

mongoose.connect(db.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to database.");
}).catch(err => {
    console.log(`Couldn't connect to database due to error ${err}`);
})

require('./router/user.routes.js')(app);
app.listen(3000);