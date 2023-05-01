import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import ToolTip from "../tooltip";

interface Iprops {
  label: string;
  icon: JSX.Element;
  path: string;
}
export default function SideBarItem(props: Iprops) {
  return (
    <NavLink to={props.path} className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "") + " sideBarItem d-block px-2 py-3 border-bottom border-secondary text-decoration-none"}>
      <Row className="text-white mx-0 align-items-center">
      <ToolTip text={props.label}><div style={{ width: "40px" }}>{props.icon}</div></ToolTip> 
        <Col className="sidebar-label">{props.label}</Col>
      </Row>
    </NavLink>
  );
}
