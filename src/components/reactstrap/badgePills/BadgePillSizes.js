import React from "react"
import {
  Badge,
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
import { badgePillSizes } from "./BadgePillSourceCode"

class BadgePillSizes extends React.Component {
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
              Use <code>.badge-[sm/md/lg/xl]</code> class to change badge pill
              size.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Badge color="primary" pill className="badge-xl mr-1 mb-1">
                  <span>Extra Large</span>
                </Badge>
                <Badge color="primary" pill className="badge-lg mr-1 mb-1">
                  <span>Large</span>
                </Badge>
                <Badge color="primary" pill className="badge-md mr-1 mb-1">
                  <span>Medium</span>
                </Badge>
                <Badge color="primary" pill className="badge-sm mr-1 mb-1">
                  <span>Small</span>
                </Badge>
              </TabPane>
               <TabPane className="component-code" tabId="2">{badgePillSizes}</TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default BadgePillSizes
