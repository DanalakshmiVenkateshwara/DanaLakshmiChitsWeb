import React from "react";
import { Col, Row } from "react-bootstrap";
import CardWidget from "../../shared/cardWidget";
import Footer from "../../shared/footer";
import Header from "../../shared/header";
import Sidebar from "../../shared/sidebar";
import SideBarItem from "../../shared/sidebar/SideBarItem";
import uniqid from 'uniqid'
export default function LandingPage() {

  const routes = [
    {
      title: "Groups",
      icon: <i className='fas fa-home fa-4x my-4' ></i>,
      path: '/Groups'
    },
    {
      title: "Users",
      icon: <i className='fas fa-home fa-4x my-4' ></i>,
      path: '/Users'
    },
    {
      title: "Enrollments",
      icon: <i className='fas fa-home fa-4x my-4' ></i>,
      path: '/Enrollments'
    },
    {
      title: "Payments",
      icon: <i className='fas fa-home fa-4x my-4' ></i>,
      path: '/Payments'
    },
    {
      title: "Aplication Users",
      icon: <i className='fas fa-home fa-4x my-4' ></i>,
      path: '/AplicationUsers'
    },

  ]

  return (
    <Row>
      {routes.map((route: any) =>
        <Col sm='3' key={uniqid()}>
          <CardWidget className="mb-4" title={route.title} icon={route.icon} path={route.path} />
        </Col>
      )}
    </Row>
  );
}
