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
import { modalDestructuring } from "./ModalSourceCode"

class ModalDestructuring extends React.Component {
  state = {
    activeTab: "1",
    modal: false,
    unmountOnClose: true
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

  changeUnmountOnClose = e => {
    let value = e.target.value
    this.setState({ unmountOnClose: JSON.parse(value) })
  }

  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            <CardTitle>Unmount On Close</CardTitle>
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
            <p>
              Write something (data should remain in modal if unmountOnClose is
              set to false).
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Form inline onSubmit={e => e.preventDefault()}>
                  <FormGroup>
                    <Label for="unmountOnClose" className="mr-1">
                      UnmountOnClose value
                    </Label>{" "}
                    <Input
                      type="select"
                      name="unmountOnClose"
                      id="unmountOnClose"
                      onChange={this.changeUnmountOnClose}
                    >
                      <option value="true">true</option>
                      <option value="false">false</option>
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
                  unmountOnClose={this.state.unmountOnClose}
                >
                  <ModalHeader toggle={this.toggleModal}>
                    Modal title
                  </ModalHeader>
                  <ModalBody>
                    <Input
                      type="textarea"
                      placeholder="Write something (data should remain in modal if unmountOnClose is set to false)"
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
                {modalDestructuring}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default ModalDestructuring
