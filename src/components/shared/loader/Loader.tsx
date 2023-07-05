import React from 'react'
import { Row, Spinner } from 'react-bootstrap'
interface Iprops {
    columns: number;
}
export default function Loader({ columns }: Iprops) {
    return (
        <tr    >
            <td colSpan={columns}>
                <Spinner className='m-3' style={{ width: "3rem", height: "3rem", borderWidth: "0.3rem" }} animation="border" role="status" variant='primary'>
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                <h4 className='my-4'>Loading...!!!</h4>
            </td>
        </tr>
    )
}
