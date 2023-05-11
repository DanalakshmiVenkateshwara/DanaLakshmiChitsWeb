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
  const [userStatus, setUserStatus] = useState(true);
  const { GET_USERS,USERREGISTRATION } = UrlConstants();
  const { response, loading, onRefresh: GetUserDetails } = useFetch({ url: `/Admin/GetUsers/${0}/${userStatus}`, Options: { method: 'GET', initialRender: true } });
  const [userDetails, setUserDetails] = useState<any>({ id: 0, name: '', phone: '', eMail: '', password: '', aadhar: '', address: '', city: '', state: '', isActive:true });
  const { response:userResponse, loading:userLoading, onRefresh: saveUserDetails } = useFetch({ url: USERREGISTRATION, Options: { method: 'POST', data: userDetails } });
  const [isCrete, setIsCrete] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  // const [userStatus, setUserStatus] = useState(true);

  useNoninitialEffect(() => {
    debugger
    GetUserDetails();
  }, [userStatus]);
  useNoninitialEffect(() => {
    if (!isCrete) {
      GetUserDetails();
    }
  }, [isCrete])
  // useEffect(()=>{
  //   if (isDelete){
  //     setUserDetails({...userDetails,isActive:false});
  //     if(!userDetails.isActive)
  //      saveUserDetails();
  //   }
    
  // },[userDetails])

  useNoninitialEffect(() => {
    debugger
    if (isDelete) {
      //userDetails.isActive = false;
      setUserDetails({...userDetails,isActive:false});
      saveUserDetails();
      //setIsDelete(false);
      //userDetails.isActive = true;
      //setUserDetails({...userDetails,isActive:true});
    }
  }, [isDelete])

  useNoninitialEffect(() => {
    debugger
    if (userResponse === 1)
    GetUserDetails();
  }, [userResponse,isDelete])

  return (
    <>
    <div className="d-flex align-items-center">
          <Form.CheckBox
            label="InActive Users"
            name="InActiveUsers"
            value={userStatus == true ? "true" : "false"}
            checked={!userStatus}
            onChange={(e: any) => setUserStatus(prev => !prev)}
            noPadding
            className="me-3" />
          {/* <Button size="sm" onClick={() => { setIsCrete(!isCrete ? true : false) }}>{!isCrete ? "Create" : "List"}</Button> */}
        </div>
        <Card noPadding title="Users List"
        headerAction={!isCrete ? <Button size="sm" onClick={() => { setUserDetails({ id: 0, name: '', phone: '', eMail: '', password: '', aadhar: '', address: '', city: '', state: '' }); setIsCrete(true) }}>Create</Button> : <Button size="sm" onClick={() => { setIsCrete(false); GetUserDetails(); }}>List</Button>}
      // actionButtons={<><Button size="sm">Save</Button> </>}
      >
        {isCrete ? <CreateUser setIsCrete={setIsCrete} setUserDetails={setUserDetails} userDetails={userDetails} /> :
          <UsersGrid data={response} loading={loading} setIsDelete={setIsDelete} setIsCrete={setIsCrete} setUserDetails={setUserDetails} />}
      </Card>
    </>
  );

}