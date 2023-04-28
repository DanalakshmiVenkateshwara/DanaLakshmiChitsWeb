import React, { useEffect, useState } from "react";
import UsersGrid from "./forms/users-grid";
import Footer from "../../shared/footer";
import Header from "../../shared/header";
import Card from "../../shared/card/Card";
import { Button, Col, Row } from "react-bootstrap";
import UrlConstants from "../../constants/UrlConstants";
import useFetch from "../../hooks/useFetch";
import Form from "../../shared/form";
import CreateUser from "./CreateUser";
import useNoninitialEffect from "../../hooks/useNoninitialEffect";

export default function Users() {
  const { GET_USERS } = UrlConstants();
  const { response, loading, onRefresh: UserDetails } = useFetch({ url: GET_USERS, Options: { method: 'GET', initialRender: true } });
  const [userDetails, setUserDetails] = useState<any>({ id: 0, name: '', phone: '', eMail: '', password: '', aadhar: '', address: '', city: '', state: '' });
  const [isCrete, setIsCrete] = useState(false);

  useNoninitialEffect(() => {
    if (!isCrete) {
      UserDetails();
    }
  }, [isCrete])

  return (
    <>
      <Card noPadding title="Users List"
        headerAction={!isCrete ? <Button size="sm" onClick={() => { setIsCrete(true) }}>Create</Button> : <Button size="sm" onClick={() => { setIsCrete(false); UserDetails(); }}>List</Button>}
      // actionButtons={<><Button size="sm">Save</Button> </>}
      >
        {isCrete ? <CreateUser setIsCrete={setIsCrete} setUserDetails={setUserDetails} userDetails={userDetails} /> :
          <UsersGrid data={response} loading={loading} setIsCrete={setIsCrete} setUserDetails={setUserDetails} />}
      </Card>
    </>
  );

}