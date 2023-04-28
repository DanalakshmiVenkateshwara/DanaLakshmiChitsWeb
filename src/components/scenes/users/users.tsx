import React, { useState } from "react";
import UsersGrid from "./forms/users-grid";
import Footer from "../../shared/footer";
import Header from "../../shared/header";
import Card from "../../shared/card/Card";
import { Button, Col, Row } from "react-bootstrap";
import UrlConstants from "../../constants/UrlConstants";
import useFetch from "../../hooks/useFetch";
import Form from "../../shared/form";
import CreateGrid from "./CreateUser";

export default function Users() {
  const { GET_USERS } = UrlConstants();
  const { response, loading } = useFetch({ url: GET_USERS, Options: { method: 'GET', initialRender: true } });

  const [isCrete, setIsCrete] = useState(false)
  return (
    <>
      <Card noPadding title="Users List"
        headerAction={!isCrete ? <Button size="sm" onClick={() => { setIsCrete(true) }}>Create</Button> : <Button size="sm" onClick={() => { setIsCrete(false) }}>List</Button>}
      // actionButtons={<><Button size="sm">Save</Button> </>}
      >
        {isCrete ? <CreateGrid /> :
          <UsersGrid data={response} loading={loading} />}
      </Card>
    </>
  );

}