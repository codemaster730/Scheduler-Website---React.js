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
import { progressColored } from "./ProgressSourceCode"

class ProgressColored extends React.Component {
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
            <CardTitle>Colored Progress</CardTitle>
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
              Use <code>color</code> attribute with progress to change progress
              color. To create a multi colored progress wrap all of your
              progresses in with <code>multi</code> attribute.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Progress value={2 * 5} />
                <Progress color="success" value="25" />
                <Progress color="info" value={50} />
                <Progress color="warning" value={75} />
                <Progress color="danger" value="100" />
                <Progress multi>
                  <Progress bar value="15" />
                  <Progress bar color="success" value="30" />
                  <Progress bar color="info" value="25" />
                  <Progress bar color="warning" value="20" />
                  <Progress bar color="danger" value="5" />
                </Progress>
              </TabPane>
               <TabPane className="component-code" tabId="2">{progressColored}</TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default ProgressColored
