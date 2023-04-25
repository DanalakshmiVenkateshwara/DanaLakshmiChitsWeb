import React from 'react'
import { Button } from 'react-bootstrap'
import GridCell from '../../../../shared/grid/GridCell'

export default function CustomRow(data: any) {
    return (
        <>
            <GridCell title="Group Name" targetField='GroupName'><>{data.GroupName}</></GridCell>
            <GridCell title='Amount' targetField='Amount'><>{data.Amount}</></GridCell>
            <GridCell title='Duration' targetField="Duration">{data.Duration}</GridCell>
            <GridCell title='No of Members' targetField="NoofMembers">{data.NoofMembers}</GridCell>
            <GridCell title='Installment Amount' targetField="InstallmentAmount">{data.InstallmentAmount}</GridCell>
            <GridCell title='Start Date' targetField="StartDate" ><Button>{data.StartDate}</Button></GridCell>
        </>
    )
}