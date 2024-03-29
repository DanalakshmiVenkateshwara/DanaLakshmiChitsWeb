
import React from "react";
import { Col, Row } from "react-bootstrap";
import CardWidget from "../../shared/cardWidget";
import Footer from "../../shared/footer";
import Header from "../../shared/header";
import Sidebar from "../../shared/sidebar";
import SideBarItem from "../../shared/sidebar/SideBarItem";
import uniqid from 'uniqid'
import { useActionTypes, useStore } from "../../store";
export default function LandingPage() {
  const { State, Store } = useStore();
  const { getActionTypes } = useActionTypes();
  const actionTypes: any = getActionTypes();
  
  const routes = [
    { 
      title: "Groups",
      icon: <i className='fa-solid fa-sitemap fa-4x my-4' ></i>,
      path: '/Groups'
    },
    {
      title: "Users",
      icon: <i className='fa-solid fa-users fa-4x my-4' ></i>,
      path: '/Users'
    },
    {
      title: "Enrollments",
      icon: <i className='fa-solid fa-user-tag fa-4x my-4' ></i>,
      path: '/Enrollments'
    },
    {
      title: "Payments",
      icon: <i className='fa-solid fa-wallet fa-4x my-4' ></i>,
      path: '/Payments'
    },
    {
      title: "CreateAuctions",
      icon: <i className='fa-solid fa-wallet fa-4x my-4' ></i>,
      path: '/CreateAuctions'
    },
    {
      title: "Auctions",
      icon: <i className='fa-solid fa-briefcase fa-4x my-4' ></i>,
      path: '/Auctions'
    },
    {
      title: "Aplication Users",
      icon: <i className='fa-solid fa-chalkboard-user fa-4x my-4' ></i>,
      path: '/AplicationUsers'
    }]
    const userRoutes = [
    {
      title: "MyChits",
      icon: <i className='fa-solid fa-chalkboard-user fa-4x my-4' ></i>,
      path: '/MyChits'
    },
    {
      title: "MyAcDetails",
      icon: <i className='fa-solid fa-chalkboard-user fa-4x my-4' ></i>,
      path: '/MyacDetails'
    },
    {
      title: "Newlycommenced",
      icon: <i className='fa-solid fa-chalkboard-user fa-4x my-4' ></i>,
      path: '/Newlycommenced'
    },
    {
      title: "UserProfile",
      icon: <i className='fa-solid fa-chalkboard-user fa-4x my-4' ></i>,
      path: '/UserProfile'
    },
    {
      title: "ContactUs",
      icon: <i className='fa-solid fa-chalkboard-user fa-4x my-4' ></i>,
      path: '/ContactUs'
    },
    {
      title: "Biddings",
      icon: <i className='fa-solid fa-chalkboard-user fa-4x my-4' ></i>,
      path: '/Biddings'
    }
    // {
    //   title: "LoginPage",
    //   icon: <i className='fa-solid fa-chalkboard-user fa-4x my-4' ></i>,
    //   path: '/LoginPage'
    // },

  ]

  return (
    <>{State.user.isAdmin && <Row>
      {routes.map((route: any) =>
        <Col sm='3' key={uniqid()}>
          <CardWidget className="mb-4" title={route.title} icon={route.icon} path={route.path} />
        </Col>
      )}
    </Row>}<>
    {State.user.id >0 && <Row>
      {userRoutes.map((route: any) =>
        <Col sm='3' key={uniqid()}>
          <CardWidget className="mb-4" title={route.title} icon={route.icon} path={route.path} />
        </Col>
      )}
    </Row>}
    </></>
    
  );
}