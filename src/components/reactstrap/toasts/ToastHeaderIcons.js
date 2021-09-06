import React from "react"
import {
  Toast,
  ToastBody,
  ToastHeader,
  Spinner,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap"
import classnames from "classnames"
import { Eye, Code } from "react-feather"
import { toastHeaderIcons } from "./ToastSourceCode"
import logo from "../../../assets/img/logo/logo.png"

class ToastHeaderIcons extends React.Component {
  state = {
    activeTab: "1"
  }

  toggleTab = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab })
    }
  }

  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            <CardTitle>Icons</CardTitle>
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
              Use <code>icon</code> attribute with <code>ToastHeader</code> tag
              to add an icon.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col md="6" sm="12">
                    <Toast>
                      <ToastHeader icon="primary">Vuexy</ToastHeader>
                      <ToastBody>
                        This is a toast with a primary icon — check it out!
                      </ToastBody>
                    </Toast>
                  </Col>
                  <Col md="6" sm="12">
                    <Toast>
                      <ToastHeader icon="success">Vuexy</ToastHeader>
                      <ToastBody>
                        This is a toast with a success icon — check it out!
                      </ToastBody>
                    </Toast>
                  </Col>
                  <Col md="6" sm="12">
                    <Toast>
                      <ToastHeader icon="info">Vuexy</ToastHeader>
                      <ToastBody>
                        This is a toast with a info icon — check it out!
                      </ToastBody>
                    </Toast>
                  </Col>
                  <Col md="6" sm="12">
                    <Toast>
                      <ToastHeader icon="danger">Vuexy</ToastHeader>
                      <ToastBody>
                        This is a toast with a danger icon — check it out!
                      </ToastBody>
                    </Toast>
                  </Col>
                  <Col md="6" sm="12">
                    <Toast>
                      <ToastHeader icon="warning">Vuexy</ToastHeader>
                      <ToastBody>
                        This is a toast with a warning icon — check it out!
                      </ToastBody>
                    </Toast>
                  </Col>
                  <Col md="6" sm="12">
                    <Toast>
                      <ToastHeader icon="dark">Vuexy</ToastHeader>
                      <ToastBody>
                        This is a toast with a dark icon — check it out!
                      </ToastBody>
                    </Toast>
                  </Col>

                  <Col md="6" sm="12">
                    <Toast>
                      <ToastHeader icon={<Spinner size="sm" color="primary" />}>
                        Vuexy
                      </ToastHeader>
                      <ToastBody>
                        This is a toast with a spinner — check it out!
                      </ToastBody>
                    </Toast>
                  </Col>

                  <Col md="6" sm="12">
                    <Toast>
                      <ToastHeader>
                        <img src={logo} alt="logo" className="mr-1" />
                        Vuexy
                      </ToastHeader>
                      <ToastBody>
                        This is a toast with a logo — check it out!
                      </ToastBody>
                    </Toast>
                  </Col>
                </Row>
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {toastHeaderIcons}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default ToastHeaderIcons
