import React from "react";
import Sidebar from "../../shared/sidebar";
import SideBarItem from "../../shared/sidebar/SideBarItem";

function NavSidebar() {
  return (
    <Sidebar>
      <>
        <SideBarItem icon={<i className="fas fa-home"></i>} path="/" label="HOME" />
        <SideBarItem icon={<i className="fas fa-home"></i>} path="/Groups" label="Groups" />
        <SideBarItem icon={<i className="fas fa-home"></i>} path="/Users" label="Users" />
        <SideBarItem icon={<i className="fas fa-home"></i>} path="/Enrollments" label="Enrollments" />
        <SideBarItem icon={<i className="fas fa-home"></i>} path="/Payments" label="Payments" />
        <SideBarItem icon={<i className="fas fa-home"></i>} path="/Auctions" label="Auctions" />
        <SideBarItem icon={<i className="fas fa-home"></i>} path="/AplicationUsers" label="Aplication Users" />
      </>
    </Sidebar>
  );
}

export default NavSidebar;
