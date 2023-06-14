import react, { useEffect, useState } from "react";
import {Col, Modal, Row, Table } from "react-bootstrap";
import { CardBody, CardHeader } from "reactstrap";
import useFetch from "../../hooks/useFetch";
import useNoninitialEffect from "../../hooks/useNoninitialEffect";
import Card from "../../shared/card";
import Form from "../../shared/form";
import Grid from "../../shared/grid";
import GridColumn from "../../shared/grid/GridColumn";
import UserChits from "../mychits/userchits";

export default function MyChits(){
  debugger
  const [userInfo, setUserInfo] = useState<any>({ userId: 0, userName: ''});
  useEffect(() => {
    debugger
    const items = localStorage.getItem('userInfo');
    if (items) {
      setUserInfo(items);
      getChits();
    }
  }, []);
  const { response, loading, onRefresh:getChits } = useFetch({ url: `/Admin/GetEnrollMents/${userInfo.userId}/${0}/${true}`, Options: { method: 'GET', initialRender:false} });

  return (
  <>
    <Card noPadding title="Chits Details"
      >
        <UserChits data={response} loading={loading}/>
       </Card>
  </>

  );
}