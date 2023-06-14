import react, { useState } from "react";
import { Col, Modal, Row, Table } from "react-bootstrap";
import { CardBody, CardHeader } from "reactstrap";
import useFetch from "../../hooks/useFetch";
import useNoninitialEffect from "../../hooks/useNoninitialEffect";
import Card from "../../shared/card";
import Form from "../../shared/form";
import Grid from "../../shared/grid";
import GridColumn from "../../shared/grid/GridColumn";
import AuctionsGrid from "./auctionsgrid";

export default function Auctions(){
  const { response: auctionsResponse, loading: auctionsLoading, onRefresh: getAuctionDetails } = useFetch({ url: `/Admin/GetAuctionDetails/${0}`, Options: { method: 'GET', initialRender: true } });

  return (
  <>
    <Card noPadding title="Auction Details"
        // headerAction={!isCrete ? <Button size="sm" onClick={() => { setUserDetails({ id: 0, name: '', phone: '', eMail: '', password: '', aadhar: '', address: '', city: '', state: '' }); setIsCrete(true) }}>Create</Button> : <Button size="sm" onClick={() => { setIsCrete(false); GetUserDetails(); }}>List</Button>}
      // actionButtons={<><Button size="sm">Save</Button> </>}
      >
        <AuctionsGrid data ={auctionsResponse} loading={auctionsLoading}/>
       </Card>
  </>

  );
}