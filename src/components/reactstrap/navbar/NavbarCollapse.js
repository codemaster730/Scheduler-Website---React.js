import React from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
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
import { navbarCollapse } from "./NavbarSourceCode"

class NavbarCollapse extends React.Component {
  state = {
    activeTab: "1",
    collapsed: true
  }

  toggleTab = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab })
    }
  }

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            <CardTitle>Navbar Collapsed</CardTitle>
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
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Navbar color="dark" dark>
                  <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                  <Collapse isOpen={!this.state.collapsed} navbar>
                    <Nav navbar className="mt-2 pb-1">
                      <NavItem>
                        <NavLink href="#">Active</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#">Link</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#">Link</NavLink>
                      </NavItem>
                    </Nav>
                  </Collapse>
                </Navbar>
              </TabPane>
               <TabPane className="component-code" tabId="2">{navbarCollapse}</TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default NavbarCollapse
