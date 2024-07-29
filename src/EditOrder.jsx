import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./App2.css";

function EditOrder() {
  const { orderId } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8040/order/" + orderId)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);

  let handleSubmit = (e) => {
    let result = validateValues(data);
    e.preventDefault();
    if (result === true) {
      axios.put("http://localhost:8040/order", data).then((res) => {
        alert("Order Updated Successfully");
        navigate("/vieworder");
      });
    }
  };
  const validateValues = (data) => {
    const reg = /^[A-Za-z]+$/;
    if (data.itemName.length === 0) {
      alert("Please enter item Name !!! ");
      return false;
    } else if (!reg.test(data.itemName)) {
      alert("Name should contain only alphabet characters.");
      return false;
    } else if (data.price.length === 0) {
      alert("Please enter the price");
      return false;
    }
    else {
      return true;
    }
  };
  return (
    <div>
      <div
        id="edit2"
        className="d-flex w-100 vh-100 justify-content-center align-items-center "
      >
        <div className="w-50 border bg-light p-5">
          <form onSubmit={handleSubmit}>
            <h1 role="heading">UPDATE ORDER'S DATA'S</h1>
            <div>
              <lable htmlFor="orderid" role="orderid">Order Id :</lable>
              <input
              role="idfield"
                type="text"
                disabled
                name="orderId"
                className="form-control"
                value={data.orderId}
                readOnly
              />
            </div>

            <div>
              <lable htmlFor="itemname" role="itemname">Item Name:</lable>
              <input
              role="itemfield"
                type="text"
                name="itemName"
                className="form-control"
                value={data.itemName}
                onChange={(e) => setData({ ...data, itemName: e.target.value })}
              />
            </div>
            <div>
              <lable htmlFor="price" role="price">Price:</lable>
              <input
              role="pricefield"
                type="text"
                name="price"
                className="form-control"
                value={data.price}
                onChange={(e) => setData({ ...data, price: e.target.value })}
              />
            </div>
            <br />

            <button className="btn btn-info" role="updatebutton" name="order-button">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditOrder;
