import "./signup.css";
import React, { useState } from "react";
import Validation from "./Validation";

import { Link } from "react-router-dom"

import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

function SignUp() {
    const [icon, setIcon] = useState(eyeOff);
    const [type, setType] = useState("password");

    const [values, setValues] = useState({
        fullname: "",
        email: "",
        password: "",
        confirm_password: "",
    });

    const [errors, setErrors] = useState({});

    const handlechange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        
        const form = document.getElementById('signupForm')
        const formData = new FormData(form);
        console.log(formData)
    };

    const handleToggle = () => {
        if (type === "password") {
            setIcon(eye);
            setType("text");
        } else {
            setIcon(eyeOff);
            setType("password");
        }
    };

    return (
        <div className='container'>
            <div className='app_wrap'>
                <Link to="/" className='logo'>
                    GrainHub
                </Link>
                <div>
                    <h2 className='title'> Create Account</h2>
                </div>

                <form id='signupForm' className='form_wrapper'>
                    <div className='name'>
                        <label className='label'> FullName</label>
                        <input
                            className='input'
                            type="text"
                            name="fullname"
                            value={values.fullname}
                            onChange={handlechange}
                        ></input>
                        {errors.fullname && (
                            <p className='error'>{errors.fullname}</p>
                        )}
                    </div>

                    <div className='email'>
                        <label className='label'> Email</label>
                        <input
                            className='input'
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handlechange}
                        ></input>
                        {errors.email && <p className={'error'}>{errors.email}</p>}
                    </div>

                    <div className='password'>
                        <label className='label'> Password</label>
                        <span onClick={handleToggle}>
                            <Icon icon={icon} size={20} />
                        </span>
                        <input
                            className='input'
                            type={type}
                            name="password"
                            value={values.password}
                            onChange={handlechange}
                        ></input>

                        {errors.password && (
                            <p className='error'>{errors.password}</p>
                        )}
                    </div>

                    <div className='password'>
                        <label className='label'> Confirm Password</label>
                        <input
                            className='input'
                            type="password"
                            name="confirm_password"
                            value={values.confirm_password}
                            onChange={handlechange}
                        ></input>
                        {errors.confirm_password && (
                            <p className={'error'}>{errors.confirm_password}</p>
                        )}
                    </div>

                    <div>
                        <button className='submit' onClick={handleFormSubmit}>
                            SIGN UP
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;