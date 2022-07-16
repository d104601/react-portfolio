import React, { useState } from 'react';
import {validateEmpty, validateEmail} from '../util/helper';

function Form() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [messageError, setMessageError] = useState("");

    const [sent, setSent] = useState("");

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if(inputType === "name") {
            setName(inputValue);
        }
        else if(inputType === "email") {
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

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (
            !validateEmail(email) ||
            !validateEmpty(message) ||
            !validateEmail(email)
        ) {
            return;
        }
        setName("");
        setEmail("");
        setMessage("");
        setSent("Thank you for sending message. I will reply ASAP.");
    };

    return (
        <div class="container min-vw-25">
            <h1 class="text-center my-3">Contact</h1>
            <form className="form">
                <div class="mb-3">
                    <label class="form-label">Name:</label>
                    <input
                        value={name}
                        name="name"
                        onChange={handleInputChange}
                        onBlur={checkName}
                        class="form-control"
                        type="text" 
                    />
                    {nameError}
                </div>

                <div class="mb-3">
                    <label class="form-label">Email:</label>
                    <input
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        onBlur={checkEmail}
                        class="form-control"
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
                        class="form-control"
                        rows="5"
                        type="text"
                    />
                    {messageError}
                </div>
            </form>
            <div class="text-center">
                <h5>{sent}</h5>
                <button type="submit" class="btn btn-primary btn-lg" onClick={handleFormSubmit}>Send</button>
            </div>
        </div>
    );
}

export default Form;