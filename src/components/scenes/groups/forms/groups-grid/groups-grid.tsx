import React, { useEffect, useState } from "react";
import { Card, Col, Modal, Row, Table } from "react-bootstrap";
import { CardBody, CardHeader } from "reactstrap";
import CreateGroup from "../create-group";
import axios from "axios";
import Grid from "../../../../shared/grid";
import GridColumn from "../../../../shared/grid/GridColumn";
import CustomRow from "./CustomRow";
import useFetch from "../../../../hooks/useFetch";

export default function GroupsGrid() {
  const data = [
    { groupName: "Test1", amount: 100000, duration: 10, noofMembers: 10, installmentAmount: 100000, startDate: "01/05/2023" },
    { groupName: "Test2", amount: 123400, duration: 11, noofMembers: 10, installmentAmount: 100000, startDate: "01/05/2023" },
    { groupName: "Test3", amount: 10234200, duration: 12, noofMembers: 10, installmentAmount: 100000, startDate: "01/05/2023" },
    { groupName: "Test4", amount: 1045300, duration: 13, noofMembers: 10, installmentAmount: 100000, startDate: "01/05/2023" },
    { groupName: "Test5", amount: 104345, duration: 14, noofMembers: 10, installmentAmount: 100000, startDate: "01/05/2023" },
    { groupName: "Test6", amount: 134340, duration: 15, noofMembers: 10, installmentAmount: 100000, startDate: "01/05/2023" },
    { groupName: "Test7", amount: 10345340, duration: 16, noofMembers: 10, installmentAmount: 100000, startDate: "01/05/2023" },
    { groupName: "Test8", amount: 134500, duration: 17, noofMembers: 10, installmentAmount: 100000, startDate: "01/05/2023" },
    { groupName: "Test9", amount: 10345340, duration: 18, noofMembers: 10, installmentAmount: 100000, startDate: "01/05/2023" },
    { groupName: "Test10", amount: 10345340, duration: 19, noofMembers: 10, installmentAmount: 100000, startDate: "01/05/2023" },
    { groupName: "Test11", amount: 103453450, duration: 15, noofMembers: 10, installmentAmount: 100000, startDate: "01/05/2023" },
  ];


  useFetch();

  return (
    <Grid data={data} as={CustomRow}>
      <GridColumn title="Group Name" targetField="groupName" />
      <GridColumn title="Amount" targetField="amount" />
      <GridColumn title="Duration" targetField="duration" />
      <GridColumn title="No.of Members" targetField="noofMembers" />
      <GridColumn title="Installment Amount" targetField="installmentAmount" />
      <GridColumn title="Start Date" targetField="startDate" />
    </Grid>
  );
}
