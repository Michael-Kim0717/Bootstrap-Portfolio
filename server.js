const bodyParser = require('body-parser'),
    dotenv = require('dotenv').config(),
    express = require('express'),
    nodemailer = require('nodemailer'),
    path = require('path');

const PORT = process.env.PORT || 8080;

const app = express();
app.use('/client', express.static(path.join(__dirname, 'client')))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));