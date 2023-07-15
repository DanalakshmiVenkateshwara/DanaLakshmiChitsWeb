import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch';
import Form from '../../shared/form';
import { Col, Row, Form as RForm } from 'react-bootstrap';
import Card from '../../shared/card';
import { text } from 'node:stream/consumers';

export default function ContactUs() {
  const [adminDetails, setAdminDetails] = useState<any>({landlineno: '', phone: '',email:'', address: ''});
  
    const { response, loading} = useFetch({ url: `/Admin/GetAdminProfile`, Options: { method: 'GET', initialRender: true } });
    useEffect(() => {
      debugger
      let data: any = response;
      
      if(data != undefined){
          
      setAdminDetails({...adminDetails, landlineno:data?.landLineNo,phone:data?.mobileNo,address:data?.address,email:data?.email})
      // setAdminDetails({...adminDetails, phone:data[0]?.mobileNo})
      // setAdminDetails({...adminDetails, address:data[0]?.address})
  }
    }, [response])
    return (
    <>
     <Card>
            <Row className="mx-0" >
              <Row>
                <Col xl="3" lg="4" md="6">
                    <RForm.Label style={{fontWeight:'bold'}} >Landlineno:</RForm.Label> <RForm.Label>{adminDetails.landlineno}</RForm.Label>
                </Col></Row>
                <Row><Col xl="3" lg="4" md="6">
                    <RForm.Label style={{fontWeight:'bold'}}>Phone:</RForm.Label> <RForm.Label>{adminDetails.phone}</RForm.Label>
                </Col></Row>
                <Row> <Col xl="3" lg="4" md="6">
                    <RForm.Label style={{fontWeight:'bold'}}>Email:</RForm.Label> <RForm.Label>{adminDetails.email}</RForm.Label>
                </Col></Row>
                <Row> <Col xl="6" lg="4" md="6">
                    <RForm.Label style={{fontWeight:'bold'}}>Address:</RForm.Label> <RForm.Label>{adminDetails.address}</RForm.Label>
                </Col></Row>
                <Form />
            </Row>
        </Card>
    </>
  )
}