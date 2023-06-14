import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Routes from "./Routes";
import Config from "./Config";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Treble from "treble-gsm/lib/treble";
import appStore from "./components/shared/Store/Store";
function App() {
  return <>
    {/* app routes/config should stay here */}
    {/* <Config/> */}
    <Routes />
    {/* <Treble store={appStore}>
            {/* Components */}
        {/* </Treble> */} 
    <ToastContainer />
  </>;
}

export default App;
