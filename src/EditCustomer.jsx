import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./App2.css";

function EditCustomer() {
  const { customerId } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8040/customer/" + customerId)
  //     .then((response) => setData(response.data))
  //     // .catch((err) => console.log(err));
  // }, []);

  let handleSubmit = (e) => {
    let result = validateValues(data);
    e.preventDefault();
    if (result === true) {
      axios.put("http://localhost:8040/customer", data).then((res) => {
        alert("Customers Updated Successfully");
        navigate("/viewcustomer");
      });
    }
  };
  const validateValues = (data) => {
    const reg = /^[A-Za-z]+$/;
    if (data.customerName.length === 0) {
      alert("Please enter Customer's Name !!! ");
      return false;
    } else if (!reg.test(data.customerName)) {
      alert("Name should contain only alphabet characters");
      return false;
    } else if (data.mobileNumber.length === 0) {
      alert("Please enter the Mobile number");
      return false;
    } else if (data.mobileNumber.length < 10 || data.mobileNumber.length > 10) {
      alert("Please enter the Valid Mobile number");
      return false;
    } else if (data.emailId.length === 0) {
      alert("Please enter the Valid email !!!");
      return false;
    }
    else if (data.address.length === 0) {
      alert("Please Enter the Address!!!");
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
            <h1 role="heading">UPDATE Customer'S DATA'S</h1>
            <div>
              <lable htmlFor="id" role="customerid">Customer ID :</lable>
              <input
                role="idField"
                type="text"
                disabled
                name="customerId"
                className="form-control"
                value={data.customerId}
              />
            </div>

            <div>
              <lable htmlFor="name" role="customername">Customer Name :</lable>
              <input
              role="namefield"
                type="text"
                name="customerName"
                className="form-control"
                value={data.customerName}
                onChange={(e) => setData({ ...data, customerName: e.target.value })}
              />
            </div>
            <div>
              <lable htmlFor="mobile" role="mobilenumber">Mobile Number :</lable>
              <input
                role="mobilefield"
                type="text"
                name="mobileNumber"
                className="form-control"
                value={data.mobileNumber}
                onChange={(e) => setData({ ...data, mobileNumber: e.target.value })}
              />
            </div>
            <div>
              <lable htmlFor="email" role="email">Email Id :</lable>
              <input
              role="emailfield"
                type="email"
                name="emailId"
                className="form-control"
                value={data.emailId}
                onChange={(e) => setData({ ...data, emailId: e.target.value })}
              />
            </div>
            <div>
              <lable htmlFor="address" role="address">Address :</lable>
              <input
              role="addressfield"
                type="text"
                name="address"
                className="form-control"
                value={data.address}
                onChange={(e) => setData({ ...data, address: e.target.value })}
              />
            </div>
            <br />

            <button className="btn btn-info " role="updatebutton" name="customer-update">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditCustomer;
