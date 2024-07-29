import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./App2.css";

function ViewCustomer() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8040/customer/all")
  //     .then((response) => {
  //       setColumns(Object.keys(response.data[0]));
  //       setRecords(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);



  let handleSubmit = (customerId) => {
    const conf = window.confirm("Do you want to delete");
    if (conf) {
      axios
        .delete("http://localhost:8040/customer/" + customerId)
        .then((res) => {
          alert("record has deleted");
          navigate("/viewcustomer");
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div id="body">
      <div className="container ">
        <h1 id="app2"role="heading" className="text-center text-bg-success " style={{ padding: '0.5rem', justifyContent: "space-around", marginTop: '70px' }}  >
          TEXTILE SHOP MANAGEMENT SYSTEM
        </h1><br/>
        <h1 id="app2" role="info" className="text-center text-bg-secondary ">
          Customer's Informations
        </h1><br />

        <div className="text-end">
          <Link to="/createcustomer" className="btn btn-primary" >
            Add +
          </Link>
        </div>
        <br />
       
        <table role= "table" className="table table-bordered  table-striped w-100 border bg-white shadow px-5 pb-5 rounded" >
          <thead>
            <tr>
              {columns.map((c, i) => (
                <th key={i}>{c}</th>
              ))}
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {records.map((d, i) => (
              <tr key={i}>
                <td>{d.customerId}</td>
                <td>{d.customerName}</td>
                <td>{d.mobileNumber}</td>
                <td>{d.emailId}</td>
                <td>{d.address}</td>
                <td>{d.order.itemName}</td>

                <td>
                  <Link
                    to={`/updatecustomer/${d.customerId}`}
                    className="btn btn-sm btn-success "
                  >
                    Update
                  </Link>
                  <button
                    role="deletebutton"
                    onClick={(e) => handleSubmit(d.customerId)}
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

export default ViewCustomer;
