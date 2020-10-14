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

class UserType extends Component {
  state = {};
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };
  render(){
  return (
    <div>
    <DemoNavbar />
           <Modal
              className="modal-dialog-centered no-overflow"
              isOpen={this.state.defaultModal}
              toggle={() => this.toggleModal("defaultModal")}
            >
              <div className="modal-header">
                <h6 className="modal-title" id="modal-title-default">
                  Type your modal title
                </h6>
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
              <div className="modal-body">
                <MediumLogo />
              </div>
              <div className="modal-footer">
                <Button color="primary" type="button">
                  Save changes
                </Button>
                <Button
                  className="ml-auto"
                  color="link"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("defaultModal")}
                >
                  Close
                </Button>
              </div>
            </Modal>
    </div>
  );
}
}

export default UserType;