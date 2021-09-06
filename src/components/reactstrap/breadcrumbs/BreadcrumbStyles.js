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
import { breadcrumbsStyles } from "./BreadCrumbsSourceCode"

class BreadcrumbsStyles extends React.Component {
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
            <CardTitle>Styles</CardTitle>
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
              These breadcrumbs are only for demo puropses. You can change
              breadcrumb seprator by changing <code>$breadcrumb-divider</code>{" "}
              variable value in scss
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Breadcrumb className="breadcrumb-slash">
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

                <Breadcrumb className="breadcrumb-dots">
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

                <Breadcrumb className="breadcrumb-dashes">
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

                <Breadcrumb className="breadcrumb-pipes">
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

                <Breadcrumb className="breadcrumb-chevron">
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
               <TabPane className="component-code" tabId="2">{breadcrumbsStyles}</TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default BreadcrumbsStyles
