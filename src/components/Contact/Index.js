import React, { useState } from 'react';
//validate email
import { validateEmail } from '../../utils/helpers';


//create the ContactForm function
function ContactForm() {
    //add Hook
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    //deconstruct the formState object
    const { name, email, message } = formState;
    //useState hook to handle error state 
    const [errorMessage, setErrorMessage] = useState('');

    //function that will sync the state of the component
    function handleChange(e) {
        //validate email
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            //isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                //check to see if the string is empty
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required`)
                } else {
                    setErrorMessage('');
                }
            }

        }
        //spread operator  to retain the other key-value pairs in the object
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
    }

    // function to submit the form data
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    //Create DOM elements
    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    {/* add deconstructed element  */}
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    {/* add deconstructed element  */}
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>

                <div>
                    <label htmlFor="message">Message:</label>
                    {/* add deconstructed element  */}
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                    {/* include an error message that renders a truthy statement */}
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                </div>
                <button type='submit'>Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;