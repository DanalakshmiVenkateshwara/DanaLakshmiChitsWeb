import React from "react";
import { Table } from "react-bootstrap";
import GridCell from "./GridCell";
interface Iprops {
    data: any;
    children: any;
}
export default function Grid(props: Iprops) {
    debugger
    return (
        <Table hover bordered striped responsive size="sm">
            <thead>
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
        </Table>
    );
}
