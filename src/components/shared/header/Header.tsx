import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./_Header.scss";
import LoginPage from "../../scenes/login-form/login-form";
import { useNavigate } from "react-router-dom";
import useStore from "../../store/useStore";
import { useActionTypes } from "../../store";

export default function Header() {
  const { State, Store } = useStore();
  const { getActionTypes } = useActionTypes();
  const actionTypes: any = getActionTypes();
  const navigate = useNavigate();
  
  const logOutClickHandler = ()=>{
    Store.reset("user/reset");
    navigate("/")
  }
  return (
    <Navbar collapseOnSelect expand="md" variant="dark">
      <Container fluid>
        <Navbar.Brand >Dhana lakshmi</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* <Nav >
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav> */}
          <Nav className="ms-auto">
            <Nav.Link> 
            {/* <Button className="fa-solid fa-right-from-bracket me-2" onClick={() => logOutClickHandler()}>
                                    LogOut
                                </Button> */}
              <i  className="fa-solid fa-right-from-bracket" style={{color:"aliceblue",fontSize:"small"}} onClick={()=>logOutClickHandler()}>Logout</i>            
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
