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
  NavLink,
  Row,
  Col
} from "reactstrap"
import classnames from "classnames"
import { Eye, Code } from "react-feather"
import { listGroupNavigation } from "./ListGroupSourceCode"

class ListGroupNavigation extends React.Component {
  state = {
    activeTab: "1",
    activeList: "1"
  }

  toggleTab = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab })
    }
  }
  toggleList = list => {
    if (this.state.activeList !== list) {
      this.setState({ activeList: list })
    }
  }

  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            <CardTitle>Navigation List Group</CardTitle>
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
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col md="4" sm="12">
                    <ListGroup tag="div">
                      <ListGroupItem
                        className={classnames("cursor-pointer", {
                          active: this.state.activeList === "1"
                        })}
                        onClick={() => this.toggleList("1")}
                        action
                      >
                        Home
                      </ListGroupItem>
                      <ListGroupItem
                        className={classnames("cursor-pointer", {
                          active: this.state.activeList === "2"
                        })}
                        onClick={() => this.toggleList("2")}
                        action
                      >
                        Profile
                      </ListGroupItem>
                      <ListGroupItem
                        className={classnames("cursor-pointer", {
                          active: this.state.activeList === "3"
                        })}
                        onClick={() => this.toggleList("3")}
                        action
                      >
                        Messages
                      </ListGroupItem>
                    </ListGroup>
                  </Col>
                  <Col md="8" sm="12" className="mt-1">
                    <TabContent activeTab={this.state.activeList}>
                      <TabPane tabId="1">
                        Croissant jelly-o halvah chocolate sesame snaps. Brownie
                        caramels candy canes chocolate cake marshmallow icing
                        lollipop I love.
                      </TabPane>
                      <TabPane tabId="2">
                        Jelly beans topping I love chocolate cake. Lemon drops
                        jujubes jelly I love I love marshmallow gummies icing.
                        Liquorice jelly-o lemon drops sugar plum.
                      </TabPane>
                      <TabPane tabId="3">
                        Wafer cheesecake cheesecake. Pastry bonbon chocolate
                        pastry pudding topping sweet roll lollipop. I love
                        macaroon gummi bears cookie topping chocolate bar
                        carrot.
                      </TabPane>
                    </TabContent>
                  </Col>
                </Row>
              </TabPane>
               <TabPane className="component-code" tabId="2">{listGroupNavigation}</TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default ListGroupNavigation
