import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Routes from "./Routes";
import Config from "./Config";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Treble from "treble-gsm/lib/treble";
import appStore from "./components/shared/Store/Store";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC92ozHzJyFKV6ccEV-W7Eosy63D8NxJA8",
  authDomain: "dhanamobile-c258e.firebaseapp.com",
  databaseURL: "https://dhanamobile-c258e-default-rtdb.firebaseio.com",
  projectId: "dhanamobile-c258e",
  storageBucket: "dhanamobile-c258e.appspot.com",
  messagingSenderId: "317215012024",
  appId: "1:317215012024:web:73bc5f2f3222d05f95304d",
  measurementId: "G-1MT0R2XYRJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
 
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
