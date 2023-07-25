import React, { useState } from 'react'
import { Button, Card, Carousel, Col, Container,    Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'
import slideOne from '../../assets/images/slider-1.jpg'
import slideTwo from '../../assets/images/slider-2.jpg'
import slideThree from '../../assets/images/slider-3.jpg'
import downloadApp from '../../assets/images/app_screenshot.png'
import chitWorks from '../../assets/images/chitworks.jpg'
import './homepage.scss'
import Form from '../../shared/form'
import useFetch from '../../hooks/useFetch'
import useNoninitialEffect from '../../hooks/useNoninitialEffect'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
const HomePage = () => {
    const navigate = useNavigate();
    const [chitPlans ,setChitPlans] = useState<any>()

    const { response, loading, onRefresh: CompletedGroupDetails } = useFetch({ url: `/User/GetAllChitPlans/${false}`, Options: { method: "GET", initialRender: true } });
    useNoninitialEffect(() => {
        if(response!=null)
        setChitPlans(response)
        // CompletedGroupDetails();
      }, [response]);
    

    return (
        <div className='homepage'>
            <Row>

                <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary px-3">
                    <Container fluid>
                    <img src={logo} width='3%' height={"10%"} style={{background:"#fff"}} />
                        <Navbar.Brand href="#home" className='text-white'>SRI DHANA LAKSHMI VENKATESHWARA ChITS</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">

                            <Nav className="ms-auto ">
                                <Nav.Link href="#">Home</Nav.Link>
                                <Nav.Link href="#">Chit Plans</Nav.Link>
                                <Nav.Link href="#">Certificate</Nav.Link>
                                <Nav.Link href="#">How to Join</Nav.Link>
                                {/* <Nav.Link href="#deets">Testimonals</Nav.Link> */}
                                <Button   className='rounded-pill mx-3' variant='light'>Download App</Button>
                                <Nav.Link onClick={() => { navigate("/Login") }}>Login/SignUp</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>


                {/* carousel */}
                <div className='position-relative p-0'>
                    <Carousel fade  >
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={slideOne}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>మా ప్రత్యేకత ఎలాంటి షూరిటీ లేకుండ 1,00,000 చిట్టి వరకు ఇవ్వబడును</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={slideTwo}
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>ధనం సంపాదించడం కంటె  పొదుపు చేయడం కష్టం</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={slideThree}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>వ్యాపార అభివృధి తో పాటు దానాబి వృద్ధి కూడ ముఖ్యం</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={slideOne}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>చిన్న మొత్తాల  పొదుపు పెద్ద మొత్తాలలో  మలుపు</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={slideTwo}
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>ధన చిట్స్ తో  కలిసి పొదుపు చేసుకోండి  పెద్దగా కలలు కనండి</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={slideThree}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>ప్రతి మనిషికి కష్టం ఉంటుంది ఆ కష్టాన్ని సంతోషంగా మార్చేదే ధన చిట్స్</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    <div className='contact-form'>
                        {/* <Card>
                            <Card.Body>
                                <h3>Join in 2 minutes</h3>
                                <div className='contact-controls'>
                                   
                                    <Form.Text type='text' label="Name" />
                                </div>
                                <div className='contact-controls'>
                                    
                                    <Form.Text type="text" label="Mobile"/>
                                </div>
                                <div className='contact-controls'>
                                    
                                    <Form.Text type="text" label="State"/>
                                </div>

                            </Card.Body>
                        </Card> */}
                    </div>
                </div>
                {/* our chit plans */}
                <div className='our-chits'>
                    <h1 className='text-center mb-5'>Our Chit plans</h1>
                    {/* {chitAmount:"50000",monthlySub:"10000",totMem:200,duration:50} */}
                    <Row className='justify-content-center'>
                        {
                            chitPlans?.map((item:any) =>
                                <Col sm='3' xxl="2">
                                    <Card >
                                        <Card.Body>
                                            <div className='card-text-group'>
                                                <h2>₹{Intl.NumberFormat('en-IN').format(Number(item.amount))}</h2>
                                                <label>CHIT AMOUNT</label>
                                            </div>
                                            <div className='card-text-group'>
                                                <label>MONTHLY SUBSCRIPTION</label>
                                                <h2>₹{Intl.NumberFormat('en-IN').format(Number(item.installmentAmount))}</h2>
                                            </div>
                                            <div className='card-text-group'>
                                                <label>MEMBERS IN CIRCLE</label>
                                                <h2>{item.noOfMembers}+</h2>
                                            </div>
                                            <div className='card-text-group'>
                                                <label>DURATION IN MONTHS</label>
                                                <h2>{item.duration}</h2>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>)
                        }
                    </Row>
                </div>
                <div className='Certifications'>
                <h1 className='text-center mb-5'>Certifications & Licenses </h1>
                <Row>
                    <Col sm="5"><h5>Fully Compliant as per the Chit Fund Act 1982</h5></Col></Row>
                    <Row>
                        <Col sm="5"><h5>Partnered with Govt. Licensed Funds</h5></Col>
                </Row>
                </div>
                {/* download app */}
                <div className='download-app'>
                    <h1 className='text-center mb-5'>Download App </h1>

                    <Row >
                        <Col sm="2" className='offset-1'>
                            <img src={downloadApp} width="100%" />
                        </Col>
                        <Col className='offset-1'>
                            <h2>Now Sri Dhana Lakshmi Venakateshwara Chits App Will Be Pocket Away.</h2>
                            <div className='py-5'>
                                <Row className='my-5'>
                                    <Col className='download-app-details'>
                                        <h2>100+</h2>
                                        <label>Downloads</label>
                                    </Col>
                                    <Col className='download-app-details'>
                                        <h2>4.5</h2>
                                        <label>Avg. Rating</label>
                                    </Col>
                                    <Col className='download-app-details'>
                                        <h2>10+</h2>
                                        <label>Reviews</label>
                                    </Col>
                                </Row>
                                <div>
                                    <Button variant={'light'} className="d-flex align-items-center p-3">
                                        <i className="fa-brands fa-google-play fa-2x me-3 text-primary"></i>
                                        <b> Click Here for <br /> Android</b>
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                {/* how chit works */}
                <div className='chit-works'>
                    <h1 className='text-center mb-5'>How Chit works</h1>
                    <div className='d-flex'>
                        <img src={chitWorks} className="mx-auto" />
                    </div>
                </div>
                <Col className='footer'>
                    <p className='text-center text-white mb-0'> &copy;Copyright {new Date().getFullYear()},All rights reserved. SRI DHANA LAKSHMI VENKATESHWARA ChITS</p>
                </Col>
            </Row>
        </div>
    )
}


export default HomePage