import React, { useEffect, useState } from 'react';
import { Form, Col, Row, Button, Container } from 'react-bootstrap';
import useToast from '../../hooks/useToast';
import useFetch from '../../hooks/useFetch';
import useNoninitialEffect from "../../hooks/useNoninitialEffect";
import { signInWithEmailAndPassword, RecaptchaVerifier, signInWithPhoneNumber, PhoneAuthProvider, signInWithCredential, createUserWithEmailAndPassword, EmailAuthProvider, linkWithCredential, updateProfile } from 'firebase/auth';
import loginImage from '../../assets/images/login.png'
import logo from '../../assets/images/logo.png'
import { useNavigate } from "react-router-dom";
import { auth } from '../../../App';
import { useActionTypes, useStore } from '../../store';
import UrlConstants from '../../constants/UrlConstants';
import firebase from 'firebase/app';
import '@firebase/auth';
import OtpInput from 'react-otp-input';


export default function LoginPage() {
    
    const { getToast } = useToast();
    const [userName, setUserName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isNewUser, setIsNewUser] = useState<boolean>(false);
    const [otp, setOtp] = useState('');
    const [confirmation, setConfirmation] = useState<any>(null);
    const [mobileNo, setMobileNo] = useState<any>("");
    const [userInfo, setUserInfo] = useState<any>({ userId: 0, userName: '' });
    const [userDetails, setUserDetails] = useState<any>({ id: 0, name: '', eMail: '', phone: '', password: '', district: '', state: '', isActive: true });
    const navigate = useNavigate();
    const { USERREGISTRATION } = UrlConstants();

    //store setup
    const { State, Store } = useStore();
    const { getActionTypes } = useActionTypes();
    const actionTypes: any = getActionTypes();

    const { response: saveUserresponse, loading: saveUserloading, onRefresh: saveUserDetails } = useFetch({ url: USERREGISTRATION, Options: { method: 'POST', data: userDetails } });
    const { response, loading, onRefresh: validateUser } = useFetch({ url: `/Admin/ValidateUser?userName=${userName}&password=${password}`, Options: { method: 'GET', initialRender: false } });
    const { response:userExistedresponse, loading:userExistedLoading, onRefresh: isUserExisted } = useFetch({ url: `/Admin/CheckuserExist?phone=${userDetails.phone}`, Options: { method: 'GET', initialRender: false } });
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
    useNoninitialEffect(() => {
        if (saveUserresponse === 1) {
            getToast("saved/updated successfully", 'success');

        }
        else {
            getToast("saved/updated failed", 'error')
        }
    }, [saveUserresponse])
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
        if (data != "") {
            if (data.iSAdmin == "True") {
                Store.update(actionTypes?.updateuser, {...State.user, id: 0, isAdmin: true })
                navigate("/home")
            }
            else {
                
                Store.update(actionTypes?.updateuser, {...State.user, id: data.id, isAdmin: false,name:data.name,email:data.email })
                navigate("/home")
            }
           
        } else {
            getToast("Invalid Credentials", 'error');
        }
    }, [response]);


    const loginClickHandler = () => {
        // Store.update(actionTypes?.updateuser,{name:'test'})
        // navigate("/home")
        if (validationHandler()) {
            validateUser();
            // setTriggerValidate(!triggerValidate);
            // onLogin();
        }
    }
    const enterKeyPressed = (event: any) => {
        if (event.which == 13) {
            loginClickHandler();
        }
    }
    const onStateChange = (e: any) => {
        
        setUserDetails({ ...userDetails, state: e.target.value })
    }
    const registerClickHandler = () => {
        
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
        if (userDetails.name === "") error.push("Name Is Mandatory")
        if (userDetails.password === "") error.push("Password Is Mandatory")
        if (userDetails.phone === "") error.push("mobile No Is Mandatory")
        if (userDetails.eMail === "") error.push("email  Is Mandatory")
        if (userDetails.eMail) {
            let reg = /^[a-zA-Z0-9.]+@[a-zA-Z]+(?:\.[a-zA-Z]+)*$/;
            if (!reg.test(userDetails.eMail))
                error.push("Pleaseentervalidemail");
        }
        if (userDetails.district == "") {
            error.push("Pleaselectrdistrict");
        }
        if (userDetails.state <= 0) {
            error.push("Pleaseselectstate");
        }
        // if(userDetails.aadhar>0) error.push("aadhar Is Mandatory")
        if (error.length > 0) {
            getToast(error.join(", ").toString(), 'error');
        } else {
            saveUserDetails();
        }

    }
    const emailValidationHandler = (e: any) => {
        let reg = /^[a-zA-Z0-9@.]*$/;

        if (reg.test(e.target.value)) {
            setUserDetails({ ...userDetails, eMail: e.target.value });
        }
    }

    useNoninitialEffect(() => {
        var existedUserCount: any = userExistedresponse;
        if (existedUserCount > 0) {
            getToast("user existed with this mobile no", 'error');

        }
        else {
            const recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response: any) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                //   onSignInSubmit();
            }

        }, auth);

        signInWithPhoneNumber(auth, `+91${mobileNo}`, recaptchaVerifier)
            .then((confirmationResult: any) => {
                // OTP sent to the user's phone number
                // Store the confirmationResult to be used later for OTP verification
                setConfirmation(confirmationResult);

            })
            .catch((error: any) => {
                // Handle sign-in error
            });
        }
    }, [userExistedresponse])

    //mobile authentication
    const sendOTP = (phoneNumber: any) => {
        setMobileNo(phoneNumber);
        
        isUserExisted();
        // const recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
        //     'size': 'invisible',
        //     'callback': (response: any) => {
        //         // reCAPTCHA solved, allow signInWithPhoneNumber.
        //         //   onSignInSubmit();
        //     }

        // }, auth);

        // signInWithPhoneNumber(auth, `+91${phoneNumber}`, recaptchaVerifier)
        //     .then((confirmationResult: any) => {
        //         // OTP sent to the user's phone number
        //         // Store the confirmationResult to be used later for OTP verification
        //         setConfirmation(confirmationResult);

        //     })
        //     .catch((error: any) => {
        //         // Handle sign-in error
        //     });
    };

    const verifyOTP = (otp: any) => {
        const credential = PhoneAuthProvider.credential(confirmation?.verificationId, otp);
        
        signInWithCredential(auth, credential)
            .then((userCredential: any) => {
                
                
                // User signed in successfully with OTP
                // Proceed to collect email and password
                // createUserWithEmailAndPassword(auth, userDetails.eMail, userDetails.password)
                //     .then((userCredential) => {
                //         // User account created successfully
                //         registerClickHandler();
                        
                //     })
                //     .catch((error) => {
                //         // Handle account creation error
                //     });

                    const response =  EmailAuthProvider.credential( userDetails.eMail,  userDetails.password);
               
                    let userData =  linkWithCredential(auth?.currentUser as any,response).then((userCredential) => {
                        // Account linking successful
                        // const user = userCredential.user;
                        registerClickHandler();
                        setIsNewUser(false)
                        // Add display name to the user
                        return updateProfile(auth.currentUser as any,{
                          displayName: userDetails.name,
                        });
                      })
                      .catch((error) => {
                        debugger
                        getToast("email already existed", error)
                        // Handle account linking error
                      });
            })
            .catch((error: any) => {
                // Handle OTP verification error
            });
    };

    return (
        <Row className='vh-100'>
            <Col className='d-flex bg-primary'>
                <img src={loginImage} width='80%' className='m-auto' />
            </Col>
            <Row as={Col}>
                <Col sm='8' className='m-auto'>
                   {/* <h1>logo</h1> */}
                   <img src={logo} width='80%' className='m-auto' />

                    {!isNewUser ?
                        <>  <Form className='pt-3'>
                            <Form.Group controlId="loginPageUsername">
                                <Form.Label>UserName</Form.Label>
                                <Form.Control type="username" placeholder="Enter MobileNo" value={userName}
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
                                <Button variant="primary" className={'px-3 col'} onClick={() => loginClickHandler()}>
                                    Sign In
                                </Button>
                            </div>
                        </Form>
                            <h6 className='text-center'>Don't have an account? <span onClick={() => { setIsNewUser(true) }} className="cursor">Sign Up</span></h6>
                        </>
                        :
                        !confirmation ?
                            <>
                                <Form className='pt-3'>
                                    <Form.Group>
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="name" placeholder="Enter Name" value={userDetails.name}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserDetails({ ...userDetails, name: e.target.value })} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter Email" value={userDetails.eMail}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => emailValidationHandler(e)} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>MobileNo</Form.Label>
                                        <Form.Control type="mobile" placeholder="Enter MobileNo" value={userDetails.phone}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserDetails({ ...userDetails, phone: e.target.value })} />
                                    </Form.Group>
                                    <Form.Group >
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Enter Password" value={userDetails.password}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserDetails({ ...userDetails, password: e.target.value })} />
                                    </Form.Group>
                                    <Form.Group >
                                        <Form.Label>District</Form.Label>
                                        <Form.Control type="district" placeholder="Enter district" value={userDetails.district}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserDetails({ ...userDetails, district: e.target.value })} />
                                    </Form.Group>
                                    <Form.Group >
                                        <Form.Label>State</Form.Label>
                                        <Form.Control as="select" className="col-6 col-sm-3 col-xl-2" size="sm" value={userDetails.state} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onStateChange(e)}>
                                            <option key={-1} value={-1}>{"..Choose group.."} </option>
                                            <option key={1} value={2}>{"Telangana"}</option>
                                            <option key={2} value={3}>{"AndraPradesh"}</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <div className={'d-flex justify-content-center py-3'}>
                                        <Button variant="primary" id="sign-in-button" className={'px-3 col'} onClick={() => {
                                            // registerClickHandler();
                                            sendOTP(userDetails.phone)
                                        }}>
                                            Register
                                        </Button>
                                    </div>
                                </Form>
                                <h6 className='text-center'>Already have an account? <span onClick={() => { setIsNewUser(false) }} className="cursor">Sign In</span></h6>
                            </> :
                            <>
                                <OtpInput
                                    value={otp}
                                    onChange={setOtp}
                                    numInputs={6}
                                    renderSeparator={<pre>   </pre>}
                                    inputStyle={{
                                        width: "50px", height: '50px',
                                        border: " 1px solid #ced4da",
                                        borderRadius: " 0.375rem",
                                        transition: " border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out"
                                    }}
                                    renderInput={(props) => <input {...props} />}
                                />
                                <Button onClick={() => { verifyOTP(otp) }}>Submit</Button>
                            </>
                    }
                </Col>
            </Row>  {
            }
        </Row>
    )
}