import React from "react"
import {
  UncontrolledAlert,
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
import { alertUncontrolled } from "./AlertSourceCode"

class AlertUncontrolled extends React.Component {
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
            <CardTitle>Uncontrolled Alert</CardTitle>
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
              For the most basic use-case an uncontrolled component can provide
              the functionality wanted without the need to manage/control the
              state of the component. UncontrolledAlert does not require isOpen
              nor toggle props to work.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <UncontrolledAlert color="danger">
                  Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I
                  love wafer I love wafer.
                </UncontrolledAlert>
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {alertUncontrolled}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default AlertUncontrolled
