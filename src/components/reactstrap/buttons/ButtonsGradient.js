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
import { gradientButtons } from "./ButtonsSourceCode"

class GradientButtons extends React.Component {
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
            <CardTitle>Gradient</CardTitle>
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
              Use <code>.bg-gradient-colorName</code> to create a gradient
              button.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <div className="d-inline-block mr-1 mb-1">
                  <Button.Ripple className="bg-gradient-primary" color="none">
                    Primary
                  </Button.Ripple>
                </div>
                <div className="d-inline-block mr-1 mb-1">
                  <Button.Ripple className="bg-gradient-success" color="none">
                    Success
                  </Button.Ripple>
                </div>
                <div className="d-inline-block mr-1 mb-1">
                  <Button.Ripple className="bg-gradient-info" color="none">
                    Info
                  </Button.Ripple>
                </div>
                <div className="d-inline-block mr-1 mb-1">
                  <Button.Ripple className="bg-gradient-warning" color="none">
                    Warning
                  </Button.Ripple>
                </div>
                <div className="d-inline-block mr-1 mb-1">
                  <Button.Ripple className="bg-gradient-danger" color="none">
                    Danger
                  </Button.Ripple>
                </div>
                <div className="d-inline-block mr-1 mb-1">
                  <Button.Ripple className="bg-gradient-dark" color="none">
                    Dark
                  </Button.Ripple>
                </div>
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {gradientButtons}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default GradientButtons
