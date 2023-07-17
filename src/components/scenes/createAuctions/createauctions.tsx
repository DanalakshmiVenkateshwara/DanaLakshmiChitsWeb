import React, { useEffect, useState } from 'react'
import { Button, Col, Form as RForm, OverlayTrigger, Row } from 'react-bootstrap'
import { Container } from 'reactstrap'
import Number from '../../shared/form/controls/Number'
import Select from '../../shared/form/controls/Select'
import Submit from '../../shared/form/controls/Submit'
import Text from '../../shared/form/controls/Text'
import Form from '../../shared/form'
import UrlConstants from '../../constants/UrlConstants'
import useFetch from '../../hooks/useFetch'
import useToast from '../../hooks/useToast'
import useNoninitialEffect from '../../hooks/useNoninitialEffect'
import ToolTip from '../../shared/tooltip/ToolTip'
import TimePicker from 'react-time-picker'
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import { NumericFormat, PatternFormat } from 'react-number-format'

export default function CreateAuction(props: any) {
    const { setIsCrete } = props
    const { getToast } = useToast();
    const [groupId, setGroupId] = useState<any>();
    const [amount, setAmount] = useState<any>();
    const [groupsData, setGroupsData] = useState<Array<any>>([]);
    const [auctionDetails, setAuctionDetails] = useState({ GroupId:0, GroupName: "", Amount: 0, BaseAmount: 0, StartDate: "", StartTime: "", EndTime: "",AuctionMonth:0});
    const { response: groupResponse, loading: groupsLoading } = useFetch({ url: `/User/GetAllChitPlans/${false}`, Options: { method: "GET", initialRender: true } });
    
    const { response, loading, onRefresh: saveAuctionDetails } = useFetch({ url:`/Admin/CreateAuction`, Options: { method: 'POST', data: auctionDetails } });
    
    const saveAuction = () => {
        if(auctionDetails.StartDate.length<=0)
          getToast('Start Date Is Mandatory', 'error');
        else if(auctionDetails.AuctionMonth> 0 && auctionDetails.GroupId >0 && auctionDetails.Amount>0 &&auctionDetails.BaseAmount>0&& auctionDetails.StartTime.length > 0 && auctionDetails.EndTime.length >0 ){
            var data = auctionDetails;
            saveAuctionDetails();
        }
        else if(auctionDetails.StartTime >= auctionDetails.EndTime){
          getToast('End Date must be less than Start Date ', 'error');
        }
        else{
            getToast('All are Mandatory.', 'error');
        }
    }
    useNoninitialEffect(() => {
        let data: any = groupResponse;
        
        setGroupsData(data)
    }, [groupResponse])
    useNoninitialEffect(() => {
        if (response === 1) {
            getToast('successfull submitted', 'success');
            setIsCrete(false)
            props.CreateAuctionGrid();
        }
        else
            getToast('Failed submitted', 'error');

    }, [response])
    
    const onDateChangehandler =(e:any)=>{
        if(new Date(e.currentTarget.value).toLocaleDateString() <= new Date().toLocaleDateString())
          getToast('Start Date must be future Date', 'error');
         else
        setAuctionDetails({ ...auctionDetails, StartDate: e.target.value})
    }
    const onGroupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if(e.target.value != '-1'){
        let amount = groupsData.filter((f: any) => f.id == e.target.value)[0].amount;
        setAuctionDetails({ ...auctionDetails, Amount:amount, GroupId: parseInt(e.target.value)});
        }
        else
        setAuctionDetails({ ...auctionDetails, Amount:0});
      }
    
      const startTimeChangeHandler = (e: any) => {
        setAuctionDetails({ ...auctionDetails, StartTime: e.target.value})
      }
      const endTimeChangeHandler = (e: any) => {
        if(auctionDetails.StartTime >= e.target.value){
          getToast('End Date must be less than Start Date ', 'error');
        }
        setAuctionDetails({ ...auctionDetails, EndTime: e.target.value})
      }
      

    return (
        <Form noValidate onSubmit={saveAuction}>
            <Row className='mx-0'>
                <Col xl="3" lg="4" md="6">
                    <label>Select Group</label>
                    <RForm.Control
            as="select"
            className="col-6 col-sm-3 col-xl-2"
            size="sm"
            value={groupId}
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
          </RForm.Control>
                </Col>
                <Col xl="3" lg="4" md="6">
                    <Form.Number disabled={true} required value={auctionDetails.Amount}  name='' errorMsg="Amount is required" label="Amount" />
                </Col>
                <Col xl="3" lg="4" md="6">
                    <Form.Number required name='' errorMsg="Base Amount is required" label="BaseAmount" onChange={(e: any) => setAuctionDetails({ ...auctionDetails, BaseAmount: e })} />
                </Col>
                <Col xl="3" lg="4" md="6">
                <Form.Number required name='' errorMsg="Auction MOnth is required" label="AuctionMonth" onChange={(e: any) => setAuctionDetails({ ...auctionDetails, AuctionMonth: e })} />
                </Col>
                <Col xl="3" lg="4" md="6">
                <RForm.Label>StartTime</RForm.Label>
                <PatternFormat 
                  format="##:##"
                  className="form-control"
                  placeholder="HH:mm (24:00)"
                  mask="_"
                  value={auctionDetails.StartTime}
                  allowEmptyFormatting={false}
                  onChange={(e: any) => startTimeChangeHandler(e)}
                />
                </Col>
                <Col xl="3" lg="4" md="6">
                <RForm.Label>EndTime</RForm.Label>
                <PatternFormat
                  format="##:##"
                  className="form-control"
                  placeholder="HH:mm (24:00)"
                  mask="_"
                  value={auctionDetails.EndTime}
                  allowEmptyFormatting={false}
                  onChange={(e: any) => endTimeChangeHandler(e)}
                />
                </Col>
                <Col xl="3" lg="4" md="6">
                <RForm.Label>{"AuctionDate"}</RForm.Label>
                    <RForm.Control type="date" value={auctionDetails.StartDate} defaultValue={auctionDetails.StartDate} onChange={(e:any)=> onDateChangehandler(e)}  placeholder="Choosedate"  />
                </Col>
            </Row>
            <Form.Submit />
        </Form>
    )
}


