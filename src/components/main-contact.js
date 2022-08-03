import React, { useState, useRef } from 'react';
import {validateEmpty, validateEmail} from '../util/helper';
import emailjs from '@emailjs/browser';

function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [messageError, setMessageError] = useState("");

    const [sent, setSent] = useState("");

    const formParam = useRef();

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if(inputType === "from_name") {
            setName(inputValue);
        }
        else if(inputType === "from_email") {
            setEmail(inputValue);
        }
        else {
            setMessage(inputValue);
        }
    };

    const checkName = (e) => {
        e.preventDefault();
        if (!validateEmpty(name)) {
            setNameError((<label class="text-danger">Your name is required</label>));
        }
        else {
            setNameError("");
        }
    }

    const checkEmail = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setEmailError((<label class="text-danger">Email address is empty or invalid.</label>));
        }
        else {
            setEmailError("");
        }
    };

    const checkMessage = (e) => {
        e.preventDefault();
        if (!validateEmpty(message)) {
            setMessageError((<label class="text-danger">Message is required</label>));
        }
        else {
            setNameError("");
        }
    };

    const HandleFormSubmit = (e) => {
        e.preventDefault();
        if (
            !validateEmail(email) ||
            !validateEmpty(message) ||
            !validateEmail(email)
        ) {
            return;
        }
        setSent("Thank you for sending message. I will reply ASAP.");
        setName("");
        setEmail("");
        setMessage("");
    };



    return (
        <div class="container min-vw-25">
            <h1 className="text-center my-3">Contact</h1>
            <p className="text-center">You can also send email directly as <a href="mailto:d104601@hotmail.com">Click here</a></p>
            <form className="form" onSubmit={HandleFormSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input
                        value={name}
                        name="from_name"
                        onChange={handleInputChange}
                        onBlur={checkName}
                        className="form-control"
                        type="text" 
                    />
                    {nameError}
                </div>

                <div class="mb-3">
                    <label class="form-label">Email:</label>
                    <input
                        value={email}
                        name="from_email"
                        onChange={handleInputChange}
                        onBlur={checkEmail}
                        className="form-control"
                        type="email" 
                    />
                    {emailError}
                </div>

                <div class="mb-3">
                    <label class="form-label">Message:</label>
                    <textarea
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        onBlur={checkMessage}
                        className="form-control"
                        rows="5"
                        type="text"
                    />
                    {messageError}
                </div>
                <div className="text-center">
                    <h5>{sent}</h5>
                    <input type="submit" className="btn btn-primary btn-lg" value="Send"/>
                </div>
            </form>
            
        </div>
    );
}

export default Form;