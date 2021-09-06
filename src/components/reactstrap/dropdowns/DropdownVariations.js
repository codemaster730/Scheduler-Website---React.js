import React from "react"
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
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
  Wifi,
  WifiOff,
  PhoneOff,
  BellOff,
  Bell,
  VolumeX,
  Volume2,
  ChevronUp
} from "react-feather"
import { dropdownVariations } from "./DropdownsSourceCode"

const icons = [
  {
    id: 1,
    item: <WifiOff size={15} />
  },
  {
    id: 2,
    item: <VolumeX size={15} />
  },
  {
    id: 3,
    item: <Volume2 size={15} />
  },
  {
    id: 4,
    item: <Bell size={15} />
  },
  {
    id: 5,
    item: <BellOff size={15} />
  },
  {
    id: 6,
    item: <PhoneOff size={15} />
  }
]

class DropdownVariations extends React.Component {
  state = {
    activeTab: "1",
    activeIcon: <Wifi size={15} />
  }

  toggleTab = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab })
    }
  }

  toggleIcon = icon => {
    this.setState({ activeIcon: icon })
  }

  render() {
    const iconItem = icons.map(icon => {
      return (
        <DropdownItem
          tag="li"
          key={icon.id}
          onClick={() => this.toggleIcon(icon.item)}
        >
          {icon.item}
        </DropdownItem>
      )
    })
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            <CardTitle>Variations</CardTitle>
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
              Use <code>header</code> and <code>divider</code> attributes to add
              a header and a divider to dropdown.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <div className="dropup mr-1 mb-1 d-inline-block">
                  <UncontrolledButtonDropdown direction="up">
                    <DropdownToggle color="primary" caret>
                      Group
                      <ChevronUp size={15} />
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem header>Group 1</DropdownItem>
                      <DropdownItem>Option 1</DropdownItem>
                      <DropdownItem>Option 2</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem header>Group 2</DropdownItem>
                      <DropdownItem>Option 1</DropdownItem>
                      <DropdownItem>Option 2</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem header>Group 3</DropdownItem>
                      <DropdownItem>Option 1</DropdownItem>
                      <DropdownItem>Option 2</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledButtonDropdown>
                </div>
                <div className="dropup dropdown-icon mr-1 mb-1 d-inline-block">
                  <UncontrolledButtonDropdown direction="up">
                    <Button color="primary">Icons</Button>
                    <DropdownToggle
                      className="dropdown-toggle-split"
                      color="primary"
                      caret
                    >
                      {this.state.activeIcon}
                    </DropdownToggle>
                    <DropdownMenu tag="ul">{iconItem}</DropdownMenu>
                  </UncontrolledButtonDropdown>
                </div>
                <div className="dropup dropup-form mr-1 mb-1 d-inline-block">
                  <UncontrolledButtonDropdown direction="up">
                    <DropdownToggle color="primary" caret>
                      Form
                      <ChevronUp size={15} />
                    </DropdownToggle>
                    <DropdownMenu>
                      <Form className="px-2 py-2">
                        <FormGroup>
                          <Label for="ddEmail">Email</Label>
                          <Input
                            type="email"
                            placeholder="Email"
                            name="ddemail"
                            id="ddEmail"
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for="ddPassword">Password</Label>
                          <Input
                            type="password"
                            placeholder="Password"
                            name="ddPassword"
                            id="ddPassword"
                          />
                        </FormGroup>
                        <FormGroup>
                          <div className="form-check">
                            <Input
                              type="checkbox"
                              className="form-check-input"
                              name="ddCheck"
                              id="ddCheck"
                            />
                            <Label for="ddCheck">Remember Me</Label>
                          </div>
                        </FormGroup>
                        <Button color="primary" type="submit">
                          {" "}
                          Submit{" "}
                        </Button>
                      </Form>
                      <DropdownItem divider />
                      <DropdownItem href="#">
                        {" "}
                        New around here? Sign up
                      </DropdownItem>
                      <DropdownItem href="#"> Forgot password?</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledButtonDropdown>
                </div>
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {dropdownVariations}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default DropdownVariations
