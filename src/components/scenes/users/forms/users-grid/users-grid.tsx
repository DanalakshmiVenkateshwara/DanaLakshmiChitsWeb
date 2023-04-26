import React from "react";
import { Card, Col, Modal, Row, Table } from "react-bootstrap";
import { CardBody, CardHeader } from "reactstrap";
import UrlConstants from "../../../../constants/UrlConstants";
import useFetch from "../../../../hooks/useFetch";
import Grid from "../../../../shared/grid";
import GridColumn from "../../../../shared/grid/GridColumn";
import CreateUser from "../create-user";
import CustomRow from "./CustomRow";
export default function UsersGrid() {
  const { GET_USERS } = UrlConstants();
  const { response, loading } = useFetch(GET_USERS, 'GET');

  return (<>
    <Grid data={response} as={CustomRow} loading={loading}>
      <GridColumn title="Name" targetField="name" />
      <GridColumn title="Phone" targetField="phone" />
      <GridColumn title="Email" targetField="eMail" />
      <GridColumn title="Password" targetField="password" />
      <GridColumn title="Address" targetField="address" />
    </Grid>
  </>

  );
}