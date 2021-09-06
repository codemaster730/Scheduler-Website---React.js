import React from "react"
import {
  Button,
  Popover,
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
import { popoverControlled } from "./PopoverSourceCode"

class PopoverControlled extends React.Component {
  state = {
    activeTab: "1",
    popoverOpen: false
  }

  toggleTab = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab })
    }
  }

  togglePopover = () => {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    })
  }

  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            <CardTitle>Controlled Popover</CardTitle>
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
              For controlled Popover you'll have to manage state of
              component.controlled Popover require <code>isOpen</code> and{" "}
              <code>toggle</code> props to work.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane className="justify-content-center d-flex" tabId="1">
                <Button.Ripple color="primary" outline id="controlledPopover">
                  Controlled
                </Button.Ripple>
                <Popover
                  placement="top"
                  target="controlledPopover"
                  isOpen={this.state.popoverOpen}
                  toggle={this.togglePopover}
                >
                  <PopoverHeader>Controlled Popover</PopoverHeader>
                  <PopoverBody>
                    Macaroon chocolate candy. I love carrot cake gingerbread
                    cake lemon drops. Muffin sugar plum marzipan pie.
                  </PopoverBody>
                </Popover>
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {popoverControlled}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default PopoverControlled
