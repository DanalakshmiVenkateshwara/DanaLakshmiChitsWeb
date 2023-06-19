import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch';
import Form from '../../shared/form';
import { Col, Row } from 'react-bootstrap';
import useNoninitialEffect from '../../hooks/useNoninitialEffect';
export default function UserProfile() {
    const [userDetails, setUserDetails] = useState<any>({name: '', phone: '', eMail: '',aadhar: '', address: ''});
    const { response: usersResponse, loading: usersLoading } = useFetch({ url: `/Admin/GetUsers/${2}/${true}`, Options: { method: 'GET', initialRender: true } });
  
    useEffect(() => {
        
        let data: any = usersResponse;
        
        if(data != undefined){
            
        setUserDetails({...userDetails, name:data[0]?.name})
        setUserDetails({...userDetails, phone:data[0]?.phone})
        setUserDetails({...userDetails, eMail:data[0]?.eMail})
        setUserDetails({...userDetails, aadhar:data[0]?.aadhar})
        setUserDetails({...userDetails, address:data[0]?.address})
    }
      }, [usersResponse])
    return (
   <>
    {/* <Form>
            <Row className="mx-0" >
                <Col xl="3" lg="4" md="6">
                    <Form.Label>Name:/</Form.Label> <Form.Label>{userDetails.name}</Form.Label>
                </Col>
                <Col xl="3" lg="4" md="6">
                    <Form.Label>Phone:</Form.Label> <Form.Label>{userDetails.phone}</Form.Label>
                </Col>
                <Col xl="3" lg="4" md="6">
                    <Form.Label>Email:</Form.Label> <Form.Label>{userDetails.eMail}</Form.Label>
                </Col>
                <Col xl="3" lg="4" md="6">
                    <Form.Label>Aadhar:</Form.Label> <Form.Label>{userDetails.aadhar}</Form.Label>
                </Col>
                <Col xl="3" lg="4" md="6">
                    <Form.Label>Address:</Form.Label> <Form.Label>{userDetails.address}</Form.Label>
                </Col>
                <Form />
            </Row>
        </Form> */}
   </>
  )
}
