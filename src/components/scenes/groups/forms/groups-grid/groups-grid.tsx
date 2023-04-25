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

  const { response, loading } = useFetch();
  // const data = [
  //   { groupName: "Test1", amount: 100000, duration: 10, noOfMembers: 10, installmentAmount: 100000, startDate: "01/05/2023" },
  //   { groupName: "Test2", amount: 123400, duration: 11, noOfMembers: 10, installmentAmount: 100000, startDate: "01/05/2023" },
  //   { groupName: "Test3", amount: 10234200, duration: 12, noOfMembers: 10, installmentAmount: 100000, startDate: "01/05/2023" },
  //   { groupName: "Test4", amount: 1045300, duration: 13, noOfMembers: 10, installmentAmount: 100000, startDate: "01/05/2023" },
  //   { groupName: "Test5", amount: 104345, duration: 14, noOfMembers: 10, installmentAmount: 100000, startDate: "01/05/2023" },
  //   { groupName: "Test6", amount: 134340, duration: 15, noOfMembers: 10, installmentAmount: 100000, startDate: "01/05/2023" },
  //   { groupName: "Test7", amount: 10345340, duration: 16, noOfMembers: 10, installmentAmount: 100000, startDate: "01/05/2023" },
  //   { groupName: "Test8", amount: 134500, duration: 17, noOfMembers: 10, installmentAmount: 100000, startDate: "01/05/2023" },
  //   { groupName: "Test9", amount: 10345340, duration: 18, noOfMembers: 10, installmentAmount: 100000, startDate: "01/05/2023" },
  //   { groupName: "Test10", amount: 10345340, duration: 19, noOfMembers: 10, installmentAmount: 100000, startDate: "01/05/2023" },
  //   { groupName: "Test11", amount: 103453450, duration: 15, noOfMembers: 10, installmentAmount: 100000, startDate: "01/05/2023" },
  // ];

  // const data = useFetch();
  // axios.get(
  //   'https://localhost:44303/api/User/GetAllChitPlans', {
  //   headers: { 'Content-Type': "application/json" }, //, Authorization: `Bearer ${token}`
  //   params: null
  // })
  //   .then(function (response: any) {
  //     console.log(response.data)
  //     setState(response.data);
  //   })
  //   .catch((error) => {
  //     console.log(error);

  //     if (error?.response?.status === 401) {
  //       // sessionStorage.removeItem("ptrui_userToken");
  //       // authentication.setIsAuth(false);
  //       // authentication.clearToken();
  //       // authentication.clearUser();
  //     }
  //   });


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
