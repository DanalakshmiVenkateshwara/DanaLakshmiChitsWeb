import React, { useEffect, useState } from "react";
import CreateGroup from "./forms/create-group";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { CardBody, CardHeader } from "reactstrap";
import GroupsGrid from "./groups-grid";
import Footer from "../../shared/footer";
import Header from "../../shared/header";
import Card from "../../shared/card/Card";
import getApiData from "../../app-services/get-api";
import FormControl from "../../shared/form/FormControl";
import Suggest from "../../shared/form/controls/Suggest";

export default function Groups() {
  return (
    <Card noPadding title="Groupwise List"
      headerAction={<Button size="sm">Create</Button>}
    // actionButtons={<><Button size="sm">Save</Button> </>}
    >
      <GroupsGrid />
    </Card>
  );
}
