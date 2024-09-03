import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer ,toast} from "react-toastify";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <App/>
    <ToastContainer />
  </div>
);
