import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { CardBody, Input } from "reactstrap";
import UrlConstants from "../../../../constants/UrlConstants";
import useFetch from "../../../../hooks/useFetch";
interface Props {
  data: any;
  // dataSource: any;
}
export default function CreateGroup(props:Props) {
  const { ADD_CHIT_PLANS } = UrlConstants();
  const data = {
    "id": 345,
    "groupName": "dfgdfg",
    "amount": 330,
    "duration": 40,
    "installmentAmount": 50,
    "noOfMembers": 40,
    "existed": true,
    "startDate": "2023-04-26T08:26:24.963Z",
    "membersInCircle": 60
  };
  const { response, loading } = useFetch(ADD_CHIT_PLANS, 'POST', data);
  // const [groupDetails, setGroupDetails] = useState({ GroupId: "", GroupName: "", Amount: "", Duaration: "", NoOfMembers: "", InstallMentAmount: "" });
  const [groupDetails, setGroupDetails] = useState<any>(props.data)
  const onChangeGroupId = (e: any) => {
    setGroupDetails({ ...groupDetails, [e.target.name]: e.target.value });
  };
  const onChangeGroupName = (e: any) => {
    setGroupDetails({ ...groupDetails, [e.target.name]: e.target.value });
  };
  const onChangeGroupAmount = (e: any) => {
    setGroupDetails({ ...groupDetails, [e.target.name]: e.target.value });
  };
  const onChangeDuration = (e: any) => {
    setGroupDetails({ ...groupDetails, [e.target.name]: e.target.value });
  };
  const onChangeNoOfMembers = (e: any) => {
    setGroupDetails({ ...groupDetails, [e.target.name]: e.target.value });
  };
  const onChangeInstallMentAmount = (e: any) => {
    setGroupDetails({ ...groupDetails, [e.target.name]: e.target.value });
  };
  
  
  const InsertgroupDetails = () => {
    debugger
    const data = { GroupId: 12, GroupName: "123", Amount: 12, Duaration: 12, InstallMentAmount: 12, NoOfMembers: 20, StartDate:new Date().toLocaleDateString() };
  
  
  };

  return (
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="12" lg="10" xl="8">
            <Card className="mx-4">
              <CardBody className="p-4">
                <Form>
                  <h3>Group Registration</h3>
                  <table width="90%">
                    {/* <tr>
                      <td>GroupId :</td>
                      <td>
                        <Input type="text" name="GroupId" id="GroupId" placeholder="GroupId" value={groupDetails.GroupId} onChange={onChangeGroupId} />
                      </td>
                    </tr> */}
                    <tr>
                      <td>Group Name :</td>
                      <td>
                        <Input type="text" name="GroupName" id="GroupName" placeholder="Group Name" value={groupDetails.groupName} onChange={onChangeGroupName} />
                      </td>
                    </tr>
                    <tr>
                      <td>Amount :</td>
                      <td>
                        <Input type="text" name="Amount" id="Amount" placeholder="Amount" value={groupDetails.amount} onChange={onChangeGroupAmount} />
                      </td>
                    </tr>
                    <tr>
                      <td>Duration :</td>
                      <td>
                        <Input type="number" placeholder="Duration" name="Duration" id="Duration" value={groupDetails.duration} onChange={onChangeDuration} />
                      </td>
                    </tr>
                    <tr>
                      <td>No Of Members :</td>
                      <td>
                        <Input type="number" placeholder="No Of Members" name="NoOfMembers" id="NoOfMembers" value={groupDetails.noOfMembers} onChange={onChangeNoOfMembers} />
                      </td>
                    </tr>
                    <tr>
                      <td>InstallMent Amount :</td>
                      <td>
                        <Input type="text" placeholder="InstallMent Amount" name="InstallMentAmount" id="InstallMentAmount" value={groupDetails.installmentAmount} onChange={onChangeInstallMentAmount} />
                      </td>
                    </tr>
                    <tr>
                      <td>Start Date :</td>
                      <td>
                        <Input type="text" placeholder="Start Date" name="StartDate" id="Start Date" value={groupDetails.startDate} />
                      </td>
                    </tr>

                    <tr>
                      <td></td>
                      <td>
                        <Button type="submit" onClick={InsertgroupDetails} className="btn btn-info mb-1">
                          <span>SaveGroup</span>
                        </Button>
                        <Button className="btn btn-info mb-1">
                          <span>Clear</span>
                        </Button>
                      </td>
                    </tr>
                  </table>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
