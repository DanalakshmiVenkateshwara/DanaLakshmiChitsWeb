import react from "react";

import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { CardBody, Input } from "reactstrap";
export default function UserPayments(){

const payEmi =()=>{

}

    return(
        <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="12" lg="10" xl="8">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form >
                    <h3>Group Registration</h3>
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
                        <td>UserName :</td>
                        <td>
                          <Input type="text" name="UserName" id="UserName" placeholder="Search" />
                        </td>
                      </tr>
                      <tr>
                        <td>CurrentMonthEmi :</td>
                        <td>
                          <Input type="text" name="CurrentMonthEmi" id="CurrentMonthEmi" placeholder="CurrentMonthEmi" />
                        </td>
                      </tr>
                      <tr>
                        <td>Dividend :</td>
                        <td>
                          <Input type="text" name="Dividend" id="Dividend" placeholder="Dividend"/>
                        </td>
                      </tr>
                      <tr>
                        <td>Date :</td>
                        <td>
                          <Input type="text" name="Date" id="Date" placeholder="Date"/>
                        </td>
                      </tr>
                      <tr>
                        <td>PaymentMonth :</td>
                        <td>
                          <Input type="text" name="PaymentMonth" id="PaymentMonth" placeholder="PaymentMonth" />
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          <Button type="submit" onClick={payEmi} className="btn btn-info mb-1"><span>PayEmi</span></Button>
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