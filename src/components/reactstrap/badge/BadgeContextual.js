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
import { badgeContextual } from "./BadgeSourceCode"

class BadgeContextual extends React.Component {
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
            <CardTitle>Contextual variations</CardTitle>
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
              Use attribute <code>color</code> with <code>Badge</code> tag to
              create badge with diffrent colors.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Badge color="primary" className="mr-1 mb-1">
                  Primary
                </Badge>
                <Badge color="success" className="mr-1 mb-1">
                  Success
                </Badge>
                <Badge color="info" className="mr-1 mb-1">
                  Info
                </Badge>
                <Badge color="danger" className="mr-1 mb-1">
                  Danger
                </Badge>
                <Badge color="warning" className="mr-1 mb-1">
                  Warning
                </Badge>
                <Badge color="dark" className="mr-1 mb-1">
                  Dark
                </Badge>
              </TabPane>
               <TabPane className="component-code" tabId="2">{badgeContextual}</TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default BadgeContextual
