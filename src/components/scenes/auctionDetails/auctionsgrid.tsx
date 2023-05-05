import react, { useState } from "react";
import { Card, Col, Modal, Row, Table } from "react-bootstrap";
import { CardBody, CardHeader } from "reactstrap";
import useFetch from "../../hooks/useFetch";
import useNoninitialEffect from "../../hooks/useNoninitialEffect";
import Form from "../../shared/form";
import Grid from "../../shared/grid";
import GridColumn from "../../shared/grid/GridColumn";

export default function AuctionsGrid(props:any){
   
  return (
  <>
    <Grid data={props.data} loading={props.loading}>
      <GridColumn title="UserName" targetField="userName" />
      <GridColumn title="GroupName" targetField="groupName" />
      <GridColumn title="AuctionDate" targetField="auctionDate" />
      <GridColumn title="AuctionMonth" targetField="paidUpto" />
      <GridColumn title="Amount" targetField="amount" />
      <GridColumn title="Dividend" targetField="dividend" />
    </Grid>
  </>

  );
}