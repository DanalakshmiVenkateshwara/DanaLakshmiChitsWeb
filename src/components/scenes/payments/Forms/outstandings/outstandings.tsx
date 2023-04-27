import react from "react";
import { Card, Col, Modal, Row, Table } from "react-bootstrap";
import { CardBody, CardHeader } from "reactstrap";
import UrlConstants from "../../../../constants/UrlConstants";
import useFetch from "../../../../hooks/useFetch";
import Grid from "../../../../shared/grid";
import GridColumn from "../../../../shared/grid/GridColumn";
export default function OutStandings(){


  //we need to change the api method name
  const { GET_USERS } = UrlConstants();
  const { response, loading } = useFetch({url:GET_USERS, Options:{method:'GET',initialRender:true}});

  return (<>
    <Grid data={response} loading={loading}>
      <GridColumn title="UserName" targetField="userName" />
      <GridColumn title="Phone" targetField="phone" />
      <GridColumn title="PendingAmount" targetField="pendingAmount" />
      {/* <GridColumn title="No.of Members" targetField="noOfMembers" />
      <GridColumn title="Installment Amount" targetField="installmentAmount" />
      <GridColumn title="Start Date" targetField="startDate" />
      <GridColumn title='Status' targetField="existed" /> */}
    </Grid>
  </>
  );
}