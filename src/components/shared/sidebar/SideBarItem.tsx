import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

interface Iprops {
  label: string;
  icon: JSX.Element;
  path: string;
}
export default function SideBarItem(props: Iprops) {
  return (
    <li className="sideBarItem px-2 py-3 border-bottom border-secondary">
      <Row className="text-white mx-0 align-items-center">
        <div style={{ width: "40px" }}>
          {props.icon}
        </div>
        <Col>
          <Link className="text-white text-decoration-none" to={props.path}>{props.label}</Link>
        </Col>
      </Row>
    </li>
  );
}
