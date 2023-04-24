import React from "react";
import GridCell from "../../../../shared/grid/GridCell";

export default function CustomRow({ data }: any) {
    return (
        <>
            <GridCell targetField="GroupName" />
            <GridCell targetField="Amount">
                <h6>{data.Amount}</h6>
            </GridCell>
            <GridCell targetField="Duration">
                <h6>hello world</h6>
            </GridCell>
            <GridCell targetField="NoofMembers">
                <h6>hello world</h6>
            </GridCell>
            <GridCell targetField="InstallmentAmount">
                <h6>hello world</h6>
            </GridCell>
            <GridCell targetField="StartDate">
                <h6>hello world</h6>
            </GridCell>
        </>
    );
}
