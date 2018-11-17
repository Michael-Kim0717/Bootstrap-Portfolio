import React, { Component } from 'react';
import Background from '../images/Cat.jpg'

class Contact extends Component {
    state = {
        name: '',
        email: '',
        message: ''
    }

    sendMail = () => {
        console.log(this.state.name);
        console.log(this.state.email);
        console.log(this.state.message);
        /*
        const nodemailer = require('nodemailer');
        
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.emailUser,
                pass: process.env.emailPass
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: '', // sender address
            to: 'MichaelKim0717@gmail.com', // list of receivers
            subject: 'Hello ✔', // Subject line
            text: 'Hello world?', // plain text body
            html: '<b>Hello world?</b>' // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        }); */
    }

    nameChange = (event) => {
        this.setState({name: event.target.value});
    }

    emailChange = (event) => {
        this.setState({email: event.target.value});
    }

    messageChange = (event) => {
        this.setState({message: event.target.value});
    }

    render() { 
        return (  
            <div className="row" onSubmit={this.sendMail}>
                <form className="col s6 offset-s3" style={styles.form}>
                    <div className="input-field col s12">
                        <input 
                            className="validate" 
                            id="full_name" 
                            style={styles.input}
                            type="text" 
                            
                            onChange={this.nameChange} 
                            value={this.state.name} 
                        />
                        <label htmlFor="full_name"> Full Name </label>
                    </div>
                    <div className="input-field col s12">
                        <input 
                            className="validate" 
                            id="email" 
                            style={styles.input}
                            type="email" 
                            
                            onChange={this.emailChange} 
                            value={this.state.email} />
                        <label htmlFor="email"> Email Address </label>
                    </div>
                    <div className="input-field col s12">
                        <textarea 
                            className="validate" 
                            id="message" 
                            style={styles.textarea}
                            type="text" 
                            
                            onChange={this.messageChange} 
                            value={this.state.message} />
                        <label htmlFor="message"> Message </label>
                    </div>
                    <button className="btn" style={styles.submitButton}> Send :) </button>
                </form>
            </div>
        );
    }
}

const styles = {
    form: {
        backgroundImage: `url(${Background})`,
        backgroundSize:'cover',
        border: '1px solid black',
        borderRadius: 5,
        padding: 30,
    },
    input: {
        border: '0px'
    },
    submitButton: {
        display: 'block',
        margin: '10px auto',
    },
    textarea: {
        height: 200,
        width: '100%',
        
        border: '0px',
    }
};
 
export default Contact;