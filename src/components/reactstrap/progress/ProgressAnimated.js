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
import { progressAnimated } from "./ProgressSourceCode"

class ProgressAnimated extends React.Component {
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
            <CardTitle>Animated Progress</CardTitle>
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
              Use <code>animated</code> attribute with progress to animate
              progress bar.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Progress className="progress-xl" animated value={2 * 5} />
                <Progress
                  className="progress-xl"
                  animated
                  color="success"
                  value="25"
                />
                <Progress
                  className="progress-xl"
                  animated
                  color="info"
                  value={50}
                />
                <Progress
                  className="progress-xl"
                  animated
                  color="warning"
                  value={75}
                />
                <Progress
                  className="progress-xl"
                  animated
                  color="danger"
                  value="100"
                />
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {progressAnimated}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default ProgressAnimated
