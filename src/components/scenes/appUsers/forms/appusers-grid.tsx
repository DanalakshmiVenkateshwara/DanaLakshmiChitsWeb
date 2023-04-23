import react from 'react';
import { Card, Col, Modal, Row, Table } from "react-bootstrap";
import { CardBody, CardHeader } from "reactstrap";

export default function AppUsersGrid(){
    return(
        <div className="animated fadeIn">  
        <Row>  
         <Col>  
           <Card> 
           <tr>
                 <td>Select Group</td>
                 <td>
                    {/* Implement with react date picker Control */}
                 <input type="text" placeholder='PleaseselectDate'></input>
                 </td>
             </tr> 
             <CardHeader align="center">
                Application Users
                  </CardHeader>  
             <CardBody>  
               <Table hover bordered striped responsive size="sm">  
                 <thead>  
                   <tr>  
                     <th>Name</th>  
                     <th>Phone</th>  
                     <th>State</th> 
                   </tr>  
                 </thead>  
                 <tbody>  
                      <tr>  
                         <td>{"Test"}</td>  
                         <td>{"8888888888"}</td>  
                         <td>{"TS"}</td>  
                       </tr> 
                       <tr>  
                       <td>{"Test"}</td>  
                         <td>{"8888888888"}</td>  
                         <td>{"AP"}</td>
                       </tr>
                 </tbody> 
               </Table>  
             </CardBody>  
           </Card>  
         </Col>  
       </Row>  
     </div>
    );
}