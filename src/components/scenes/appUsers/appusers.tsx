import react from "react";
import { Button } from "react-bootstrap";
import Card from "../../shared/card";
import Footer from "../../shared/footer";
import Header from "../../shared/header";
import AppUsersGrid from "./forms";
export default function AplicationUsers(){
    return(
        <>
            <Card noPadding title="App Users List"
                // headerAction={<Button size="sm">Create</Button>}
            // actionButtons={<><Button size="sm">Save</Button> </>}
            >
            <AppUsersGrid /></Card>
        </>
    );
}