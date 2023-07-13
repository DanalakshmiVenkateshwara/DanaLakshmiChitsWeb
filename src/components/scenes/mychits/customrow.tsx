import react from 'react';
import GridCell from '../../shared/grid/GridCell';


export default function CustomRow(props:any){
    const { data} = props;
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
            <GridCell title="GroupName" targetField="groupName"><>{data?.groupName}</></GridCell>
            <GridCell title="Amount" targetField="amount">{data?.amount}</GridCell>
            <GridCell title="NextAuctionDate" targetField="nextAuctionDate"><>{convertDateTimeToDate(data?.nextAuctionDate)}</></GridCell>
            <GridCell title="NoOfInstallMents" targetField="duration">{data?.duration}</GridCell>
            <GridCell title="NoOfmonthsCompleted" targetField="paidUpto" >{data?.paidUpto}</GridCell>
            <GridCell title="Status" targetField="paidUpto" ><>{data?.userChitSatus? "Raised":"NotRaised"}</></GridCell>
    </>
    );
  }