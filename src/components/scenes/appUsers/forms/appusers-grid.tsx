import react from 'react';
import { Card, Col, Modal, Row, Table } from "react-bootstrap";
import { CardBody, CardHeader } from "reactstrap";
import Grid from '../../../shared/grid';
import GridColumn from '../../../shared/grid/GridColumn';

export default function AppUsersGrid(){
  const data = [
   { Name: "Sample1", Phone: 8888888888, State:"TS"} ,
   { Name: "Sample2", Phone: 8888888888, State:"AP"} ,
   { Name: "Sample3", Phone: 8888888888, State:"AP"} ,
   { Name: "Sample4", Phone: 8888888888, State:"TS"} ,
   { Name: "Sample5", Phone: 8888888888, State:"TS"} ,
   { Name: "Sample6", Phone: 8888888888, State:"TS"} ,
   { Name: "Sample7", Phone: 8888888888, State:"TS"} ,
   { Name: "Sample8", Phone: 8888888888, State:"TS"} 
  ]
      return (
        <Grid data={data}>
          <GridColumn title="Name" targetField="Name"></GridColumn>
          <GridColumn title="Phone" targetField="Phone" />
          <GridColumn title="State" targetField="State" />
        </Grid>
      );
}