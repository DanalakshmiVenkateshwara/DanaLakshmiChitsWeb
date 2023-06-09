import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { Tooltip as BSTooltip } from 'react-bootstrap';
import uniqid from 'uniqid'

interface Iprops {
    children: JSX.Element | JSX.Element[] | any;
    text?: string | any;
    placement?: "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end" | "top" | "bottom" | "left" | "right"
}
export default function ToolTip(props: Iprops) {
    const { children, text, placement } = props;

    return (
        <>
            <OverlayTrigger
                placement={placement ? placement : "right"}
                delay={{ show: 250, hide: 400 }}
                overlay={<BSTooltip id={uniqid()}>
                    {text ? text : "default"}
                </BSTooltip>}
            >
                {children}
            </OverlayTrigger>
        </>
    )
}
