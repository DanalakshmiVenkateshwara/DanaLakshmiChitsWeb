import react, { useEffect, useState } from "react";
import { Card, Col, Modal, Row, Table } from "react-bootstrap";
import { CardBody, CardHeader } from "reactstrap";
import UrlConstants from "../../../../constants/UrlConstants";
import useFetch from "../../../../hooks/useFetch";
import useNoninitialEffect from "../../../../hooks/useNoninitialEffect";
import Grid from "../../../../shared/grid";
import Form from "../../../../shared/form";
import GridColumn from "../../../../shared/grid/GridColumn";
import CustomRow from "./CustomRow";

export default function EnrollMentsGrid(props:any) {
  
  const [isActiveEnrollMents, setIsActiveEnrollments] = useState(true);
  const [groupId, setGroupId] = useState<any>(0);
  const { GET_ENROLLMENT } = UrlConstants();
  const { response, loading, onRefresh: getEnrollMents } = useFetch({ url: `/Admin/GetEnrollMents/${0}/${props.groupId}/${false}`, Options: { method: 'GET', initialRender: false } });
  
  useNoninitialEffect(() => {
    
    getEnrollMents();
  }, [isActiveEnrollMents ,props.groupId])
  
  return (<>
    
    <Grid data={response} as={CustomRow} loading={loading} rowProps={{ getEnrollMents: getEnrollMents }}>
      <GridColumn title="UserName" targetField="userName" />
      <GridColumn title="GroupName" targetField="groupName" />
      <GridColumn title="EnrollMentDate" targetField="enrollMentDate" />
      <GridColumn title="CloseDate" targetField="closeDate" />
      <GridColumn title="Amount" targetField="amount" />
      <GridColumn title='Actions' targetField="" />
    </Grid>
  </>

  );
}
