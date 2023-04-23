import React from "react";
import Footer from "../../shared/footer";
import Header from "../../shared/header";
import EnrollMentsGrid from "./forms/enrollments-grid";

export default function Enrollments() {
  return (
    <>
      <Header />
      <EnrollMentsGrid/>
      <Footer />
    </>
  );
}
