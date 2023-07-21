import React, { useState } from 'react'
import GridCell from '../../shared/grid/GridCell';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useNoninitialEffect from '../../hooks/useNoninitialEffect';

export default function CustomRow(props: any) {
  debugger
    const { data, rowProps } = props;
    const [ disableParticipate, setDisableParticipate ] = useState<any>(true);
    const  navigate  = useNavigate();
    
    const convertDateTimeToDate = (date: string) => {
        debugger
        if (date == "0001-01-01T00:00:00")
          return ""
        else {
          let newDate = date ? date.split('T')[0] : "";
          return newDate;
         }
      }
      const Participate =()=>{
        debugger
        navigate('/participate')
      }
      // useNoninitialEffect(()=>{

      // },[])
      const disableButton =(date: string)=>{
        debugger
        var date = convertDateTimeToDate(date);
        if(date == new Date().getFullYear() +"-"+ (new Date().getMonth()+1)+"-"+ new Date().getDate())
        {
          setDisableParticipate(false)
        }
        else{
          setDisableParticipate(true)
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
            <GridCell title="" targetField="">
            <Button disabled={disableParticipate} variant='primary' size='sm' onClick={()=>Participate() }>Participate</Button>
             </GridCell>
        </>
    )
}
