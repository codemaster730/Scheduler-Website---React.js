import React from "react"
import {
  Alert,
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
  NavLink
} from "reactstrap"
import classnames from "classnames"
import { Eye, Code } from "react-feather"
import { modalFade } from "./ModalSourceCode"

class ModalFade extends React.Component {
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
            <CardTitle>Disabled Animation</CardTitle>
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
              Use <code>fade</code> attribute to enable or disable modal fade.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Button.Ripple
                  color="primary"
                  className="btn-block"
                  size="lg"
                  block
                  outline
                  onClick={this.toggleModal}
                >
                  Launch Modal
                </Button.Ripple>
                <Modal
                  isOpen={this.state.modal}
                  toggle={this.toggleModal}
                  className="modal-dialog-centered"
                  fade={false}
                >
                  <ModalHeader toggle={this.toggleModal}>
                    Disabled Fade
                  </ModalHeader>
                  <ModalBody>
                    Chocolate bar jelly dragée cupcake chocolate bar I love
                    donut liquorice. Powder I love marzipan donut candy canes
                    jelly-o. Dragée liquorice apple pie candy biscuit danish
                    lemon drops sugar plum.
                    <Alert className="mt-1" color="success">
                      <span>
                        Well done! You successfully read this important alert
                        message.
                      </span>
                    </Alert>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggleModal}>
                      Accept
                    </Button>{" "}
                  </ModalFooter>
                </Modal>
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {modalFade}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default ModalFade
