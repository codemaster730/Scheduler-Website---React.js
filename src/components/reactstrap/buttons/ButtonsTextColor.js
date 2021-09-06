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
import { textColorButtons } from "./ButtonsSourceCode"

class TextColorButtons extends React.Component {
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
            <CardTitle>Text Color</CardTitle>
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
              You can change the font color of buttons, using{" "}
              <code>.text-colorName</code>.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <div className="d-inline-block mr-1 mb-1">
                  <Button.Ripple
                    className="border-primary text-primary"
                    color="flat-primary"
                  >
                    Primary
                  </Button.Ripple>
                </div>
                <div className="d-inline-block mr-1 mb-1">
                  <Button.Ripple
                    className="border-primary text-success"
                    color="flat-success"
                  >
                    Success
                  </Button.Ripple>
                </div>
                <div className="d-inline-block mr-1 mb-1">
                  <Button.Ripple
                    className="border-primary text-info"
                    color="flat-info"
                  >
                    Info
                  </Button.Ripple>
                </div>
                <div className="d-inline-block mr-1 mb-1">
                  <Button.Ripple
                    className="border-primary text-warning"
                    color="flat-warning"
                  >
                    Warning
                  </Button.Ripple>
                </div>
                <div className="d-inline-block mr-1 mb-1">
                  <Button.Ripple
                    className="border-primary text-danger"
                    color="flat-danger"
                  >
                    Danger
                  </Button.Ripple>
                </div>
                <div className="d-inline-block mr-1 mb-1">
                  <Button.Ripple
                    className="border-primary text-light"
                    color="flat-light"
                  >
                    Light
                  </Button.Ripple>
                </div>
                <div className="d-inline-block mr-1 mb-1">
                  <Button.Ripple
                    className="border-primary text-dark"
                    color="flat-dark"
                  >
                    Dark
                  </Button.Ripple>
                </div>
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {textColorButtons}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default TextColorButtons
