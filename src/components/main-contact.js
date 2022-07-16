import React, { useState } from 'react';

function form() {
    const handleInputChange = (e) => {

    };

    return (
        <div class="container">
            <h1 class="text-center">Contact</h1>
            <form className="form">
                <div class="mb-3">
                    <label class="form-label">Name:</label>
                    <input class="form-control" type="text"></input>
                </div>

                <div class="mb-3">
                    <label class="form-label">Email:</label>
                    <input class="form-control" type="email"></input>
                </div>

                <div class="mb-3">
                    <label class="form-label">Message:</label>
                    <textarea class="form-control" rows="5" type="text"></textarea>
                </div>
            </form>
            <div class="text-center">
                <button type="submit" class="btn btn-primary btn-lg">Send</button>
            </div>
        </div>
    );
}

export default form;