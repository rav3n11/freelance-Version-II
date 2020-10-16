import React, { Component } from 'react';
import DemoNavbar from '../Components/DemoNavbar.js';
import MediumLogo from '../Components/MediumLogo';
import '../Css/App.css';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  Container,
  Row,
  Col
} from "reactstrap";

class RegisterUser extends Component {
  render(){
  return (
    <div>
    <DemoNavbar />
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
              </div>
            </Card>
         </Container>
    </div>
  );
}
}

export default RegisterUser;