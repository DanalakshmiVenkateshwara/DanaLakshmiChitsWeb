import React, { useEffect } from "react";
import Sidebar from "../../shared/sidebar";
import SideBarItem from "../../shared/sidebar/SideBarItem";
import { useLocation } from "react-router-dom";
import useStore from "../../store/useStore";
import { useActionTypes } from "../../store/useActionTypes";
function NavSidebar() {
  
  const [isAdmin, setIsAdmin] = React.useState(false);
  const {State,Store} = useStore();
    const {getActionTypes}=useActionTypes();
     const actionTypes:any=getActionTypes();
     useEffect(()=>{
      
           if(State.user.isAdmin){
            setIsAdmin(true)
           }else if(State.userId > 0){
            setIsAdmin(false)
           }
     },[State.user.isAdmin])
const location=useLocation()
React.useEffect(() => {
  
console.log(location)
}, [location])

  return (
    <Sidebar  className={location.pathname=='/'?'d-none':''}>
      <>
      <SideBarItem icon={<i className="fas fa-home"></i>} path="/" label="HOME" />
        {isAdmin ? <>
          <SideBarItem icon={<i className="fa-solid fa-sitemap"></i>} path="/Groups" label="Groups" />
          <SideBarItem icon={<i className="fa-solid fa-users"></i>} path="/Users" label="Users" />
          <SideBarItem icon={<i className="fa-solid fa-user-tag"></i>} path="/Enrollments" label="Enrollments" />
          <SideBarItem icon={<i className="fa-solid fa-wallet"></i>} path="/Payments" label="Payments" />
          <SideBarItem icon={<i className="fa-solid fa-wallet"></i>} path="/CreateAuctions" label="CreateAuctions" />
          <SideBarItem icon={<i className="fa-solid fa-briefcase"></i>} path="/Auctions" label="Auctions" />
          <SideBarItem icon={<i className="fa-solid fa-chalkboard-user"></i>} path="/AplicationUsers" label="Aplication Users" />
        </> :
          <>
            <SideBarItem icon={<i className="fa-solid fa-chalkboard-user"></i>} path="/MyChits" label="MyChits" />
            <SideBarItem icon={<i className="fa-solid fa-chalkboard-user"></i>} path="/MyacDetails" label="Acdetails" />
            <SideBarItem icon={<i className="fa-solid fa-chalkboard-user"></i>} path="/Newlycommenced" label="Newlycommenced" />
            <SideBarItem icon={<i className="fa-solid fa-chalkboard-user"></i>} path="/Biddings" label="Biddings" />
            <SideBarItem icon={<i className="fa-solid fa-chalkboard-user"></i>} path="/UserProfile" label="UserProfile" />
            <SideBarItem icon={<i className="fa-solid fa-chalkboard-user"></i>} path="/ContactUs" label="ContactUs" />
            {/* <SideBarItem icon={<i className="fa-solid fa-chalkboard-user"></i>} path="/LoginPage" label="LoginPage" /> */}

          </>}
      </>
    </Sidebar>
  );
}

export default NavSidebar;
