import React from 'react'
import { Row } from 'react-bootstrap'
import Card from '../card/Card'
interface Iprops {
    title: string;
    icon: JSX.Element;
    className?: string;
}
export default function CardWidget(props: Iprops) {
    return (
        <Card className={`shadow border-0 ' +  ${props.className}`}>
            <Row className='justify-content-center align-items-center text-center'>
                {props.icon}
                <h4 className='my-4'>{props.title}</h4>
            </Row>
        </Card>
    )
}
