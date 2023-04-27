import react from "react";
import { Button } from "react-bootstrap";
import Card from "../../shared/card";
import Footer from "../../shared/footer";
import Header from "../../shared/header";
import OutStandings from "./Forms/outstandings";
export default function Payments(){
    return(
        <>
        <Card noPadding title="Payments List"
                headerAction={<Button size="sm">Create</Button>}
            // actionButtons={<><Button size="sm">Save</Button> </>}
            >
      <OutStandings/></Card>
    </>
    );
};