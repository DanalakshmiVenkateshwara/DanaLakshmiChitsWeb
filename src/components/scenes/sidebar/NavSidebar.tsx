import React from "react";
import Sidebar from "../../shared/sidebar";
import SideBarItem from "../../shared/sidebar/SideBarItem";

function NavSidebar() {
  return (
    <Sidebar>
      <>
        <SideBarItem icon={<i className="fas fa-home"></i>} path="/" label="HOME" />
        <SideBarItem icon={<i className="fa-solid fa-sitemap"></i>} path="/Groups" label="Groups" />
        <SideBarItem icon={<i className="fa-solid fa-users"></i>} path="/Users" label="Users" />
        <SideBarItem icon={<i className="fa-solid fa-user-tag"></i>} path="/Enrollments" label="Enrollments" />
        <SideBarItem icon={<i className="fa-solid fa-wallet"></i>} path="/Payments" label="Payments" />
        <SideBarItem icon={<i className="fa-solid fa-briefcase"></i>} path="/Auctions" label="Auctions" />
        <SideBarItem icon={<i className="fa-solid fa-chalkboard-user"></i>} path="/AplicationUsers" label="Aplication Users" />
      </>
    </Sidebar>
  );
}

export default NavSidebar;
