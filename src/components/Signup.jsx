import React, { useState } from 'react';
import "../stylesheet/Signup.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom'; // Import for programmatic navigation

const Signup = () => {
  const [signup, setSignup] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignup(prevSignup => ({
      ...prevSignup,
      [name]: value
    }));
  };

  const moonShinesignup = async () => {
    try {
      const response = await axios.post('https://backend-3kng.onrender.com',signup);

      if (response.status===200) {
      console.log("Signup successFul")
      console.log(response.status)
        navigate('/'); // Redirect to homepage using programmatic navigation
      }
    } catch (err) {
      console.log("Error", err);
      // Handle errors appropriately (e.g., display error messages)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSignup(''); // Clear signup form after submission (optional)
    moonShinesignup();
  };

  return (
    <>
      <div className='Signup'>
        <section className='signupForm'>
          <form onSubmit={handleSubmit}>
            <h1>New Account</h1>
            <p>Already have an account?</p>
            <label>Enter name</label>
            <input type='text' placeholder='Enter first name....' required={true} onChange={handleChange} name='name' autoComplete="username" />
            <label>Enter e-mail</label>
            <input type='email' placeholder='Enter email....' required={true} onChange={handleChange} name='email' autoComplete='email' />
            <label>Enter password</label>
            <input type='password' placeholder='Enter password....' required={true} onChange={handleChange} name='password' autoComplete="current-password" />
            <input type='submit' value="Submit" className='submitBtn' />
          </form>
        </section>
      </div>
    </>
  );
};

export default Signup;
