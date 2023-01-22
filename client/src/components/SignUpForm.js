import React, { useState } from 'react';

function SignUpForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" name="email" onChange={handleChange} value={formData.email} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" onChange={handleChange} value={formData.password} />
      </label>
      <br />
      <label>
        Confirm Password:
        <input type="password" name="confirmPassword" onChange={handleChange} value={formData.confirmPassword} />
      </label>
      <br />
      <input type="submit" value="Sign Up" />
    </form>
  );
}

export default SignUpForm;