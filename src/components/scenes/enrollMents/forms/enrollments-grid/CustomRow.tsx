import React from 'react'
import { Modal } from 'react-bootstrap'
import useGrid from '../../../../hooks/useGrid'
import Button from '../../../../shared/button';
import GridCell from '../../../../shared/grid/GridCell'

export default function CustomRow(props: any) {
    const { data, rowProps } = props;
    const convertDateTimeToDate = (date: string) => {
        debugger
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
            <GridCell title="EnrollMentDate" targetField="enrollMentDate"><>{convertDateTimeToDate(data?.enrollMentDate)}</></GridCell>
            <GridCell title="GroupName" targetField="groupName">{data?.groupName}</GridCell>
            <GridCell title="Amount" targetField="amount">{data?.amount}</GridCell>
            <GridCell title="Actions" targetField="Delete" >
                <>
                   <Button onClick={() => {}}>Delete</Button>
                </></GridCell>
        </>
    )
}