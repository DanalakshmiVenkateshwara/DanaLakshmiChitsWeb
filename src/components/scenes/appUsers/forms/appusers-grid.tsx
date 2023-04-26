import react from 'react';
import { Card, Col, Modal, Row, Table } from "react-bootstrap";
import { CardBody, CardHeader } from "reactstrap";
import UrlConstants from '../../../constants/UrlConstants';
import useFetch from '../../../hooks/useFetch';
import Grid from '../../../shared/grid';
import GridColumn from '../../../shared/grid/GridColumn';

export default function AppUsersGrid(){
  const { GET_APP_USERS } = UrlConstants();
  const { response, loading } = useFetch({url:GET_APP_USERS, Options:{method:'GET',initialRender:true}});

  return (<>
    <Grid data={response} loading={loading}>
      <GridColumn title="Name" targetField="name" />
      <GridColumn title="Phone" targetField="phone" />
      <GridColumn title="State" targetField="state" />
    </Grid>
  </>

  );
}