import React, { useState } from 'react'
import { Col,Form as RForm, Row } from 'react-bootstrap'
import UrlConstants from '../../constants/UrlConstants';
import useFetch from '../../hooks/useFetch';
import useNoninitialEffect from '../../hooks/useNoninitialEffect';
import useToast from '../../hooks/useToast';
import Form from '../../shared/form';
import NumberFormat from 'react-number-format';
import firebase from './fireBase';
// import firebase from './fireBase';

export default function CreateUser(props: any) {
    
    const { userDetails, setUserDetails, setIsCrete } = props;
    const { getToast } = useToast()
    const { USERREGISTRATION } = UrlConstants();
    const { response, loading, onRefresh: saveUserDetails } = useFetch({ url: USERREGISTRATION, Options: { method: 'POST', data: userDetails } });
    const saveUser = () => {
        saveUserDetails();
    }
    useNoninitialEffect(() => {
        if (response === 1) {
            getToast("saved/updated successfully", 'success');
            setIsCrete(false);
        }
        else {
            getToast("saved/updated failed", 'error')
        }
    }, [response])
    const onSave=(e:any)=>{
        
        let error: Array<string> = [];
        if (userDetails.phone) {
            
            let reg = /^(?!0+$)\d{10,}$/;
            if (!userDetails.phone.match(reg))
              error.push("Pleaseentervalidmobilenumber");
            if (userDetails.phone.length < 10)
               error.push("Mobilenumbermustconsistof10digits");
               if (userDetails.phone.length > 10)
               error.push("Mobilenumbermustconsistof10digits");
          }
        if(userDetails.name=== "") error.push("Name Is Mandatory")
        if (userDetails.eMail) {
            let reg = /^[a-zA-Z0-9.]+@[a-zA-Z]+(?:\.[a-zA-Z]+)*$/;
            if (!reg.test(userDetails.eMail))
              error.push("Pleaseentervalidemail");
          }
        // if(userDetails.aadhar>0) error.push("aadhar Is Mandatory")
        if (error.length > 0) {
            getToast(error.join(", ").toString(), 'error');
          }
          else{
            userDetails.isActive =true;
            
            saveUserDetails();
          }
    }
    const emailValidationHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let reg = /^[a-zA-Z0-9@.]*$/;
    
        if (reg.test(e.target.value)) {
            setUserDetails({ ...userDetails, eMail: e.target.value });
        }
    }
    // const configureCapch =()=>{
    //     window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
    //         'size': 'invisible',
    //         'callback': (response) => {
    //           // reCAPTCHA solved, allow signInWithPhoneNumber.
    //           onSignInSubmit();
    //         }
    //       });
    // }

    return (
        <Form noValidate onSubmit={(e:any)=> onSave(e)}>
            <Row className="mx-0" >
                <Col xl="3" lg="4" md="6">
                    <Form.Text required name='' value={userDetails.name} label="UserName" onChange={(e: any) => setUserDetails({ ...userDetails, name: e })} />
                </Col>
                <Col xl="3" lg="4" md="6">
                    <Form.Text required name='' value={userDetails.phone} label="Phone" onChange={(e: any) => setUserDetails({ ...userDetails, phone: e })} />
                </Col>
                <Col xl="3" lg="4" md="6">
                    <label>Email</label>
                <RForm.Control
              required
              type="email"
              placeholder={"EnterEmail"} autoComplete="off"
              value={userDetails.eMail}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                emailValidationHandler(e)
              }
            />
            </Col>
                <Col xl="3" lg="4" md="6">
                    <Form.Text required name='' value={userDetails.password} label="Password" onChange={(e: any) => setUserDetails({ ...userDetails, password: e })} />
                </Col>
                <Col xl="3" lg="4" md="6">
                    <Form.Text required name='' value={userDetails.aadhar} label="Aadhar" onChange={(e: any) => setUserDetails({ ...userDetails, aadhar: e })} />
                </Col>
                <Col xl="3" lg="4" md="6">
                    <Form.Text required name='' value={userDetails.address} label="Address" onChange={(e: any) => setUserDetails({ ...userDetails, address: e })} />
                </Col>
                <Col xl="3" lg="4" md="6">
                    <Form.Text required name='' value={userDetails.city} label="City" onChange={(e: any) => setUserDetails({ ...userDetails, city: e })} />
                </Col>
                <Col xl="3" lg="4" md="6">
                    <Form.Select placeholder='choose state' errorMsg="state required" label="State" onChange={(e: any) => setUserDetails({ ...userDetails, state: e })}>
                        <option value={"Telangana"}>{"Telangana"}</option>
                        <option value={"AndraPradesh"}>{"AndraPradesh"}</option>
                    </Form.Select>
                </Col>
                <Form.Submit />
            </Row>
        </Form>
    )
}
