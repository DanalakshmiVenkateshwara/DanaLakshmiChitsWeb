import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import UrlConstants from '../../constants/UrlConstants';
import useFetch from '../../hooks/useFetch';
import Form from '../../shared/form'

export default function CreateUser() {
    const [userDetails, setUserDetails] = useState<any>({Name: '', Phone: '', Email: '', Password: '',Aadhar:'', Address: '', City: '', State:''});
    const { USERREGISTRATION } = UrlConstants();
    const { response, loading, onRefresh: saveGroupDetails } = useFetch({ url: USERREGISTRATION, Options: { method: 'POST', data: userDetails } });
    const saveUser = () => {
        saveGroupDetails();
    }

    return (
        <Row className="mx-0" >
            <Col xl="3" lg="4" md="6">
                <Form.Text name='' label="UserName" onChange={(e: any) => setUserDetails({...userDetails, Name: e})} />
            </Col>
            <Col xl="3" lg="4" md="6">
                <Form.Text name='' label="Phone" onChange={(e: any) => setUserDetails({ ...userDetails, Phone: e })} />
            </Col>
            <Col xl="3" lg="4" md="6">
                <Form.Text name='' label="Email" onChange={(e: any) => setUserDetails({ ...userDetails, Email: e })} />
            </Col>
            <Col xl="3" lg="4" md="6">
                <Form.Text name='' label="Password" onChange={(e: any) => setUserDetails({ ...userDetails, Password: e })} />
            </Col>
            <Col xl="3" lg="4" md="6">
                <Form.Text name='' label="Aadhar" onChange={(e: any) => setUserDetails({ ...userDetails, Aadhar: e })} />
            </Col>
            <Col xl="3" lg="4" md="6">
                <Form.Text name='' label="Address" onChange={(e: any) => setUserDetails({ ...userDetails, Address: e })} />
            </Col>
            <Col xl="3" lg="4" md="6">
                <Form.Text name='' label="City" onChange={(e: any) => setUserDetails({ ...userDetails, City: e })} />
            </Col>
            <Col xl="3" lg="4" md="6">
                <Form.Text name='' label="State" onChange={(e: any) => setUserDetails({ ...userDetails, State: e })} />
            </Col>
            <div>
                <Form.Submit onClick={saveUser} label="Save" />
            </div>
        </Row>
    )
}