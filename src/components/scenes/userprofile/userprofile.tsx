import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch';
import Form from '../../shared/form';
import { Col, Row, Form as RForm } from 'react-bootstrap';
import useNoninitialEffect from '../../hooks/useNoninitialEffect';
import Card from '../../shared/card';
import { useStore } from '../../store';
export default function UserProfile() {
    
  const {State,Store} = useStore();
    const [userDetails, setUserDetails] = useState<any>({name: '', phone: '', eMail: '',aadhar: '', address: ''});
    const { response: usersResponse, loading: usersLoading } = useFetch({ url: `/Admin/GetUsers/${State.user.id}/${true}`, Options: { method: 'GET', initialRender: true } });
  
    useEffect(() => {
        let data: any = usersResponse;
        
        if(data != undefined){
            
        setUserDetails({...userDetails, name:data[0]?.name,phone:data[0]?.phone,eMail:data[0]?.eMail})
        }
      }, [usersResponse])
    return (
   <>
    <Card className='mt-3'>
            <Row className="mx-0" >
                <Row>
                <Col xl="3" lg="4" md="6">
                    <RForm.Label style={{fontWeight:'bold'}}>Name:</RForm.Label> <RForm.Label>{userDetails.name}</RForm.Label>
                </Col></Row>
                <Row><Col xl="3" lg="4" md="6">
                    <RForm.Label style={{fontWeight:'bold'}}>Phone:</RForm.Label> <RForm.Label>{userDetails.phone}</RForm.Label>
                </Col></Row>
                <Row><Col xl="3" lg="4" md="6">
                    <RForm.Label style={{fontWeight:'bold'}}>Email:</RForm.Label> <RForm.Label>{userDetails.eMail}</RForm.Label>
                </Col></Row>
                {/* <Col xl="3" lg="4" md="6">
                    <Form.Label>Aadhar:</Form.Label> <Form.Label>{userDetails.aadhar}</Form.Label>
                </Col>
                <Col xl="3" lg="4" md="6">
                    <Form.Label>Address:</Form.Label> <Form.Label>{userDetails.address}</Form.Label>
                </Col> */}
                {/* <Form /> */}
            </Row>
        </Card>
   </>
  )
}
