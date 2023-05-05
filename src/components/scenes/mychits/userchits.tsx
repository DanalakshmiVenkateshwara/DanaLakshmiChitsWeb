import react, { useState } from "react";
import { Card, Col, Modal, Row, Table } from "react-bootstrap";
import { CardBody, CardHeader } from "reactstrap";
import useFetch from "../../hooks/useFetch";
import useNoninitialEffect from "../../hooks/useNoninitialEffect";
import Form from "../../shared/form";
import Grid from "../../shared/grid";
import GridColumn from "../../shared/grid/GridColumn";

export default function UserChits(props:any){

  return (
  <>
    <Grid data={props.data} loading={props.loading}>
      <GridColumn title="GroupName" targetField="groupName" />
      <GridColumn title="Amount" targetField="amount" />
      <GridColumn title="NextAuctionDate" targetField="nextAuctionDate" />
      <GridColumn title="NoOfInstallMents" targetField="duration" />
      <GridColumn title="NoOfmonthsCompleted" targetField="paidUpto" />
      <GridColumn title="Status" targetField="status" />
    </Grid>
  </>

  );
}