import React from "react";
import { Button } from "react-bootstrap";
import Card from "../../shared/card";
import Footer from "../../shared/footer";
import Header from "../../shared/header";
import EnrollMentsGrid from "./forms/enrollments-grid";

export default function Enrollments() {
  return (
    <>
     <Card noPadding title="EnrollMents List"
                headerAction={<Button size="sm">Create</Button>}
            // actionButtons={<><Button size="sm">Save</Button> </>}
            >
      <EnrollMentsGrid/></Card>
    </>
  );
}
