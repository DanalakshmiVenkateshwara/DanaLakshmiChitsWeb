import React from 'react'
import { Dropdown, Form, FormControl as BSFormControl, InputGroup } from 'react-bootstrap'
import './_FormControl.scss'
interface Iprops {
    as?: React.ElementType<any>;
    type?: "number" | "text" | "email" | "url" | "checkbox" | "radio" | "password" | "tel" | "switch";
    rows?: number;
    placeholder?: string;
    defaultValue?: string | number;
    value?: string | number;
    onKeyDown?: (e: React.KeyboardEvent) => void;
    onChange?: (value: any, e?: React.SyntheticEvent) => void;
    onFocus?: React.FocusEventHandler<any>;
    tabIndex?: number;
    min?: number;
    max?: number;
    step?: number | string;
    required?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    name: string;
    className?: string;
    maxlength?: number;
    children?: JSX.Element | JSX.Element[];
    isValid?: boolean;
    isInvalid?: boolean;
    label?: string;
    checked?: boolean;
    defaultChecked?: boolean;
    inline?: boolean;
    id?: string;
    isAutoComplete?: boolean
}
export default function FormControl(props: Iprops) {
    return (
        <> {(props.type === 'checkbox' || props.type === 'radio' || props.type === 'switch') ?
            <Form.Check
                id={props.id}
                type={props.type}
                placeholder={props.placeholder}
                as={props.as}
                inline={props.inline}
                defaultValue={props.defaultValue}
                value={props.value}
                onKeyDown={(e) => { if (e.keyCode == 13 || e.key === 'Enter') { e.preventDefault(); return false }; if (props.onKeyDown) { props.onKeyDown(e) } }}
                onChange={(e) => { props.onChange && props?.onChange(e.target.value) }}
                onFocus={props.onFocus}
                maxlength={props.maxlength}
                className={props.className}
                name={props.name}
                tabIndex={props.tabIndex}
                required={props.required}
                disabled={props.disabled}
                readOnly={props.readOnly}
                isValid={props.isValid}
                isInvalid={props.isInvalid}
                checked={props.checked}
                defaultChecked={props.defaultChecked}
                label={props.label}
            >
            </Form.Check>
            :
            (props.type === 'number') ?
                <>
                    <Form.Label>{props.label}</Form.Label>
                    <BSFormControl
                        type='number'
                        placeholder={props.placeholder}
                        as={props.as}
                        defaultValue={props.defaultValue}
                        value={props.value}
                        onKeyDown={(e) => { if (e.keyCode == 13 || e.key === 'Enter') { e.preventDefault(); return false }; if (props.onKeyDown) { props.onKeyDown(e) } }}
                        onChange={(e) => { props.onChange && props?.onChange(e.target.value) }}
                        maxlength={props.maxlength}
                        className={props.className}
                        name={props.name}
                        tabIndex={props.tabIndex}
                        min={props.min}
                        max={props.max}
                        step={props.step}
                        required={props.required}
                        disabled={props.disabled}
                        readOnly={props.readOnly}
                        size={'sm'}
                        isValid={props.isValid}
                        isInvalid={props.isInvalid}
                    >
                    </BSFormControl>
                </>
                :
                (props.type === 'text' || props.type === 'email' || props.type === 'password') ?
                    <>
                        <Form.Label>{props.label}</Form.Label>
                        <BSFormControl
                            type={props.type}
                            placeholder={props.placeholder}
                            as={props.as}
                            defaultValue={props.defaultValue}
                            value={props.value}
                            onKeyDown={(e) => { if (e.keyCode == 13 || e.key === 'Enter') { e.preventDefault(); return false }; if (props.onKeyDown) { props.onKeyDown(e) } }}
                            onChange={(e) => { props.onChange && props?.onChange(e.target.value) }}
                            maxlength={props.maxlength}
                            className={props.className}
                            name={props.name}
                            tabIndex={props.tabIndex}
                            required={props.required}
                            disabled={props.disabled}
                            readOnly={props.readOnly}
                            size={'sm'}
                            isValid={props.isValid}
                            isInvalid={props.isInvalid}
                        />
                    </>
                    : (props.as === 'select') ?
                        <>
                            <Form.Label>{props.label}</Form.Label>
                            <Form.Select
                                id={props.id}
                                placeholder={props.placeholder}
                                as={props.as}
                                defaultValue={props.defaultValue}
                                value={props.value}
                                onKeyDown={(e) => { if (e.keyCode == 13 || e.key === 'Enter') { e.preventDefault(); return false }; if (props.onKeyDown) { props.onKeyDown(e) } }}
                                onChange={(e) => { props.onChange && props?.onChange(e.target.value) }}
                                onFocus={props.onFocus}
                                className={props.className}
                                size={'sm'}
                                name={props.name}
                                tabIndex={props.tabIndex}
                                required={props.required}
                                disabled={props.disabled}
                                isValid={props.isValid}
                                isInvalid={props.isInvalid}
                            >
                                {props.children ? props.children : <option hidden>Please Choose</option>}
                            </Form.Select></>
                        : (props.isAutoComplete) ?
                            <Dropdown.Toggle className='custom-dropdown' as='div' variant="success" id="dropdown-basic">
                                <>  <Form.Label>{props.label}</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text className='px-2'><i className='fas fa-search'></i></InputGroup.Text>
                                        <BSFormControl
                                            type={props.type}
                                            placeholder={props.placeholder}
                                            as={props.as}
                                            defaultValue={props.defaultValue}
                                            value={props.value}
                                            onKeyDown={(e) => { if (e.keyCode == 13 || e.key === 'Enter') { e.preventDefault(); return false }; if (props.onKeyDown) { props.onKeyDown(e) } }}
                                            onChange={(e) => { props.onChange && props?.onChange(e.target.value) }}
                                            className={props.className}
                                            name={props.name}
                                            tabIndex={props.tabIndex}
                                            required={props.required}
                                            disabled={props.disabled}
                                            readOnly={props.readOnly}
                                            size={'sm'}
                                            isValid={props.isValid}
                                            isInvalid={props.isInvalid}
                                        />

                                    </InputGroup>
                                </>
                            </Dropdown.Toggle>

                            : <></>}
        </>
    )
}
