import react, { useState } from "react";
import {Col, Modal, Row, Table } from "react-bootstrap";
import { CardBody, CardHeader } from "reactstrap";
import useFetch from "../../hooks/useFetch";
import useNoninitialEffect from "../../hooks/useNoninitialEffect";
import Card from "../../shared/card";
import Form from "../../shared/form";
import Grid from "../../shared/grid";
import GridColumn from "../../shared/grid/GridColumn";
import UserChits from "../mychits/userchits";

export default function MyChits(){

  const { response, loading } = useFetch({ url: `/Admin/GetEnrollMents/${3}/${0}/${true}`, Options: { method: 'GET', initialRender: true } });

  return (
  <>
    <Card noPadding title="User Chit Details"
      >
        <UserChits data={response} loading={loading}/>
       </Card>
  </>

  );
}