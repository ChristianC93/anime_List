import React, { useState } from 'react';
import SignUpForm from './SignUpForm';

function LoginForm() {
    const [showSignup, setShowSignup] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const handleClick = (e) => {
        e.preventDefault()
        setShowSignup(true)
    };

    return (
        <div>
            {showSignup ? <SignUpForm /> :
                <form onSubmit={handleSubmit}>
                    <label>
                        Username:
                        <input
                            type="username" name="username" onChange={handleChange} value={formData.username}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input
                            type="password" name="password" onChange={handleChange} value={formData.password}
                            required
                        />
                    </label>
                    <br />
                    <input type="submit" value="Log In" />
                    <a href="/signup" onClick={handleClick}>Don't have an account?</a>
                </form>
            }
        </div>
    );
};

export default LoginForm;
