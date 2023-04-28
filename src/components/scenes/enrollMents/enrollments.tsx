import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Card from "../../shared/card";
import Footer from "../../shared/footer";
import Header from "../../shared/header";
import EnrollMentsGrid from "./forms/enrollments-grid";
import UserEnrollment from "./userEnrollment";

export default function Enrollments() {
  const [isCrete, setIsCrete] = useState(false)
  return (
    <>
     <Card noPadding title="EnrollMents List"
                headerAction={!isCrete ? <Button size="sm" onClick={() => { setIsCrete(true) }}>Create</Button> : <Button size="sm" onClick={() => { setIsCrete(false) }}>List</Button>}
            >
              {isCrete ? <UserEnrollment /> :
      <EnrollMentsGrid/>}</Card>
    </>
  );
}