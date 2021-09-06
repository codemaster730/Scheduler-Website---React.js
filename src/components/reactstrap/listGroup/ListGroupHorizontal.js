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
import { listGroupHorizontal } from "./ListGroupSourceCode"

class ListGroupHorizontal extends React.Component {
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
            <CardTitle>Horizontal List Group</CardTitle>
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
              Use class <code>.list-group-horizontal</code> to change the layout
              of list group items from vertical to horizontal across all
              breakpoints.choose a responsive variantcode
              <code>.list-group-horizontal-[sm | md | lg | xl]</code> to make a
              list group horizontal starting at that breakpoint’s min-width.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <ListGroup className="list-group-horizontal-sm">
                  <ListGroupItem>Chocolate cake</ListGroupItem>
                  <ListGroupItem>Cookie pie</ListGroupItem>
                  <ListGroupItem>Cheesecake</ListGroupItem>
                  <ListGroupItem>Cotton candy</ListGroupItem>
                </ListGroup>
              </TabPane>
               <TabPane className="component-code" tabId="2">{listGroupHorizontal}</TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default ListGroupHorizontal
