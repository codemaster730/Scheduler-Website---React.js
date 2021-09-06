import React from "react"
import {
  Alert,
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
import { alertColors } from "./AlertSourceCode"

class AlertColors extends React.Component {
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
            <CardTitle>Colors</CardTitle>
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
                <Alert color="primary">
                  <div className="alert-heading">Primary</div>
                  Tootsie roll lollipop lollipop icing. Wafer cookie danish
                  macaroon. Liquorice fruitcake apple pie I love cupcake
                  cupcake.
                </Alert>
                <Alert color="success">
                  <div className="alert-heading">Success</div>
                  Tootsie roll lollipop lollipop icing. Wafer cookie danish
                  macaroon. Liquorice fruitcake apple pie I love cupcake
                  cupcake.
                </Alert>
                <Alert color="danger">
                  <div className="alert-heading">Danger</div>
                  Tootsie roll lollipop lollipop icing. Wafer cookie danish
                  macaroon. Liquorice fruitcake apple pie I love cupcake
                  cupcake.
                </Alert>
                <Alert color="warning">
                  <div className="alert-heading">Warning</div>
                  Tootsie roll lollipop lollipop icing. Wafer cookie danish
                  macaroon. Liquorice fruitcake apple pie I love cupcake
                  cupcake.
                </Alert>
                <Alert color="dark">
                  <div className="alert-heading">Dark</div>
                  Tootsie roll lollipop lollipop icing. Wafer cookie danish
                  macaroon. Liquorice fruitcake apple pie I love cupcake
                  cupcake.
                </Alert>
                <Alert color="info">
                  <div className="alert-heading">Info</div>
                  Tootsie roll lollipop lollipop icing. Wafer cookie danish
                  macaroon. Liquorice fruitcake apple pie I love cupcake
                  cupcake.
                </Alert>
                <Alert color="light">
                  <div className="alert-heading">Light</div>
                  Tootsie roll lollipop lollipop icing. Wafer cookie danish
                  macaroon. Liquorice fruitcake apple pie I love cupcake
                  cupcake.
                </Alert>
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {alertColors}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default AlertColors
