import react, { useState } from "react";
import { Card, Col, Modal, Row, Table } from "react-bootstrap";
import { CardBody, CardHeader } from "reactstrap";
import UrlConstants from "../../../../constants/UrlConstants";
import useFetch from "../../../../hooks/useFetch";
import useNoninitialEffect from "../../../../hooks/useNoninitialEffect";
import Form from "../../../../shared/form";
import Grid from "../../../../shared/grid";
import GridColumn from "../../../../shared/grid/GridColumn";
import CustomRow from "./CustomRow";

export default function EnrollMentsGrid(){

  const [isActiveEnrollMents, setIsActiveEnrollments] = useState(true);

  const { GET_ENROLLMENT } = UrlConstants();
  const { response, loading , onRefresh: getEnrollMents } = useFetch({url:`/Admin/GetEnrollMents/${0}/${0}/${isActiveEnrollMents}`, Options:{method:'GET',initialRender:true}});
  useNoninitialEffect(()=>{
    getEnrollMents();
  },[isActiveEnrollMents])


  return (<>
  <Form.CheckBox
            label="InActive Users"
            name="InActiveUsers"
            value={isActiveEnrollMents == true ? "true" : "false"}
            checked={!isActiveEnrollMents}
            onChange={(e: any) => setIsActiveEnrollments(prev => !prev)}
            noPadding
            className="me-3" />
    <Grid data={response} as={CustomRow} loading={loading} rowProps={{ getEnrollMents:getEnrollMents }}>
      <GridColumn title="UserName" targetField="userName" />
      <GridColumn title="GroupName" targetField="groupName" />
      <GridColumn title="EnrollMentDate" targetField="enrollMentDate" />
      <GridColumn title="CloseDate" targetField="closeDate" />
      <GridColumn title="Amount" targetField="amount" />
    </Grid>
  </>

  );
}