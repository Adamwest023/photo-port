import React from 'react';

//create the ContactForm function
function ContactForm(){
    //Create DOM elements
    <section>
        <h1>Contact me</h1>
        <form id="contact-form">

            <div>
                <label htmlFor="name">Name:</label>
            </div>

            <div>
                <label htmlFor="email">Email address:</label>
                <input type="email" name="email" />
            </div>

            <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" rows="5" />
            </div>

        </form>
    </section>
}

export default ContactForm;