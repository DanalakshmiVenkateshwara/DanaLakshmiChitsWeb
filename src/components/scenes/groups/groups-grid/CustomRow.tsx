import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import UrlConstants from '../../../constants/UrlConstants';
import useFetch from '../../../hooks/useFetch';
import useNoninitialEffect from '../../../hooks/useNoninitialEffect';
import useToast from '../../../hooks/useToast';
import GridCell from '../../../shared/grid/GridCell';
// import GridCell from '../../../shared/grid/GridCell'
// import UrlConstants from '../../../../constants/UrlConstants';
// import useFetch from '../../../../hooks/useFetch';
// import GridCell from '../../../../shared/grid/GridCell'

export default function CustomRow(props: any) {
  const { data, rowProps } = props
  const [onLauch, setOnlaunch] = useState(false);
  const { ADD_CHIT_PLANS } = UrlConstants();
  const { getToast } = useToast();
  const { response, loading, onRefresh: saveGroupDetails } = useFetch({ url: ADD_CHIT_PLANS, Options: { method: 'POST', data: data } });

  const convertDateTimeToDate = (date: string) => {
    debugger
    if (date == "0001-01-01T00:00:00")
      return ""
    else {
      let newDate = date ? date.split('T')[0] : "";
      return newDate;
     }
  }

  useNoninitialEffect(() => {
    if (response == 1) {
      getToast('successfully updated', 'success');
      rowProps.CompletedGroupDetails();
    }
    else {
      getToast('successfully updated', 'warning');
    }
  }, [response])
  
  const deleteGroup =()=>{
    data.isDelete = true ;
    // we need to check the confm 
     saveGroupDetails();
  }

  return (
    <>
      <GridCell title="Group Name" targetField='groupName'><>{data?.groupName}</></GridCell>
      <GridCell title='Amount' targetField='amount'><>{data?.amount}</></GridCell>
      <GridCell title='Duration' targetField="duration">{data?.duration}</GridCell>
      <GridCell title='No of Members' targetField="noOfMembers">{data?.noOfMembers}</GridCell>
      <GridCell title='Installment Amount' targetField="installmentAmount">{data?.installmentAmount}</GridCell>
      <GridCell title='Start Date' targetField="startDate" ><>{convertDateTimeToDate(data?.startDate)}</></GridCell>
      <GridCell title='CloseDate' targetField="etartDate" ><>{convertDateTimeToDate(data?.endDate)}</></GridCell>
      <GridCell title='Status' targetField="existed" ><>{data?.isDelete? "Closed" :(data?.existed ? "InProgress" : "UpComing")}</></GridCell>
      <GridCell title="Lauch" targetField="">
        <>{!data?.groupClosed && <Button variant="primary" size='sm' onClick={saveGroupDetails}>{data?.existed ? "Close" : "Start"}  </Button>}
        </>
      </GridCell>
      <GridCell title="Delete" targetField="">
        <>{!data?.groupClosed && <Button disabled={data?.existed} variant="primary" size='sm' onClick={deleteGroup}>Delete</Button>}
        </>
      </GridCell>
    </>
  )
}