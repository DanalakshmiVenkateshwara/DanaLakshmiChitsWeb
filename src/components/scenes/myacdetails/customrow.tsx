import React from 'react'
import GridCell from '../../shared/grid/GridCell'

export default function CustomROw(props:any) {
    const { data} = props;
    const convertDateTimeToDate = (date: string) => {
        debugger
        let newDate = date ? date.split('T')[0] : "";
        return newDate;
      }
  return (
   <>
               <GridCell title="Date" targetField="paymentDate"><>{convertDateTimeToDate(data?.paymentDate)}</></GridCell>
                <GridCell title="Amount" targetField="totalAmount">{data?.totalAmount}</GridCell>
                <GridCell title="month Of Installment" targetField="paymentMonth">{data?.paymentMonth}</GridCell>
   </>
  )
}