import React from 'react'
import { Button as BSButton } from 'react-bootstrap'

interface Iprops {
    children?: string | JSX.Element[] | JSX.Element | any;
    onClick?: () => void;
    className?: string;
    size?: "sm" | 'default';
    disabled?: boolean
}
export default function Button(props: Iprops) {
    const { children, onClick, className, size, disabled } = props;
    return (
        <BSButton disabled={disabled} className={className} size={size === 'default' ? undefined : 'sm'} onClick={onClick}>{children}</BSButton>
    )
}
