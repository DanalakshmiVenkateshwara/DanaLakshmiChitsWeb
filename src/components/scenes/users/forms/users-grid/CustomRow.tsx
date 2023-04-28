import React from 'react'
import { Modal } from 'react-bootstrap'
import useGrid from '../../../../hooks/useGrid'
import Button from '../../../../shared/button';
import GridCell from '../../../../shared/grid/GridCell'

export default function CustomRow(props: any) {
    const { data, rowProps } = props;
    return (
        <>
            <GridCell title="Name" targetField="name"><>{data.name}</></GridCell>
            <GridCell title="Phone" targetField="phone"><>{data.phone}</></GridCell>
            <GridCell title="Email" targetField="email">{data.eMail}</GridCell>
            <GridCell title="Password" targetField="password">{data.password}</GridCell>
            <GridCell title="Address" targetField="address" >{data.address}</GridCell>
            <GridCell title="Actions" targetField="Edit" ><><Button onClick={() => { console.log(data); rowProps.setUserDetails({ ...data }); rowProps.setIsCrete(true) }}><i className='fas fa-edit me-2'></i>Edit</Button></></GridCell>
        </>
    )
}