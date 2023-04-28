import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Container } from 'reactstrap'
import Number from '../../shared/form/controls/Number'
import Select from '../../shared/form/controls/Select'
import Submit from '../../shared/form/controls/Submit'
import Text from '../../shared/form/controls/Text'
import Form from '../../shared/form'
import UrlConstants from '../../constants/UrlConstants'
import useFetch from '../../hooks/useFetch'
import useToast from '../../hooks/useToast'
import useNoninitialEffect from '../../hooks/useNoninitialEffect'
export default function CreateGroup(props: any) {
    const { setIsCrete } = props
    // const [groupDetails, setGroupDetails] = useState<any>();
    const { getToast } = useToast();
    const { ADD_CHIT_PLANS } = UrlConstants();
    const [groupDetails, setGroupDetails] = useState({ GroupName: "", Amount: 0, Duration: 0, Existed: true, GroupClosed: true, NoOfMembers: 0, InstallMentAmount: 0 });
    const { response, loading, onRefresh: saveGroupDetails } = useFetch({ url: ADD_CHIT_PLANS, Options: { method: 'POST', data: groupDetails } });
    const saveGroup = () => {
        var data = groupDetails;
        saveGroupDetails();
        //how can we read the response

    }
    useNoninitialEffect(() => {
        if (response === 1) {
            getToast('successfull submitted', 'success');
            setIsCrete(false)
        }
        else
            getToast('Failed submitted', 'error');

    }, [response])
    return (
        <Form noValidate onSubmit={saveGroup}>
            <Row className='mx-0'>
                <Col xl="3" lg="4" md="6">
                    <Form.Text required name='' errorMsg="group name required" label="GroupName" onChange={(e: any) => setGroupDetails({ ...groupDetails, GroupName: e })} />
                </Col>
                <Col xl="3" lg="4" md="6">
                    <Form.Number required name='' errorMsg="Amount name required" label="Amount" onChange={(e: any) => setGroupDetails({ ...groupDetails, Amount: e })} />
                </Col>
                <Col xl="3" lg="4" md="6">
                    <Form.Number required name='' errorMsg="Duration required" label="Duration" onChange={(e: any) => setGroupDetails({ ...groupDetails, Duration: e })} />
                </Col>
                <Col xl="3" lg="4" md="6">
                    <Form.Number required name='' errorMsg="No OF Memebers required" label="No OF Memebers" onChange={(e: any) => setGroupDetails({ ...groupDetails, NoOfMembers: e })} />
                </Col>
                <Col xl="3" lg="4" md="6">
                    <Form.Number required name='' errorMsg="InstallMent Amount required" label="InstallMentAmount" onChange={(e: any) => setGroupDetails({ ...groupDetails, InstallMentAmount: e })} />
                </Col>
            </Row>
            <div>
                <Form.Submit />
            </div>
        </Form>
    )
}


