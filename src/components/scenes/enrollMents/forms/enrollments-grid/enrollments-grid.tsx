import react from "react";
import { Card, Col, Modal, Row, Table } from "react-bootstrap";
import { CardBody, CardHeader } from "reactstrap";
import UrlConstants from "../../../../constants/UrlConstants";
import useFetch from "../../../../hooks/useFetch";
import Grid from "../../../../shared/grid";
import GridColumn from "../../../../shared/grid/GridColumn";

export default function EnrollMentsGrid(){

  const { GET_ENROLLMENT } = UrlConstants();
  const { response, loading } = useFetch({url:GET_ENROLLMENT, Options:{method:'GET',initialRender:true}});

  return (<>
    <Grid data={response} loading={loading}>
      <GridColumn title="UserName" targetField="userName" />
      <GridColumn title="EnrollMentDate" targetField="enrollMentDate" />
      <GridColumn title="GroupName" targetField="groupName" />
      <GridColumn title="Amount" targetField="amount" />
    </Grid>
  </>

  );
}