import "./login.css";
import React, { useState } from "react";
import Validation from "./Validation";
import { Link } from "react-router-dom"
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import axios from "axios"

function Login() {
    const url = "http://localhost:5000/users"
    const [icon, setIcon] = useState(eyeOff);
    const [type, setType] = useState("password");

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const [login, setLogin] = useState("default");

    const loginMsg = {
        "fail": "Entered incorrect password, try again",
        "success": "Successfully logged in!"
    }

    const handlechange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const ret = Validation(values)
        setErrors(ret[0]);
        const valid = ret[1]

        if (valid) {
            axios.get(url, { params: { email: values.email } })
                .then((res) => {
                    const val = res.data[0]
                    if (val.password !== values.password) setLogin("fail")
                    else setLogin("success")

                })
                .catch((err) => {
                    console.log(err);
                })
        }
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

                <form className='form_wrapper'  onSubmit={handleFormSubmit}>
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

                    <div className='error'>
                        <p>{login !== "default" && loginMsg[login]}</p>
                    </div>

                    <div>
                        <button className='submit'>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;