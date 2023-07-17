import react, { useEffect, useState } from 'react'
import Number from '../../shared/form/controls/Number'
import Select from '../../shared/form/controls/Select'
import Submit from '../../shared/form/controls/Submit'
import Text from '../../shared/form/controls/Text'
import Form from '../../shared/form'
import { Col, Row,Form as RForm } from 'react-bootstrap'
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
    const [enrollMentsCount, setEnrollMentsCount] = useState<number>(0);

    // false means we are getting only active groups
    const { response: groupResponse, loading: groupsLoading } = useFetch({ url: `/User/GetAllChitPlans/${false}`, Options: { method: "GET", initialRender: true } });
    const { response, loading, onRefresh: saveEnrollMents } = useFetch({ url: `/Admin/EnrollMent/${userId}/${groupId}/${true}`, Options: { method: 'POST' } });
    const { response: usersResponse, loading: usersLoading } = useFetch({ url: `/Admin/GetUsers/${0}/${true}`, Options: { method: 'GET', initialRender: true } });
    const { response: enrollmentCountResponse, loading: enrollmentCountLoading,onRefresh: enrollmentCount } = useFetch({ url: `/Admin/GetEnrollMentsCount?groupId=${groupId}`, Options: { method: 'GET', initialRender: false } });
    const enrollUser = () => {
        
        let error: Array<string> = [];
        if(enrollMentsCount >= groupsData.filter((f: any) => f.id == groupId)[0]?.noOfMembers)
        error.push("Group registration Completed");
        if(groupId==undefined|| groupId == -1)
        error.push("Groupname is Mandatory");
        if(amount==undefined|| amount =="")
        error.push("Amount is Mandatory");
        if(userId==undefined)
        error.push("UserName is Mandatory");
        if (error.length > 0) {
            getToast(error.join(", ").toString(), 'error');
        }
        else
        saveEnrollMents();
        // var data = enrollMents;
        
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
        
        setGroupsData(data)
    }, [groupResponse])
    useNoninitialEffect(() => {
        let data: any = usersResponse;
        setUsersData(data)
    }, [usersResponse])

    useNoninitialEffect(() => {
        let data: any = enrollmentCountResponse;
        setEnrollMentsCount(data);
        var noOfMembers  = groupsData.filter((f: any) => f.id == groupId)[0].noOfMembers;
        if(data == noOfMembers || data >= noOfMembers)
        getToast('Group registration Completed', 'error');
    }, [enrollmentCountResponse])

    const onUserChange = (e: any) => {
        setUserId(e);
    }
    const onGroupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGroupId(e.target.value)
        if(e.target.value != '-1'){
        let amount = groupsData.filter((f: any) => f.id == e.target.value)[0].amount;
        setAmount(amount);
        enrollmentCount();
        }
        else(setAmount(''))
      }


    return (
        <Form noValidate onSubmit={enrollUser}>
            <Row className='mx-0'>
                <Col xl="3" lg="4" md="6">
                    <label>Select Group</label>
                    <RForm.Control
            as="select"
            className="col-6 col-sm-3 col-xl-2"
            size="sm"
            value={groupId}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onGroupChange(e)
            }
          >
            <option key={-1} value={-1}>
              {"..Choose group.."}
            </option>
            {groupsData.map((item) => {
              
              return (
                <option key={item.id} value={item.id}>
                  {item.groupName}
                </option>
              );
            })}
          </RForm.Control>
                    {/* <Form.Select placeholder='choose group name' required name='' errorMsg="GroupName required" label="GroupName" onChange={(e: any) => { onGroupChange(e) }}>
                        {groupsData.map((gd: any) => <option key={uniqid()} value={gd.id} onChange={() => { }}>{gd.groupName}</option>)}
                    </Form.Select> */}
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
