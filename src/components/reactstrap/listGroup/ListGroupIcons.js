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
import { Eye, Code, Facebook, Instagram, Twitter } from "react-feather"
import { listGroupIcons } from "./ListGroupSourceCode"

class ListGroupIcons extends React.Component {
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
            <CardTitle>Icons</CardTitle>
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
              Just add an icon before your content to create a list group with
              icons
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <ListGroup>
                  <ListGroupItem>
                    <p className="float-left mb-0 mr-1">
                      <Instagram size={16} />
                    </p>
                    <span>Cupcake sesame snaps dessert marzipan.</span>
                  </ListGroupItem>
                  <ListGroupItem>
                    <p className="float-left mb-0 mr-1">
                      <Facebook size={16} />
                    </p>
                    <span>
                      Jelly beans jelly-o gummi bears chupa chups marshmallow.
                    </span>
                  </ListGroupItem>
                  <ListGroupItem>
                    <p className="float-left mb-0 mr-1">
                      <Twitter size={16} />
                    </p>
                    <span>Bonbon macaroon gummies pie jelly.</span>
                  </ListGroupItem>
                </ListGroup>
              </TabPane>
               <TabPane className="component-code" tabId="2">{listGroupIcons}</TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default ListGroupIcons
