import React from 'react'
import GridCell from '../../../../shared/grid/GridCell'

export default function CustomRow(data: any) {
    return (
        <>
            <GridCell targetField='GroupName'><>{data.GroupName}</></GridCell>
            <GridCell targetField='Amount'><>{data.Amount}</></GridCell>
            <GridCell targetField="Duration">{data.Duration}</GridCell>
            <GridCell targetField="NoofMembers">{data.NoofMembers}</GridCell>
            <GridCell targetField="InstallmentAmount">{data.InstallmentAmount}</GridCell>
            <GridCell targetField="StartDate" >{data.StartDate}</GridCell>
        </>
    )
}