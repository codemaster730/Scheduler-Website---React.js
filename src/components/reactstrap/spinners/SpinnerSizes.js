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
import { spinnerSizes } from "./SpinnerSourceCode"

class SpinnerSizes extends React.Component {
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
            <CardTitle>Sizes</CardTitle>
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
              Use attribute <code>size="sm/lg"</code> for Small or Large spinner
              .
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Spinner color="primary" size="sm" />
                <Spinner
                  type="grow"
                  color="primary"
                  size="sm"
                  className="mr-2"
                />

                <Spinner color="primary" />
                <Spinner type="grow" color="primary" className="mr-2" />

                <Spinner color="primary" size="lg" />
                <Spinner type="grow" color="primary" size="lg" />
              </TabPane>
               <TabPane className="component-code" tabId="2">{spinnerSizes}</TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default SpinnerSizes
