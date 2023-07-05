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
  
  // const [groupsData, setGroupsData] = useState<Array<any>>([]);
  const [isActiveEnrollMents, setIsActiveEnrollments] = useState(true);
  const [groupId, setGroupId] = useState<any>(0);
  // const [enrollments, setEnrollments] = useState<Array<any>>([]);
  const { GET_ENROLLMENT } = UrlConstants();
  // const { response: groupResponse, loading: groupsLoading } = useFetch({ url: `/User/GetAllChitPlans?groupClosed =${false}`, Options: { method: "GET", initialRender: true } });
  const { response, loading, onRefresh: getEnrollMents } = useFetch({ url: `/Admin/GetEnrollMents/${0}/${props.groupId}/${false}`, Options: { method: 'GET', initialRender: false } });
  // useEffect(()=>{
  //   
  //   getEnrollMents();
  // },[props.groupId!=0])
  useNoninitialEffect(() => {
    
    getEnrollMents();
  }, [isActiveEnrollMents ,props.groupId])
  // useNoninitialEffect(() => {
  //   
  //   let data: any = groupResponse;
  //   
  //   setGroupsData(data)
  // }, [groupResponse])
  // useNoninitialEffect(() => {
  //   let data: any = response;
  //   
  //   setEnrollments(data)
  // }, [response, groupId])
  // const onGroupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   
  //   setGroupId(Number(e.target.value));
  //   getEnrollMents()
  //   
  //   // let gropWiseDetails = userChits.filter((f: any) => f.groupId  == e.target.value);
  //   // setEnrollments(gropWiseDetails)
  // }

  return (<>
    {/* <h5 className="mb-0 mr-3">{"Select Group "}</h5>
    <Form.Control as="select" className="col-6 col-sm-3 col-xl-2" size="sm" value={groupId}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onGroupChange(e)
      }
    >
      <option key={-1} value={-1}>
        {"..Choose group.."}
      </option>
      {groupsData.map((item) => {
        return (
          <option key={item.id} value={item.id}>
            {item.groupName}
          </option>
        );
      })}
    </Form.Control> */}
    {/* <Form.CheckBox
            label="InActive Users"
            name="InActiveUsers"
            value={isActiveEnrollMents == true ? "true" : "false"}
            checked={!isActiveEnrollMents}
            onChange={(e: any) => setIsActiveEnrollments(prev => !prev)}
            noPadding
            className="me-3" /> */}
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
