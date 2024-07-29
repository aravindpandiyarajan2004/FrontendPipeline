import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useAuth } from './AuthContext';

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>



function Navbar() {
  const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();  // Clear authentication state
        navigate("/");  // Redirect to login page
    };
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" style={{ color: 'aquamarine' }}>TEXTILE SHOP MANAGEMENT SYSTEM</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 " style={{ marginLeft: "4rem" }} >
              {/* <li class="nav-item">
                <a class="nav-link active" aria-current="page" ><Link to="/" style={{ textDecoration: "none" }} >Home</Link></a>
              </li> */}
              {/* <li class="nav-item">
                <a class="nav-link" name="signup" ><Link to="/signup" style={{ textDecoration: "none" }}>Signup</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" ><Link to="/login" style={{ textDecoration: "none" }}>Login</Link></a>
              </li> */}
              <li class="nav-item">
                <a class="nav-link" name="view-customer" ><Link to="/viewcustomer" style={{ textDecoration: "none" }}>View Customer</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link"><Link to="/createcustomer" style={{ textDecoration: "none" }}>Add Customer</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" ><Link to="/vieworder" style={{ textDecoration: "none" }}>View Order</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" ><Link to="/createorder" style={{ textDecoration: "none" }}>Add Order</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" ><Link to="/logout" style={{ textDecoration: "none" }} onClick={handleLogout}>Logout</Link></a>
              </li>

            </ul>

          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
