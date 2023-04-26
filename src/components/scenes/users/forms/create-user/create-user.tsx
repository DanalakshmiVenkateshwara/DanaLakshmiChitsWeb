import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { CardBody, Input } from "reactstrap";
interface Props {
  data: any;
}
export default function CreateUser(props:Props) {

    // const [userDetails, setUserDetails] = useState({Username: '', Phone: '', Email: '', Password: '',Aadhar:'', Address: '', City: '', State:''});
    const [userDetails, setUserDetails] = useState<any>(props.data)
     const AddUseDetails =()=>{

     }
     const onChangeUserDetails =(e:any)=>{
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
     }
     
    return (
        <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="12" lg="10" xl="8">
            <Card className="mx-4">
              <CardBody className="p-4">
                <Form >
                  {/* <h3>User Registration</h3> */}
                  <table width="90%">
                    <tr>
                      <td>UserName :</td>
                      <td>
                        <Input type="text" name="UserName" id="UserName" placeholder="UserName" value={userDetails.Username} onChange={onChangeUserDetails} />
                      </td>
                    </tr>
                    <tr>
                      <td>Phone :</td>
                      <td>
                        <Input type="text" name="Phone" id="Phone" placeholder="Phone" value={userDetails.Phone} onChange={onChangeUserDetails} />
                      </td>
                    </tr>
                    <tr>
                      <td>Password :</td>
                      <td>
                        <Input type="text" name="Password" id="Password" placeholder="Password" value={userDetails.Password} onChange={onChangeUserDetails} />
                      </td>
                    </tr>
                    <tr>
                      <td>Email :</td>
                      <td>
                        <Input type="text" name="Email" id="Email" placeholder="Email" value={userDetails.Email} onChange={onChangeUserDetails} />
                      </td>
                    </tr>
                    <tr>
                      <td>Aadhar :</td>
                      <td>
                        <Input type="text" name="Aadhar" id="Aadhar" placeholder="Aadhar" value={userDetails.Aadhar} onChange={onChangeUserDetails} />
                      </td>
                    </tr>
                    <tr>
                      <td>Address :</td>
                      <td>
                        <Input type="text" placeholder="Address" name="Address" id="Address" value={userDetails.Address} onChange={onChangeUserDetails} />
                      </td>
                    </tr>
                    <tr>
                      <td>City :</td>
                      <td>
                        <Input type="text" placeholder="City" name="City" id="City" value={userDetails.City} onChange={onChangeUserDetails} />
                      </td>
                    </tr>
                    <tr>
                      <td>State :</td>
                      <td>
                        <Input type="text" placeholder="State" name="State" id="State" value={userDetails.State} onChange={onChangeUserDetails} />
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                        <Button type="submit" onClick={AddUseDetails} className="btn btn-info mb-1"><span>SaveUser</span></Button>
                        <Button className="btn btn-info mb-1" ><span>Clear</span></Button>
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