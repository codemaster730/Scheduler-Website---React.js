import React from "react"
import {
  Pagination,
  PaginationItem,
  PaginationLink,
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
import { Eye, Code, ChevronsLeft, ChevronsRight } from "react-feather"
import { paginationIconsAndText } from "./PaginationSourceCode"

class PaginationIconsAndText extends React.Component {
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
            <CardTitle>With icon and text</CardTitle>
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
            <p>Pagination with icon and text.</p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Pagination className="d-flex justify-content-center mt-3">
                  <PaginationItem href="#">
                    <PaginationLink href="#" first>
                      <ChevronsLeft />{" "}
                      <span className="d-none d-sm-inline-block">Prev</span>
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">4</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">5</PaginationLink>
                  </PaginationItem>
                  <PaginationItem href="#">
                    <PaginationLink href="#" last>
                      <span className="d-none d-sm-inline-block">Next</span>{" "}
                      <ChevronsRight />
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </TabPane>
               <TabPane className="component-code" tabId="2">{paginationIconsAndText}</TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default PaginationIconsAndText
