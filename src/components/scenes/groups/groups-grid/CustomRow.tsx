import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import UrlConstants from '../../../constants/UrlConstants';
import useFetch from '../../../hooks/useFetch';
import GridCell from '../../../shared/grid/GridCell';
// import GridCell from '../../../shared/grid/GridCell'
// import UrlConstants from '../../../../constants/UrlConstants';
// import useFetch from '../../../../hooks/useFetch';
// import GridCell from '../../../../shared/grid/GridCell'

export default function CustomRow(props: any) {
  const { data, rowProps } = props
  const [onLauch, setOnlaunch] = useState(false);

  const { ADD_CHIT_PLANS } = UrlConstants();


  const { response, loading, onRefresh: saveGroupDetails } = useFetch({ url: ADD_CHIT_PLANS, Options: { method: 'POST', data: data } });
  const onLauchClick = () => {
    debugger
    saveGroupDetails();
    window.location.reload();
    // const { response, loading } = useFetch({ url: `/User/GetAllChitPlans/${false}`, Options: { method: "GET", initialRender: true } });
  }
  const convertDateTimeToDate = (date: string) => {
    debugger
    let newDate = date ? date.split('T')[0] : "";
    return newDate;
  }
  // useEffect(()=>{
  //   const { response, loading } = useFetch({ url: `/User/GetAllChitPlans/${false}`, Options: { method: "GET", initialRender: true } });
  // },[data?.existed])

  return (
    <>
      <GridCell title="Group Name" targetField='groupName'><>{data?.groupName}</></GridCell>
      <GridCell title='Amount' targetField='amount'><>{data?.amount}</></GridCell>
      <GridCell title='Duration' targetField="duration">{data?.duration}</GridCell>
      <GridCell title='No of Members' targetField="noOfMembers">{data?.noOfMembers}</GridCell>
      <GridCell title='Installment Amount' targetField="installmentAmount">{data?.installmentAmount}</GridCell>
      <GridCell title='Start Date/EndDate' targetField="startDate" ><>{convertDateTimeToDate(data?.startDate)}</></GridCell>
      <GridCell title='Status' targetField="existed" ><>{data?.existed ? "Active" : "InActive"}</></GridCell>
      <GridCell title="Lauch" targetField="" ><Button variant="primary" size='sm' onClick={onLauchClick}>{data?.existed ? "Close" : "Start"}</Button></GridCell>
    </>
  )
}