import React, { ElementType, useState } from 'react'
import { Form as BSForm } from 'react-bootstrap'

interface Iprops {
    children?: JSX.Element | JSX.Element[];
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    className?: string;
    style?: React.CSSProperties;
    // validated?: boolean;
    noValidate?: boolean;
    as?: ElementType<any>;
}
export function Form(props: Iprops) {
    const { onSubmit, style, children, noValidate, as } = props;
    const [isvalidated, setisValidated] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            if (onSubmit)
                onSubmit(event);
        }
        setisValidated(true);
    };


    return (
        <BSForm autoComplete={'off'} noValidate={noValidate} validated={isvalidated} onSubmit={(e) => { e.preventDefault(); handleSubmit(e) }} style={style} as={as}>
            {children}
        </BSForm>
    )
}
