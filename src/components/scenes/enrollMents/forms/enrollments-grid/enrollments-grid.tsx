import react, { useEffect, useState } from "react";
import { Card, Col, Modal, Row, Table } from "react-bootstrap";
import { CardBody, CardHeader } from "reactstrap";
import getApiData from "../../../../app-services/get-api";
import Grid from "../../../../shared/grid";
import GridColumn from "../../../../shared/grid/GridColumn";

export default function EnrollMentsGrid(){
  const [data, setData] = useState([]); 

  useEffect(() => {  
    getApiData(`Admin/GetEnrollMents`, '')
        .then((response: any) => {
          debugger
            if (response) {
              setData(response);
              debugger
            }
          })
        },[]);
    return(
      <Grid data={data}>
      <GridColumn title="UserName" targetField="userName"></GridColumn>
      <GridColumn title="GroupName" targetField="groupName" />
      <GridColumn title="EnollMentDate" targetField="enrollMentDate" />
      <GridColumn title="Amount" targetField="amount" />
      {/* <GridColumn title="Address" targetField="Address" /> */}
    </Grid>
    );
};