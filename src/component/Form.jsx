import React, { useState } from 'react';
import '../style/formStyle.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  function validateForm() {
    let error = {};
    error.name = formData.name ? '' : 'This field is required.';
    error.email = formData.email ? '' : 'This field is required.';
    if (formData.email) {
      error.email = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(formData.email)
        ? ''
        : 'Email is not valid.';
    }
    error.message = formData.message ? '' : 'This field is required.';
    return error;
  }

  function handleSubmit(event) {
    event.preventDefault();
    let validationErrors = validateForm();
    if (Object.keys(validationErrors).some(key => validationErrors[key])) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // Save data to local storage
      localStorage.setItem('formData', JSON.stringify(formData));
      toast.success('Data saved to local storage!',{
        style: {
          backgroundColor: 'white',
          color: '#11999E',
          borderRadius: '5px',
          fontSize: '16px',
          padding: '10px',
          position:'relative',
          left:'50%'

        }});
    }
  }

  return (
    <div className="form">
     <ToastContainer />
      <h1>Write Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="inserRow">
          <label htmlFor="name"><p>Name</p></label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </div>
        <div className="inserRow">
          <label htmlFor="email"><p>Email</p></label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>
        <div className="inserRow">
          <label htmlFor="message"><p>Message</p></label>
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Your Message Here ..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <p style={{ color: 'red', fontFamily:'arial' }}>{errors.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
