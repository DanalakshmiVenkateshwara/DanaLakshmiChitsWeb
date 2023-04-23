import React from "react";
import CreateGroup from "./forms/create-group";
import { Card, Col, Row, Table } from "react-bootstrap";
import { CardBody, CardHeader } from "reactstrap";
import GroupsGrid from "./forms/groups-grid";
import Footer from "../../shared/footer";
import Header from "../../shared/header";

export default function Groups() {

    // const createGroup = (e:any) => { 
    //     debugger
    //     <CreateGroup/>
    // };  
  return (
    <>
    <Header />
    <GroupsGrid/>
    <Footer/>
    </>
    
  );
}