import "./login.css";
import React, { useState } from "react";
import Validation from "./Validation";

import { Link } from "react-router-dom"

import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

function Login() {
    const [icon, setIcon] = useState(eyeOff);
    const [type, setType] = useState("password");

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const handlechange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));

        console.log(Validation(values));

        event.submit();
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
                    <h2 className='title'> Login</h2>
                </div>

                <form className='form_wrapper'>
                    <div className='email'>
                        <label className='label'> Email</label>
                        <input
                            className='loginput'
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
                            className='loginput'
                            type={type}
                            name="password"
                            value={values.password}
                            onChange={handlechange}
                        ></input>

                        {errors.password && (
                            <p className='error'>{errors.password}</p>
                        )}
                    </div>

                    <div>
                        <button className='submit' onClick={handleFormSubmit}>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;