import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import GridCell from "./GridCell";
import './_Grid.scss';

interface Iprops {
    data: any;
    children: any;
}
export default function Grid(props: Iprops) {
    return (
        <Table hover bordered striped responsive size="sm" className="mb-0 grid">
            <thead className="">
                <tr>{props.children}</tr>
            </thead>
            <tbody>
                {props.data.map((rowData: any, index: number) => (
                    <tr key={index}>
                        {props.children.map((child: any, index: number) => {
                            if (child.props.targetField && child.props.children) {
                                return (
                                    <GridCell
                                        key={index}
                                        targetField={child.props.targetField}
                                    >
                                        {child.props.children}
                                    </GridCell>
                                );
                            } else {
                                return (<GridCell key={index} targetField={child.props.targetField}>
                                    <>{rowData[child.props.targetField]}</>
                                </GridCell>)

                            }
                        })
                        }
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={props.children.length} align="right" className="p-3">
                        <h6 className="mb-0">Total records : <b>{props.data.length}</b></h6>
                    </td>
                </tr>
            </tfoot>
        </Table>
    );
}
