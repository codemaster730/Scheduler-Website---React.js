import React from "react"
import {
  Button,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody,
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
import { popoverPositions } from "./PopoverSourceCode"

class PopoverPositions extends React.Component {
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
            <CardTitle>Popover Positions</CardTitle>
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
              Use attribute <code>placement</code> to place you popover at
              desired position.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <div className="d-inline-block mr-1 mb-1">
                  <Button.Ripple color="primary" outline id="popTop">
                    Top
                  </Button.Ripple>
                  <UncontrolledPopover placement="top" target="popTop">
                    <PopoverHeader>Popover Top</PopoverHeader>
                    <PopoverBody>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Doloremque, cumque.
                    </PopoverBody>
                  </UncontrolledPopover>
                </div>

                <div className="d-inline-block mr-1 mb-1">
                  <Button.Ripple color="primary" outline id="popRight">
                    Right
                  </Button.Ripple>
                  <UncontrolledPopover placement="right" target="popRight">
                    <PopoverHeader>Popover Right</PopoverHeader>
                    <PopoverBody>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Doloremque, cumque.
                    </PopoverBody>
                  </UncontrolledPopover>
                </div>

                <div className="d-inline-block mr-1 mb-1">
                  <Button.Ripple color="primary" outline id="popBottom">
                    Bottom
                  </Button.Ripple>
                  <UncontrolledPopover placement="bottom" target="popBottom">
                    <PopoverHeader>Popover Bottom</PopoverHeader>
                    <PopoverBody>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Doloremque, cumque.
                    </PopoverBody>
                  </UncontrolledPopover>
                </div>

                <div className="d-inline-block mr-1 mb-1">
                  <Button.Ripple color="primary" outline id="popLeft">
                    Left
                  </Button.Ripple>
                  <UncontrolledPopover placement="left" target="popLeft">
                    <PopoverHeader>Popover Left</PopoverHeader>
                    <PopoverBody>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Doloremque, cumque.
                    </PopoverBody>
                  </UncontrolledPopover>
                </div>
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {popoverPositions}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default PopoverPositions
