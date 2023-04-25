import React from 'react'
import { Row } from 'react-bootstrap'
import { useNavigate, useNavigation } from 'react-router-dom';
import Card from '../card/Card'
interface Iprops {
    title: string;
    icon: JSX.Element;
    className?: string;
    path?: string | any;
}
export default function CardWidget(props: Iprops) {
    const navigate = useNavigate();
    return (
        <Card className={`shadow border-0 ' +  ${props.className}`} onClick={() => { navigate(props.path) }} >
            <Row className='justify-content-center align-items-center text-center'>
                {props.icon}
                <h4 className='my-4'>{props.title}</h4>
            </Row>
        </Card>
    )
}
