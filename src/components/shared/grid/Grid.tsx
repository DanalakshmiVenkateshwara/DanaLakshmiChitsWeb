import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import Loader from "../loader/Loader";
import GridCell from "./GridCell";
import './_Grid.scss';

interface Iprops {
    data: any;
    children: any;
    as?: ({ data }: any) => JSX.Element;
    loading?: boolean;
}
export default function Grid(props: Iprops) {
    const data: Array<any> = props.data;
    return (
        <Table hover bordered striped responsive size="sm" className="mb-0 grid">
            {props.loading ? <><Loader /></> :
                <>  <thead>
                    <tr>{(!props.loading && props?.as) ? props.as(data && data[0]).props.children.map((g: any) => {
                        if (g.type.name == 'GridCell') {
                            return <th>{g.props.title}</th>
                        }
                    }) : props.children}</tr>
                </thead>
                    <tbody>
                        {!props.loading && data.map((rowData: any, index: number) => (
                            <tr key={index}>
                                {
                                    props?.as ? props?.as(data[index]).props.children.map((child: any, i: number) => {
                                        if (child.type.name == 'GridCell') {
                                            return <>{child}</>
                                        }
                                    }) :
                                        props.children.map((child: any, index: number) => {
                                            if (child.props.targetField && child.props.children) {
                                                return (
                                                    <GridCell
                                                        key={index}
                                                        title={child.props.title}
                                                        targetField={child.props.targetField}
                                                    >
                                                        {child.props.children}
                                                    </GridCell>
                                                );
                                            } else {

                                                return (<GridCell title={child.props.title} key={index} targetField={child.props.targetField}>
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
                                <h6 className="mb-0">Total records : <b>{data && data.length}</b></h6>
                            </td>
                        </tr>
                    </tfoot>
                </>}
        </Table>
    );
}
