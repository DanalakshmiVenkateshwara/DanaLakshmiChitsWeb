import React, { useEffect, useState } from 'react'
import { Button, Col, Form as RForm, OverlayTrigger, Row } from 'react-bootstrap'
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
import ToolTip from '../../shared/tooltip/ToolTip'
export default function CreateGroup(props: any) {
    const { setIsCrete } = props
    const { getToast } = useToast();
    const { ADD_CHIT_PLANS } = UrlConstants();
    const [groupDetails, setGroupDetails] = useState({ GroupName: "", Amount: 0, Duration: 0, Existed: true, GroupClosed: true, NoOfMembers: 0, InstallMentAmount: 0,StartDate:"" });
    const { response, loading, onRefresh: saveGroupDetails } = useFetch({ url: ADD_CHIT_PLANS, Options: { method: 'POST', data: groupDetails } });
    const { response:validateGroupResponse, loading:validateGroupLoading, onRefresh: validateGroupName } = useFetch({ url: `/Admin/ValidateGroup?groupName=${groupDetails.GroupName}`, Options: { method: 'GET'} });

    const saveGroup = () => {
        if(groupDetails.StartDate.length<=0)
          getToast('Start Date Is Mandatory', 'error');
        else if(groupDetails.GroupName.length>0 && groupDetails.Amount>0 &&groupDetails.Duration>0&& groupDetails.NoOfMembers>0 && groupDetails.InstallMentAmount>0 ){
            var data = groupDetails;
            saveGroupDetails();
        }
        else{
            getToast('All are Mandatory.', 'error');
        }
        
        //how can we read the response

    }
    useNoninitialEffect(() => {
        if (response === 1) {
            getToast('successfull submitted', 'success');
            setIsCrete(false)
            props.CompletedGroupDetails();
        }
        else
            getToast('Failed submitted', 'error');

    }, [response])
    useNoninitialEffect(() => {
        
        var validateGroupName:any = validateGroupResponse
        if (validateGroupName >= 1) {
            getToast('GroupName existed please change the groupName', 'error');
        }
    }, [validateGroupResponse])
    const groupNameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGroupDetails({ ...groupDetails, GroupName: e.target.value})
    };
    const groupNameBlurHandler = () => {
        validateGroupName();
    };
    const onDateChangehandler =(e:any)=>{
        if(new Date(e.currentTarget.value).toLocaleDateString() <= new Date().toLocaleDateString())
          getToast('Start Date must be future Date', 'error');
         else
        setGroupDetails({ ...groupDetails, StartDate: e.target.value})
    }

    return (
        <Form noValidate onSubmit={saveGroup}>
            <Row className='mx-0'>
            <Col xl="3" lg="4" md="6">
            <RForm.Label>{"GroupName"}</RForm.Label>
            <RForm.Control
              required
              type="text"
              placeholder={"EnterGroupName"}
              maxLength={25}
              value={groupDetails.GroupName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                groupNameChangeHandler(e)
              }
              onBlur={() => groupNameBlurHandler()}
            />
                </Col>
                <Col xl="3" lg="4" md="6">
                    <Form.Number required name='' errorMsg="Amount is required" label="Amount" onChange={(e: any) => setGroupDetails({ ...groupDetails, Amount: e })} />
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
                <Col xl="3" lg="4" md="6">
                <RForm.Label>{"StartDate"}</RForm.Label>
                    <RForm.Control type="date" value={groupDetails.StartDate} defaultValue={groupDetails.StartDate} onChange={(e:any)=> onDateChangehandler(e)}  placeholder="Choosedate"  />
                </Col>
            </Row>
            <Form.Submit />
        </Form>
    )
}


