import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { CardBody, CardHeader } from "reactstrap";
import GroupsGrid from "./groups-grid";
import Footer from "../../shared/footer";
import Header from "../../shared/header";
import Card from "../../shared/card/Card";
import getApiData from "../../app-services/get-api";
import FormControl from "../../shared/form/FormControl";
import Suggest from "../../shared/form/controls/Suggest";
import CreateGroup from "./CreateGroup";

export default function Groups() {
  const [isCrete, setIsCrete] = useState(false)
  return (
    <Card noPadding title="Groupwise List"
      headerAction={!isCrete ? <Button size="sm" onClick={() => { setIsCrete(true) }}>Create</Button> : <Button size="sm" onClick={() => { setIsCrete(false) }}>List</Button>}
    // actionButtons={<><Button size="sm">Save</Button> </>}
    >
      {isCrete ? <CreateGroup setIsCrete={setIsCrete} /> :
        <GroupsGrid />}
    </Card>
  );
}