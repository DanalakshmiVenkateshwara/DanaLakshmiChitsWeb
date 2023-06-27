import react from 'react';
import { Button } from 'react-bootstrap';
import GridCell from '../../shared/grid/GridCell';
import { useNavigate } from "react-router-dom";

export default function CustomRow(props:any){
    const { data} = props;
    const  navigate  = useNavigate();
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
       {/* <GridCell title="UserName" targetField="userName"><>{data?.userName}</></GridCell> */}
      <GridCell title="UserName" targetField="userName">{data?.userName}</GridCell>
      <GridCell title="GroupName" targetField="groupName">{data?.groupName}</GridCell>
      <GridCell title="AuctionDate" targetField="auctionDate"><>{convertDateTimeToDate(data?.auctionDate)}</></GridCell>
      <GridCell title="AuctionMonth" targetField="paidUpto">{data?.paidUpto}</GridCell>
      <GridCell title="Amount" targetField="amount">{data?.amount}</GridCell>
      <GridCell title="Dividend" targetField="dividend">{data?.dividend}</GridCell>
      <GridCell title="" targetField="">
        <Button variant='primary' size='sm' onClick={()=>navigate('/participate')}>Participate</Button>
      </GridCell>
    </>
    );
  }