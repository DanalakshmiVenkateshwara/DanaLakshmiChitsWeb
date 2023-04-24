import React, { useState } from "react";
import { Row } from "react-bootstrap";
import NavSidebar from "./components/scenes/sidebar/NavSidebar";
import Footer from "./components/shared/footer";
import Header from "./components/shared/header";
import Sidebar from "./components/shared/sidebar";

export default function Config() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      {!isLogin && <Header />}
      <Row className="mx-0">
    
          <NavSidebar />
     
      </Row>
      {!isLogin && <Footer />}
    </>
  );
}
