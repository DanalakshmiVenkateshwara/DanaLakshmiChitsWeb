import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import UrlConstants from '../../constants/UrlConstants';
import useFetch from '../../hooks/useFetch';
import useNoninitialEffect from '../../hooks/useNoninitialEffect';
import useToast from '../../hooks/useToast';
import Form from '../../shared/form'

export default function CreateUser(props: any) {
    const { userDetails, setUserDetails, setIsCrete } = props;
    const { getToast } = useToast()
    const { USERREGISTRATION } = UrlConstants();
    const { response, loading, onRefresh: saveUserDetails } = useFetch({ url: USERREGISTRATION, Options: { method: 'POST', data: userDetails } });
    const saveUser = () => {
        saveUserDetails();
    }
    useNoninitialEffect(() => {
        if (response === 1) {
            getToast("saved/updated successfully", 'success');
            setIsCrete(false);
        }
        else {
            getToast("saved/updated failed", 'error')
        }
    }, [response])


    return (
        <Form noValidate onSubmit={saveUserDetails}>
            <Row className="mx-0" >
                <Col xl="3" lg="4" md="6">
                    <Form.Text required name='' value={userDetails.name} label="UserName" onChange={(e: any) => setUserDetails({ ...userDetails, name: e })} />
                </Col>
                <Col xl="3" lg="4" md="6">
                    <Form.Text required name='' value={userDetails.phone} label="Phone" onChange={(e: any) => setUserDetails({ ...userDetails, phone: e })} />
                </Col>
                <Col xl="3" lg="4" md="6">
                    <Form.Text required name='' value={userDetails.eMail} label="Email" onChange={(e: any) => setUserDetails({ ...userDetails, eMail: e })} />
                </Col>
                <Col xl="3" lg="4" md="6">
                    <Form.Text required name='' value={userDetails.password} label="Password" onChange={(e: any) => setUserDetails({ ...userDetails, password: e })} />
                </Col>
                <Col xl="3" lg="4" md="6">
                    <Form.Text required name='' value={userDetails.aadhar} label="Aadhar" onChange={(e: any) => setUserDetails({ ...userDetails, aadhar: e })} />
                </Col>
                <Col xl="3" lg="4" md="6">
                    <Form.Text required name='' value={userDetails.address} label="Address" onChange={(e: any) => setUserDetails({ ...userDetails, address: e })} />
                </Col>
                <Col xl="3" lg="4" md="6">
                    <Form.Text required name='' value={userDetails.city} label="City" onChange={(e: any) => setUserDetails({ ...userDetails, city: e })} />
                </Col>
                <Col xl="3" lg="4" md="6">
                    {/* <Form.Text required name='' value={userDetails.state} label="State" onChange={(e: any) => setUserDetails({ ...userDetails, state: e })} /> */}
                    <Form.Select placeholder='choose state' errorMsg="state required" label="State" onChange={(e: any) => setUserDetails({ ...userDetails, state: e })}>
                        <option value={"Telangana"}>{"Telangana"}</option>
                        <option value={"AndraPradesh"}>{"AndraPradesh"}</option>
                    </Form.Select>
                </Col>
                <Form.Submit />
            </Row>
        </Form>
    )
}
