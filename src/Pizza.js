import React, { useState, useEffect } from "react";
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

const Pizza = () => {
  const [formValues, setFormValues] = useState(initFormValues);
  const [disabled, setDisabled] = useState(true)

  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
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
    //   toppings: ["pepperoni", "sausage", "mushrooms", "olives"].filter(
    //     (topping) => {
    //       formValues[topping];
    //     }
    //   ),
      glutenFree: formValues.glutenFree,
      special: formValues.special,
    };
    console.log(newOrder)
  };



  return (
    <div>
      <div className='pizza-header'>
        <h2>Build Your Own Pizza!</h2>
      </div>
      <form className='form container' onSubmit={onSubmit}>
        <label className='form-label'>
          Size
          <select onChange={onChange} value={formValues.size} name='size'>
            <option value=''>Select A Size</option>
            <option value='10inch'>Medium 10 Inch</option>
            <option value='12inch'>Large 12 Inch</option>
            <option value='14inch'>x-Large 14 Inch</option>
          </select>
        </label>
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
        <label>
          Gluten-Free
          <input
            type='checkbox'
            name='glutenFree'
            checked={formValues.glutenFree}
            onChange={onChange}
          />
        </label>
        <label>
          <input
            value={formValues.special}
            onChange={onChange}
            name='special'
            type='text'
            placeholder='Anything else you would like to add?'
          />
        </label>
        <button className='submit' disabled={disabled}>Submit</button>
      </form>
    </div>
  );
};

export default Pizza;
