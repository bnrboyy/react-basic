import React from "react";
import { useState, useEffect } from "react";
import "./FormComponent.css";
import { v4 as uuidv4 } from "uuid";

function FormComponent(props) {
  console.log("Render form Component");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [formValid, setFormValid] = useState(false);

  const inputTitle = (e) => {
    setTitle(e.target.value);
  };

  const inputPrice = (e) => {
    setPrice(e.target.value);
  };

  const saveItem = (e) => {
    e.preventDefault(); // ดัก event
    console.log("The item has been saved");
    const itemData = {
      id: uuidv4(),
      title: title,
      amount: Number(price),
    };
    props.onAddItem(itemData); // ส่งข้อมูลจาก component ลูกไป component แม่(App.js)
    setTitle("");
    setPrice(0);
  };

  useEffect(() => {
    const checkData = title.trim().length > 0 && price !== 0 && price.trim().length > 0;
    setFormValid(checkData);
  }, [price, title]);

  return (
    <>
      <form onSubmit={saveItem} className="form-control">
        <label htmlFor="">List</label>
        <input type="text" onChange={inputTitle} value={title} />
        <label htmlFor="">Price</label>
        <input type="number" onChange={inputPrice} value={price} />
        <button type="submit" disabled={!formValid}>
          SAVE
        </button>
      </form>
    </>
  );
}

export default FormComponent;
