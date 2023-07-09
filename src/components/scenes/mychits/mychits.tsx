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
  
  const [userInfo, setUserInfo] = useState<any>({ userId: 0, userName: ''});
  const {State,Store} = useStore();
  useEffect(() => {
    // const items = localStorage.getItem('userInfo');
    if (State.user.id>0) {
      // setUserInfo(items);
      getChits();
    }
  }, [State.user.id]);
  const { response, loading, onRefresh:getChits } = useFetch({ url: `/Admin/GetEnrollMents/${State.user.id}/${0}/${true}`, Options: { method: 'GET', initialRender:false} });

  return (
  <>
    <Card noPadding title="Chits Details"
      >
        <UserChits data={response} loading={loading}/>
       </Card>
  </>
  );
}