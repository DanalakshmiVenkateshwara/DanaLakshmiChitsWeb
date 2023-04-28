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

export default function UserEnrollment() {
    // const { setIsCrete } = props
    // const [groupDetails, setGroupDetails] = useState<any>();
    const { getToast } = useToast();
    const { ENROLLMENT } = UrlConstants();
    const [enrollMents, setenrollMents] = useState<any>()
    const [amount, setAmount] =useState<any>();

    // false means we are getting only active groups
    const { response:groupResponse, loading } = useFetch({ url: `/User/GetAllChitPlans/${false}`, Options: { method: "GET", initialRender: true } });
    // const { response, loading, onRefresh: saveEnrollMents } = useFetch({ url: ENROLLMENT, Options: { method: 'POST', data: enrollMents } });
    const enrollUser = () => {
        var data = enrollMents;
        // saveEnrollMents();
        //how can we read the response

    }
    // useNoninitialEffect(() => {
    //     if (response === 1) {
    //         getToast('successfull submitted', 'success');
    //         // setIsCrete(false)
    //     }
    //     else
    //         getToast('Failed submitted', 'error');

    // }, [response])

     useEffect(()=>{

     })

    return (
    <Form noValidate onSubmit={enrollUser}>
            <Row className='mx-0'>
                <Col xl="3" lg="4" md="6">
                    <Form.Select required name='' errorMsg="GroupName required" label="GroupName" onChange={(e: any) => {}} />
                </Col>
                <Col xl="3" lg="4" md="6">
                    <Form.Text value={amount} label="Amount"/>
                </Col>
                <Col xl="3" lg="4" md="6">
                    <Form.Suggest required name='' errorMsg="UserName required" label="UserName" onChange={(e: any) => {}} />
                </Col>
            </Row>

            <div>
                <Form.Submit label="Enroll" />
            </div>
        </Form>
    )
}