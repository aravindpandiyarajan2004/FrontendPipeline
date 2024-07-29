import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App2.css";

function AddOrder() {
  const [inputData, setInputData] = useState({
    itemName: "",
    price: ""
  });



  const naviget = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    let result = validateValues(inputData);

    if (result === true) {
      axios
        .post("http://localhost:8040/order", inputData)
        .then((res) => {
          alert("Data added Successfully");
          naviget("/vieworder");
          console.log(res.data);
        })
        // .catch((err) => console.log(err));
    }
  };



  const validateValues = (inputData) => {
    const reg = /^[A-Za-z]+$/;
    if (inputData.itemName.length === 0) {
      alert("Please enter item Name !!! ");
      return false;
    } else if (!reg.test(inputData.itemName)) {
      alert("Name should contain only alphabet characters.");
      return false;
    } else if (inputData.price.length === 0) {
      alert("Please enter the price");
      return false;
    }
    else {
      return true;
    }
  };

  return (
    <div
      id="add2"
      className="d-flex w-100 vh-100 justify-content-center align-items-center "
    >
      <div className="w-50 border bg-light p-5">
        <form onSubmit={handleSubmit}>
          <h1 data-testid="heading">ADD Order DATA</h1>
          <div>
            <lable htmlFor="name" role="name">Item Name:</lable>
            <input
              role="item"
              type="text"
              name="itemName"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, itemName: e.target.value })
              }
            />
          </div>
          <div>
            <lable htmlFor="price" role="price">Price :</lable>
            <input
              role = "itemprice"
              type="text"
              name="price"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, price: e.target.value })
              }
            />
          </div>

          <br />

          <button role="submitbutton" className="btn btn-info" name="order-submit">Submit</button>
        </form>


      </div>
    </div>
  );
}

export default AddOrder;



