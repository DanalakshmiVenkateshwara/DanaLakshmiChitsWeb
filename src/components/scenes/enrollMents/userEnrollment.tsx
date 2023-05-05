import react, { useEffect, useState } from 'react'
import Number from '../../shared/form/controls/Number'
import Select from '../../shared/form/controls/Select'
import Submit from '../../shared/form/controls/Submit'
import Text from '../../shared/form/controls/Text'
import Form from '../../shared/form'
import { Col, Row } from 'react-bootstrap'
import useFetch from '../../hooks/useFetch'
import useToast from '../../hooks/useToast'
import useNoninitialEffect from '../../hooks/useNoninitialEffect'
import UrlConstants from '../../constants/UrlConstants'
import uniqid from 'uniqid'

export default function UserEnrollment(props: any) {
    const { setIsCrete } = props
    // const [groupDetails, setGroupDetails] = useState<any>();
    const { getToast } = useToast();
    const { ENROLLMENT, GET_USERS } = UrlConstants();
    // const [enrollMents, setenrollMents] = useState<any>()
    const [groupId, setGroupId] = useState<any>();
    const [userId, setUserId] = useState<any>();
    const [amount, setAmount] = useState<any>();
    const [groupsData, setGroupsData] = useState<Array<any>>([]);
    const [usersData, setUsersData] = useState<Array<any>>([]);

    // false means we are getting only active groups
    const { response: groupResponse, loading: groupsLoading } = useFetch({ url: `/User/GetAllChitPlans/${false}`, Options: { method: "GET", initialRender: true } });
    const { response, loading, onRefresh: saveEnrollMents } = useFetch({ url: `/Admin/EnrollMent/${userId}/${groupId}/${true}`, Options: { method: 'POST' } });
    const { response: usersResponse, loading: usersLoading } = useFetch({ url: `/Admin/GetUsers/${0}/${true}`, Options: { method: 'GET', initialRender: true } });
    const enrollUser = () => {
        // var data = enrollMents;
        saveEnrollMents();
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

    useNoninitialEffect(() => {
        let data: any = groupResponse;
        debugger
        setGroupsData(data)
    }, [groupResponse])
    useNoninitialEffect(() => {
        debugger
        let data: any = usersResponse;
        debugger
        setUsersData(data)
    }, [usersResponse])

    const onGroupChange = (e: any) => {
        debugger
        setGroupId(e)
        let amount = groupsData.filter((f: any) => f.id == e)[0].amount;
        setAmount(amount)
    }
    const onUserChange = (e: any) => {
        setUserId(e)
    }


    return (
        <Form noValidate onSubmit={enrollUser}>
            <Row className='mx-0'>
                <Col xl="3" lg="4" md="6">
                    <Form.Select placeholder='choose group name' required name='' errorMsg="GroupName required" label="GroupName" onChange={(e: any) => { onGroupChange(e) }}>
                        {groupsData.map((gd: any) => <option key={uniqid()} value={gd.id} onChange={() => { }}>{gd.groupName}</option>)}
                    </Form.Select>
                </Col>
                <Col xl="3" lg="4" md="6">
                    <Form.Text disabled={true} value={amount} label="Amount" />
                </Col>
                <Col xl="3" lg="4" md="6">
                    <Form.Suggest onSelect={(d: any) => { setUserId(d.id) }} data={usersData} text="name" value='name' name='' errorMsg="UserName required" label="UserName" />
                </Col>
                <Col xl="3" lg="4" md="6">
                    {/* <Form.Select placeholder='choose customer name'  errorMsg="GroupName required" label="UserName" onChange={(e: any) => { onUserChange(e) }}>
                        {usersData.map((gd: any) => <option value={gd.id} onChange={() => { }}>{gd.name}</option>)}
                    </Form.Select> */}
                </Col>
            </Row>
                <Form.Submit label="Enroll" />
        </Form>
    )
}
