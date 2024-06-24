import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./components/User/User";
import Admin from "./components/Admin/Admin";
import HomePage from "./components/Body/HomePage";
import DashBoard from "./components/Admin/Content/DashBoard";
import ManageUser from "./components/Admin/Content/ManageUser";
import Login from "./components/Auth/Login";
import App from "./App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./components/Auth/SignUp";
const Layout = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="User" element={<User />} />
        </Route>
        <Route path="/Admin" element={<Admin />}>
          <Route index element={<DashBoard />} />
          <Route path="ManageUser" element={<ManageUser />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default Layout;
