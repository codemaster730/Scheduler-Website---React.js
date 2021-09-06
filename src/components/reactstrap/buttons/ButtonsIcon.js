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
import { Eye, Code, Home, Star, Check } from "react-feather"
import { iconButtons } from "./ButtonsSourceCode"

class ButtonsIcon extends React.Component {
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
            <CardTitle>Icon</CardTitle>
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
                <Button.Ripple className="mr-1 mb-1" outline color="primary">
                  <Home size={14} />
                  <span className="align-middle ml-25">Home</span>
                </Button.Ripple>
                <Button.Ripple className="mr-1 mb-1" color="warning">
                  <Star size={14} />
                  <span className="align-middle ml-25">Star</span>
                </Button.Ripple>
                <Button.Ripple className="mr-1 mb-1" color="flat-success">
                  <Check size={14} />
                  <span className="align-middle ml-25">Done</span>
                </Button.Ripple>
                <Button.Ripple
                  className="mr-1 mb-1"
                  outline
                  color="primary"
                  disabled
                >
                  <Home size={14} />
                  <span className="align-middle ml-25">Home</span>
                </Button.Ripple>
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {iconButtons}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default ButtonsIcon
