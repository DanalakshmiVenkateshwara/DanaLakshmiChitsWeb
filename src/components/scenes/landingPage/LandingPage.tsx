import React from "react";
import Footer from "../../shared/footer";
import Header from "../../shared/header";
import Sidebar from "../../shared/sidebar";
import SideBarItem from "../../shared/sidebar/SideBarItem";

export default function LandingPage() {
  return (
    <>
      <Header />
      <Sidebar>
        <>
          <SideBarItem icon={<i className="fas fa-home"></i>} path="/" label="HOME" />
          <SideBarItem icon={<i className="fas fa-home"></i>} path="/Groups" label="Groups" />
          <SideBarItem icon={<i className="fas fa-home"></i>} path="/Users" label="Users" />
          <SideBarItem icon={<i className="fas fa-home"></i>} path="/Enrollments" label="Enrollments" />
          <SideBarItem icon={<i className="fas fa-home"></i>} path="/Payments" label="Payments" />
          <SideBarItem icon={<i className="fas fa-home"></i>} path="/Auctions" label="Auctions" />
          <SideBarItem icon={<i className="fas fa-home"></i>} path="/AplicationUsers" label="AplicationUsers" />
        </>
      </Sidebar>
      <Footer />
    </>
  );
}
