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
import { badgeGlow } from "./BadgeSourceCode"

class BadgeGlow extends React.Component {
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
            <CardTitle>Badge Glow</CardTitle>
            <div className="views">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "1"
                    })}
                    onClick={() => {
                      this.toggleTab("1")
                    }}>
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
                    }}>
                    <Code size={15} />
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </CardHeader>
          <CardBody>
            <p>
              Use class <code>badge-glow</code> with <code>Badge</code> tag to
              add glow effect to your badge
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Badge color="primary" className="badge-glow mr-1 mb-1">
                  Primary
                </Badge>
                <Badge color="success" className="badge-glow mr-1 mb-1">
                  Success
                </Badge>
                <Badge color="info" className="badge-glow mr-1 mb-1">
                  Info
                </Badge>
                <Badge color="danger" className="badge-glow mr-1 mb-1">
                  Danger
                </Badge>
                <Badge color="warning" className="badge-glow mr-1 mb-1">
                  Warning
                </Badge>
                <Badge color="dark" className="badge-glow mb-1">
                  Dark
                </Badge>
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {badgeGlow}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default BadgeGlow
