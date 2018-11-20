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

app.post('/api/send', (request, response) => {
    console.log(request.body);

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: 'MichaelKim0717@gmail.com',
        to: 'MichaelKim0717@gmail.com',
        subject: 'Portfolio Message from ' + request.body.name + ' <' + request.body.email + '>',
        text: request.body.message,
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
})

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));