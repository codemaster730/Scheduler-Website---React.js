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
  NavLink
} from "reactstrap"
import classnames from "classnames"
import { Eye, Code } from "react-feather"
import { outlineButtons } from "./ButtonsSourceCode"

class OutlineButtons extends React.Component {
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
            <CardTitle>Outline</CardTitle>
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
              Use attribute outline with button tag to create an outline button.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <div className="d-inline-block mr-1 mb-1">
                  <Button.Ripple color="primary" outline>
                    Primary
                  </Button.Ripple>
                </div>
                <div className="d-inline-block mr-1 mb-1">
                  <Button.Ripple color="success" outline>
                    Success
                  </Button.Ripple>
                </div>
                <div className="d-inline-block mr-1 mb-1">
                  {" "}
                  <Button.Ripple color="info" outline>
                    Info
                  </Button.Ripple>{" "}
                </div>
                <div className="d-inline-block mr-1 mb-1">
                  <Button.Ripple color="warning" outline>
                    Warning
                  </Button.Ripple>{" "}
                </div>
                <div className="d-inline-block mr-1 mb-1">
                  <Button.Ripple color="danger" outline>
                    Danger
                  </Button.Ripple>
                </div>
                <div className="d-inline-block mr-1 mb-1">
                  <Button.Ripple color="light" outline>
                    Light
                  </Button.Ripple>
                </div>
                <div className="d-inline-block mr-1 mb-1">
                  <Button.Ripple color="dark" outline>
                    Dark
                  </Button.Ripple>
                </div>
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {outlineButtons}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default OutlineButtons
