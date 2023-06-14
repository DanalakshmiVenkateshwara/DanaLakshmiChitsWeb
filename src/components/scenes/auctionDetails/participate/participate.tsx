import React, { useState } from "react";
import { Col, Offcanvas, Row } from "react-bootstrap";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Button from "../../../shared/button";
import Card from "../../../shared/card";
import Form from "../../../shared/form";
import './_participate.scss'

export default function Participate() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
const countDownTime=15;
const BDHY = [
  {
    amount: 5888,
    user: "anvesh",
    time: "2023-06-10T17:00:00",
  },
  {
    amount: 6789,
    user: "sandeep",
    time: "2023-06-10T17:11:00",
  },
];
const pList=[
  {
    user:"anvesh",
    joinedAt:"2023-06-10T17:00:00"
  },
  {
    user:"sandeep",
    joinedAt:"2023-06-10T17:00:00"
  },
]


 
function secondsToMinutes(seconds:number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');
  return formattedMinutes + ':' + formattedSeconds ;
}

function getTimeAgo(timestamp:any) {
  const now = new Date().getTime();
  const Time = new Date(timestamp).getTime();
  const secondsAgo = Math.floor((now - Time) / 1000);

  if (secondsAgo < 10) {
    return 'just now';
  } else if (secondsAgo < 60) {
    return secondsAgo + ' seconds ago';
  } else if (secondsAgo < 3600) {
    const minutesAgo = Math.floor(secondsAgo / 60);
    return minutesAgo + ' minutes ago';
  } else {
    const hoursAgo = Math.floor(secondsAgo / 3600);
    return hoursAgo + ' hours ago';
  }
}
  return (<>
    <Card title="Auction Participation" className="h-100 participate" headerAction={<Button  onClick={handleShow}>Participation list</Button>}>
      <Row className="h-100">
        {/* Group_details */}
        <Col sm={8}>
          <Card title="Group Details">
            <Row>
              <Col xl={3} lg="4" md="6">
                <Form.Text disabled={true} value={0} label="Auction Date" />
              </Col>
              <Col xl={3} lg="4" md="6">
                <Form.Text
                  disabled={true}
                  value={0}
                  label="Auction Start Time"
                />
              </Col>
              <Col xl={3} lg="4" md="6">
                <Form.Text disabled={true} value={0} label="Auction End Time" />
              </Col>
              <Col
                xl={3}
                lg="4"
                md="6"
                className="d-flex justify-content-center"
              >
                <CountdownCircleTimer
                  isPlaying
                  duration={countDownTime}
                  colors={["#0f0", "#F7B801", "#A30000", "#A30000"]}
                  colorsTime={[countDownTime, countDownTime / 2, 0]}
                  size={80}
                >
                  {({ remainingTime }) => secondsToMinutes(remainingTime)}
                </CountdownCircleTimer>
              </Col>
            </Row>
          </Card>
          <Card
            title="Bidding Amount"
            className="mt-3"
            actionButtons={<Button>Bid amount</Button>}
          >
            <Row>
            <Col sm={8} >
           <Row>
           <Col sm="4">
                <Button size="default">+ 100</Button>{" "}
              </Col>
              <Col  sm="4">
                <Button size="default"  >+ 200</Button>
              </Col>
              <Col  sm="4">
                <Button size="default">+ 500</Button>
              </Col>
           </Row>
            <Row className="mt-3">
            <Col  sm="4">
                <Button size="default">+ 1000</Button>
              </Col>
              <Col  sm="4">
                <Button size="default"  >+ 2000</Button>
              </Col>
              <Col  sm="4">
                <Button size="default">+ 5000</Button>
              </Col>
            
              </Row>
            </Col>
            <Col>
                <Form.Text value={`₹${new Intl.NumberFormat("en-in").format(34500 ?? 0)}`} style={{fontSize:"2rem"}}/>
              </Col>
            </Row>
          </Card>
        </Col>
        {/* Bidding_history */}
        <Col>
          <Card
            title="Bidding history"
            noPadding
            className="h-100 "
            bodyClassName="bidding-history"
          >
            {BDHY.map((item, index) => {
              return (
                <Card noPadding className="p-2 m-2 shadow border-0">
                  <Row className="m-0 align-items-center">
                    <div
                      className="bg-primary d-flex rounded-circle text-white"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <label className="m-auto">{index + 1}</label>
                    </div>
                    <Col sm={6}>
                      <h6 className="mb-0">{item?.user}</h6>
                      <span>
                        <small className="d-block" style={{ fontSize: "10px" }}>
                          {getTimeAgo(item?.time)}
                        </small>
                      </span>
                    </Col>
                    <Col sm>
                      <h6 className="mb-0 text-end fw-bold">
                        ₹
                        {new Intl.NumberFormat("en-in").format(
                          item?.amount ?? 0
                        )}
                      </h6>
                    </Col>
                  </Row>
                </Card>
              );
            })}
          </Card>
        </Col>
      </Row>
    </Card>
    
    

    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Participates</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
     {pList.map((item,index)=>{
      return  <Card noPadding className="p-2 m-2 shadow border-0">
      <Row className="m-0 align-items-center">
        <div
          className="bg-primary d-flex rounded-circle text-white"
          style={{ width: "40px", height: "40px" }}
        >
          <label className="m-auto">{index + 1}</label>
        </div>
        <Col sm={6}>
          <h6 className="mb-0">{item?.user}</h6>
          <span>
            <small className="d-block" style={{ fontSize: "10px" }}>{'Joined at '}  
              {getTimeAgo(item?.joinedAt)}
            </small>
          </span>
        </Col> 
      </Row>
    </Card>
     })}
      </Offcanvas.Body>
    </Offcanvas>
  </>
  );
}
