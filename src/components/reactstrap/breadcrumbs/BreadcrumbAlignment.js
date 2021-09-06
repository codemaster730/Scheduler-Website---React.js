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
import { breadcrumbsAlignment } from "./BreadCrumbsSourceCode"

class BreadcrumbsAlignment extends React.Component {
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
            <CardTitle>Alignment</CardTitle>
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
              Use class <code>.justify-content-position</code> to align
              breadcrumb to desired position.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <div className="justify-content-start breadcrumb-wrapper">
                  <Breadcrumb>
                    <BreadcrumbItem>
                      <Link to="#"> Home </Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                      <Link to="#"> Library </Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                      <span> Data </span>
                    </BreadcrumbItem>
                  </Breadcrumb>
                </div>
                <div className="justify-content-center breadcrumb-wrapper">
                  <Breadcrumb>
                    <BreadcrumbItem>
                      <Link to="#"> Home </Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                      <Link to="#"> Library </Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                      <span> Data </span>
                    </BreadcrumbItem>
                  </Breadcrumb>
                </div>
                <div className="justify-content-end breadcrumb-wrapper">
                  <Breadcrumb>
                    <BreadcrumbItem>
                      <Link to="#"> Home </Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                      <Link to="#"> Library </Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                      <span> Data </span>
                    </BreadcrumbItem>
                  </Breadcrumb>
                </div>
              </TabPane>
               <TabPane className="component-code" tabId="2">{breadcrumbsAlignment}</TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default BreadcrumbsAlignment
