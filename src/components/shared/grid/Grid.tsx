import React from "react";
import { Table } from "react-bootstrap";
import GridCell from "./GridCell";
interface Iprops {
    data: any;
    children: any;
    as?: ({ data }: any) => JSX.Element;
}
export default function Grid(props: Iprops) {
    const as: any = props.as;

    return (
        <Table hover bordered striped responsive size="sm">
            <thead>
                <tr>{props.children}</tr>
            </thead>
            <tbody>
                {/* {props.children &&
                    props.data.map((rowData: any) => (
                        <tr key={rowData.id}>
                            {
                                 as
                                ? as({ data: rowData }) :
                                Object.keys(rowData).map((key) => <GridCell key={key} targetField={key}><>{rowData[key]}</></GridCell>)}</tr>
                    ))} */}
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
                                        {/* <>{JSON.stringify(child.props)}</> */}
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
