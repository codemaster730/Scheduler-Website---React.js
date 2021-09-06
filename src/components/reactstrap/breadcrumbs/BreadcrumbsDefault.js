import React from "react"
import {
  Breadcrumb,
  BreadcrumbItem,
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
import { Link } from "react-router-dom"
import classnames from "classnames"
import { Eye, Code } from "react-feather"
import { breadcrumbsDefault } from "./BreadCrumbsSourceCode"

class BreadcrumbsDefault extends React.Component {
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
            <CardTitle>Default</CardTitle>
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
              Reactstrap includes six predefined button styles, each serving its
              own semantic purpose.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Breadcrumb className="vx-breadcrumbs">
                  <BreadcrumbItem>
                    <Link to="#"> Home </Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <Link to="#"> Library </Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem active>
                    <span> Data </span>
                  </BreadcrumbItem>
                </Breadcrumb>
              </TabPane>
               <TabPane className="component-code" tabId="2">{breadcrumbsDefault}</TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default BreadcrumbsDefault
