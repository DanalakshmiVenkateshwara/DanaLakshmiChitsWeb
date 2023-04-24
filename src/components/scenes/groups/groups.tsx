import React from "react";
import CreateGroup from "./forms/create-group";
import { Button, Col, Row, Table } from "react-bootstrap";
import { CardBody, CardHeader } from "reactstrap";
import GroupsGrid from "./forms/groups-grid";
import Footer from "../../shared/footer";
import Header from "../../shared/header";
import Card from "../../shared/card/Card";

export default function Groups() {
  return (
    <Card noPadding title="Groupwise List" actionButtons={<Button>save</Button>}>
      <GroupsGrid />
    </Card>
  );
}
