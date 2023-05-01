import React from 'react'
import { Button } from 'react-bootstrap'
import { Row } from 'reactstrap';

interface Iprops {
    disabled?: boolean;
    tabIndex?: number;
    onClick?: () => void;
    label?: string;
    hideIcon?: boolean;
}
export default function Submit(props: Iprops) {
    const { disabled, tabIndex, onClick, label, hideIcon } = props


    return (
        <Row className='mx-0 justify-content-end border-top py-2 px-3'>
            <Button size='sm' onClick={onClick} disabled={disabled} type='submit' tabIndex={tabIndex} className='align-items-center w-auto'>
                {!hideIcon ? <i className='fas fa-save me-2'></i> : <></>} {label ? label : "Save"}
            </Button>
        </Row>
    )
}
