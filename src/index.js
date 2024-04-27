import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ToastContainer />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();


