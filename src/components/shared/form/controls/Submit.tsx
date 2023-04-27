import React from 'react'
import { Button } from 'react-bootstrap'

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
        <Button size='sm' onClick={onClick} disabled={disabled} type='button' tabIndex={tabIndex}>
            {!hideIcon ? <i className='fas fa-save me-2'></i> : <></>} {label ? label : "Save"}
        </Button>
    )
}
