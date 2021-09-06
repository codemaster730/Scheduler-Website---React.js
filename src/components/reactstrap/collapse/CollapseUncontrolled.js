import React from "react"
import {
  UncontrolledCollapse,
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
import { collapseUncontrolled } from "./CollapseSourceCode"

class CollapseUncontrolled extends React.Component {
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
            <CardTitle>Collapse Uncontrolled</CardTitle>
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
              With uncontrolled collapse you don't have to manage state you can
              toggle collapse with <code>id</code> and <code>toggler</code>
              attribute
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <div className="vx-collapse collapse-bordered">
                  <Card>
                    <CardHeader id="item-1">
                      <CardTitle className="lead collapse-title collapsed">
                        Collapse Item 1
                      </CardTitle>
                      <ChevronDown size={15} className="collapse-icon" />
                    </CardHeader>
                    <UncontrolledCollapse toggler="#item-1">
                      <CardBody>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat, voluptates?Lorem ipsum dolor sit amet.
                      </CardBody>
                    </UncontrolledCollapse>
                  </Card>
                  <Card>
                    <CardHeader id="item-2">
                      <CardTitle className="lead collapse-title collapsed">
                        Collapse Item 2
                      </CardTitle>
                      <ChevronDown size={15} className="collapse-icon" />
                    </CardHeader>
                    <UncontrolledCollapse toggler="#item-2">
                      <CardBody>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat, voluptates?Lorem ipsum dolor sit amet.
                      </CardBody>
                    </UncontrolledCollapse>
                  </Card>
                  <Card>
                    <CardHeader id="item-3">
                      <CardTitle className="lead collapse-title collapsed">
                        Collapse Item 3
                      </CardTitle>
                      <ChevronDown size={15} className="collapse-icon" />
                    </CardHeader>
                    <UncontrolledCollapse toggler="#item-3">
                      <CardBody>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat, voluptates?Lorem ipsum dolor sit amet.
                      </CardBody>
                    </UncontrolledCollapse>
                  </Card>
                  <Card>
                    <CardHeader id="item-4">
                      <CardTitle className="lead collapse-title collapsed">
                        Collapse Item 4
                      </CardTitle>
                      <ChevronDown size={15} className="collapse-icon" />
                    </CardHeader>
                    <UncontrolledCollapse toggler="#item-4">
                      <CardBody>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat, voluptates?Lorem ipsum dolor sit amet.
                      </CardBody>
                    </UncontrolledCollapse>
                  </Card>
                </div>
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {collapseUncontrolled}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default CollapseUncontrolled
