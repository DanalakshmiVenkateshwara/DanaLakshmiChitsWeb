import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { CardBody, Input } from "reactstrap";

export default function CreateGroup() {
  const [groupDetails, setGroupDetails] = useState({ GroupId: "", GroupName: "", Amount: "", Duaration: "", NoOfMembers: "", InstallMentAmount: "" });

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
    const data = { GroupId: groupDetails.GroupId, GroupName: groupDetails.GroupName, Amount: groupDetails.Amount, Duaration: groupDetails.Duaration, InstallMentAmount: groupDetails.InstallMentAmount, NoOfMembers: groupDetails.NoOfMembers };
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
                    <tr>
                      <td>GroupId :</td>
                      <td>
                        <Input type="text" name="GroupId" id="GroupId" placeholder="GroupId" value={groupDetails.GroupId} onChange={onChangeGroupId} />
                      </td>
                    </tr>
                    <tr>
                      <td>Group Name :</td>
                      <td>
                        <Input type="text" name="GroupName" id="GroupName" placeholder="Group Name" value={groupDetails.GroupName} onChange={onChangeGroupName} />
                      </td>
                    </tr>
                    <tr>
                      <td>Amount :</td>
                      <td>
                        <Input type="text" name="Amount" id="Amount" placeholder="Amount" value={groupDetails.Amount} onChange={onChangeGroupAmount} />
                      </td>
                    </tr>
                    <tr>
                      <td>Duration :</td>
                      <td>
                        <Input type="number" placeholder="Duration" name="Duration" id="Duration" value={groupDetails.Duaration} onChange={onChangeDuration} />
                      </td>
                    </tr>
                    <tr>
                      <td>No Of Members :</td>
                      <td>
                        <Input type="number" placeholder="No Of Members" name="NoOfMembers" id="NoOfMembers" value={groupDetails.NoOfMembers} onChange={onChangeNoOfMembers} />
                      </td>
                    </tr>
                    <tr>
                      <td>InstallMent Amount :</td>
                      <td>
                        <Input type="text" placeholder="InstallMent Amount" name="InstallMentAmount" id="InstallMentAmount" value={groupDetails.InstallMentAmount} onChange={onChangeInstallMentAmount} />
                      </td>
                    </tr>
                    <tr>
                      <td>Start Date :</td>
                      <td>
                        <Input type="text" placeholder="Start Date" name="StartDate" id="Start Date" />
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
