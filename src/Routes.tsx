import React, { useEffect, useState } from "react";
import { BrowserRouter, createBrowserRouter, HashRouter, Navigate, Route, RouterProvider, Routes as CRoutes } from "react-router-dom";
import LandingPage from "./components/scenes/landingPage";
import Groups from "./components/scenes/groups";
import Users from "./components/scenes/users";
import Enrollments from "./components/scenes/enrollMents";
import Payments from "./components/scenes/payments";
import AplicationUsers from "./components/scenes/appUsers";
import Header from "./components/shared/header";
import { Col, Row } from "react-bootstrap";
import NavSidebar from "./components/scenes/sidebar/NavSidebar";
import Footer from "./components/shared/footer";
import AuctionsGrid from "./components/scenes/auctionDetails/auctionsgrid";
import Auctions from "./components/scenes/auctionDetails/auctions";
import MyChits from "./components/scenes/mychits/mychits";
import Acdetails from "./components/scenes/myacdetails/acdetails";
import Newlycommenced from "./components/scenes/newlycommenced/newlycommenced";
import UserProfile from "./components/scenes/userprofile/userprofile";
import ContactUs from "./components/scenes/contactus/contactus";
import LoginPage from "./components/scenes/login-form/login-form";
import Participate from "./components/scenes/auctionDetails/participate";
import { useActionTypes, useStore } from "./components/store";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./App";
import HomePage from "./components/scenes/homePage";

function Routes() {

  const [isLogin, setIsLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  const { State, Store } = useStore();
  const { getActionTypes } = useActionTypes();
  const actionTypes: any = getActionTypes();
  useEffect(() => {

    if (State.user.isAdmin) {
      setIsLogin(true);
      setIsAdmin(true);
    } else if (State.user.id > 0) {
      setIsLogin(true);
      setIsAdmin(false)
    }
    else
      setIsLogin(false);
  }, [State.user.isAdmin || State.user.id])
  function onAuthStateChange(user: any) {
    console.log(user)
    // user && Store.update(actionTypes.updateuser, { name: user.displayName, email: user.email, Id: 1, isAdmin: false, phone: user.phoneNumber, socketId: '' })
  }
  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, onAuthStateChange);
    return subscriber; // unsubscribe on unmount
  }, []);
  return (
    <>
      <HashRouter basename="/">
        <>
          {isLogin && <Header />}
          <div className="row mx-0 w-100" style={{ flexWrap: "nowrap" }}>
            {(isLogin) && <NavSidebar />}
            <Col className="">
              <CRoutes>
                {isLogin ? <>{isAdmin ? <>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/Groups" element={<Groups />} />
                  <Route path="/Users" element={<Users />} />
                  <Route path="/Enrollments" element={<Enrollments />} />
                  <Route path="/Payments" element={<Payments />} />
                  <Route path="/AplicationUsers" element={<AplicationUsers />} />
                </>
                  : <>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/MyChits" element={<MyChits />} />
                    <Route path="/MyacDetails" element={<Acdetails />} />
                    <Route path="/Newlycommenced" element={<Newlycommenced />} />
                    <Route path="/UserProfile" element={<UserProfile />} />
                    <Route path="/ContactUs" element={<ContactUs />} />
                  </>
                }</> :
                <><Route path="/" element={<HomePage />} />
                  <Route path="/Login" element={<LoginPage />} /></>
                }
                <>
                
                  <Route path="/participate" element={<Participate />} />
                  <Route path="/Auctions" element={<Auctions />} />
                </>
              </CRoutes>
            </Col>
          </div>
          {isLogin && <Footer />}
        </>
      </HashRouter>
    </>
  );
}

export default Routes;
