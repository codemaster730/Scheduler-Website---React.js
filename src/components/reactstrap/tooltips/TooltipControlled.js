import React from "react"
import {
  Button,
  Tooltip,
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
import { tooltipControlled } from "./TooltipSourceCode"

class TooltipControlled extends React.Component {
  state = {
    activeTab: "1",
    tooltipOpen: false
  }

  toggleTab = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab })
    }
  }

  toggleTooltip = () => {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    })
  }

  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            <CardTitle>Controlled Tooltip</CardTitle>
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
              For controlled tooltips you'll have to manage state of
              component.controlled tooltips require <code>isOpen</code> and{" "}
              <code>toggle</code> props to work.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Button.Ripple color="primary" id="ControlledExample">
                  Controlled
                </Button.Ripple>
                <Tooltip
                  placement="top"
                  isOpen={this.state.tooltipOpen}
                  target="ControlledExample"
                  toggle={this.toggleTooltip}
                >
                  Hello World !
                </Tooltip>
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {tooltipControlled}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default TooltipControlled
