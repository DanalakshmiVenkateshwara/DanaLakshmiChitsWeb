import react from "react";
import { Card, Col, Modal, Row, Table } from "react-bootstrap";
import { CardBody, CardHeader } from "reactstrap";
import Grid from "../../../../shared/grid";
import GridColumn from "../../../../shared/grid/GridColumn";

export default function EnrollMentsGrid(){
  const data = [
    { UserName: "Sample1", UserStatus: "Active", RaisedMonth: 1},
    { UserName: "Sample2", UserStatus: "Active", RaisedMonth: 2},
    { UserName: "Sample3", UserStatus: "Active", RaisedMonth: 3},
    { UserName: "Sample4", UserStatus: "Active", RaisedMonth: 4},
    { UserName: "Sample5", UserStatus: "Active", RaisedMonth: 5},
    { UserName: "Sample6", UserStatus: "Active", RaisedMonth: 6},
    { UserName: "Sample7", UserStatus: "Active", RaisedMonth: 7},
    { UserName: "Sample8", UserStatus: "Active", RaisedMonth: 8},
    { UserName: "Sample9", UserStatus: "Active", RaisedMonth: 9}
  ];
    return(
      <Grid data={data}>
      <GridColumn title="Name" targetField="Name"></GridColumn>
      <GridColumn title="Phone" targetField="Phone" />
      <GridColumn title="Email" targetField="Email" />
      <GridColumn title="Password" targetField="Password" />
      <GridColumn title="Address" targetField="Address" />
    </Grid>
    );
};