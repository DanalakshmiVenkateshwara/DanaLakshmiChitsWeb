import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Routes from "./Routes";
import Config from "./Config";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return <>
    {/* app routes/config should stay here */}
    {/* <Config/> */}
    <Routes />
    <ToastContainer />
  </>;
}

export default App;
