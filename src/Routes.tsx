import React, { useState } from "react";
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

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/Groups",
    element: <Groups />,
  },
  {
    path: "/Users",
    element: <Users />,
  },
  {
    path: "/Enrollments",
    element: <Enrollments />,
  },
  {
    path: "/Payments",
    element: <Payments />,
  },
  {
    path: "/AplicationUsers",
    element: <AplicationUsers />,
  },
]);

function Routes() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <BrowserRouter>
        <>
          {!isLogin && <Header />}
          <div className="d-flex">
            <NavSidebar />
            <Col className="m-3">
              <CRoutes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/Groups" element={<Groups />} />
                <Route path="/Users" element={<Users />} />
                <Route path="/Enrollments" element={<Enrollments />} />
                <Route path="/Payments" element={<Payments />} />
                <Route path="/AplicationUsers" element={<AplicationUsers />} />
              </CRoutes>
            </Col>
          </div>
          {!isLogin && <Footer />}
        </>
      </BrowserRouter>
    </>
  );
}

export default Routes;
