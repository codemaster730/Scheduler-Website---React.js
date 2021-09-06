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
import { reliefButtons } from "./ButtonsSourceCode"

class ReliefButtons extends React.Component {
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
            <CardTitle>Relief</CardTitle>
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
              Use <code>color="relief-colorName"</code> to create a relief
              button.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Button className="mr-1 mb-1" color="relief-primary">
                  Primary
                </Button>{" "}
                <Button className="mr-1 mb-1" color="relief-success">
                  Success
                </Button>{" "}
                <Button className="mr-1 mb-1" color="relief-info">
                  Info
                </Button>{" "}
                <Button className="mr-1 mb-1" color="relief-warning">
                  Warning
                </Button>{" "}
                <Button className="mr-1 mb-1" color="relief-danger">
                  Danger
                </Button>{" "}
                <Button className="mr-1 mb-1" color="relief-light">
                  Light
                </Button>{" "}
                <Button className="mr-1 mb-1" color="relief-dark">
                  Dark
                </Button>{" "}
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {reliefButtons}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default ReliefButtons
