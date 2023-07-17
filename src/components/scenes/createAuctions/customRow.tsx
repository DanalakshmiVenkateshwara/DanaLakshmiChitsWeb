import React from 'react'
import GridCell from '../../shared/grid/GridCell';

export default function CustomRow(props: any) {
    const { data, rowProps } = props;
    
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
            <GridCell title="GroupName" targetField="groupName"><>{data?.groupName}</></GridCell>
            <GridCell title="Amount" targetField="amount">{data?.amount}</GridCell>
            <GridCell title="BaseAmount" targetField="baseAmount">{data?.baseAmount}</GridCell>
            <GridCell title="StartDate" targetField="startDate"><>{convertDateTimeToDate(data?.startDate)}</></GridCell>
            <GridCell title="StartTime" targetField="startTime">{data?.startTime}</GridCell>
            <GridCell title="EndTime" targetField="endTime"><>{data?.endTime}</></GridCell>
        </>
    )
}
