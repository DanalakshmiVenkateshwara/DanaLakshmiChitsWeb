import React from 'react'
import { Modal } from 'react-bootstrap'
import useGrid from '../../../../hooks/useGrid'
import Button from '../../../../shared/button';
import GridCell from '../../../../shared/grid/GridCell'

export default function CustomRow(props: any) {
    const { data, rowProps } = props;
    return (
        <>
            <GridCell title="Name" targetField="name"><>{data?.name}</></GridCell>
            <GridCell title="Phone" targetField="phone"><>{data?.phone}</></GridCell>
            <GridCell title="Email" targetField="email">{data?.eMail}</GridCell>
            <GridCell title="Password" targetField="password">{data?.password}</GridCell>
            <GridCell title="Address" targetField="address" >{data?.address}</GridCell>
            <GridCell title="Actions" targetField="Edit" >
                {/* we need disable for buttons disabled={!data?.isActive} */}
                <><Button  onClick={() => {rowProps.setUserDetails({ ...data }); rowProps.setIsCrete(true) }}>
                   <i  className='fas fa-edit me-2'></i>Edit</Button>
                   <Button onClick={() => {rowProps.setUserDetails({ ...data }); rowProps.setIsDelete(true) }}>
                   <i className='fas fa-delete me-2'></i>Delete</Button>
                </></GridCell>
        </>
    )
}