import React from 'react'
import { Row, Spinner } from 'react-bootstrap'

export default function Loader() {
    return (
        <Row as={'tr'} className='mx-0 my-5 justify-content-center text-center'>
            <td>
                <Spinner style={{ width: "3rem", height: "3rem", borderWidth: "0.3rem" }} animation="border" role="status" variant='primary'>
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                <h4 className='my-4'>Loading...!!!</h4>
            </td>
        </Row>
    )
}
