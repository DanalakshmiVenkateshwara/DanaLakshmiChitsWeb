import React, { useEffect, useState } from 'react';
import { Form, Col, Row, Button, Container } from 'react-bootstrap';
import useToast from '../../hooks/useToast';
import useFetch from '../../hooks/useFetch';
import useNoninitialEffect from "../../hooks/useNoninitialEffect";
import { connect } from 'react-redux'
import appStore from '../../shared/Store/Store';
import { signInWithEmailAndPassword } from 'firebase/auth';
import loginImage from '../../assets/images/login.png'
import { useNavigate } from "react-router-dom";
import { auth } from '../../../App';


export default function LoginPage() {
    const { getToast } = useToast();
    const [userName, setUserName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [userInfo, setUserInfo] = useState<any>({ userId: 0, userName: '' });
    const navigate = useNavigate();
    // const [triggerValidate, setTriggerValidate] = React.useState<boolean>(true);
    const { response, loading, onRefresh: validateUser } = useFetch({ url: `/Admin/ValidateUser?userName=${userName}&password=${password}`, Options: { method: 'GET', initialRender: false } });
    const validationHandler = (): boolean => {

        let error = "";
        let isValid = true;

        if (userName === "" && password === "")
            error = "User name/ Password are required to login.";
        else if (userName === "")
            error = "User name is required to login.";
        else if (password === "")
            error = "Password is required to login.";

        if (error != "") {
            getToast(error, 'error');
            isValid = false;
        }

        return isValid;
    }
    const onLogin = () => {

        signInWithEmailAndPassword(auth, userName, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigate("/home")
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });

    }
    useNoninitialEffect(() => {

        var data: any = response;
        if (data != null) {
            localStorage.setItem('userInfo', JSON.stringify(response));
            //  Store.update("updateUserInformation", { ...userInfo, userId: Number(data?.id), userName: data?.name});
        }
    }, [response]);


    const loginClickHandler = () => {
        if (validationHandler()) {
            validateUser();
            // setTriggerValidate(!triggerValidate);
            onLogin();
        }
    }
    const enterKeyPressed = (event: any) => {
        if (event.which == 13) {
            loginClickHandler();
        }
    }

    return (
        <Row className='vh-100'>
            <Col className='d-flex bg-primary'>
                <img src={loginImage} width='80%' className='m-auto' />
            </Col>
            <Row as={Col}>
                <Col sm='8' className='m-auto'>
                    <h1>logo</h1>
                    <Form className='pt-3'>
                        <Form.Group controlId="loginPageUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" placeholder="Enter Username" value={userName}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}
                                onKeyPress={(e: any) => enterKeyPressed(e)} />
                        </Form.Group>
                        <Form.Group controlId="loginPagePassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" value={password}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                onKeyPress={(e: any) => enterKeyPressed(e)} />
                        </Form.Group>
                        <div className={'d-flex justify-content-center py-3'}>
                            <Button variant="primary" className={'px-3 col'} onClick={() => { loginClickHandler() }}>
                                Sign In
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>  {

            }
        </Row>
    )
}