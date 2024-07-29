import React from "react";
import {  Routes, Route } from "react-router-dom";
import { useAuth } from './AuthContext';
import Navbar from "./Navbar";

import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import ViewCustomer from "./ViewCustomer";
import ViewOrder from "./ViewOrder";
import AddCustomer from "./AddCustomer";
import AddOrder from "./AddOrder";
import EditCustomer from "./EditCustomer";
import EditOrder from "./EditOrder";



function AppRouter() {
  const { isAuthenticated } = useAuth();
  return (
    <>
     {isAuthenticated && <Navbar />}  {/* Render Navbar if authenticated */}

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/viewcustomer" element={<ViewCustomer />} />
        <Route path="/vieworder" element={<ViewOrder />} />
        <Route path="/createcustomer" element={<AddCustomer />} />
        <Route path="/createorder" element={<AddOrder />} />
        <Route path="/updatecustomer/:customerId" element={<EditCustomer />} />
        <Route path="/updateorder/:orderId" element={<EditOrder />} />
        <Route path="/logout" element={<Login />} />
      </Routes>
  </>
  );
}

export default AppRouter;