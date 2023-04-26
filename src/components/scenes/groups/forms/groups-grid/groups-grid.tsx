import React, { useEffect, useState } from "react";
import { Card, Col, Modal, Row, Table } from "react-bootstrap";
import { CardBody, CardHeader } from "reactstrap";
import CreateGroup from "../create-group";
import axios from "axios";
import Grid from "../../../../shared/grid";
import GridColumn from "../../../../shared/grid/GridColumn";
import CustomRow from "./CustomRow";
import useFetch from "../../../../hooks/useFetch";
import UrlConstants from "../../../../constants/UrlConstants";

export default function GroupsGrid() {
  const { GET_ALL_CHIT_PLANS } = UrlConstants();
  const { response, loading } = useFetch(GET_ALL_CHIT_PLANS, 'GET');

  return (<>
    <Grid data={response} as={CustomRow} loading={loading}>
      <GridColumn title="Group Name" targetField="groupName" />
      <GridColumn title="Amount" targetField="amount" />
      <GridColumn title="Duration" targetField="duration" />
      <GridColumn title="No.of Members" targetField="noOfMembers" />
      <GridColumn title="Installment Amount" targetField="installmentAmount" />
      <GridColumn title="Start Date" targetField="startDate" />
    </Grid>
  </>

  );
}
