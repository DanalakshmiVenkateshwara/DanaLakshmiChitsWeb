import rect from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { CardBody, Input } from "reactstrap";

export default function  UserEnrollments (){

    const enrollUser =()=>{

    }

    return(
        <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="12" lg="10" xl="8">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form >
                    <h3>User EnrollMent</h3>
                    <table width="90%">
                      <tr>
                          <td>Select Group</td>
                          <td>
                          <select name="Groups" className="form-control">
                                    <option>...Please Select...</option>
                                    <option>Sample1</option>
                                    <option>Sample2</option>
                                    <option> Sample3</option>
                                  </select>
                          </td>
                      </tr>
                      <tr>
                           <td>Choose User</td>
                            <td>
                            <Input type="text" name="UserName" id="UserName" placeholder="selecctUserName" />
                            </td>
                      </tr>
                      
                        <td></td>
                        <td>
                          <Button type="submit" onClick={enrollUser} className="btn btn-info mb-1"><span>Submit</span></Button>
                          <Button className="btn btn-info mb-1" ><span>Clear</span></Button>
                        </td>
                    </table>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );

};
