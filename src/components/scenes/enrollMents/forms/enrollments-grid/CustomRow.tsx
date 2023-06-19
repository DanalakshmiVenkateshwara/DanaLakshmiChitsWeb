import React from 'react'
import { Modal } from 'react-bootstrap'
import useFetch from '../../../../hooks/useFetch';
import useGrid from '../../../../hooks/useGrid'
import useNoninitialEffect from '../../../../hooks/useNoninitialEffect';
import Button from '../../../../shared/button';
import GridCell from '../../../../shared/grid/GridCell'

export default function CustomRow(props: any) {
    const { data, rowProps } = props;
    const { response, loading, onRefresh: saveEnrollMents } = useFetch({ url: `/Admin/EnrollMent/${data?.userId}/${data?.groupId}/${data?.isActive}`, Options: { method: 'POST' } });
    
    const onDelete =()=>{
         if(data!=null)
        data.isActive =false;
        saveEnrollMents();
    }
    useNoninitialEffect (()=>{
        if(response==1)
        rowProps.getEnrollMents();
    },[response])
    const convertDateTimeToDate = (date: string) => {
        
        if (date == "0001-01-01T00:00:00")
          return ""
        else {
          let newDate = date ? date.split('T')[0] : "";
          return newDate;
         }
      }
    return (
        <>
            <GridCell title="UserName" targetField="userName"><>{data?.userName}</></GridCell>
            <GridCell title="GroupName" targetField="groupName">{data?.groupName}</GridCell>
            <GridCell title="Amount" targetField="amount">{data?.amount}</GridCell>
            <GridCell title="EnrollMentDate" targetField="enrollMentDate"><>{convertDateTimeToDate(data?.enrollMentDate)}</></GridCell>
            <GridCell title="CloseDate" targetField="closeDate"><>{convertDateTimeToDate(data?.closeDate)}</></GridCell>
            <GridCell title="Actions" targetField=""><>{data?.isActive &&<Button onClick={onDelete}>Delete</Button>}</></GridCell>
        </>
    )
}