import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App2.css";

function AddCustomer() {
  const [records, setRecords] = useState([]);
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState({
    customerId: "-1",
    customerName: "",
    mobileNumber: "",
    emailId: "",
    address: "",
    order:
    {
      orderId: "",
      itemName: "",
      price: ""
    }
  });

  // useEffect(() => {
  //   loadData();
  // }, []);

  // const loadData = async () => {
  //   await axios.get("http://localhost:8040/order/idlist")
  //     .then((res) => {
  //       console.log(res.data);
  //       setRecords(res.data);
  //       return res.data;
  //     })
  //     // .catch((err) => console.error(err));
  // };


  let handleChange = (e) => {
    if (e.target.name === "orderId") {
      console.log(e.target.value);
      setInputData({ ...inputData, order: { orderId: e.target.value } });
      axios.get("http://localhost:8040/order/" + e.target.value)
        .then((res) => {
          console.log(res.data);
          setInputData({ ...inputData, order: res.data });
          return res.data;
        })
        // .catch((err) => console.error(err));
    };
  }
  const [submitting, setSubmitting] = useState(false);
  const naviget = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    let result = validateValues(inputData);
    setSubmitting(true);

    if (result === true) {
      axios
        .post("http://localhost:8040/customer", inputData)
        .then((res) => {
          console.log(inputData);
          alert("Data added Successfully");
          naviget("/viewcustomer");
          console.log(res.data);
        })
        // .catch((err) => console.log(err));
    }
  };
  
  const validateValues = (inputData) => {
    const reg = /^[A-Za-z]+$/;
    if (inputData.customerName.length === 0) {
      alert("Please enter Customer's Name !!! ");
      return false;
    } else if (!reg.test(inputData.customerName)) {
      alert("Name should contain only alphabet characters.");
      return false;
    } else if (inputData.mobileNumber.length === 0) {
      alert("Please enter the Mobile number");
      return false;
    } else if (inputData.mobileNumber.length < 10 || inputData.mobileNumber.length > 10) {
      alert("Please enter the Valid Mobile number");
      return false;
    } else if (inputData.emailId.length === 0) {
      alert("Please enter the Valid email");
      return false;
    }
    else if (inputData.address.length === 0) {
      alert("Please Enter the Address");
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
          <h1 role="heading">ADD Customer DATA</h1>
          <div>
            <lable htmlFor="name" role="customername">Customer Name</lable>
            <input
              role="customerfield"
              type="text"
              name="customerName"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, customerName: e.target.value })
              }
            />
          </div>
          <div>
            <lable htmlFor="mobile" role="mobilenumber">Mobile Number :</lable>
            <input
            role="mobilefield" 
              type="text"
              name="mobileNumber"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, mobileNumber: e.target.value })
              }
            />
          </div>

          <div>
            <lable htmlFor="emailid" role="emailid">Email Id :</lable>
            <input
            role="emailfield"
              type="email"
              name="emailId"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, emailId: e.target.value })
              }
            />
          </div>

          <div>
            <lable htmlFor="address" role="address">Address :</lable>
            <input
            role="addressfield"
              type="text"
              name="address"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, address: e.target.value })
              }
            />
          </div>


          <div>
            <label htmlFor="orderid" role="orderid">Order ID</label>

            <select
            role="orderidfield"
              class="form-select"
              required="required"
              name="orderId"
              title="Select ID "
              onChange={handleChange}
            >
              <option name="orderId" selected="selected">
                Select One
              </option>
              {records.map((items) => (
                <option value={items} key={items}>
                  {items}
                </option>
              ))}
            </select>
          </div>

          <br />

          <button role="submitbutton" className="btn btn-info " name="add-submit">Submit</button>
        </form>


      </div>
    </div>
  );
}

export default AddCustomer;
