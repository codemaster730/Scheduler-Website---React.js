import React from "react"
import {
  Progress,
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
import { progressLabeled } from "./ProgressSourceCode"

class ProgressLabeled extends React.Component {
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
            <CardTitle>Labeled Progress</CardTitle>
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
              Add text between progress tag to create a labeled progress bar.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Progress className="progress-lg" value="25" color="danger">
                  25%
                </Progress>
                <Progress className="progress-lg" value={50} color="warning">
                  1/2
                </Progress>
                <Progress className="progress-lg" value={75} color="info">
                  You're almost there!
                </Progress>
                <Progress className="progress-lg" value={85} color="primary">
                  Keep it up...
                </Progress>
                <Progress className="progress-lg" color="success" value="100">
                  You did it!
                </Progress>
              </TabPane>
               <TabPane className="component-code" tabId="2">{progressLabeled}</TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default ProgressLabeled
