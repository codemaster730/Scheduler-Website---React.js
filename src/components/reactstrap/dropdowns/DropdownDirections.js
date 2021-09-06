import React from "react"
import {
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
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
import {
  Eye,
  Code,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp
} from "react-feather"
import { dropdownDirections } from "./DropdownsSourceCode"

class DropdownDirections extends React.Component {
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
            <CardTitle>Directions</CardTitle>
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
              You can use drop from diffrent direction to use drop from bottom
              right use <code>right</code> attribute with your dropdown-menu.
              for drop directions use <code>direction=[up/left/right]</code>
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <div className="dropdown mr-1 mb-1 d-inline-block">
                  <UncontrolledButtonDropdown>
                    <DropdownToggle color="primary" caret>
                      Drop bottom right
                      <ChevronDown size={15} />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem tag="a">Option 1</DropdownItem>
                      <DropdownItem tag="a">Option 2</DropdownItem>
                      <DropdownItem tag="a">Option 3</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledButtonDropdown>
                </div>
                <div className="dropup mr-1 mb-1 d-inline-block">
                  <UncontrolledButtonDropdown direction="up">
                    <DropdownToggle color="primary" caret>
                      Drop Up
                      <ChevronUp size={15} />
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem tag="a">Option 1</DropdownItem>
                      <DropdownItem tag="a">Option 2</DropdownItem>
                      <DropdownItem tag="a">Option 3</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledButtonDropdown>
                </div>
                <div className="dropright mr-1 mb-1 d-inline-block">
                  <UncontrolledButtonDropdown direction="right">
                    <DropdownToggle color="primary" caret>
                      Drop Right
                      <ChevronRight size={15} />
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem tag="a">Option 1</DropdownItem>
                      <DropdownItem tag="a">Option 2</DropdownItem>
                      <DropdownItem tag="a">Option 3</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledButtonDropdown>
                </div>
                <div className="dropleft mr-1 mb-1 d-inline-block">
                  <UncontrolledButtonDropdown direction="left">
                    <DropdownToggle color="primary" caret>
                      <ChevronLeft size={15} />
                      Drop Left
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem tag="a">Option 1</DropdownItem>
                      <DropdownItem tag="a">Option 2</DropdownItem>
                      <DropdownItem tag="a">Option 3</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledButtonDropdown>
                </div>
              </TabPane>
               <TabPane className="component-code" tabId="2">{dropdownDirections}</TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default DropdownDirections
