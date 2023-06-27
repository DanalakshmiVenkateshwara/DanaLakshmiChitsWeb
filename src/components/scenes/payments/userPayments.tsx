import react, { useState } from "react";
import { Button, Card,Form as RForm,Col,Container,Row,} from "react-bootstrap";
import { CardBody, Input, Label } from "reactstrap";
import UrlConstants from "../../constants/UrlConstants";
import useFetch from "../../hooks/useFetch";
import useNoninitialEffect from "../../hooks/useNoninitialEffect";
import Form from "../../shared/form";
import useToast from "../../hooks/useToast";
import uniqid from "uniqid";

export default function UserPayments(props: any) {
  const { setIsCrete } = props;
  const { getToast } = useToast();

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
    paymentDate: "2023-05-01T14:20:19.894Z",
    paymentMonth: 0,
    raised: true,
  });
  const { GET_ENROLLMENT, GET_USERS, USER_PAYMENTS } = UrlConstants();
  const {
    response: savePaymentResponse,
    loading: savePaymentLoading,
    onRefresh: savePaymentDetails,
  } = useFetch({
    url: `/Admin/UserPayment`,
    Options: { method: "POST", data: paymentDetails },
  });
  const [installMentAmount, setInstallmentAMount] = useState<any>();
  const [monthOfInstallMent, setMonthOfInstallMent] = useState<any>();
  const [enrollMentsData, setEnrollMentsData] = useState<Array<any>>([]);
  const [groupsData, setGroupsData] = useState<Array<any>>([]);
  const [usersData, setUsersData] = useState<Array<any>>([]);
  const [isUserChange, setIsUserChange] = useState<Boolean>(true);
  const { response: enrollMentresponce, loading } = useFetch({
    url: `/Admin/GetEnrollMents/${0}/${0}/${true}`,
    Options: { method: "GET", initialRender: true },
  });

  const { response: usersResponse, loading: usersLoading } = useFetch({
    url: `/Admin/GetUsers/${0}/${true}`,
    Options: { method: "GET", initialRender: true },
  });

  const {
    response: paymentResponse,
    loading: paymentLoading,
    onRefresh: getPaymentDetails,
  } = useFetch({
    url: `/Admin/GetAuctionDetails/${paymentDetails.groupId}`,
    Options: { method: "GET", initialRender: false },
  });

  const {
    response: PendingpaymentResponse,
    loading: PendingpaymentLoading,
    onRefresh: getPendingPaymentDetails,
  } = useFetch({
    url: `/Admin/GetPendingPayments/?userId=${paymentDetails.userId}&groupId=${paymentDetails.groupId}`,
    Options: { method: "GET", initialRender: false },
  });

  useNoninitialEffect(() => {
    debugger
    if (savePaymentResponse === 1) {
      getToast("successfull submitted", "success");
      setIsCrete(false);
    } else getToast("Failed submitted", "error");
  }, [savePaymentResponse]);

  useNoninitialEffect(() => {
    debugger
    let data: any = enrollMentresponce;
    //setEnrollMentsData(data);
    setGroupsData(data);
  }, [enrollMentresponce]);

  useNoninitialEffect(() => {
    debugger
    let data: any = usersResponse;
    setUsersData(data);
  }, [usersResponse]);
  useNoninitialEffect(() => {
    debugger
    paymentDetails.totalAmount = 0;
    paymentDetails.paymentMonth = 0;
    // setPaymentDetails({...paymentDetails, totalAmount: 0,});
    // setPaymentDetails({...paymentDetails, paymentMonth: 0});
    // setPaymentDetails({...paymentDetails,dividend:0});
    // setPaymentDetails({ ...paymentDetails, dueAmount: 0 });
  }, [isUserChange]);
  const onUserChange = (e: any) => {
    debugger
    setIsUserChange(false)
    if (groupsData.length > 0){
      setEnrollMentsData(groupsData.filter((m: any) => m.userId == e.id));
      paymentDetails.groupId = -1;
      
    setPaymentDetails({ ...paymentDetails, userId: e.id, totalAmount: 0, paymentMonth: 0, dividend:0, dueAmount: 0 });
    // setPaymentDetails({...paymentDetails, totalAmount: 0});
    // setPaymentDetails({...paymentDetails, paymentMonth: 0});
    // setPaymentDetails({...paymentDetails,dividend:0});
    // setPaymentDetails({ ...paymentDetails, dueAmount: 0 });
    }
    //setUserId(e.id)
  };
  // const onGroupChange = (e: any) => {
  //   setPaymentDetails({ ...paymentDetails, groupId: e });
  //   getPaymentDetails();
  // };
  const onGroupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debugger
    // paymentDetails.totalAmount = 0;
    // paymentDetails.paymentMonth = 0;
    // paymentDetails.dividend = 0;
    // paymentDetails.dueAmount = 0;
    // setPaymentDetails({ ...paymentDetails, totalAmount: 0, paymentMonth: 0, dividend:0, dueAmount: 0 });
      setIsUserChange(true)
      setPaymentDetails({ ...paymentDetails,groupId:Number(e.target.value)});
      
      getPaymentDetails();
      getPendingPaymentDetails();
    }
    useNoninitialEffect(() => {
      debugger
      let data: any = PendingpaymentResponse;
      if (data> 0)
      getPendingPaymentDetails();
        setPaymentDetails({ ...paymentDetails, dueAmount: data });
    }, [PendingpaymentResponse]);
  useNoninitialEffect(() => {
    debugger
    let data: any = paymentResponse;
    if (data.length > 0)
      setPaymentDetails({
        ...paymentDetails,
        dividend: data[0].dividend,
        totalAmount: data[0].totalAmount,
        paymentMonth: data[0].paidUpto,
      });
    // setDividend(data[0].dividend);
    // setAmount(data[0].totalAmount);
    // setMonthOfInstallMent(data[0].paidUpto);
  }, [paymentResponse]);
  const onInstallmentPay = () => {
    debugger
    let error: Array<string> = [];
    if(paymentDetails.userId<=0) error.push("Please select username");
    if(paymentDetails.groupId<=0) error.push("Please choose group");
    if(paymentDetails.currentMonthEmi<=0) error.push("Installment amount is mandatory");
    if(error.length>0){
      getToast(error.join(", ").toString(),"error")
    }else{
    savePaymentDetails();
  }
  };
  return (
    <Form noValidate onSubmit={onInstallmentPay}>
      <Row className="mx-0">
        <Col xl="3" lg="4" md="6">
          <Form.Suggest
            onSelect={(e: any) => onUserChange(e)}
            data={usersData}
            text="name"
            value="name"
            name=""
            errorMsg="UserName required"
            label="UserName"
          />
        </Col>
        <Col xl="3" lg="4" md="6">
          <Label>GroupName</Label>
         <RForm.Control
            as="select"
            className="col-6 col-sm-3 col-xl-2"
            size="sm"
            value={paymentDetails.groupId}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onGroupChange(e)
            }
          >
            <option key={-1} value={-1}>
              {"..Choose group.."}
            </option>
            {enrollMentsData.map((item) => {
              return (
                <option key={item.groupId} value={item.groupId}>
                  {item.groupName}
                </option>
              );
            })}
          </RForm.Control>

          {/* <Form.Select placeholder='choose group name' required name='' errorMsg="GroupName required" label="GroupName" onChange={(e: any) => { onGroupChange(e) }}>
                       <> {enrollMentsData.map((gd: any) => <option key={uniqid()} value={gd.groupId}>{gd.groupName}</option>)}</>
                    </Form.Select> */}

          {/* <Form.Select placeholder='choose group name' required name='' errorMsg="GroupName required" label="GroupName" onChange={(e: any) => {  }}>
                        {enrollMentsData.map((gd: any) => <option key={uniqid()} value={gd.id} onChange={(e:any) => {onGroupChange(e) }}>{gd.groupName}</option>)}
                    </Form.Select> */}
        </Col>
        <Col xl="3" lg="4" md="6">
          <Form.Number
            disabled={true}
            value={paymentDetails.dividend}
            label="Dividend"
          />
        </Col>
        <Col xl="3" lg="4" md="6">
          <Form.Number
            value={paymentDetails.currentMonthEmi}
            onChange={(e: any) =>
              setPaymentDetails({ ...paymentDetails, currentMonthEmi: e })
            }
            label="InstallMentAmount"
          />
        </Col>
        <Col xl="3" lg="4" md="6">
          <Form.Number
            disabled={true}
            value={paymentDetails.paymentMonth}
            label="MonthOfInstallMent"
          />
        </Col>
        {/* for the time being using static amount we need to change */}
        {/* <RForm.Control type="text" value={paymentDetails.dueAmount} ></RForm.Control> */}
        <Col xl="3" lg="4" md="6">
          <Form.Number disabled={true} value={paymentDetails.dueAmount} label="DueAmount" />
        </Col>
        <Col xl="3" lg="4" md="6">
          <Form.Number
            disabled={true}
            value={paymentDetails.totalAmount}
            label="TotalAmount"
          />
        </Col>
      </Row>
      <Form.Submit label="Pay" />
    </Form>
  );
}

function getToast(arg0: string, arg1: string) {
  throw new Error("Function not implemented.");
}
