import react, { Dispatch } from "react";
import { Card, Col, Modal, Row, Table } from "react-bootstrap";
import { CardBody, CardHeader } from "reactstrap";
import UrlConstants from "../../../../constants/UrlConstants";
import useFetch from "../../../../hooks/useFetch";
import Grid from "../../../../shared/grid";
import GridColumn from "../../../../shared/grid/GridColumn";
import CustomRow from "./customRow";
interface Iprops {
  data?: any; loading?: boolean; setIsCrete?: Dispatch<React.SetStateAction<boolean>>; setPaymentDetails?: Dispatch<React.SetStateAction<any>>
}
export default function OutStandings({ data, loading, setIsCrete, setPaymentDetails }: Iprops){


  //we need to change the api method name
  
  return (<>
    <Grid data={data} as={CustomRow} loading={loading} rowProps={{ setIsCrete: setIsCrete, setPaymentDetails: setPaymentDetails }}>
      <GridColumn title="UserName" targetField="userName" />
      <GridColumn title="GroupName" targetField="groupName" />
      <GridColumn title="CurrentMonthEmi" targetField="currentMonthEmi" />
      <GridColumn title="Dividend" targetField="dividend" />
      <GridColumn title="PaymentMonth" targetField="paymentMonth" />
      <GridColumn title="TotalAmount" targetField="totalAmount" />
      <GridColumn title="DueAmount" targetField="dueAmount" />
      <GridColumn title="PaymentDate" targetField="paymentDate" />
      {/* <GridColumn title='AuctionDate' targetField="auctionDate" /> */}
      {/* <GridColumn title='Status' targetField="raised" /> */}
    </Grid>
  </>
  );
}
