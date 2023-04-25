import React from "react";
import { Col, Row } from "react-bootstrap";
import CardWidget from "../../shared/cardWidget";
import Footer from "../../shared/footer";
import Header from "../../shared/header";
import Sidebar from "../../shared/sidebar";
import SideBarItem from "../../shared/sidebar/SideBarItem";

export default function LandingPage() {

  const routes = [
    {
      title: "HOMEPAGE",
      icon: <i className='fas fa-home fa-4x my-4' ></i>
    },
    {
      title: "HOMEPAGE",
      icon: <i className='fas fa-home fa-4x my-4' ></i>
    },
    {
      title: "HOMEPAGE",
      icon: <i className='fas fa-home fa-4x my-4' ></i>
    },
    {
      title: "HOMEPAGE",
      icon: <i className='fas fa-home fa-4x my-4' ></i>
    },
    {
      title: "HOMEPAGE",
      icon: <i className='fas fa-home fa-4x my-4' ></i>
    },
    {
      title: "HOMEPAGE",
      icon: <i className='fas fa-home fa-4x my-4' ></i>
    },
  ]

  return (
    <Row>

      {routes.map((route: any) =>
        <Col sm='3'><CardWidget className="mb-4" title={route.title} icon={route.icon} />  </Col>
      )
      }

    </Row>
  );
}
