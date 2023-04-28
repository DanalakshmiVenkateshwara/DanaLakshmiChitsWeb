import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Container } from 'reactstrap'
import Number from '../../shared/form/controls/Number'
import Select from '../../shared/form/controls/Select'
import Submit from '../../shared/form/controls/Submit'
import Text from '../../shared/form/controls/Text'
import Form from '../../shared/form'
import UrlConstants from '../../constants/UrlConstants'
import useFetch from '../../hooks/useFetch'

export default function CreateGroup() {
    // const [groupDetails, setGroupDetails] = useState<any>();
    const { ADD_CHIT_PLANS } = UrlConstants();
    const [groupDetails, setGroupDetails] = useState({ GroupName: "", Amount: 0, Duration: 0,Existed:true,GroupClosed: true, NoOfMembers: 0, InstallMentAmount: 0 });
    const { response, loading, onRefresh: saveGroupDetails } = useFetch({ url: ADD_CHIT_PLANS, Options: { method: 'POST', data: groupDetails } });
    const saveGroup =()=>{
        var data =  groupDetails;
        saveGroupDetails();
        //how can we read the response
    }
    // useEffect(()=>{
        //var test =response
    //     alert("saved successfully")
    // },[response])

    return (
        // <Container fluid>
        //     <Row>CreateGroup</Row>
        //     <Form.Text name='text' label="GroupName" onChange={(d) => { console.log(d) }} />
        //     <Form.Number label="number" name='Amount' />
        //     <Form.Number label="number" name='Duration' />
        //     <Form.Number label="number" name='Duration' />
        //     <Form.Select name='dr' label="select" onChange={(d) => { console.log(d) }}><option>he</option><option>she</option><option>hem</option></Form.Select>
        //     <Form.Number label="number" name='num' />
        //     <Form.Submit onClick={() => { alert('s') }} />
        // </Container>
        <Row className="mx-0">
            <Col xl="3" lg="4" md="6">
                <Form.Text name='' label="GroupName" onChange={(e) => setGroupDetails({ ...groupDetails, GroupName: e })} />
            </Col>
            <Col xl="3" lg="4" md="6">
                <Form.Number name='' label="Amount" onChange={(e) => setGroupDetails({ ...groupDetails, Amount: e })} /> 
            </Col>
            <Col xl="3" lg="4" md="6">
                <Form.Number name='' label="Duration" onChange={(e) => setGroupDetails({...groupDetails, Duration: e})} />
            </Col>
            <Col xl="3" lg="4" md="6">
                <Form.Number name='' label="No OF Memebers" onChange={(e) => setGroupDetails({...groupDetails, NoOfMembers: e})} />
            </Col>
            <Col xl="3" lg="4" md="6">
                <Form.Number name='' label="InstallMentAmount" onChange={(e) => setGroupDetails({...groupDetails, InstallMentAmount: e})} />
            </Col>
           
            <div>
                <Form.Submit onClick={saveGroup} label="Save" />
            </div>
        </Row>
    )
}
