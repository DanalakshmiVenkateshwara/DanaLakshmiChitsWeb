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
    const { response, loading, onRefresh: saveGroupDetails } = useFetch({ url: USERREGISTRATION, Options: { method: 'POST', data: userDetails } });
    const saveUser = () => {
        saveGroupDetails();
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
        <Form noValidate onSubmit={saveGroupDetails}>
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
                    <Form.Text required name='' value={userDetails.state} label="State" onChange={(e: any) => setUserDetails({ ...userDetails, state: e })} />
                </Col>
                <Form.Suggest data={[{ id: 0, gname: "zero" }, { id: 1, gname: "one" }, { id: 2, gname: "two" }, { id: 3, gname: "three" }]} text='gname' value='gname' name="" />
                <div>
                    <Form.Submit />
                </div>
            </Row>
        </Form>
    )
}
