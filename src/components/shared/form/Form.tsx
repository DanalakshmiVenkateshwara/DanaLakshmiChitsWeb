import React from 'react'
import { Form as BSForm } from 'react-bootstrap'

interface Iprops {
    children?: JSX.Element | JSX.Element[];
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
    className?: string;
    style?: React.CSSProperties;
    validated?: boolean
}
export function Form(props: Iprops) {
    const { validated, onSubmit, style, children } = props;
    return (
        <BSForm autoComplete={'off'} noValidate validated={validated} onSubmit={(e) => onSubmit} style={style} {...props}>
            {children}
        </BSForm>
    )
}
