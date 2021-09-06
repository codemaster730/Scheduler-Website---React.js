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
import { Eye, Code, Facebook, Instagram, Twitter } from "react-feather"
import { badgePillNotification } from "./BadgePillSourceCode"

class BadgePillNotification extends React.Component {
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
            <CardTitle>Notification</CardTitle>
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
            <p className="mb-2">
              Use <code>.badge-up</code> to set pill badge to higher than other
              text. So that it can work with notifications also.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <div className="d-inline-block position-relative mr-2">
                  <Badge pill color="primary" className="badge-up">
                    4
                  </Badge>
                  <Facebook className="font-medium-5 text-primary" size={22} />
                </div>
                <div className="d-inline-block position-relative mr-2">
                  <Badge pill color="danger" className="badge-up">
                    5
                  </Badge>
                  <Instagram className="font-medium-5 text-danger" size={22} />
                </div>
                <div className="d-inline-block position-relative">
                  <Badge pill color="info" className="badge-up">
                    6
                  </Badge>
                  <Twitter className="font-medium-5 text-info" size={22} />
                </div>
              </TabPane>
               <TabPane className="component-code" tabId="2">{badgePillNotification}</TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default BadgePillNotification
