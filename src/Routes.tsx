import React, { useEffect, useState } from "react";
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes as CRoutes } from "react-router-dom";
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

function Routes() {
  debugger
  const [isLogin, setIsLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  const {State,Store} =useStore();
    const {getActionTypes}=useActionTypes();
     const actionTypes:any=getActionTypes();
     useEffect(()=>{
      debugger
           if(State.user.isAdmin){
            setIsLogin(true);
            setIsAdmin(true)
           }else if(State.user.id > 0){
            setIsLogin(true);
            setIsAdmin(false)
           }
           else
          setIsLogin(false);
     },[State.user.isAdmin|| State.user.id])

  return (
    <>
      <BrowserRouter>
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
                  <Route path="/Auctions" element={<Auctions />} />
                </>
                  : <>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/MyChits" element={<MyChits />} />
                    <Route path="/MyacDetails" element={<Acdetails />} />
                    <Route path="/Newlycommenced" element={<Newlycommenced />} />
                    <Route path="/UserProfile" element={<UserProfile />} />
                    <Route path="/ContactUs" element={<ContactUs />} />
                    <Route path="/participate" element={<Participate />} />
                  </>
                }</> :
                  <Route path="/" element={<LoginPage />} />}
              </CRoutes>
            </Col>
          </div>
          {isLogin && <Footer />}
        </>
      </BrowserRouter>
    </>
  );
}

export default Routes;
