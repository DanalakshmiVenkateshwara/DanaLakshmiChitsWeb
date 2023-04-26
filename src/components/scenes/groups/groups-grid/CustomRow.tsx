import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import UrlConstants from '../../../constants/UrlConstants';
import GridCell from '../../../shared/grid/GridCell';
// import GridCell from '../../../shared/grid/GridCell'
// import UrlConstants from '../../../../constants/UrlConstants';
// import useFetch from '../../../../hooks/useFetch';
// import GridCell from '../../../../shared/grid/GridCell'

export default function CustomRow(data: any) {
  const [onLauch , setOnlaunch] = useState(false);
  const { ADD_CHIT_PLANS } = UrlConstants();
  // useEffect(()=>{
  //   const { response, loading } = useFetch(ADD_CHIT_PLANS, 'POST');
  // },[])
  const onLauchClick =()=>{
    // setOnlaunch(true);
  }
    return (
        <>
            <GridCell title="Group Name" targetField='groupName'><>{data.groupName}</></GridCell>
            <GridCell title='Amount' targetField='amount'><>{data.amount}</></GridCell>
            <GridCell title='Duration' targetField="duration">{data.duration}</GridCell>
            <GridCell title='No of Members' targetField="noOfMembers">{data.noOfMembers}</GridCell>
            <GridCell title='Installment Amount' targetField="installmentAmount">{data.installmentAmount}</GridCell>
            <GridCell title='Start Date' targetField="startDate" >{data.startDate}</GridCell>
            <GridCell title='Status' targetField="existed" ><>{data.existed?"Active":"InActive"}</></GridCell>
            <GridCell title="Lauch" targetField="" ><Button variant="primary" onClick={onLauchClick}>Edit</Button></GridCell>
        </>
    )
}