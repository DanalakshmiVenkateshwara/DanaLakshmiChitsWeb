import React from 'react'
import { Row } from 'react-bootstrap'
import { Container } from 'reactstrap'
import Number from '../../shared/form/controls/Number'
import Select from '../../shared/form/controls/Select'
import Submit from '../../shared/form/controls/Submit'
import Text from '../../shared/form/controls/Text'
import Form from '../../shared/form'


export default function CreateGroup() {

    return (
        <Container fluid>
            <Row>CreateGroup</Row>
            <Form.Text name='text' label="aakljsdnalksndkajsdn" onChange={(d) => { console.log(d) }} />
            <Form.Select name='dr' label="select" onChange={(d) => { console.log(d) }}><option>he</option><option>she</option><option>hem</option></Form.Select>
            <Form.Number label="number" name='num' />
            <Form.Submit onClick={() => { alert('s') }} />
        </Container>
    )
}
