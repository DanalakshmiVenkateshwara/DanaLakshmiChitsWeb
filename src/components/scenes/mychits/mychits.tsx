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
import { useStore } from "../../store";

export default function MyChits(){
  
  debugger
  const [userInfo, setUserInfo] = useState<any>({ userId: 0, userName: ''});
  const {State,Store} = useStore();
  useEffect(() => {
    debugger
    if (State.user.id>0) {
      getChits();
    }
  }, [State.user.id]);
  const { response, loading, onRefresh:getChits } = useFetch({ url: `/User/GetMyChits?userId= ${State.user.id}`, Options: { method: 'POST', initialRender:false} });

  return (
  <>
    <Card noPadding title="Chits Details"
      >
        <UserChits data={response} loading={loading}/>
       </Card>
  </>
  );
}