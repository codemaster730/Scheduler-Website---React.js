import React from "react"
import {
  Button,
  UncontrolledTooltip,
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
import { tooltipUncontrolled } from "./TooltipSourceCode"

class TooltipUncontrolled extends React.Component {
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
            <CardTitle>Uncontrolled Tooltip</CardTitle>
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
              UncontrolledTooltip does not require
              <code>isOpen</code> nor <code>toggle</code> props to work.All you
              have to do is provide a valid target to tooltip.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Button color="primary" id="UnControlledExample">
                  Uncontrolled
                </Button>
                <UncontrolledTooltip
                  placement="top"
                  target="UnControlledExample"
                >
                  Hello World !
                </UncontrolledTooltip>
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {tooltipUncontrolled}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default TooltipUncontrolled
