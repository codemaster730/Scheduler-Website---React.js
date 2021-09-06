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
import { Eye, Code } from "react-feather"
import { buttonTags } from "./ButtonsSourceCode"

class ButtonTags extends React.Component {
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
            <CardTitle>Button tags</CardTitle>
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
              You can change element tag by using{" "}
              <code>.btn.btn-colorName</code> classes.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <a
                  className="mr-1 mb-1 btn btn-primary"
                  color="primary"
                  href="https://pixinvent.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link
                </a>
                <Button className="mr-1 mb-1" color="primary" tag="button">
                  Button
                </Button>
                <input
                  className="mr-1 mb-1 btn btn-primary"
                  type="button"
                  value="Input"
                />
                <input
                  className="mr-1 mb-1 btn btn-primary"
                  type="submit"
                  value="Submit"
                />
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {buttonTags}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default ButtonTags
