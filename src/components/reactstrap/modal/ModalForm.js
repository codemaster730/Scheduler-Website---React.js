import React from "react"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  FormGroup,
  Input,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from "reactstrap"
import classnames from "classnames"
import { Eye, Code } from "react-feather"
import { modalForm } from "./ModalSourceCode"

class ModalForm extends React.Component {
  state = {
    activeTab: "1",
    modal: false
  }

  toggleTab = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab })
    }
  }

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            <CardTitle>Form Components</CardTitle>
            <div className="views">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "1"
                    })}
                    onClick={() => {
                      this.toggleTab("1")
                    }}
                  >
                    <Eye size={15} />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "2"
                    })}
                    onClick={() => {
                      this.toggleTab("2")
                    }}
                  >
                    <Code size={15} />
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </CardHeader>
          <CardBody>
            <h5>Login Form</h5>
            <p>Created Simple Login Form.</p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Button.Ripple
                  color="success"
                  outline
                  onClick={this.toggleModal}
                >
                  Launch Modal
                </Button.Ripple>
                <Modal
                  isOpen={this.state.modal}
                  toggle={this.toggleModal}
                  className="modal-dialog-centered"
                >
                  <ModalHeader toggle={this.toggleModal}>
                    Login Form
                  </ModalHeader>
                  <ModalBody>
                    <FormGroup>
                      <Label for="email">Email:</Label>
                      <Input
                        type="email"
                        id="email"
                        placeholder="Email Address"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="password">Password:</Label>
                      <Input
                        type="password"
                        id="password"
                        placeholder="Password"
                      />
                    </FormGroup>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggleModal}>
                      Login
                    </Button>{" "}
                  </ModalFooter>
                </Modal>
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {modalForm}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default ModalForm
