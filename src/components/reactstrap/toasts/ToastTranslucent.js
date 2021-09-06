import React from "react"
import {
  Toast,
  ToastBody,
  ToastHeader,
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
import { toastTranslucent } from "./ToastSourceCode"
import transparentBg from "../../../assets/img/svg/transparent.svg"

class ToastTranslucent extends React.Component {
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
            <CardTitle>Toasts Translucent</CardTitle>
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
              Toasts are slightly translucent, too, so they blend over whatever
              they might appear over. For browsers that support the
              backdrop-filter CSS property, we’ll also attempt to blur the
              elements under a toast.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col md="6" sm="12">
                    <div className="p-3 bg-primary my-2 rounded">
                      <Toast>
                        <ToastHeader>Vuexy</ToastHeader>
                        <ToastBody>
                          This is a toast on a primary background — check it
                          out!
                        </ToastBody>
                      </Toast>
                    </div>
                  </Col>
                  <Col md="6" sm="12">
                    <div className="p-3 bg-secondary my-2 rounded">
                      <Toast>
                        <ToastHeader>Vuexy</ToastHeader>
                        <ToastBody>
                          This is a toast on a secondary background — check it
                          out!
                        </ToastBody>
                      </Toast>
                    </div>
                  </Col>
                  <Col md="6" sm="12">
                    <div className="p-3 bg-success my-2 rounded">
                      <Toast>
                        <ToastHeader>Vuexy</ToastHeader>
                        <ToastBody>
                          This is a toast on a success background — check it
                          out!
                        </ToastBody>
                      </Toast>
                    </div>
                  </Col>
                  <Col md="6" sm="12">
                    <div className="p-3 bg-danger my-2 rounded">
                      <Toast>
                        <ToastHeader>Vuexy</ToastHeader>
                        <ToastBody>
                          This is a toast on a danger background — check it out!
                        </ToastBody>
                      </Toast>
                    </div>
                  </Col>
                  <Col md="6" sm="12">
                    <div className="p-3 bg-warning my-2 rounded">
                      <Toast>
                        <ToastHeader>Vuexy</ToastHeader>
                        <ToastBody>
                          This is a toast on a warning background — check it
                          out!
                        </ToastBody>
                      </Toast>
                    </div>
                  </Col>
                  <Col md="6" sm="12">
                    <div className="p-3 bg-info my-2 rounded">
                      <Toast>
                        <ToastHeader>Vuexy</ToastHeader>
                        <ToastBody>
                          This is a toast on an info background — check it out!
                        </ToastBody>
                      </Toast>
                    </div>
                  </Col>

                  <Col md="6" sm="12">
                    <div className="p-3 bg-dark my-2 rounded">
                      <Toast>
                        <ToastHeader>Vuexy</ToastHeader>
                        <ToastBody>
                          This is a toast on an dark background — check it out!
                        </ToastBody>
                      </Toast>
                    </div>
                  </Col>

                  <Col md="6" sm="12">
                    <div
                      className="p-3 my-2 rounded"
                      style={{
                        background: `url(${transparentBg})`
                      }}
                    >
                      <Toast>
                        <ToastHeader>Vuexy</ToastHeader>
                        <ToastBody>
                          This is a toast on a transparent background — check it
                          out!
                        </ToastBody>
                      </Toast>
                    </div>
                  </Col>
                </Row>
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {toastTranslucent}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default ToastTranslucent
