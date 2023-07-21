import React, { useEffect, useState } from "react";
import { Button, Col, Form as RForm, Row, Table } from "react-bootstrap";
import { CardBody, CardHeader } from "reactstrap";
import Footer from "../../shared/footer";
import Header from "../../shared/header";
import Card from "../../shared/card/Card";
import FormControl from "../../shared/form/FormControl";
import Suggest from "../../shared/form/controls/Suggest";
import useFetch from "../../hooks/useFetch";
import useNoninitialEffect from "../../hooks/useNoninitialEffect";
import Form from "../../shared/form";
import BiddingsGrid from "./biddingsGrid";
import { useStore } from "../../store";
import useToast from "../../hooks/useToast";

export default function Biddings() {
    debugger
  
  const {State,Store} = useStore();
  const [groupId, setGroupId] = useState<any>(-1);
  const [groupsData, setGroupsData] = useState<Array<any>>([]);
  const [auctionsData,setAuctionsData] = useState<Array<any>>([]);
  const { getToast } = useToast();

  const { response:groupResponse, loading:groupLoading} = useFetch({ url: `/Admin/GetEnrollMents/${State.user.id}/${0}/${true}`, Options: { method: 'GET', initialRender:true} });


  const { response, loading, onRefresh :getAuctionsData} = useFetch({ url: `/Admin/GetCreateAuction?groupId=${groupId}`, Options: { method: "GET", initialRender: false } });

  const onGroupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debugger
    if(e.target.value > "0"){
      setGroupId(Number(e.target.value));
      getAuctionsData();
    }
    else{
        setGroupId(Number(e.target.value));
        getToast('Please select group.', 'error');
        setAuctionsData([])
    }
    
    // let gropWiseDetails = userChits.filter((f: any) => f.groupId  == e.target.value);
    // setuserChits(gropWiseDetails)
  }
  useNoninitialEffect(() => {
    debugger
    let data: any = groupResponse;
    
    setGroupsData(data)
  }, [groupResponse])

  useNoninitialEffect(() => {
    debugger
    let data: any = response;
    setAuctionsData(data)
  }, [response])

  return (
    <>
    <Card noPadding title="Auction participation" headerAction={<Col sm={4} className="d-flex align-items-end justify-content-end">
      <RForm.Control as="select" className="col-6 col-sm-3 col-xl-2" size="sm" value={groupId}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onGroupChange(e)
        }
      >
        <option key={-1} value={-1}>
          {"..Choose group.."}
        </option>
        {groupsData.map((item) => { return (
            <option key={item.id} value={item.groupId}>
              {item.groupName}
            </option>
          );
        })}
      </RForm.Control>
      </Col>}
      >
        <BiddingsGrid data={auctionsData} loading={loading} />
      </Card>
    </>
    
  )
}