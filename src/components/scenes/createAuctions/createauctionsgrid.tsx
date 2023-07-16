import React, { useEffect, useState } from "react";
import { Button, Card, Col, Modal, Row, Table } from "react-bootstrap";
import { CardBody, CardHeader } from "reactstrap";
import axios from "axios";
import Grid from "../../shared/grid";
import GridColumn from "../../shared/grid/GridColumn";

export default function CreateAuctionsGrid({data,loading,setGroupStatus,CompletedGroupDetails}:any) {
  
  return (
    <>
      
      {/* <Button variant="primary" onClick={onLauchClick}>Start</Button> */}
      <Grid data={data} loading={loading} rowProps={{ setGroupStatus: setGroupStatus,CompletedGroupDetails:CompletedGroupDetails }}>
        <GridColumn title="Group Name" targetField="groupName" />
        <GridColumn title="Amount" targetField="amount" />
        <GridColumn title="BaseAmount" targetField="baseAmount" />
        <GridColumn title="StartDate" targetField="startDate" />
        <GridColumn title="StartTime" targetField="startTime" />
        <GridColumn title="EndTime" targetField="endTime" />
      </Grid>
    </>

  );
}
