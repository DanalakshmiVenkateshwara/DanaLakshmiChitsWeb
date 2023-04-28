import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

interface Iprops {
  label: string;
  icon: JSX.Element;
  path: string;
  isClose?: boolean;
}
export default function SideBarItem(props: Iprops) {
  return (
    <NavLink to={props.path} className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "") + " sideBarItem d-block px-2 py-3 border-bottom border-secondary text-decoration-none"}>
      <Row className="text-white mx-0 align-items-center">
        <div style={{ width: "40px" }}>{props.icon}</div>
        {!props.isClose && <Col >{props.label}</Col>}
      </Row>
    </NavLink>
  );
}
