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
  const { GET_USERS,USERREGISTRATION } = UrlConstants();
  const { response, loading, onRefresh: UserDetails } = useFetch({ url: GET_USERS, Options: { method: 'GET', initialRender: true } });
  const [userDetails, setUserDetails] = useState<any>({ id: 0, name: '', phone: '', eMail: '', password: '', aadhar: '', address: '', city: '', state: '',isDelete:false });
  const { response:userResponse, loading:userLoading, onRefresh: saveUserDetails } = useFetch({ url: USERREGISTRATION, Options: { method: 'POST', data: userDetails } });
  const [isCrete, setIsCrete] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  useNoninitialEffect(() => {
    if (!isCrete) {
      UserDetails();
    }
  }, [isCrete])
  useNoninitialEffect(() => {
    debugger
    if (isDelete) {
      setUserDetails({...userDetails,isDelete:true});
      saveUserDetails();
    }
  }, [isDelete])

  return (
    <>
      <Card noPadding title="Users List"
        headerAction={!isCrete ? <Button size="sm" onClick={() => { setUserDetails({ id: 0, name: '', phone: '', eMail: '', password: '', aadhar: '', address: '', city: '', state: '' }); setIsCrete(true) }}>Create</Button> : <Button size="sm" onClick={() => { setIsCrete(false); UserDetails(); }}>List</Button>}
      // actionButtons={<><Button size="sm">Save</Button> </>}
      >
        {isCrete ? <CreateUser setIsCrete={setIsCrete} setUserDetails={setUserDetails} userDetails={userDetails} /> :
          <UsersGrid data={response} loading={loading} setIsDelete={setIsDelete} setIsCrete={setIsCrete} setUserDetails={setUserDetails} />}
      </Card>
    </>
  );

}