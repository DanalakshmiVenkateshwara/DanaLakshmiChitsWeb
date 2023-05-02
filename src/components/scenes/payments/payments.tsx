import react, { useState } from "react";
import { Button } from "react-bootstrap";
import UrlConstants from "../../constants/UrlConstants";
import useFetch from "../../hooks/useFetch";
import Card from "../../shared/card";
import Footer from "../../shared/footer";
import Header from "../../shared/header";
import OutStandings from "./Forms/outstandings";
import UserPayments from "./userPayments";
export default function Payments(){
    const [isCrete, setIsCrete] = useState(false);
    const { USER_OUTSTANDINGS } = UrlConstants();
    const [paymentDetails, setPaymentDetails] = useState<any>({
        id: 0,
        userId: 0,
        groupId: 0,
        currentMonthEmi: 0,
        userName: "",
        groupName: "",
        nextAuctionDate: "2023-05-01T14:20:19.894Z",
        paidUpto: 0,
        dividend: 0,
        totalAmount: 0,
        dueAmount: 0,
        auctionDate: "2023-05-01T14:20:19.894Z",
        fullyPaid: true,
        paymentDate:"2023-05-01T14:20:19.894Z",
        paymentMonth: 0,
        raised: true
      });

  const { response, loading } = useFetch({url:USER_OUTSTANDINGS, Options:{method:'GET',initialRender:true}});

    return(
        <>

           <Card noPadding title="Payments List"
                headerAction={!isCrete ? <Button size="sm" onClick={() => { setIsCrete(true) }}>Create</Button> : <Button size="sm" onClick={() => { setIsCrete(false) }}>List</Button>}
            >
              {isCrete ? <UserPayments setIsCrete={setIsCrete} /> :
      <OutStandings data={response} loading={loading} setIsCrete={setIsCrete} setPaymentDetails={setPaymentDetails} />}</Card>

        
    </>
    );
};