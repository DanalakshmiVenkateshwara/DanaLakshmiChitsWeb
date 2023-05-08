import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch';
import Form from '../../shared/form';
import { Col, Row } from 'react-bootstrap';

export default function ContactUs() {
  const [adminDetails, setAdminDetails] = useState<any>({landlineno: '', phone: '', address: ''});
  
    const { response, loading} = useFetch({ url: `/Admin/GetAdminProfile`, Options: { method: 'GET', initialRender: true } });
    useEffect(() => {
      debugger
      let data: any = response;
      debugger
      if(data != undefined){
          debugger
      setAdminDetails({...adminDetails, landlineno:data[0]?.landLineNo})
      setAdminDetails({...adminDetails, phone:data[0]?.mobileNo})
      setAdminDetails({...adminDetails, address:data[0]?.address})
  }
    }, [response])
    return (
    <>
     {/* <Form>
            <Row className="mx-0" >
                <Col xl="3" lg="4" md="6">
                    <Form.Label>Name:/</Form.Label> <Form.Label>{adminDetails.landlineno}</Form.Label>
                </Col>
                <Col xl="3" lg="4" md="6">
                    <Form.Label>Phone:</Form.Label> <Form.Label>{adminDetails.phone}</Form.Label>
                </Col>
                <Col xl="3" lg="4" md="6">
                    <Form.Label>Email:</Form.Label> <Form.Label>{adminDetails.address}</Form.Label>
                </Col>
                <Form />
            </Row>
        </Form> */}
    </>
  )
}