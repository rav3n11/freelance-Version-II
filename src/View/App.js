import React, { Component } from 'react';
import DemoNavbar from '../Components/DemoNavbar';
import { Link } from "react-router-dom";
import LargeLogo from '../Components/LargeLogo';
import MediumLogo from '../Components/MediumLogo';
import '../Css/App.css';
import pixabay_270348 from"../assets/img/theme/pexels-pixabay-270348.jpg";
import serpstat_572056 from "../assets/img/theme/pexels-serpstat-572056.jpg";

import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  Container,
  Modal,
  Row,
  Col,
  UncontrolledCarousel
} from "reactstrap";

const items = [
  {
    src: require("../assets/img/theme/img-1-1200x1000.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("../assets/img/theme/img-2-1200x1000.jpg"),
    altText: "",
    caption: "",
    header: ""
  }
];

class App extends Component {
  state = {};
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };

  render (){
  return (
    <div>
    <DemoNavbar />
    <div className="App">
      <header className="App-header">     
          <Container className="py-lg-md d-flex marge">
                <div className="col px-0">
                  <Row className = "bg-greyish-transparent">
                    <Col lg="6" style={{margin:"50px"}}>
                      <h1 className="display-3 text-black">
                        Remote working platform
                        <span>for professionals and buisnesses</span>
                      </h1>
                      <p className="lead text-default">
                        A one stop solution for all your remote working needs. Whether you are a professional in search of 
                        remote work, or an employer looking for talented engineers, freelance has you covered.
                      </p>
                      <p className="lead text-default">
                        A one stop solution for all your remote working needs. Whether you are a professional in search of 
                        remote work, or an employer looking for talented engineers, freelance has you covered.
                      </p>
                    </Col>
                    <Col className="mb-lg-auto">
                        <div className="marge-large rounded shadow-lg overflow-hidden">
                               <div className="rounded shadow-lg overflow-hidden">
                               <UncontrolledCarousel items={items} className="pic-opacity"/>
                               </div>
                               <p className=" lead text-default">
                                 Need some work done?  Looking for employment? 
                               </p>
                               <div className="sepia-grey-tint">
                                 <div className="btn-wrapper">
                                    <Button
                                      className="btn-icon mb-3 mb-sm-0"
                                      color="default"
                                      size="lg"
                                      onClick={() => this.toggleModal("defaultModal")}
                                    >
                                      <span className="btn-inner--text">Sign Up</span>
                                    </Button>
                                    <Modal
                                        className="modal-dialog-centered no-overflow"
                                        isOpen={this.state.defaultModal}
                                        toggle={() => this.toggleModal("defaultModal")}
                                      >
                                        <div className="modal-header">
                                          <p> Which type of user are you?</p>
                                          <button
                                            aria-label="Close"
                                            className="close"
                                            data-dismiss="modal"
                                            type="button"
                                            onClick={() => this.toggleModal("defaultModal")}
                                          >
                                            <span aria-hidden={true}>×</span>
                                          </button>
                                        </div>
                                        <div className="modal-body justify-content-center marge">
                                          <MediumLogo />
                                          <div className="sepia-grey-tint-box" style={{marginTop:"-200px",marginLeft:"20px"}}>
                                            <Card 
                                            className="card-lift-up-hover shadow border-0 justify-content-center" 
                                            style={{width:"200px",position:"absolute"}}
                                            to="/Login"
                                            tag={Link}
                                            >
                                            <CardBody className="py-5">
                                              <div className="icon icon-shape icon-shape-default rounded-circle mb-4">
                                                <i className="ni ni-briefcase-24" />
                                              </div>
                                              <h6 className="text-uppercase">
                                                Freelancer
                                              </h6>                                 
                                            </CardBody>
                                          </Card>
                                          <Card className="card-lift-up-hover shadow border-0" style={{width:"200px",marginLeft:"220px"}}>
                                            <CardBody className="py-5" size="sm">
                                              <div className="icon icon-shape icon-shape-default rounded-circle mb-4">
                                                <i className="ni ni-atom" />
                                              </div>
                                              <h6 className="text-uppercase">
                                                Organization
                                              </h6>
                                            </CardBody>
                                          </Card>
                                          </div>
                                     
                                        </div>
                                 
                                      </Modal>
                                   </div>
                               </div>                       
                        </div>
                    </Col>
                  </Row>
                  <Row>
                   
                  </Row>         
                </div>
             </Container>
        <div className="AbsoBack">
          <LargeLogo />
        </div>
      </header>
      <div>
        <section className="section section-lg pt-lg-0 mt--200">
            <Container style={{paddingTop: "50px",paddingBottom:"-200px",marginTop:"125px"}}>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <div style={{margin: "-20px"}}>
                            <Badge color="default" pill className="mr-1">
                              convenient
                            </Badge>
                          </div>
                      <Card className="card-lift--hover shadow border-0" >
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-default rounded-circle mb-4">
                            <i className="ni ni-chat-round" />
                          </div>
                          <h6 className="text-uppercase">
                            Chat...
                          </h6>
                          <p className="description text-default mt-3">
                            Chat with your potential freelancer or project manager right here.
                          </p>
                          <Button
                            className="mt-4"
                            color="default"
                            
                            onClick={console.log("hi")}
                          >
                            Learn more
                          </Button>
                          
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                        <div style={{margin: "-20px"}}>
                            <Badge color="default" pill className="mr-1 justify-content-center">
                              efficient
                            </Badge>
                          </div>
                        <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5 justify-content-center">
                          <div className="icon icon-shape icon-shape-default rounded-circle mb-4">
                            <i className="ni ni-briefcase-24" />
                          </div>
                          <h6 className=" text-uppercase">
                            Submit and Accept projects...
                          </h6>
                          <p className="description  text-default mt-3">
                            On freelance you can submit and accept projects right here.
                          </p>
                          <Button
                            className="mt-4"
                            color="default"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <div style={{margin: "-20px"}}>
                            <Badge color="default" pill className="mr-1">
                              competitive
                            </Badge>
                          </div>
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-default rounded-circle mb-4">
                            <i className="ni ni-chart-bar-32" />
                          </div>
                          <h6 className=" text-uppercase">
                            Project Bidding...
                          </h6>
                          <p className="description text-default mt-3">
                            You can bid on projects to work on, or open your projext to bidding.
                          </p>
                          <Button
                            className="mt-4"
                            color="default"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        <section className="section bg-secondary">
            <Container >
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={serpstat_572056}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-default">
                        Workflow
                      </h4>
                      <p className="lead text-italic text-default">
                        By increasing the efficiency of remote work, we allow coders to have a consistent, effextive workflow, 
                        from the comfort of their own homes. what office can be as controlled a workspace as your own?
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-default shadow rounded-circle mb-5">
                      <i className="ni ni-tv-2" />
                    </div>
                    <h3>Remote but Effective</h3>
                    <p className="lead">
                      Don't compromise. freelance allows you to have both the comforts of working from home, and the 
                      collaboraative efficiency of an office environment.
                    </p>
                    <p className="lead">
                      It truly is the best of both worlds. 
                    </p>
                    <p className="lead">
                      Chat with coworkers and product owners, bid on projects and submit finished projects simply 
                      from one hub.  
                    </p>
                    <a
                      className="font-weight-bold text-default mt-5 marge"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Work comfortably AND effectively.
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row className="row-grid align-items-center marge">
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-default shadow rounded-circle mb-5">
                      <i className="ni ni-settings" />
                    </div>
                    <h3>Find talent easily</h3>
                    <p className="lead">
                      Thanks to Covid, there are millions of talented engineers looking for work. 
                    </p>
                    <p className="lead">
                      Never overpay. Have engineers bid for your project, and have your pick of talent within your budget.
                    </p>
                    <p className="lead">
                      freelance has a global pool of talented engineers to pick from. Pick one, and start working now.
                    </p>
                    <a
                      className="font-weight-bold text-default mt-5 marge"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Find the most talented engineers from around the globe.
                    </a>
                  </div>
                </Col>
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={pixabay_270348}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-default">
                        Design System
                      </h4>
                      <p className="lead text-italic text-default">
                        The Arctic Ocean freezes every winter and much of the
                        sea-ice then thaws every summer, and that process will
                        continue whatever happens.
                      </p>
                    </blockquote>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
      </div>
    </div>
    </div>
  );
}
}

export default App;
