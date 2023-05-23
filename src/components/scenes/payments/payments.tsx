import react, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import UrlConstants from "../../constants/UrlConstants";
import useFetch from "../../hooks/useFetch";
import useNoninitialEffect from "../../hooks/useNoninitialEffect";
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
      const [groupsData, setGroupsData] = useState<Array<any>>([]);
  const [groupId, setGroupId] = useState<any>(0);
  const { response: groupResponse, loading: groupsLoading } = useFetch({ url: `/User/GetAllChitPlans/${false}`, Options: { method: "GET", initialRender: true } });
  // useNoninitialEffect(() => {
  //   if (!isCrete) {
  //     EnrollMentDetails();
  //   }
  // }, [isCrete])
  useNoninitialEffect(() => {
    debugger
    let data: any = groupResponse;
    debugger
    setGroupsData(data)
  }, [groupResponse])
  const onGroupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debugger
    setGroupId(Number(e.target.value));
    getPaymentsData();
    // let gropWiseDetails = userChits.filter((f: any) => f.groupId  == e.target.value);
    // setEnrollments(gropWiseDetails)
  }

    const { response, loading, onRefresh: getPaymentsData } = useFetch({ url: `/Admin/UserOutStandings?groupId=${groupId}`, Options: { method: 'GET', initialRender: true } });

    useNoninitialEffect(() => {
        debugger
        getPaymentsData();
    }, [isCrete])
     

    return(
        <>{!isCrete && <label>Select Group</label>}
        {!isCrete &&  <Form.Control as="select" className="col-6 col-sm-3 col-xl-2" size="sm" value={groupId}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onGroupChange(e)
          }
        >
          <option key={-1} value={-1}>
            {"..Choose group.."}
          </option>
          {groupsData.map((item) => {
            return (
              <option key={item.id} value={item.id}>
                {item.groupName}
              </option>
            );
          })}
        </Form.Control> }

           <Card noPadding title="Payments List"
                headerAction={!isCrete ? <Button size="sm" onClick={() => { setIsCrete(true) }}>Create</Button> : <Button size="sm" onClick={() => { setIsCrete(false) }}>List</Button>}
            >
              {isCrete ? <UserPayments setIsCrete={setIsCrete} /> :
      <OutStandings data={response} loading={loading} setIsCrete={setIsCrete} setPaymentDetails={setPaymentDetails} />}</Card>

        
    </>
    );
};