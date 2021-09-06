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
import { listGroupTag } from "./ListGroupSourceCode"

class ListGroupTag extends React.Component {
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
            <CardTitle>Tag List Group</CardTitle>
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
              Use <code>tag</code> attribute with <code>ListGroupItem</code> tag
              to change item's tag.You can use <code>active</code>
              attribute with <code>ListGroupItem</code> tag to show an item as
              active.Use <code>action</code> attribute to make your list
              actionable.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <ListGroup tag="div">
                  <ListGroupItem tag="a" href="#" active>
                    Cras justo odio
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="#">
                    Dapibus ac facilisis in
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="#">
                    Morbi leo risus
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="#">
                    Porta ac consectetur ac
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="#">
                    consectetur adipisicing elit. Enim, exercitationem..
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="#" disabled>
                    Vestibulum at eros
                  </ListGroupItem>
                </ListGroup>
              </TabPane>
               <TabPane className="component-code" tabId="2">{listGroupTag}</TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default ListGroupTag
