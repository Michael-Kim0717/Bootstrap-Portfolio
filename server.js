const bodyParser = require('body-parser'),
    dotenv = require('dotenv').config(),
    express = require('express'),
    nodemailer = require('nodemailer'),
    path = require('path');

const PORT = process.env.PORT || 8080;

const app = express();
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send', (request, response) => {
    console.log(request.body);
    console.log(response)
})

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));