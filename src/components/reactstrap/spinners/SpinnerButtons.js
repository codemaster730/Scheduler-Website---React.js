import React from "react"
import {
  Button,
  Spinner,
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
import { spinnerButton } from "./SpinnerSourceCode"

class SpinnerButton extends React.Component {
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
            <CardTitle>Buttons</CardTitle>
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
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <div className="d-inline-block mr-1 mb-1">
                  <Button.Ripple color="primary">
                    <Spinner color="white" size="sm" />
                  </Button.Ripple>
                </div>

                <div className="d-inline-block mr-1 mb-1">
                  <Button.Ripple color="primary">
                    <Spinner color="white" size="sm" />
                    <span className="ml-50">Loading...</span>
                  </Button.Ripple>
                </div>

                <div className="d-inline-block mr-1 mb-1">
                  <Button.Ripple color="primary">
                    <Spinner color="white" size="sm" type="grow" />
                  </Button.Ripple>
                </div>

                <div className="d-inline-block mr-1 mb-1">
                  <Button.Ripple color="primary">
                    <Spinner color="white" size="sm" type="grow" />
                    <span className="ml-50">Loading...</span>
                  </Button.Ripple>
                </div>
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {spinnerButton}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default SpinnerButton
