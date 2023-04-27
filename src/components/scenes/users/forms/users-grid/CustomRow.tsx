import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import useGrid from '../../../../hooks/useGrid'
import GridCell from '../../../../shared/grid/GridCell'

export default function CustomRow(data: any) {

    return (
        <>
            <GridCell title="Name" targetField="name"><>{data.name}</></GridCell>
            <GridCell title="Phone" targetField="phone"><>{data.phone}</></GridCell>
            <GridCell title="Email" targetField="email">{data.eMail}</GridCell>
            <GridCell title="Password" targetField="password">{data.password}</GridCell>
            <GridCell title="Address" targetField="address" >{data.address}</GridCell>
        </>
    )
}