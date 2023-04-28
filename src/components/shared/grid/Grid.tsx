import React, { useEffect } from "react";
import { Col, Row, Table } from "react-bootstrap";
import Loader from "../loader/Loader";
import GridCell from "./GridCell";
import uniqid from 'uniqid'
import './_Grid.scss';
import useGrid from "../../hooks/useGrid";

interface Iprops {
    data: any;
    children: any;
    as?: ({ data, rowProps }: any) => JSX.Element;
    loading?: boolean;
    rowProps?: any;
}
export default function Grid(props: Iprops) {
    const { data, rowProps } = props;


    // useEffect(() => {
    //     setRowProps(props.rowProps);
    // }, [])

    return (
        <Table hover bordered striped responsive size="sm" className="mb-0 grid">
            {props.loading ?
                <tbody><Loader /></tbody> :
                data ? <>
                    <thead>
                        <tr>{(!props.loading && props?.as) ? props.as({ data: data[0], rowProps: rowProps }).props.children.map((g: any) => {
                            if (g.type.name == 'GridCell') {
                                return <th key={uniqid()}>{g.props.title}</th>
                            }
                        }) : props.children}</tr>
                    </thead>
                    <tbody>
                        {!props.loading && data.map((rowData: any, index: number) => (
                            <tr key={uniqid()}>
                                {
                                    props?.as ? props?.as({ data: data[index], rowProps: rowProps }).props.children.map((child: any, i: number) => {
                                        if (child.type.name == 'GridCell') {
                                            return <React.Fragment key={uniqid()}>{child}</React.Fragment>
                                        }
                                    }) :
                                        props.children.map((child: any, index: number) => {
                                            if (child.props.targetField && child.props.children) {
                                                return (
                                                    <GridCell
                                                        key={uniqid()}
                                                        title={child.props.title}
                                                        targetField={child.props.targetField}
                                                    >
                                                        {child.props.children}
                                                    </GridCell>
                                                );
                                            } else {

                                                return (<GridCell title={child.props.title} key={uniqid()} targetField={child.props.targetField}>
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
                </> : <>NO DATA</>

            }
        </Table>
    );
}
