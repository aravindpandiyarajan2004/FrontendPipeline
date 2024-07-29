import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
 import "./App2.css";

function ViewOrder() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8040/order/all")
      .then((response) => {
        setColumns(Object.keys(response.data[0]));
        setRecords(response.data);
      })
      .catch((err) => {
        console.log(err);
       });
  }, []);



  let handleSubmit = (orderId) => {
    const conf = window.confirm("Do you want to delete");
    if (conf) {
      axios
        .delete("http://localhost:8040/order/" + orderId)
        .then((res) => {
          alert("record has deleted");
          navigate("/vieworder");
          window.location.reload();
        })
        // .catch((err) => console.log(err));
    }
  };

  return (
    <div id="body">
      <div className="container ">
        <h1 id="app2" role="heading" className="text-center text-bg-success " style={{ padding: '0.5rem', justifyContent: "space-around", marginTop: '70px' }} >
          TEXTILE SHOP MANAGEMENT SYSTEM
        </h1>
        <h1 id="app2" role="info" className="text-center text-bg-secondary ">
          Order's Informations
        </h1>

        <div className="text-end">
          {/* <button role="addbutton" > */}
            <Link to="/createorder" className="btn btn-primary">
              Add +
            </Link>
          {/* </button> */}

        </div>
        <br />
        
        <table role='table' className="table table-bordered  table-striped w-100 border bg-white shadow px-5 pb-5 rounded ">
          <thead>
            <tr>
              <th role="orderId">Order Id</th>
              <th role="material">Materials</th>
              <th role="price">Price</th>
              <th role="action">Action</th>
            </tr>
          </thead>

          <tbody>
            {records.map((d, i) => (
              <tr key={i}>
                <td >{d.orderId}</td>
                <td >{d.itemName}</td>
                <td >{d.price}</td>

                <td >
                  {/* <button role="updatebutton">  */}
                  <Link 
                    to={`/updateorder/${d.orderId}`}
                    className="btn btn-sm btn-success "
                  >
                    Update
                  </Link>
                  {/* </button> */}
                  <button role="deletebutton"
                    onClick={(e) => handleSubmit(d.orderId)}
                    className="btn btn-sm ms-1 btn-danger"
                  >
                    Delete
                  </button>


                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewOrder;
