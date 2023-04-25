import react, { useEffect, useState } from 'react';
import { Card, Col, Modal, Row, Table } from "react-bootstrap";
import { CardBody, CardHeader } from "reactstrap";
import getApiData from '../../../app-services/get-api';
import Grid from '../../../shared/grid';
import GridColumn from '../../../shared/grid/GridColumn';

export default function AppUsersGrid(){
  const [data, setData] = useState([]); 

  useEffect(() => {  
    getApiData(`Admin/GetAppUsers`, '')
        .then((response: any) => {
          debugger
            if (response) {
              setData(response);
              debugger
            }
          })
        },[]);
  // const data = [
  //  { Name: "Sample1", Phone: 8888888888, State:"TS"} ,
  //  { Name: "Sample2", Phone: 8888888888, State:"AP"} ,
  //  { Name: "Sample3", Phone: 8888888888, State:"AP"} ,
  //  { Name: "Sample4", Phone: 8888888888, State:"TS"} ,
  //  { Name: "Sample5", Phone: 8888888888, State:"TS"} ,
  //  { Name: "Sample6", Phone: 8888888888, State:"TS"} ,
  //  { Name: "Sample7", Phone: 8888888888, State:"TS"} ,
  //  { Name: "Sample8", Phone: 8888888888, State:"TS"} 
  // ]
      return (
        <Grid data={data}>
          <GridColumn title="Name" targetField="name"></GridColumn>
          <GridColumn title="Phone" targetField="phone" />
          <GridColumn title="State" targetField="state" />
          <GridColumn title="Date" targetField="date" />
        </Grid>
      );
}