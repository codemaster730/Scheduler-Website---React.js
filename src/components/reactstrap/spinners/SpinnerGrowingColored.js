import React from "react"
import {
  Spinner,
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
import { spinnerGrowColors } from "./SpinnerSourceCode"

class SpinnerGrowColors extends React.Component {
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
            <CardTitle>Colored Growing Spinners</CardTitle>
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
              Use <code>color</code> and <code>type</code> attribute to create a
              colored growing spinner.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Spinner type="grow" className="mr-50" color="primary" />
                <Spinner type="grow" className="mr-50" color="success" />
                <Spinner type="grow" className="mr-50" color="info" />
                <Spinner type="grow" className="mr-50" color="danger" />
                <Spinner type="grow" className="mr-50" color="warning" />
                <Spinner type="grow" className="mr-50" color="light" />
                <Spinner type="grow" className="mr-50" color="dark" />
              </TabPane>
               <TabPane className="component-code" tabId="2">{spinnerGrowColors}</TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default SpinnerGrowColors
