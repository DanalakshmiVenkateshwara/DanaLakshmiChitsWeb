import React, { useEffect, useState } from "react";
import { Card, Col, Modal, Row, Table } from "react-bootstrap";
import { CardBody, CardHeader } from "reactstrap";
import CreateGroup from "../create-group";
import axios from "axios";
import Grid from "../../../../shared/grid";
import GridColumn from "../../../../shared/grid/GridColumn";
import CustomRow from "./CustomRow";

export default function GroupsGrid() {
  const data = [
    { GroupName: "Test1", Amount: 100000, Duration: 10, NoofMembers: 10, InstallmentAmount: 100000, StartDate: "01/05/2023" },
    { GroupName: "Test2", Amount: 123400, Duration: 11, NoofMembers: 10, InstallmentAmount: 100000, StartDate: "01/05/2023" },
    { GroupName: "Test3", Amount: 10234200, Duration: 12, NoofMembers: 10, InstallmentAmount: 100000, StartDate: "01/05/2023" },
    { GroupName: "Test4", Amount: 1045300, Duration: 13, NoofMembers: 10, InstallmentAmount: 100000, StartDate: "01/05/2023" },
    { GroupName: "Test5", Amount: 104345, Duration: 14, NoofMembers: 10, InstallmentAmount: 100000, StartDate: "01/05/2023" },
    { GroupName: "Test6", Amount: 134340, Duration: 15, NoofMembers: 10, InstallmentAmount: 100000, StartDate: "01/05/2023" },
    { GroupName: "Test7", Amount: 10345340, Duration: 16, NoofMembers: 10, InstallmentAmount: 100000, StartDate: "01/05/2023" },
    { GroupName: "Test8", Amount: 134500, Duration: 17, NoofMembers: 10, InstallmentAmount: 100000, StartDate: "01/05/2023" },
    { GroupName: "Test9", Amount: 10345340, Duration: 18, NoofMembers: 10, InstallmentAmount: 100000, StartDate: "01/05/2023" },
    { GroupName: "Test10", Amount: 10345340, Duration: 19, NoofMembers: 10, InstallmentAmount: 100000, StartDate: "01/05/2023" },
    { GroupName: "Test11", Amount: 103453450, Duration: 15, NoofMembers: 10, InstallmentAmount: 100000, StartDate: "01/05/2023" },
  ];
  return (
    <Grid data={data} as={CustomRow}>
      <GridColumn title="Group Name" targetField="GroupName"><>asdasd</></GridColumn>
      <GridColumn title="Amount" targetField="Amount" />
      <GridColumn title="Duration" targetField="Duration" />
      <GridColumn title="No.of Members" targetField="NoofMembers" />
      <GridColumn title="Installment Amount" targetField="InstallmentAmount" />
      <GridColumn title="Start Date" targetField="StartDate" ></GridColumn>
    </Grid>
  );
}
