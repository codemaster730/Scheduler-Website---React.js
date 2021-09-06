import React from "react"
import {
  ListGroup,
  ListGroupItem,
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
import { listGroupBadges } from "./ListGroupSourceCode"

class ListGroupBadges extends React.Component {
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
            <CardTitle>Badges</CardTitle>
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
              Use Utility classes <code>.d-flex</code>{" "}
              <code>.justify-content-between</code> to create space between
              badge and your content.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <ListGroup>
                  <ListGroupItem className="d-flex justify-content-between align-items-center">
                    <span>Biscuit jelly beans macaroon danish pudding.</span>
                    <Badge color="primary" pill>
                      4
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem className="d-flex justify-content-between align-items-center">
                    <span>chocolate cheesecake candy.</span>
                    <Badge color="primary" pill>
                      2
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem className="d-flex justify-content-between align-items-center">
                    <span>Oat cake icing pastry pie carrot.</span>
                    <Badge color="primary" pill>
                      1
                    </Badge>
                  </ListGroupItem>
                </ListGroup>
              </TabPane>
               <TabPane className="component-code" tabId="2">{listGroupBadges}</TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default ListGroupBadges
