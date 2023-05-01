import React from 'react'
import FormControl from '../FormControl'

interface Iprops {
    id?: string
    placeholder?: string
    inline?: boolean
    defaultValue?: string
    value?: string
    onKeyDown?: () => void
    onChange?: () => void
    onFocus?: () => void
    className?: string
    name: string
    tabIndex?: number
    required?: boolean
    disabled?: boolean
    readOnly?: boolean
    isValid?: boolean
    isInvalid?: boolean
    checked?: boolean
    defaultChecked?: boolean
    label?: string
}
export default function CheckBox(props: Iprops) {
    return (
        <FormControl
            {...props}
            type='checkbox' />
    )
}
