import React, { useEffect, useState } from "react";
import { Button, Card, Col, Modal, Row, Table } from "react-bootstrap";
import { CardBody, CardHeader } from "reactstrap";
import axios from "axios";
import Grid from "../../shared/grid";
import GridColumn from "../../shared/grid/GridColumn";
import customRow from "./customRow";

export default function CreateAuctionsGrid({data,loading}:any) {
  
  return (
    <>
      
      {/* <Button variant="primary" onClick={onLauchClick}>Start</Button> */}
      <Grid data={data} as={customRow} loading={loading} >
        <GridColumn title="Group Name" targetField="groupName" />
        <GridColumn title="Amount" targetField="amount" />
        <GridColumn title="BaseAmount" targetField="baseAmount" />
        <GridColumn title="AuctionDate" targetField="startDate" />
        <GridColumn title="StartTime" targetField="startTime" />
        <GridColumn title="EndTime" targetField="endTime" />
        <GridColumn title="" targetField=""/>
      </Grid>
    </>

  );
}
