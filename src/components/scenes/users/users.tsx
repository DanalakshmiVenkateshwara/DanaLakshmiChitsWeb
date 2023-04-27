import React from "react";
import UsersGrid from "./forms/users-grid";
import Footer from "../../shared/footer";
import Header from "../../shared/header";
import Card from "../../shared/card/Card";
import { Button } from "react-bootstrap";

export default function Users() {
    return (
        <>
        <Card noPadding title="Users List"
                headerAction={<Button size="sm">Create</Button>}
            // actionButtons={<><Button size="sm">Save</Button> </>}
            >
      <UsersGrid/></Card>
        </>
      );

}