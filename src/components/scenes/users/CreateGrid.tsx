import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Form from '../../shared/form'

export default function CreateGrid() {
    return (
        <Row className="mx-0">
            <Col xl="3" lg="4" md="6">
                <Form.Text name='' label="textbox" onChange={(e) => alert(e)} />
            </Col>
            <Col xl="3" lg="4" md="6">
                <Form.Text name='' label="textbox" onChange={(e) => alert(e)} />
            </Col>
            <Col xl="3" lg="4" md="6">
                <Form.Text name='' label="textbox" onChange={(e) => alert(e)} />
            </Col>
            <Col xl="3" lg="4" md="6">
                <Form.Text name='' label="textbox" onChange={(e) => alert(e)} />
            </Col>
            <div>
                <Form.Submit label="textbox" />
            </div>
        </Row>
    )
}
