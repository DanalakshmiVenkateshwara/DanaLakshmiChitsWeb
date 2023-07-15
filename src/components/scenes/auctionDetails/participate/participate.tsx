import React, { useEffect, useRef, useState } from "react";
import { Col, Offcanvas, Row } from "react-bootstrap";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Button from "../../../shared/button";
import Card from "../../../shared/card";
import Form from "../../../shared/form";
import './_participate.scss'
import { useActionTypes, useStore } from "../../../store";
import { useNavigate } from "react-router-dom";




export default function Participate() {
  const { Store, State } = useStore();
  const navigate = useNavigate();
  const [sockets, setsocket] = useState<any>();
  const { getActionTypes } = useActionTypes();
  const actionTypes: any = getActionTypes();
  const [connectedClients, setConnectedClients] = useState([])
  const [bids, setBids] = useState<any>([])
  const currentDate = new Date();

  // Set the desired trigger time
  const triggerTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 23, 48, 0);


  console.log(((triggerTime.getSeconds() - currentDate.getSeconds()) / 1000))
  console.log(triggerTime.getSeconds(), currentDate.getSeconds())




  React.useEffect(() => {
    const userDetails = { Username: State?.user?.name, Email: State?.user?.email }

    const socket = new WebSocket(`wss://localhost:5001/websocket?connectionId=${State?.user.socketId}&userDetails=${encodeURIComponent(JSON.stringify(userDetails))}&socketCloseTime=${triggerTime.toLocaleString("en-US", { timeZone: 'Asia/Kolkata' })}`);
    setsocket(socket)
    socket.onopen = () => {
      console.log('WebSocket connection established');
    };

    // Handle incoming messages
    socket.onmessage = (event: any) => {
      const msg = JSON.parse(event.data);
      const { Action, Data } = msg;

      if (Action === 'connectResponse') {
        const connectionId = msg.connectionId;
        console.log('WebSocket connection established. Connection ID:', connectionId);
        Store.update(actionTypes.updateuser, { ...State.user, socketId: connectionId })
      } else if (Action === 'connectedClients') {
        console.log('WebSocket connectedclients', Data);
        // setConnectedClients(Data);
        addClients(Data);
      } else if (Action === 'biddingResponse') {
        console.log('WebSocket bidd', Data);
        // setBids(Data);
        addBids(Data);
      } else if (Action === 'auctionResponse') {
        if (State?.user?.lastBidconnectionId === State?.user?.socketId) { alert("you are bid winner") }
        else { navigate("/") }
      }
      else {
        // Handle other incoming messages
        // setMessages((prevMessages) => [...prevMessages, message]);
      }
    };

    // Cleanup on component unmount
    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, []);

  useEffect(()=>{
    Store.update(actionTypes.updateuser,{...State?.user, lastBidconnectionId:bids?.at(-1)?.ConnectionId})
  },[bids])
  
  const [show, setShow] = useState(false);
  const [lastBidValue, setLastBidValue] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const countDownTime = 15;

  function addClients(Data: any) {
    Data.sort((a: any, b: any) => {
      const dateA = new Date(a.CreatedDate);
      const dateB = new Date(b.CreatedDate);
      return dateA.getTime() - dateB.getTime();
    })
    setConnectedClients(Data)
  }

  function addBids(Data: any) {
    Data.sort((a: any, b: any) => {
      const dateA = new Date(a.CreatedDate);
      const dateB = new Date(b.CreatedDate);
      return dateA.getTime() - dateB.getTime();
    })
    setBids(Data);
    // Store.update(actionTypes.updateuser,{...State?.user, lastBidconnectionId:Data?.at(-1)?.ConnectionId})
    Data.length > 0 && setLastBidValue(Number(Data.at(-1).amount));
  }

  function RaiseBid() {
    sockets.send(JSON.stringify({ Action: 'bidding', Data: { ConnectionId: State.user.socketId, amount: String(lastBidValue), name: State?.user?.name } }));
  }

  function secondsToMinutes(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return formattedMinutes + ':' + formattedSeconds;
  }

  function getTimeAgo(timestamp: any) {
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
    <Card title="Auction Participation" className="h-100 participate" headerAction={<Button onClick={handleShow}>Participation list</Button>}>
      {/* <Button onClick={() => { sockets.send(JSON.stringify({ Action: 'bidding', Data: { id: 'ertyhbv4567bn', amount: '5653', name: 'sandeep' } })); }}>send</Button> */}
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
                  duration={Number(((triggerTime.getTime() - currentDate.getTime()) / 1000).toFixed(0))}
                  colors={["#0f0", "#F7B801", "#A30000", "#A30000"]}
                  colorsTime={[Number(((triggerTime.getTime() - currentDate.getTime()) / 1000).toFixed(0)), Number(((triggerTime.getTime() - currentDate.getTime()) / 1000).toFixed(0)) / 2, 0]}
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
            actionButtons={
              <Button onClick={() => { RaiseBid() }} disabled={Number(((triggerTime.getTime() - currentDate.getTime()) / 1000).toFixed(0)) > 0 ? false : true}>Bid amount</Button>
            }
          >
            <Row>
              <Col sm={8} >
                <Row>
                  <Col sm="4">
                    <Button size="default" onClick={() => setLastBidValue(lastBidValue + 100)}>+ 100</Button>{" "}
                  </Col>
                  <Col sm="4">
                    <Button size="default" onClick={() => setLastBidValue(lastBidValue + 200)}>+ 200</Button>
                  </Col>
                  <Col sm="4">
                    <Button size="default" onClick={() => setLastBidValue(lastBidValue + 500)}>+ 500</Button>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col sm="4">
                    <Button size="default" onClick={() => setLastBidValue(lastBidValue + 1000)}>+ 1000</Button>
                  </Col>
                  <Col sm="4">
                    <Button size="default" onClick={() => setLastBidValue(lastBidValue + 2000)} >+ 2000</Button>
                  </Col>
                  <Col sm="4">
                    <Button size="default" onClick={() => setLastBidValue(lastBidValue + 5000)}>+ 5000</Button>
                  </Col>

                </Row>
              </Col>
              <Col>
                <Form.Text disabled type="number" value={`₹${new Intl.NumberFormat("en-in").format(lastBidValue ?? 0)}`} style={{ fontSize: "2rem" }} onChange={(e: any) => { console.log(e); setLastBidValue(Number(e.replace(/₹|,|[a-zA-Z]/g, ""))) }} />
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
            {bids.map((item: any, index: number) => {
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
                      <h6 className="mb-0">{item?.ConnectionId}</h6>
                      <span>
                        <small className="d-block" style={{ fontSize: "10px" }}>
                          {/* {getTimeAgo(item?.time)} */}
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
        {connectedClients.map((item: any, index) => {
          return <Card noPadding className="p-2 m-2 shadow border-0">
            <Row className="m-0 align-items-center">
              <div
                className="bg-primary d-flex rounded-circle text-white"
                style={{ width: "40px", height: "40px" }}
              >
                <label className="m-auto">{index + 1}</label>
              </div>
              <Col sm={6}>
                <h6 className="mb-0">{item?.User?.Username}</h6>
                <span>
                  <small className="d-block" style={{ fontSize: "10px" }}>{'Joined at '}
                    {/* {getTimeAgo(item?.joinedAt)} */}
                  </small>
                  <small>{item?.ConnectionId}</small>
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
