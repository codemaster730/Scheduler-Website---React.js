import React from "react"
import {
  Button,
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
import { Eye, Code, Search, Inbox, Camera } from "react-feather"
import { iconOnlyButtons } from "./ButtonsSourceCode"

class ButtonsIconOnly extends React.Component {
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
            <CardTitle>Icon Only</CardTitle>
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
              You can use <code>.btn-icon</code>. you can create a rounded
              button by using <code>.rounded-circle</code> with
              <code>.btn-icon</code>. You can only use <code>.btn-icon</code>
              when you only want icon in your button
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <div className="d-inline-block mr-1 mb-1">
                  {" "}
                  <Button.Ripple className="btn-icon" outline color="primary">
                    <Search size={16} />
                  </Button.Ripple>
                </div>
                <div className="d-inline-block mr-1 mb-1">
                  {" "}
                  <Button.Ripple className="btn-icon" color="warning">
                    <Inbox size={16} />
                  </Button.Ripple>
                </div>
                <div className="d-inline-block mr-1 mb-1">
                  {" "}
                  <Button.Ripple className="btn-icon" color="flat-success">
                    <Camera size={16} />
                  </Button.Ripple>
                </div>
                <div className="d-inline-block mr-1 mb-1">
                  {" "}
                  <Button.Ripple
                    className="btn-icon"
                    outline
                    color="primary"
                    disabled
                  >
                    <Search size={16} />
                  </Button.Ripple>
                </div>
                <div className="d-inline-block mr-1 mb-1">
                  {" "}
                  <Button.Ripple
                    className="btn-icon rounded-circle"
                    outline
                    color="primary"
                  >
                    <Search size={16} />
                  </Button.Ripple>
                </div>
                <div className="d-inline-block mr-1 mb-1">
                  {" "}
                  <Button.Ripple
                    className="btn-icon rounded-circle"
                    color="warning"
                  >
                    <Inbox size={16} />
                  </Button.Ripple>
                </div>
                <div className="d-inline-block mr-1 mb-1">
                  {" "}
                  <Button.Ripple
                    className="btn-icon rounded-circle"
                    color="flat-success"
                  >
                    <Camera size={16} />
                  </Button.Ripple>
                </div>
                <div className="d-inline-block mr-1 mb-1">
                  {" "}
                  <Button.Ripple
                    className="btn-icon rounded-circle"
                    outline
                    color="primary"
                    disabled
                  >
                    <Search size={16} />
                  </Button.Ripple>
                </div>
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {iconOnlyButtons}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default ButtonsIconOnly
