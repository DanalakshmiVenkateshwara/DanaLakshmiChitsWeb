import React from 'react'
import FormControl from '../FormControl'
interface Iprops {
    id?: string;
    label?: string;
    placeholder?: string;
    as?: React.ElementType<any>;
    defaultValue?: string | number;
    value?: string | number;
    onKeyDown?: (e: React.KeyboardEvent) => void;
    onChange?: (value: any, e?: React.SyntheticEvent) => void;
    onFocus?: React.FocusEventHandler<any>;
    className?: string;
    name: string;
    tabIndex?: number;
    required?: boolean;
    disabled?: boolean;
    isValid?: boolean;
    isInvalid?: boolean;
    children?: JSX.Element | JSX.Element[];
}
export default function Select(props: Iprops) {
    const { children } = props
    return (
        <FormControl
            {...props}
            as={'select'}
        >
            {children}
        </FormControl>
    )
}
