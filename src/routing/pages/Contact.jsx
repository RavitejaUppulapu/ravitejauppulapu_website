import React from 'react';
import '../style/Contact.css';

const Contact = () => {
    return (
        <section className="contact">
            <h2>Contact Me</h2>
            <p>If you would like to get in touch, here are my details:</p>
            <div className="details">
                <p><strong>Name:</strong> Raviteja Uppulapu</p>
                <p><strong>Email:</strong> ravitejauppulapu@gmail.com</p> {/* Replace with your email */}
                <p><strong>Phone:</strong> +91-6300454715</p> {/* Replace with your phone number */}
                <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/raviteja-uppulapu-149354246/" target="_blank" rel="noopener noreferrer">Raviteja Uppulapu</a></p> {/* Replace with your LinkedIn URL */}
                <p><strong>GitHub:</strong> <a href="https://github.com/RavitejaUppulapu" target="_blank" rel="noopener noreferrer">RavitejaUppulapu</a></p> {/* Replace with your GitHub URL */}
            </div>
        </section>
    );
};

export default Contact;
