import React from 'react'
import { Modal } from 'react-bootstrap'
import useGrid from '../../../../hooks/useGrid'
import Button from '../../../../shared/button';
import GridCell from '../../../../shared/grid/GridCell'

export default function CustomRow(props: any) {
    const convertDateTimeToDate = (date: string) => {
        
        let newDate = date ? date.split('T')[0] : "";
        return newDate;
      }
    const { data, rowProps } = props;
    return (
        <>
            <GridCell title="UserName" targetField="userName"><>{data?.userName}</></GridCell>
            <GridCell title="GroupName" targetField="groupName"><>{data?.groupName}</></GridCell>
            <GridCell title="CurrentMonthEmi" targetField="currentMonthEmi">{data?.currentMonthEmi}</GridCell>
            <GridCell title="Dividend" targetField="dividend">{data?.dividend}</GridCell>
            <GridCell title="PaymentMonth" targetField="paymentMonth">{data?.paymentMonth}</GridCell>
            <GridCell title="TotalAmount" targetField="totalAmount" >{data?.totalAmount}</GridCell>
            <GridCell title="DueAmount" targetField="dueAmount">{data?.dueAmount}</GridCell>
            <GridCell title="PaymentDate" targetField="paymentDate" ><>{convertDateTimeToDate(data?.paymentDate)}</></GridCell>
            {/* <GridCell title="AuctionDate" targetField="auctionDate" ><>{convertDateTimeToDate(data?.auctionDate)}</></GridCell> */}
            {/* <GridCell title="Actions" targetField="Edit" ><><Button onClick={() => { console.log(data); rowProps.setPaymentDetails({ ...data }); rowProps.setIsCrete(true) }}><i className='fas fa-edit me-2'></i>Edit</Button></></GridCell> */}
        </>
    )
}