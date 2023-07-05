import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import Loader from "../loader/Loader";
import GridCell from "./GridCell";
import uniqid from "uniqid";
import './_Grid.scss';

interface GridProps {
    data: any;
    children: any;
    as?: ({ data, rowProps }: any) => JSX.Element;
    loading?: boolean;
    rowProps?: any;
}

const Grid: React.FC<GridProps> = ({ data, children, as: RowComponent, loading, rowProps }) => {

    // const renderHeader = () => {
    //     if (RowComponent) {
    //         const comp = <RowComponent />
    //         React.Children.map(comp, (child: any) => {
    //             if (child.type === 'Grid.Cell' || child.props.title || true) {
    //                 console.log(child);

    //                 return child.props.title;
    //             }
    //         })
    //     } else {
    //         return React.Children.map(children, (column, columnIndex) => (
    //             <th key={columnIndex} style={{ width: column.props.width }}>
    //                 {column.props.title}
    //             </th>
    //         ));
    //     }
    // };


    return (
        <Table hover bordered striped size="sm" className="mb-0 grid position-relative" >
            <thead>
                <tr>
                    {React.Children.map(children, (column, columnIndex) => (
                        <th key={columnIndex} style={{ width: column.props.width }}>
                            {column.props.title}
                        </th>
                    ))}
                </tr>
            </thead>
            {loading ? <tbody><Loader columns={React.Children.count(children)} /></tbody> :
                data?.length > 0 ?
                    <>

                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan={React.Children.count(children)}>Loading...</td>
                                </tr>
                            ) : RowComponent ? (
                                data.map((item: any, index: number) => (<tr><RowComponent data={item} rowProps={rowProps} /></tr>))
                            ) : (
                                data.map((item: any, index: number) => (
                                    <tr key={index}>
                                        {React.Children.map(children, (column, columnIndex) => (
                                            <td key={columnIndex}>
                                                <GridCell title={column.props.title} targetField={column.props.targetField}>
                                                    {item[column.props.targetField]}
                                                </GridCell>
                                            </td>
                                        ))}
                                    </tr>
                                ))
                            )}
                        </tbody>

                    </> : <tbody><tr><td colSpan={React.Children.count(children)}>No Data</td></tr></tbody>}
            <tfoot>
                <tr>
                    <td colSpan={React.Children.count(children)} align="right" className="p-3">
                        <h6 className="mb-0">Total records : <b>{data && data.length}</b></h6>
                    </td>
                </tr>
            </tfoot>
        </Table>
    );
};

export default Grid;
