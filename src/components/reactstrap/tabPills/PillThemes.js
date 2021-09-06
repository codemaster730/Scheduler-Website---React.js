import React from "react"
import {
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
import { pillThemes } from "./TabPillsSourceCode"

class PillThemes extends React.Component {
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
            <CardTitle>Themes</CardTitle>
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
              Use class <code>.nav-pill-[colorName]</code> with <code>Nav</code>{" "}
              tag to create colored pill tabs.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <h6>Success</h6>
                <Nav pills className="nav-pill-success my-2">
                  <NavItem>
                    <NavLink active>Active</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>Link</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink disabled>Disabled</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>Link</NavLink>
                  </NavItem>
                </Nav>

                <h6>Danger</h6>

                <Nav pills className="nav-pill-danger my-2">
                  <NavItem>
                    <NavLink active>Active</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>Link</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink disabled>Disabled</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>Link</NavLink>
                  </NavItem>
                </Nav>

                <h6>Info</h6>

                <Nav pills className="nav-pill-info my-2">
                  <NavItem>
                    <NavLink active>Active</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>Link</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink disabled>Disabled</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>Link</NavLink>
                  </NavItem>
                </Nav>

                <h6>Warning</h6>

                <Nav pills className="nav-pill-warning my-2">
                  <NavItem>
                    <NavLink active>Active</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>Link</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink disabled>Disabled</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>Link</NavLink>
                  </NavItem>
                </Nav>
              </TabPane>
               <TabPane className="component-code" tabId="2">{pillThemes}</TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default PillThemes
