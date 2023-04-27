import React from 'react'
import FormControl from '../FormControl'

interface Iprops {
    onChange?: (value: string) => void;
    onKeyDown?: (e: React.KeyboardEvent<Element>) => void;
    name: string;
    className?: string;
    disabled?: boolean;
    readOnly?: boolean;
    label?: string;
    placeHolder?: string;
    required?: boolean;
    isValid?: boolean;
    isInvalid?: boolean;
    value?: string;
    tabIndex?: number;
}
export default function Text(props: Iprops) {
    return (
        <FormControl
            {...props}
            type='text'
            name={props.name} />
    )
}
