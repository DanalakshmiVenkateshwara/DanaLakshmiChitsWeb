import React, { Dispatch, useState } from "react";
import { Card, Col, Modal, Row, Table } from "react-bootstrap";
import { CardBody, CardHeader } from "reactstrap";
import UrlConstants from "../../../../constants/UrlConstants";
import useFetch from "../../../../hooks/useFetch";
import Grid from "../../../../shared/grid";
import GridColumn from "../../../../shared/grid/GridColumn";
import CustomRow from "./CustomRow";
interface Iprops {
  data?: any; loading?: boolean;setIsDelete?:Dispatch<React.SetStateAction<boolean>>; setIsCrete?: Dispatch<React.SetStateAction<boolean>>; setUserDetails?: Dispatch<React.SetStateAction<any>>
}
export default function UsersGrid({ data, loading, setIsCrete,setIsDelete, setUserDetails }: Iprops) {
  const [test, setTest] = useState()

  return (<>
    <Grid data={data} as={CustomRow} loading={loading} rowProps={{ setIsCrete: setIsCrete,setIsDelete:setIsDelete, setUserDetails: setUserDetails }}>
      <GridColumn title="Name" targetField="name" />
      <GridColumn title="Phone" targetField="phone" />
      <GridColumn title="Email" targetField="eMail" />
      <GridColumn title="Password" targetField="password" />
      <GridColumn title="Address" targetField="address" />
    </Grid>
  </>

  );
}