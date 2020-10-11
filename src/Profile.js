import React, { Component } from 'react';
import classnames from "classnames";
import logo from './project.png';
import logo_II from './project_II.png';
import DemoNavbar from './Components/DemoNavbar.js';
import './App.css';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";


  

class Profile extends Component {
  state = {
    iconTabs: 1,
    plainTabs: 1
  };
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index
    });
  };
render() {
  return (
    <div>
      <DemoNavbar />
        <div className="App">
          <header className="App-header">
            <div className="AbsoBack">
                <img src={logo} className="App-logo-large" alt="logo" />
            </div>   
            <section className="section">
             <div className="order-lg-2" lg="3">
                <div className="card-profile-image">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      className="rounded-circle pic-opacity"
                      src={require("./assets/img/theme/team-4-800x800.jpg")}
                    />
                  </a>
                </div>
             </div>
             <Container>
                <Card className="card-profile shadow mt--300">
                  <div className="px-4">
                    <Row className="justify-content-center">
                      <Col className="order-lg-3 text-lg align-self-lg-center" lg="4">
                        <div className="card-profile-actions py-4 mt-lg-0 float-right">
                          <Button
                            className="mr-4"
                            color="default"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            size="sm"
                          >
                            Connect
                          </Button>
                          <Button
                            className="mr-4"
                            color="default"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            size="sm"
                          >
                            Message
                          </Button>
                        </div>
                      </Col>
                    </Row>
                    <div className="mt-5 py-5 border-top text-center">
                      <Row className="justify-content-center">
                        <Col lg="9">
                          <div className="nav-wrapper">
                            <Nav className="nav-pills-circle nega-marge"
                              id="tabs-icons-text"
                              pills
                              role="tablist">
                                  <NavItem>
                                    <NavLink
                                      aria-selected={this.state.iconTabs === 1}
                                      className={classnames("rounded-circle", {
                                        active: this.state.iconTabs === 1
                                      })}
                                      style={{backgroundColor:"#0b1526"}}
                                      onClick={e => this.toggleNavs(e, "iconTabs", 1)}
                                      href="#pablo"
                                      role="tab"
                                    >
                                      <span className="nav-link-icon d-block">
                                        <i className="ni ni-atom" />
                                      </span>
                                    </NavLink>
                                  </NavItem>
                                  <NavItem>
                                    <NavLink
                                      aria-selected={this.state.iconTabs === 2}
                                      className={classnames("icon-shape-defau","rounded-circle", {
                                        active: this.state.iconTabs === 2
                                      })}
                                      onClick={e => this.toggleNavs(e, "iconTabs", 2)}
                                      href="#pablo"
                                      role="tab"
                                    >
                                      <span className="nav-link-icon d-block">
                                        <i className="ni ni-chat-round" />
                                      </span>
                                    </NavLink>
                                  </NavItem>
                            </Nav>
                          </div>
                          <Card >
                            <CardBody>
                              <TabContent activeTab={"iconTabs" + this.state.iconTabs}>
                                <TabPane tabId="iconTabs1">
                                  <div className="text-center mt-5">
                                          <h3>
                                            Jessica Jones{" "}
                                            <span className="font-weight-light">, 27</span>
                                          </h3>
                                          <div className="h6 font-weight-300">
                                            <i className="ni location_pin mr-2" />
                                            Bucharest, Romania
                                          </div>
                                          <div className="h6 mt-4">
                                            <i className="ni business_briefcase-24 mr-2" />
                                            Solution Manager - Creative Tim Officer
                                          </div>
                                          <div>
                                            <i className="ni education_hat mr-2" />
                                            University of Computer Science
                                          </div>
                                        </div>
                                </TabPane>
                                <TabPane tabId="iconTabs2">
                                  <p className="description">
                                    Cosby sweater eu banh mi, qui irure terry richardson ex
                                    squid. Aliquip placeat salvia cillum iphone. Seitan
                                    aliquip quis cardigan american apparel, butcher voluptate
                                    nisi qui.
                                  </p>
                                </TabPane>
                              </TabContent>
                            </CardBody>
                          </Card>    
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                              Show all
                            </a>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Card>
             </Container>
            </section>
          </header>   
        </div>
    </div>
  );
}  
}

export default Profile;