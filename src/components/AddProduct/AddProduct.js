import "./addproduct.css";
import React, { useState } from "react";
import data from "../Cart/cartData"
import Validation from "./Validation";
import { Link } from "react-router-dom"
import axios from "axios";

function AddProduct() {
    const [values, setValues] = useState({
        food: "",
        product: "",
        quantity: null
    });
    const [food, setFood] = useState()
    const [errors, setErrors] = useState({})


    const handlechange = (event) => {
        !food && setFood(data[event.target.value])
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const ret = Validation(values)
        setErrors(ret[0]);
        const valid = ret[1]

        if (valid) {
            const url = "http://localhost:5000/quantity"
            axios.get(url, { params: { product: values.product } })
                .then((res) => {
                    if (res.data.length !== 0) {
                        fetch(url + `/${res.data[0].id}`, {
                            method: 'DELETE'
                        })
                        axios.post(url, values)
                            .then(res => {
                                console.log(res.data)
                            })
                            .catch((err) => {
                                console.log(err);
                            })


                    } else {
                        axios.post(url, values)
                            .then(res => {
                                console.log(res.data)
                            })
                            .catch((err) => {
                                console.log(err);
                            })
                    }
                })
        }
    };

    return (
        <div className='prodcontainer'>
            <div className='app_wrap'>
                <Link to="/" className='logo'>
                    GrainHub
                </Link>
                <div>
                    <h2 className='title'>Add Product</h2>
                </div>

                <form className='form_wrapper' onSubmit={handleFormSubmit}>
                    <div className='prodname'>
                        <p>Select type of product</p>
                        <input
                            id="grain"
                            className='prodinput'
                            type="radio"
                            name="food"
                            value="grain"
                            onChange={handlechange}
                        ></input>
                        <label htmlFor="grain" className='label'>Grain</label>

                        <input
                            id="vegetable"
                            className='prodinput'
                            type="radio"
                            name="food"
                            value="vegetable"
                            onChange={handlechange}
                        ></input>
                        <label htmlFor="vegetable" className='label'>Vegetable</label>

                        <input
                            id="fruit"
                            className='prodinput'
                            type="radio"
                            name="food"
                            value="fruit"
                            onChange={handlechange}
                        ></input>
                        <label htmlFor="fruit" className='label'>Fruit</label>
                        {errors.food && (
                            <p className='error'>{errors.food}</p>
                        )}
                    </div>

                    <div className='product'>
                        <select value={values.product} onChange={handlechange} name="product" id="product">
                            <option htmlfor="product">Select</option>
                            {food && food.map(item => <option key={item.id} value={item.name} htmlFor="product">{item.name}</option>)}
                        </select>
                        {errors.product && (
                            <p className='error'>{errors.product}</p>
                        )}
                    </div>

                    <div className='qty'>
                        <label className='label'> Quantity</label>
                        <input
                            className='input'
                            name="quantity"
                            type="number"
                            value={values.quantity}
                            onChange={handlechange}
                        ></input>
                        {errors.quantity && (
                            <p className='error'>{errors.quantity}</p>
                        )}
                    </div>

                    <div>
                        <button className='submit'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddProduct;