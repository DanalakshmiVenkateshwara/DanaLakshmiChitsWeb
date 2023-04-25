import React from "react";
import Card from "../../shared/card/Card";
import Footer from "../../shared/footer";
import Header from "../../shared/header";
import EnrollMentsGrid from "./forms/enrollments-grid";

export default function Enrollments() {
  return (
    <>
    <Card noPadding title="EnrollMents List">
    <EnrollMentsGrid/>
    </Card>
      {/* <Header />
      <EnrollMentsGrid/>
      <Footer /> */}
    </>
  );
}
