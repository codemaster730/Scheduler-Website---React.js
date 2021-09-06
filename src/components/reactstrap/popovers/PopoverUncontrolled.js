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
import { popoverUncontrolled } from "./PopoverSourceCode"

class PopoverUncontrolled extends React.Component {
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
            <CardTitle>Uncontrolled Popover</CardTitle>
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
              You can create an uncontrolled popover without having to manage
              state. All you have to do is wrap your content inside
              UncontrolledPopover tag.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane className="justify-content-center d-flex" tabId="1">
                <Button color="primary" outline id="uncontrolledPopover">
                  Uncontrolled
                </Button>
                <UncontrolledPopover
                  placement="top"
                  target="uncontrolledPopover"
                >
                  <PopoverHeader>Uncontrolled Popover</PopoverHeader>
                  <PopoverBody>
                    Macaroon chocolate candy. I love carrot cake gingerbread
                    cake lemon drops. Muffin sugar plum marzipan pie.
                  </PopoverBody>
                </UncontrolledPopover>
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {popoverUncontrolled}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default PopoverUncontrolled
