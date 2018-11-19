import React, { Component } from 'react';
import Background from '../images/Cat.jpg'

const axios = require('axios');

class Contact extends Component {
    state = {
        name: '',
        email: '',
        message: ''
    }

    sendMail = () => {
        axios.post('/send', {
            name: "Jeff"
            /* name: this.state.name,
            email: this.state.email,
            message: this.state.message */
        })
        .then(function(response){
            console.log(response);
        })
        .catch(function (error){
            console.log(error); 
        })
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
            <div className="row">
                {/* <form 
                    className="col s6 offset-s3" 
                    style={styles.form} 
                >
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
                    </div> */}
                    <button className="btn" style={styles.submitButton} onClick={this.sendMail}> Send :) </button>
                {/* </form> */}
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