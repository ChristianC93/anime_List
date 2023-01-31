import React, { useState } from 'react';
import SignUpForm from './SignUpForm';

function LoginForm({ userLogin }) {
    const [showSignup, setShowSignup] = useState(false);
    const [errors, setErrors] = useState([])
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
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then((resp) => {
            if (resp.ok) {
                resp.json().then((user) => userLogin(user))
            } else {
                resp.json().then((error) => setErrors(error.errors))
            }
        })
    };

    const handleClick = (e) => {
       e.preventDefault()
        setShowSignup(!showSignup)
    };

    return (
        <div className='form'>
            <h2>AniList!</h2>
            {showSignup ? <> <SignUpForm /> <a href="/" onClick={handleClick}>Already have an account?</a> </> :
                <form className='form' onSubmit={handleSubmit}>
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
                    <input className='submit' type="submit" value="Log In" />
                    <p>Don't have an account?</p> <a href="/signup" onClick={handleClick}>Sign Up</a>
                </form>
            }
            {errors.length > 0 ? errors.map((err) => <p key={err}>{err}</p>) : ""}
        </div>
    );
};

export default LoginForm;
