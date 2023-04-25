import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import GridCell from '../../../../shared/grid/GridCell'

export default function CustomRow(data: any) {
    return (
        <>
            <GridCell title="Group Name" targetField='groupName'><>{data.groupName}</></GridCell>
            <GridCell title='Amount' targetField='amount'><>{data.amount}</></GridCell>
            <GridCell title='Duration' targetField="duration">{data.duration}</GridCell>
            <GridCell title='No of Members' targetField="noOfMembers">{data.noOfMembers}</GridCell>
            <GridCell title='Installment Amount' targetField="installmentAmount">{data.installmentAmount}</GridCell>
            <GridCell title='Start Date' targetField="startDate" ><Button>{data.startDate}</Button></GridCell>
        </>
    )
}