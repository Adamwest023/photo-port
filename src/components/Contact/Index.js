import React, { useState } from 'react';

//add Hook
const [formState, setFormState] = useState({ name: '', email: '', message: '' });

//create the ContactForm function
function ContactForm() {
    //deconstruct the formState object
    const { name, email, message } = formState;

    function handleChange(e) {
        //spread operator  to retain the other key-value pairs in the object
        setFormState({...formState, [e.target.name]: e.target.value})
    }

    //Create DOM elements
    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form">
                <div>
                    <label htmlFor="name">Name:</label>
                    {/* add deconstructed element  */}
                    <input type="text" defaultValue={name} onChange={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    {/* add deconstructed element  */}
                    <input type="email" name="email" defaultValue={email} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="message">Message:</label>
                    {/* add deconstructed element  */}
                    <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;