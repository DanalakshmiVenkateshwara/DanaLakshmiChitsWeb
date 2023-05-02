import React, { useEffect, useState } from "react";
import { Button, Card, Col, Modal, Row, Table } from "react-bootstrap";
import { CardBody, CardHeader } from "reactstrap";
import CreateGroup from "../forms/create-group";
import axios from "axios";
import Grid from "../../../shared/grid";
import GridColumn from "../../../shared/grid/GridColumn";
import CustomRow from "./CustomRow";
import useFetch from "../../../hooks/useFetch";
import UrlConstants from "../../../constants/UrlConstants";

export default function GroupsGrid({data,loading,setGroupStatus,CompletedGroupDetails}:any) {
  const { ADD_CHIT_PLANS } = UrlConstants();
  
  return (
    <>
      
      {/* <Button variant="primary" onClick={onLauchClick}>Start</Button> */}
      <Grid data={data} as={CustomRow} loading={loading} rowProps={{ setGroupStatus: setGroupStatus,CompletedGroupDetails:CompletedGroupDetails }}>
        <GridColumn title="Group Name" targetField="groupName" />
        <GridColumn title="Amount" targetField="amount" />
        <GridColumn title="Duration" targetField="duration" />
        <GridColumn title="No.of Members" targetField="noOfMembers" />
        <GridColumn title="Installment Amount" targetField="installmentAmount" />
        <GridColumn title="Start Date/End Date" targetField="startDate" />
        <GridColumn title="End Date" targetField="etartDate" />
        <GridColumn title='Status' targetField="existed" />
      </Grid>
    </>

  );
}
