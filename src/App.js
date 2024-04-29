import React from "react";
import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/guest/Home";
import Guest from "./Pages/Portal/Guest";
import Admin from "./Pages/auth/Admin";
import BlogList from "./Pages/guest/Blogs";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route 
// @ts-ignore
        exact path="/" element={<Guest />}>
          <Route index element={<Home />} />
        </Route>
        <Route  
// @ts-ignore
        exact path='/admin' element={<Admin/>}>
        

        </Route>
      </Routes>
    </div>
  );
}

export default App;
