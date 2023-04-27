import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import UrlConstants from '../../../constants/UrlConstants';
import useFetch from '../../../hooks/useFetch';
import GridCell from '../../../shared/grid/GridCell';
// import GridCell from '../../../shared/grid/GridCell'
// import UrlConstants from '../../../../constants/UrlConstants';
// import useFetch from '../../../../hooks/useFetch';
// import GridCell from '../../../../shared/grid/GridCell'

export default function CustomRow(data: any) {
  const [onLauch , setOnlaunch] = useState(false);
  
  const { ADD_CHIT_PLANS } = UrlConstants();

  
  const { response, loading, onRefresh: saveGroupDetails } = useFetch({ url: ADD_CHIT_PLANS, Options: { method: 'POST', data: data } });
  const onLauchClick =()=>{
    debugger
    saveGroupDetails();
  }
  const onCloseClick =()=>{
    saveGroupDetails();
  }
  
    return (
      
        <>
        
            <Button variant="primary" onClick={onLauchClick}>ClosedGroups</Button>
            <GridCell title="Group Name" targetField='groupName'><>{data?.groupName}</></GridCell>
            <GridCell title='Amount' targetField='amount'><>{data?.amount}</></GridCell>
            <GridCell title='Duration' targetField="duration">{data?.duration}</GridCell>
            <GridCell title='No of Members' targetField="noOfMembers">{data?.noOfMembers}</GridCell>
            <GridCell title='Installment Amount' targetField="installmentAmount">{data?.installmentAmount}</GridCell>
            <GridCell title='Start Date/EndDate' targetField="startDate" >{data?.startDate}</GridCell>
            <GridCell title='Status' targetField="existed" ><>{data?.existed?"Active":"InActive"}</></GridCell>
            <GridCell title="Lauch" targetField="" ><Button disabled ={data?.existed} variant="primary" onClick={onLauchClick}>Start</Button></GridCell>
            <GridCell title="Close" targetField="" ><Button disabled ={data?.groupClosed} variant="primary" onClick={onCloseClick}>Close</Button></GridCell>
        </>
    )
}