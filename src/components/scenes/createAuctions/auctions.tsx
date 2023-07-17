import React, { useEffect, useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import { CardBody, CardHeader } from "reactstrap";
import Footer from "../../shared/footer";
import Header from "../../shared/header";
import Card from "../../shared/card/Card";
import FormControl from "../../shared/form/FormControl";
import Suggest from "../../shared/form/controls/Suggest";
import useFetch from "../../hooks/useFetch";
import useNoninitialEffect from "../../hooks/useNoninitialEffect";
import Form from "../../shared/form";
import CreateAuctionsGrid from "./createauctionsgrid";
import CreateAuction from "./createauctions";

export default function Actions() {
  const [isCrete, setIsCrete] = useState(false);
//   const [groupStatus, setGroupStatus] = useState(false);
  const { response, loading, onRefresh: CreateAuctionGrid } = useFetch({ url: `/Admin/GetCreateAuction?groupId=${0}`, Options: { method: "GET", initialRender: true } });

//   useNoninitialEffect(() => {
//     CreateAuctionDetails();
//   }, [groupStatus]);

  return (
    <Card noPadding title={isCrete ? "Create Auction" :"Create Auction List"}
      headerAction={
        <div className="d-flex align-items-center">
          <Button size="sm" onClick={() => { setIsCrete(!isCrete ? true : false) }}>{!isCrete ? "Create" : "List"}</Button>
        </div>
      }
    // actionButtons={<><Button size="sm">Save</Button> </>}
    >
      {isCrete ? <CreateAuction setIsCrete={setIsCrete}  CreateAuctionGrid={CreateAuctionGrid} /> :
        <CreateAuctionsGrid data={response} loading={loading}  CreateAuctionGrid={CreateAuctionGrid} />}
    </Card>
  );
}