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
import { tooltipPosition } from "./TooltipSourceCode"

class TooltipPosition extends React.Component {
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
            <CardTitle>Tooltip Positions</CardTitle>
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
              Use attribute <code>placement</code> to change position of
              tooltip.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <div className="d-inline-block mr-1 mb-1">
                  <Button.Ripple color="primary" outline id="positionTop">
                    Top
                  </Button.Ripple>
                  <UncontrolledTooltip placement="top" target="positionTop">
                    Tooltip on Top
                  </UncontrolledTooltip>
                </div>

                <div className="d-inline-block mr-1 mb-1">
                  <Button.Ripple color="primary" outline id="positionRight">
                    Right
                  </Button.Ripple>
                  <UncontrolledTooltip placement="right" target="positionRight">
                    Tooltip on Right
                  </UncontrolledTooltip>
                </div>

                <div className="d-inline-block mr-1 mb-1">
                  <Button.Ripple color="primary" outline id="positionBottom">
                    Bottom
                  </Button.Ripple>
                  <UncontrolledTooltip
                    placement="bottom"
                    target="positionBottom"
                  >
                    Tooltip on Bottom
                  </UncontrolledTooltip>
                </div>

                <div className="d-inline-block mb-1">
                  <Button.Ripple
                    color="primary"
                    className="mb-1"
                    outline
                    id="positionLeft"
                  >
                    Left
                  </Button.Ripple>
                  <UncontrolledTooltip placement="left" target="positionLeft">
                    Tooltip on Left
                  </UncontrolledTooltip>
                </div>
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {tooltipPosition}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default TooltipPosition
