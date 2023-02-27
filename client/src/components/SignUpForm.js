import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUpForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    password_confirmation: "",
    image_url: ""
  });
  const [errors, setErrors] = useState([]) 

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    }); 
  }

  //POST request signup frontend create user
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then((resp) => {
        if (resp.ok) {
            resp.json().then((user) => console.log(user))
        }
        else {
            resp.json().then((error) => setErrors(error.errors))
        }
    })
    navigate('/login')
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="username" name="username" onChange={handleChange} value={formData.username} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" onChange={handleChange} value={formData.password} />
        </label>
        <br />
        <label>
          Confirm Password:
          <input type="password" name="password_confirmation" onChange={handleChange} value={formData.passwordConfirmation} />
        </label>
        <br />
        <label>
          Image Url:
          <input type="text" name="image_url" onChange={handleChange} value={formData.image_url} />
        </label>
        <br />
        <input type="submit" value="Sign Up" />
      </form>
      {errors.length > 0 ? errors.map((error) => <p key={error}>{error}</p>) : []}
    </div>
  );
}

export default SignUpForm;