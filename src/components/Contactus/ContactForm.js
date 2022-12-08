import React, { useState } from 'react';
import "./ContactForm.css"
import { Link, useNavigate } from "react-router-dom"
import Validation from './Validation'
import axios from "axios"


function ContactForm() {
  const navigate = useNavigate()
  const url = "http://localhost:5000/contact"
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handlechange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const ret = Validation(values)
    setErrors(ret[0]);
    const valid = ret[1]

    if (valid) {
      axios.post(url, values)
        .then(res => {
          console.log(res.data)
          alert("Your query has been sent, please wait for a response")
          navigate('/')
        })
        .catch((err) => {
          console.log(err);
        })
    }
  };


  return (
    <div>

      <body1>
        <div class="wrapper">
          <header>
            <Link to="/" className='logo'>GrainHub</Link>
            <center>Send us a Message</center>
          </header>
          <form onSubmit={handleSubmit}>
            <div class="dbl-field">
              <div class="field">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  value={values.name}
                  onChange={handlechange}>
                </input>
                {errors.name && (
                  <p className='error'>{errors.name}</p>
                )}
                <i className='fas fa-user'></i>
              </div>
              <div class="field">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  value={values.email}
                  onChange={handlechange}
                >
                </input>
                {errors.email && (
                  <p className='error'>{errors.email}</p>
                )}
                <i className='fas fa-envelope'></i>
              </div>
            </div>
            <div class="message">
              <textarea
                placeholder="Write your message"
                id="message"
                name="message"
                value={values.message}
                onChange={handlechange}
              >
              </textarea>
              {errors.message && (
                <p className='error'>{errors.message}</p>
              )}
              <i className="material-icons"></i>
            </div>
            <div class="button-area"><center>
              <button Style="width:100%" type="submit">Submit</button>
            </center>
            </div>
          </form>
        </div>
      </body1>


    </div>

  );
}

export default ContactForm