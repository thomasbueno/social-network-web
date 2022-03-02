import React from "react";
import { Routes, Route } from "react-router-dom";
import Form from "./Form";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/reset_password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
};

export default Login;
