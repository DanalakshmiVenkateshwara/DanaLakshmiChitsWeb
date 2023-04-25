import React, { useEffect, useState } from "react";
import CreateGroup from "./forms/create-group";
import { Button, Col, Row, Table } from "react-bootstrap";
import { CardBody, CardHeader } from "reactstrap";
import GroupsGrid from "./forms/groups-grid";
import Footer from "../../shared/footer";
import Header from "../../shared/header";
import Card from "../../shared/card/Card";
import getApiData from "../../app-services/get-api";

export default function Groups() {
  // const options: any = { method: 'GET', mode: 'no-cors' }
  // const a = fetch('https://localhost:44303/api/User/GetAllChitPlans', options)
  //   .then((response: any) => response.json())
  //   .then((data: any) => data);
  // console.log(a);


  return (
    <Card noPadding title="Groupwise List"
      headerAction={<Button size="sm">Create</Button>}
    // actionButtons={<><Button size="sm">Save</Button> </>}
    >
      <GroupsGrid />
    </Card>
  );
}
