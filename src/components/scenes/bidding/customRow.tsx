import React, { useState } from 'react'
import GridCell from '../../shared/grid/GridCell';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useNoninitialEffect from '../../hooks/useNoninitialEffect';
import useToast from '../../hooks/useToast';
import useStore from '../../store/useStore';
import { useActionTypes } from '../../store/useActionTypes';

export default function CustomRow(props: any) {
    const { data, rowProps } = props;
    const [ disableParticipate, setDisableParticipate ] = useState<any>(true);
    const  navigate  = useNavigate();
    const { getToast } = useToast();
    const { State, Store } = useStore();
    const { getActionTypes } = useActionTypes();
    const actionTypes: any = getActionTypes();
    
    const convertDateTimeToDate = (date: string) => {
        if (date == "0001-01-01T00:00:00")
          return ""
        else {
          let newDate = date ? date.split('T')[0] : "";
          return newDate;
         }
      }
      const Participate =()=>{
        var t = data;
        if(((new Date().getHours() + ":"+ new Date().getMinutes()) > (data?.endTime)))
           getToast('Auction time completed', 'error');
        else{
          Store.update(actionTypes?.updateauction , {...State.auction, 
             currentAuctionId: data?.id,
              userId: State.user.id,
             groupId: data?.groupId,
             noOfMembers:data?.noOfMembers,
             auctionDate:data?.startDate,
             groupValue:data?.amount,
              auctionAmount: 0,
               auctionMonth: data?.auctionMonth})
    
          navigate('/participate')
        }
        
      }
      // useNoninitialEffect(()=>{

      // },[])
      // const disableButton =(date: string)=>{
      //   debugger
      //   var date = convertDateTimeToDate(date);
      //   if(date == new Date().getFullYear() +"-"+ (new Date().getMonth()+1<10?"0"+new Date().getMonth()+1:new Date().getMonth()+1)+"-"+ new Date().getDate())
      //   {
      //     setDisableParticipate(false)
      //   }
      //   else{
      //     setDisableParticipate(true)
      //   }   
      //   return ""   
      // }

    return (
        <>
            <GridCell title="GroupName" targetField="groupName"><>{data?.groupName}</></GridCell>
            <GridCell title="Amount" targetField="amount">{data?.amount}</GridCell>
            <GridCell title="BaseAmount" targetField="baseAmount">{data?.baseAmount}</GridCell>
            <GridCell title="StartDate" targetField="startDate"><>{convertDateTimeToDate(data?.startDate)}</></GridCell>
            <GridCell title="StartTime" targetField="startTime">{data?.startTime}</GridCell>
            <GridCell title="EndTime" targetField="endTime"><>{data?.endTime}</></GridCell>
            <GridCell title="" targetField=""><>{
            <Button disabled={convertDateTimeToDate(data?.startDate) == (new Date().getFullYear() +"-"+ (new Date().getMonth()+1 < 10 ? ("0"+(new Date().getMonth()+1)):(new Date().getMonth()+1))+"-"+ new Date().getDate())&& ((new Date().getHours() + ":"+ new Date().getMinutes()) >=(data?.startTime)) && ((new Date().getHours() + ":"+ new Date().getMinutes()) < (data?.endTime))?false:true} variant='primary' size='sm' onClick={()=>Participate() }>Participate</Button>
          }</></GridCell>
        </>
    )
}
