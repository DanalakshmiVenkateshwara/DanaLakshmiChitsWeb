import React from 'react'
import { Form } from '../Form';
import FormControl from '../FormControl';
interface Iprops {
    name: string;
    disabled?: boolean;
    readOnly?: boolean;
    className?: string;
    label?: string;
    placeHolder?: string;
    required?: boolean;
    onChange?: (value: any) => void;
    isValid?: boolean;
    isInvalid?: boolean;
    min?: number;
    max?: number;
    step?: number;
    invalidFeedback?: string | JSX.Element;
    value?: number;
    tabIndex?: number;
}
export default function Number(props: Iprops) {
    return (
        <FormControl
            {...props}
            type='number' />
    )
}
