import React from "react"
import {
  Button,
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
import { buttonSizes } from "./ButtonsSourceCode"

class ButtonSizes extends React.Component {
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
            <CardTitle>Sizes</CardTitle>
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
              Use <code>Size</code> attribute to chnage size of a button.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col md={6} sm={12}>
                    <div className="d-inline-block mr-1 mb-1">
                      <Button.Ripple color="primary" size="lg">
                        Large
                      </Button.Ripple>
                    </div>
                    <div className="d-inline-block mr-1 mb-1">
                      <Button.Ripple color="primary">Default</Button.Ripple>
                    </div>
                    <div className="d-inline-block mb-1">
                      <Button.Ripple color="primary" size="sm">
                        Small
                      </Button.Ripple>
                    </div>
                  </Col>
                  <Col md={6} sm={12}>
                    <div className="d-inline-block mr-1 mb-1">
                      <Button.Ripple
                        outline
                        className="mr-1 mb-1"
                        color="primary"
                        size="lg"
                      >
                        Large
                      </Button.Ripple>
                    </div>
                    <div className="d-inline-block mr-1 mb-1">
                      <Button.Ripple outline color="primary">
                        Default
                      </Button.Ripple>
                    </div>
                    <div className="d-inline-block mb-1">
                      <Button.Ripple outline color="primary" size="sm">
                        Small
                      </Button.Ripple>
                    </div>
                  </Col>
                </Row>
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {buttonSizes}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default ButtonSizes
