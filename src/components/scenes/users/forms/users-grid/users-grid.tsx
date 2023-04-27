import React, { useState } from "react";
import { Card, Col, Modal, Row, Table } from "react-bootstrap";
import { CardBody, CardHeader } from "reactstrap";
import UrlConstants from "../../../../constants/UrlConstants";
import useFetch from "../../../../hooks/useFetch";
import Grid from "../../../../shared/grid";
import GridColumn from "../../../../shared/grid/GridColumn";
import CreateUser from "../create-user";
import CustomRow from "./CustomRow";
interface Iprops {
  data?: any; loading?: boolean
}
export default function UsersGrid({ data, loading }: Iprops) {
  const [test, setTest] = useState()

  return (<>
    <Grid data={data} as={CustomRow} loading={loading} rowProps={setTest}>
      <GridColumn title="Name" targetField="name" />
      <GridColumn title="Phone" targetField="phone" />
      <GridColumn title="Email" targetField="eMail" />
      <GridColumn title="Password" targetField="password" />
      <GridColumn title="Address" targetField="address" />
    </Grid>
  </>

  );
}