import React, { Component } from 'react';
import Background from '../images/Cat.jpg'

class Contact extends Component {
    state = {  

    }

    render() { 
        return (  
            <div className="row" style={styles.container}>
                <form className="col s6">
                    <div className="input-field col s6">
                        <input placeholder="Placeholder" id="first_name" type="text" className="validate" />
                        <label for="first_name">First Name</label>
                    </div>
                </form>
            </div>
        );
    }
}

const styles = {
    container: {
        backgroundImage: `url(${Background})`,
        height: 'auto',
        maxWidth: '100%'
    }
};
 
export default Contact;