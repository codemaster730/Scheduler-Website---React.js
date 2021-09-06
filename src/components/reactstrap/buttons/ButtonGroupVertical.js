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
import { Eye, Code } from "react-feather"
import { buttonGroupVertical } from "./ButtonsSourceCode"

class ButtonGroupsVertical extends React.Component {
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
            <CardTitle>Vertical Variation</CardTitle>
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
              Use <code>vertical</code> attribute with <code>ButtonGroup</code>{" "}
              tag to create a vertical button group.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col md={4} sm={12}>
                    <ButtonGroup vertical className="mb-1">
                      <Button.Ripple color="primary">Button</Button.Ripple>{" "}
                      <Button.Ripple color="primary">Button</Button.Ripple>{" "}
                      <Button.Ripple color="primary">Button</Button.Ripple>{" "}
                      <Button.Ripple color="primary">Button</Button.Ripple>{" "}
                      <Button.Ripple color="primary">Button</Button.Ripple>{" "}
                    </ButtonGroup>
                  </Col>
                  <Col md={4} sm={12}>
                    <ButtonGroup vertical className="mb-1">
                      <Button.Ripple color="primary">Button</Button.Ripple>{" "}
                      <Button.Ripple color="success">Button</Button.Ripple>{" "}
                      <Button.Ripple color="info">Button</Button.Ripple>{" "}
                      <Button.Ripple color="warning">Button</Button.Ripple>{" "}
                      <Button.Ripple color="danger">Button</Button.Ripple>{" "}
                    </ButtonGroup>
                  </Col>
                  <Col md={4} sm={12}>
                    <ButtonGroup vertical className="mb-1">
                      <Button.Ripple outline color="primary">
                        Button
                      </Button.Ripple>{" "}
                      <Button.Ripple outline color="success">
                        Button
                      </Button.Ripple>{" "}
                      <Button.Ripple outline color="info">
                        Button
                      </Button.Ripple>{" "}
                      <Button.Ripple outline color="warning">
                        Button
                      </Button.Ripple>{" "}
                      <Button.Ripple outline color="danger">
                        Button
                      </Button.Ripple>{" "}
                    </ButtonGroup>
                  </Col>
                </Row>
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {buttonGroupVertical}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default ButtonGroupsVertical
