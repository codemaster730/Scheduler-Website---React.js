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
  NavLink,
  Row,
  Col
} from "reactstrap"
import classnames from "classnames"
import { Eye, Code, ChevronDown } from "react-feather"
import { dropdownSizes } from "./DropdownsSourceCode"

class DropdownSizes extends React.Component {
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
            <CardTitle>Sizes</CardTitle>
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
              Use class <code>.btn-[lg/sm]</code> to create a small or large
              drodpown.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col md="6" sm="12">
                    <div className="dropdown mr-1 mb-1 d-inline-block">
                      <UncontrolledButtonDropdown>
                        <DropdownToggle color="primary" size="lg" caret>
                          Large
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
                        <DropdownToggle color="primary" caret>
                          Default
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
                        <DropdownToggle color="primary" size="sm" caret>
                          Small
                          <ChevronDown size={15} />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem tag="a">Option 1</DropdownItem>
                          <DropdownItem tag="a">Option 2</DropdownItem>
                          <DropdownItem tag="a">Option 3</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                    </div>
                  </Col>
                  <Col md="6" sm="12">
                    <div className="dropdown mr-1 mb-1 d-inline-block">
                      <UncontrolledButtonDropdown>
                        <Button color="primary" size="lg">
                          Large
                        </Button>
                        <DropdownToggle
                          className="dropdown-toggle-split"
                          color="primary"
                          caret
                          size="lg"
                        >
                          <ChevronDown size={15} />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem tag="a">Option 1</DropdownItem>
                          <DropdownItem tag="a">Option 2</DropdownItem>
                          <DropdownItem tag="a">Option 3</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                    </div>{" "}
                    <div className="dropdown mr-1 mb-1 d-inline-block">
                      <UncontrolledButtonDropdown>
                        <Button color="primary">Default</Button>
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
                    </div>{" "}
                    <div className="dropdown mr-1 mb-1 d-inline-block">
                      <UncontrolledButtonDropdown>
                        <Button color="primary" size="sm">
                          Small
                        </Button>
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
                  </Col>
                </Row>
              </TabPane>
               <TabPane className="component-code" tabId="2">{dropdownSizes}</TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default DropdownSizes
