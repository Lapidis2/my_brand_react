// @ts-nocheck


import React from "react";
import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/guest/Home";
import Guest from "./Pages/Portal/Guest";
import BlogList from "./Pages/guest/Blogs";
import Login from "./Pages/auth/Login";
import LoginPage from "./Pages/auth/Login";
import AdminPanel from "./Pages/auth/Admin";
import BlogManagement from "./Pages/guest/blogdashboard";
function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LoginPage" element={<LoginPage/>} /> 
          <Route path="/adminPanel" element={<AdminPanel/>} /> 
          <Route path="/BlogManagement" element={<BlogManagement/>} />
        </Routes>
      

    </div>
  );
}

export default App;
