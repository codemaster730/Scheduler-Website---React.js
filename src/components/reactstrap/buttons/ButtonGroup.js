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
  ButtonGroup,
  Row,
  Col
} from "reactstrap"
import classnames from "classnames"
import { Eye, Code, Facebook, Twitter, Instagram } from "react-feather"
import { buttonGroup } from "./ButtonsSourceCode"

class ButtonGroups extends React.Component {
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
            <CardTitle>Button Group</CardTitle>
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
              Group a series of buttons together on a single line with the
              button group.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col md={6} sm={12}>
                    <ButtonGroup className="mb-1">
                      <Button.Ripple color="primary">Left</Button.Ripple>{" "}
                      <Button.Ripple color="danger">Middle</Button.Ripple>{" "}
                      <Button.Ripple color="info">Right</Button.Ripple>{" "}
                    </ButtonGroup>
                  </Col>
                  <Col md={6} sm={12}>
                    <ButtonGroup className="mb-1">
                      <Button.Ripple outline color="primary">
                        <Facebook size={15} />
                      </Button.Ripple>{" "}
                      <Button.Ripple outline color="danger">
                        <Twitter size={15} />
                      </Button.Ripple>{" "}
                      <Button.Ripple outline color="info">
                        <Instagram size={15} />
                      </Button.Ripple>{" "}
                    </ButtonGroup>
                  </Col>
                </Row>
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {buttonGroup}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default ButtonGroups
