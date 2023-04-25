import React, { useEffect, useState } from "react";
import { Card, Col, Modal, Row, Table } from "react-bootstrap";
import { CardBody, CardHeader } from "reactstrap";
import CreateUser from "../create-user";
import Grid from "../../../../shared/grid";
import GridColumn from "../../../../shared/grid/GridColumn";
import getApiData from "../../../../app-services/get-api";
export default function UsersGrid() {
  const [data, setData] = useState([]); 
  useEffect(() => {  
    getApiData(`Admin/GetUsers`, '')
        .then((response: any) => {
          debugger
            if (response) {
              setData(response);
              debugger
            }
          })
        },[]);

  // const data = [
  //   { Name: "Sample1", Phone: 8888888888, Email: "Sample1@gmail.com", Password: 8888888888, Address: "Miyapur" },
  //   { Name: "Sample2", Phone: 8888888888, Email: "Sample2@gmail.com", Password: 8888888888,  Address: "Miyapur01"},
  //   { Name: "Sample3", Phone: 8888888888, Email: "Sample3@gmail.com", Password: 8888888888,  Address: "Miyapur02"},
  //   { Name: "Sample4", Phone: 8888888888, Email: "Sample4@gmail.com", Password: 8888888888,  Address: "Miyapur03"},
  //   { Name: "Sample5", Phone: 8888888888, Email: "Sample5@gmail.com", Password: 8888888888,  Address: "Miyapur04"},
  //   { Name: "Sample6", Phone: 8888888888, Email: "Sample6@gmail.com", Password: 8888888888,  Address: "Miyapur05"},
  //   { Name: "Sample7", Phone: 8888888888, Email: "Sample7@gmail.com", Password: 8888888888,  Address: "Miyapur06"},
  //   { Name: "Sample8", Phone: 8888888888, Email: "Sample8@gmail.com", Password: 8888888888,  Address: "Miyapur07"},
  //   { Name: "Sample9", Phone: 8888888888, Email: "Sample9@gmail.com", Password: 8888888888,  Address: "Miyapur08"},
  //   { Name: "Sample10", Phone: 8888888888, Email: "Sampl10@gmail.com", Password: 8888888888, Address: "Miyapur09"},
  //   { Name: "Sample11", Phone: 8888888888, Email: "Sample11@gmail.com", Password: 8888888888, Address: "Miyapur10"},
  // ];
  return (
    <Grid data={data}>
      <GridColumn title="Name" targetField="name"></GridColumn>
      <GridColumn title="Phone" targetField="phone" />
      <GridColumn title="Email" targetField="eMail" />
      <GridColumn title="Password" targetField="password" />
      <GridColumn title="Address" targetField="address" />
    </Grid>
      );
}