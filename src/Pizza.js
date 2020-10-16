import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect, useHistory } from "react-router-dom";
import * as yup from "yup";
import schema from "./formSchema";
import "./App.css";

const initFormValues = {
  size: "",
  sauce: "",
  pepperoni: false,
  sausage: false,
  mushrooms: false,
  olives: false,
  glutenFree: false,
  special: "",
};

const initFormErrors = {
  size: "",
  sauce: "",
};

const toppingsList = ["pepperoni", "sausage", "mushrooms", "olives"];

const Pizza = () => {
  const [formValues, setFormValues] = useState(initFormValues);
  const [disabled, setDisabled] = useState(true);
  const [formErrors, setFormErrors] = useState(initFormErrors);
  let history = useHistory();

  const confirm = () => {
    // history.push("/confirmation");
  };

  const postNewOrder = (newOrder) => {
    axios.post("https://reqres.in/api/users", newOrder).then((result) => {
      setFormValues(initFormValues);
      alert("success!");
      console.log(result);
      confirm();
    });
  };

  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setFormValues({
      ...formValues,
      [name]: valueToUse,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newOrder = {
      size: formValues.size,
      sauce: formValues.sauce,
      toppings: toppingsList.filter(topping => {
          return formValues[topping];
      }),
      glutenFree: formValues.glutenFree,
      special: formValues.special,
    };
    postNewOrder(newOrder);
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div>
      <div className='pizza-header'>
        <h2>Build Your Own Pizza!</h2>
      </div>
      <form className='form container' onSubmit={onSubmit}>
        <div className='option-header'>
          <h3>Choice of Size</h3>
          <h4>Required</h4>
        </div>
        <label className='form-label'>
          Size
          <select onChange={onChange} value={formValues.size} name='size'>
            <option value=''>Select A Size</option>
            <option value='10inch'>Medium 10 Inch</option>
            <option value='12inch'>Large 12 Inch</option>
            <option value='14inch'>x-Large 14 Inch</option>
          </select>
        </label>
        <div className='option-header'>
          <h3>Choice of Sauce</h3>
          <h4>Required</h4>
        </div>
        <label>
          Red Pizza Sauce
          <input
            type='radio'
            name='sauce'
            value={"red"}
            checked={formValues.sauce === "red"}
            onChange={onChange}
          />
        </label>
        <label>
          Marinara
          <input
            type='radio'
            name='sauce'
            value={"marinara"}
            checked={formValues.sauce === "marinara"}
            onChange={onChange}
          />
        </label>
        <label>
          White Pie
          <input
            type='radio'
            name='sauce'
            value={"white"}
            checked={formValues.sauce === "white"}
            onChange={onChange}
          />
        </label>
        <div className='option-header'>
          <h3>Add Toppings</h3>
          <h4>Choose up to 4</h4>
        </div>
        <label>
          Pepperoni
          <input
            type='checkbox'
            name='pepperoni'
            checked={formValues.pepperoni}
            onChange={onChange}
          />
        </label>
        <label>
          Sausage
          <input
            type='checkbox'
            name='sausage'
            checked={formValues.sausage}
            onChange={onChange}
          />
        </label>
        <label>
          Mushrooms
          <input
            type='checkbox'
            name='mushrooms'
            checked={formValues.mushrooms}
            onChange={onChange}
          />
        </label>
        <label>
          Olives
          <input
            type='checkbox'
            name='olives'
            checked={formValues.olives}
            onChange={onChange}
          />
        </label>
        <div className='option-header'>
          <h3>Substitute</h3>
          <h4>Optional</h4>
        </div>
        <label>
          Gluten-Free
          <input
            type='checkbox'
            name='glutenFree'
            checked={formValues.glutenFree}
            onChange={onChange}
          />
        </label>
        <div className='option-header'>
          <h3>Special Instructions</h3>
        </div>
        <label htmlFor='special'></label>
        <textarea
          id='special'
          value={formValues.special}
          onChange={onChange}
          name='special'
          type='text'
          placeholder='Anything else you would like to add?'
          rows='4'
          cols='40'
        />

        <button className='submit' disabled={disabled}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Pizza;
