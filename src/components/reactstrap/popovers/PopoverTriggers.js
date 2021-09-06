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
import { popoverTriggers } from "./PopoverSourceCode"

class PopoverTriggers extends React.Component {
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
            <CardTitle>Popover Triggers</CardTitle>
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
              Use attribute <code>trigger</code> for various trigger
              options.Trigger each popover to see information about the trigger.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <div className="d-inline-block mr-1 mb-1">
                  <Button.Ripple color="primary" outline id="popFocus">
                    Focus
                  </Button.Ripple>
                  <UncontrolledPopover
                    trigger="focus"
                    placement="top"
                    target="popFocus"
                  >
                    <PopoverHeader>Focus Trigger</PopoverHeader>
                    <PopoverBody>
                      Focusing on the trigging element makes this popover
                      appear. Blurring (clicking away) makes it disappear. You
                      cannot select this text as the popover will disappear when
                      you try.
                    </PopoverBody>
                  </UncontrolledPopover>
                </div>

                <div className="d-inline-block mr-1 mb-1">
                  <Button.Ripple color="primary" outline id="popClick">
                    Click
                  </Button.Ripple>
                  <UncontrolledPopover
                    trigger="click"
                    placement="top"
                    target="popClick"
                  >
                    <PopoverHeader>Click Trigger</PopoverHeader>
                    <PopoverBody>
                      Clicking on the triggering element makes this popover
                      appear. Clicking on it again will make it disappear. You
                      can select this text, but clicking away (somewhere other
                      than the triggering element) will not dismiss this
                      popover.
                    </PopoverBody>
                  </UncontrolledPopover>
                </div>

                <div className="d-inline-block mb-1">
                  <Button.Ripple
                    trigger="legacy"
                    color="primary"
                    outline
                    id="popLegacy"
                  >
                    Legacy
                  </Button.Ripple>
                  <UncontrolledPopover placement="top" target="popLegacy">
                    <PopoverHeader>Legacy Trigger</PopoverHeader>
                    <PopoverBody>
                      Legacy is a reactstrap special trigger value (outside of
                      bootstrap's spec/standard). Before reactstrap correctly
                      supported click and focus, it had a hybrid which was very
                      useful and has been brought back as trigger="legacy". One
                      advantage of the legacy trigger is that it allows the
                      popover text to be selected while also closing when
                      clicking outside the triggering element and popover
                      itself.
                    </PopoverBody>
                  </UncontrolledPopover>
                </div>
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {popoverTriggers}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default PopoverTriggers
