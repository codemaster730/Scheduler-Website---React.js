import React from "react"
import {
  ListGroup,
  ListGroupItem,
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
import { listGroupContextual } from "./ListGroupSourceCode"

class ListGroupContextual extends React.Component {
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
            <CardTitle>Contextual List Group</CardTitle>
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
              Use <code>color</code> attribute with <code>ListGroupItem</code>{" "}
              to create a contextual list.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <ListGroup>
                  <ListGroupItem color="primary">
                    A simple primary list group item
                  </ListGroupItem>
                  <ListGroupItem color="success">
                    A simple success list group item
                  </ListGroupItem>
                  <ListGroupItem color="info">
                    A simple info list group item
                  </ListGroupItem>
                  <ListGroupItem color="danger">
                    A simple danger list group item
                  </ListGroupItem>
                  <ListGroupItem color="warning">
                    A simple warning list group item
                  </ListGroupItem>
                  <ListGroupItem color="light">
                    A simple light list group item
                  </ListGroupItem>
                  <ListGroupItem color="dark">
                    A simple dark list group item
                  </ListGroupItem>
                </ListGroup>
              </TabPane>
               <TabPane className="component-code" tabId="2">{listGroupContextual}</TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default ListGroupContextual
