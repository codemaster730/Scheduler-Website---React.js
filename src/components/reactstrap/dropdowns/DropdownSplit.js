import React from "react"
import {
  Button,
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
import { Eye, Code, ChevronDown } from "react-feather"
import { dropdownSplit } from "./DropdownsSourceCode"

class DropdownSplit extends React.Component {
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
            <CardTitle>Split</CardTitle>
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
              Use class <code>.dropdown-toggle-split</code> and add a split
              button within your dropdown to create a dropdownSplit
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <div className="dropdown mr-1 mb-1 d-inline-block">
                  <UncontrolledButtonDropdown>
                    <Button color="primary">Primary</Button>
                    <DropdownToggle
                      className="dropdown-toggle-split"
                      color="primary"
                      caret
                    >
                      <ChevronDown size={15} />
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem tag="a">Option 1</DropdownItem>
                      <DropdownItem tag="a">Option 2</DropdownItem>
                      <DropdownItem tag="a">Option 3</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledButtonDropdown>
                </div>
                <div className="dropdown mr-1 mb-1 d-inline-block">
                  <UncontrolledButtonDropdown>
                    <Button color="success">Success</Button>
                    <DropdownToggle
                      className="dropdown-toggle-split"
                      color="success"
                      caret
                    >
                      <ChevronDown size={15} />
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem tag="a">Option 1</DropdownItem>
                      <DropdownItem tag="a">Option 2</DropdownItem>
                      <DropdownItem tag="a">Option 3</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledButtonDropdown>
                </div>
                <div className="dropdown mr-1 mb-1 d-inline-block">
                  <UncontrolledButtonDropdown>
                    <Button color="info">Info</Button>
                    <DropdownToggle
                      className="dropdown-toggle-split"
                      color="info"
                      caret
                    >
                      <ChevronDown size={15} />
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem tag="a">Option 1</DropdownItem>
                      <DropdownItem tag="a">Option 2</DropdownItem>
                      <DropdownItem tag="a">Option 3</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledButtonDropdown>
                </div>
                <div className="dropdown mr-1 mb-1 d-inline-block">
                  <UncontrolledButtonDropdown>
                    <Button color="danger">Danger</Button>
                    <DropdownToggle
                      className="dropdown-toggle-split"
                      color="danger"
                      caret
                    >
                      <ChevronDown size={15} />
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem tag="a">Option 1</DropdownItem>
                      <DropdownItem tag="a">Option 2</DropdownItem>
                      <DropdownItem tag="a">Option 3</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledButtonDropdown>
                </div>
                <div className="dropdown mr-1 mb-1 d-inline-block">
                  <UncontrolledButtonDropdown>
                    <Button color="warning">Warning</Button>
                    <DropdownToggle
                      className="dropdown-toggle-split"
                      color="warning"
                      caret
                    >
                      <ChevronDown size={15} />
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem tag="a">Option 1</DropdownItem>
                      <DropdownItem tag="a">Option 2</DropdownItem>
                      <DropdownItem tag="a">Option 3</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledButtonDropdown>
                </div>
                <div className="dropdown mr-1 mb-1 d-inline-block">
                  <UncontrolledButtonDropdown>
                    <Button color="light">Light</Button>
                    <DropdownToggle
                      className="dropdown-toggle-split"
                      color="light"
                      caret
                    >
                      <ChevronDown size={15} />
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem tag="a">Option 1</DropdownItem>
                      <DropdownItem tag="a">Option 2</DropdownItem>
                      <DropdownItem tag="a">Option 3</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledButtonDropdown>
                </div>
                <div className="dropdown mr-1 mb-1 d-inline-block">
                  <UncontrolledButtonDropdown>
                    <Button color="dark">Dark</Button>
                    <DropdownToggle
                      className="dropdown-toggle-split"
                      color="dark"
                      caret
                    >
                      <ChevronDown size={15} />
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem tag="a">Option 1</DropdownItem>
                      <DropdownItem tag="a">Option 2</DropdownItem>
                      <DropdownItem tag="a">Option 3</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledButtonDropdown>
                </div>
              </TabPane>
               <TabPane className="component-code" tabId="2">{dropdownSplit}</TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default DropdownSplit
