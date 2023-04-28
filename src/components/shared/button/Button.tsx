import React from 'react'
import { Button as BSButton } from 'react-bootstrap'

interface Iprops {
    children?: string | JSX.Element[] | JSX.Element | any;
    onClick?: () => void;
    className?: string;
}
export default function Button(props: Iprops) {
    const { children, onClick, className } = props;
    return (
        <BSButton className={className} size='sm' onClick={onClick}>{children}</BSButton>
    )
}
