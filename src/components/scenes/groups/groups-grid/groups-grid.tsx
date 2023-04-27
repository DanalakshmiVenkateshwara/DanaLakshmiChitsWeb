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

export default function GroupsGrid() {
  const { ADD_CHIT_PLANS } = UrlConstants();
  const [groupStatus , setGroupStatus] = useState(false); 
  const { response, loading,onRefresh: CompletedGroupDetails } = useFetch({ url: `/User/GetAllChitPlans/${groupStatus}`, Options: { method: "GET", initialRender: true } });
  const onGroupChange =(e:any)=>{
    debugger
    setGroupStatus(e.currentTarget.value == "true"?false:true); CompletedGroupDetails();
   }
  return (
  <> 
   <input
                type="checkbox"
                name="ClosedGroups"
                value={groupStatus == true? "true":"false"}
                checked={groupStatus}
                onChange={(e:any)=>onGroupChange(e)}
              /><>ClosedGroup</>
  {/* <Button variant="primary" onClick={onLauchClick}>Start</Button> */}
    <Grid data={response} as={CustomRow} loading={loading}>
      <GridColumn title="Group Name" targetField="groupName" />
      <GridColumn title="Amount" targetField="amount" />
      <GridColumn title="Duration" targetField="duration" />
      <GridColumn title="No.of Members" targetField="noOfMembers" />
      <GridColumn title="Installment Amount" targetField="installmentAmount" />
      <GridColumn title="Start Date/End Date" targetField="startDate" />
      <GridColumn title='Status' targetField="existed" />
    </Grid>
  </>

  );
}
