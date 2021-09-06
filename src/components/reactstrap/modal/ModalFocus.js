import React from "react"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Input,
  Label,
  Form,
  FormGroup
} from "reactstrap"
import classnames from "classnames"
import { Eye, Code } from "react-feather"
import { modalFocus } from "./ModalSourceCode"

class ModalFocus extends React.Component {
  state = {
    activeTab: "1",
    modal: false,
    focusAfterClose: true
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

  handleSelectChange = ({ target: { value } }) => {
    this.setState({ focusAfterClose: JSON.parse(value) })
    if (this.state.focusAfterClose === true) {
      alert("true")
    }
  }
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            <CardTitle>Focus After Close</CardTitle>
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
            <p>Observe the button. It will be focused after close.</p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Form
                  inline
                  onSubmit={e => e.preventDefault()}
                  className="demo-modal-form"
                >
                  <FormGroup>
                    <Label for="focusAfterClose" className="mr-1">
                      Focus After Close
                    </Label>{" "}
                    <Input
                      type="select"
                      name="focusAfterClose"
                      id="focusAfterClose"
                      onChange={this.handleSelectChange}
                    >
                      <option value="true">Yes</option>
                      <option value="fasle">No</option>
                    </Input>
                  </FormGroup>{" "}
                  <Button.Ripple
                    color="success"
                    className="ml-1"
                    outline
                    onClick={this.toggleModal}
                  >
                    Launch modal
                  </Button.Ripple>
                </Form>
                <Modal
                  isOpen={this.state.modal}
                  toggle={this.toggleModal}
                  className={this.props.className}
                  returnFocusAfterClose={this.state.focusAfterClose}
                >
                  <ModalHeader toggle={this.toggleModal}>
                    Modal title
                  </ModalHeader>
                  <ModalBody>
                    <Input
                      type="textarea"
                      placeholder="Observe the button. It will be focused after close."
                      rows={5}
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" outline onClick={this.toggleModal}>
                      Accept
                    </Button>{" "}
                  </ModalFooter>
                </Modal>
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {modalFocus}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default ModalFocus
