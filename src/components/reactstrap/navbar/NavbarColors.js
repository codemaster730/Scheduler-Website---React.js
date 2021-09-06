import React from "react"
import {
  Navbar,
  Badge,
  CardHeader,
  CardBody,
  CardTitle,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card
} from "reactstrap"
import classnames from "classnames"
import {
  Eye,
  Code,
  Menu,
  CheckSquare,
  MessageSquare,
  Mail,
  Calendar,
  Star,
  Search,
  Bell
} from "react-feather"
import { navbarColors } from "./NavbarSourceCode"
import userImg from "../../../assets/img/portrait/small/avatar-s-11.jpg"

import ReactCountryFlag from "react-country-flag"

class NavbarColors extends React.Component {
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
            <CardTitle>Navbar Colors</CardTitle>
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
          <CardBody className="px-0">
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Navbar className="header-navbar navbar-expand-lg navbar navbar-with-menu floating-nav navbar-light navbar-shadow bg-primary mb-2">
                  <div className="navbar-wrapper">
                    <div className="navbar-container content">
                      <div className="navbar-collapse" id="navbar-mobile">
                        <div className="mr-auto float-left bookmark-wrapper d-flex align-items-center">
                          <ul className="navbar-nav d-xl-none">
                            <NavItem className="mobile-menu mr-auto">
                              <NavLink className="nav-menu-main menu-toggle hidden-xs is-active">
                                <Menu className="ficon" />
                              </NavLink>
                            </NavItem>
                          </ul>
                          <ul className="nav navbar-nav bookmark-icons">
                            <NavItem className="nav-item d-none d-lg-block">
                              <NavLink to="/app-todo" id="appTodo">
                                <CheckSquare size={21} />
                              </NavLink>
                            </NavItem>
                            <NavItem className="nav-item d-none d-lg-block">
                              <NavLink>
                                <MessageSquare size={21} />
                              </NavLink>
                            </NavItem>
                            <NavItem className="nav-item d-none d-lg-block">
                              <NavLink>
                                <Mail size={21} />
                              </NavLink>
                            </NavItem>
                            <NavItem className="nav-item d-none d-lg-block">
                              <NavLink>
                                <Calendar size={21} />
                              </NavLink>
                            </NavItem>
                            <NavItem className="nav-item d-none d-lg-block">
                              <NavLink>
                                <Star className="text-warning" size={21} />
                              </NavLink>
                            </NavItem>
                          </ul>
                        </div>
                        <ul className="nav navbar-nav float-right">
                          <NavItem className="dropdown-language">
                            <NavLink tag="a">
                              <ReactCountryFlag code="us" svg /> English
                            </NavLink>
                          </NavItem>
                          <NavItem className="nav-search">
                            <NavLink className="nav-link-search">
                              <Search size={21} />
                            </NavLink>
                          </NavItem>
                          <NavItem className="dropdown-notification">
                            <NavLink className="nav-link-label">
                              <Bell size={21} />
                              <Badge pill color="danger" className="badge-up">
                                5
                              </Badge>
                            </NavLink>
                          </NavItem>
                          <NavItem tag="li" className="dropdown-user">
                            <NavLink className="dropdown-user-link">
                              <div className="user-nav d-sm-flex d-none">
                                <span className="user-name text-bold-600">
                                  John Doe
                                </span>
                                <span className="user-status">Available</span>
                              </div>
                              <span>
                                <img
                                  src={userImg}
                                  className="round"
                                  height="40"
                                  width="40"
                                  alt="avatar"
                                />
                              </span>
                            </NavLink>
                          </NavItem>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Navbar>

                <Navbar className="header-navbar navbar-expand-lg navbar navbar-with-menu floating-nav navbar-light navbar-shadow bg-success mb-2">
                  <div className="navbar-wrapper">
                    <div className="navbar-container content">
                      <div className="navbar-collapse" id="navbar-mobile">
                        <div className="mr-auto float-left bookmark-wrapper d-flex align-items-center">
                          <ul className="navbar-nav d-xl-none">
                            <NavItem className="mobile-menu mr-auto">
                              <NavLink className="nav-menu-main menu-toggle hidden-xs is-active">
                                <Menu className="ficon" />
                              </NavLink>
                            </NavItem>
                          </ul>
                          <ul className="nav navbar-nav bookmark-icons">
                            <NavItem className="nav-item d-none d-lg-block">
                              <NavLink to="/app-todo" id="appTodo">
                                <CheckSquare size={21} />
                              </NavLink>
                            </NavItem>
                            <NavItem className="nav-item d-none d-lg-block">
                              <NavLink>
                                <MessageSquare size={21} />
                              </NavLink>
                            </NavItem>
                            <NavItem className="nav-item d-none d-lg-block">
                              <NavLink>
                                <Mail size={21} />
                              </NavLink>
                            </NavItem>
                            <NavItem className="nav-item d-none d-lg-block">
                              <NavLink>
                                <Calendar size={21} />
                              </NavLink>
                            </NavItem>
                            <NavItem className="nav-item d-none d-lg-block">
                              <NavLink>
                                <Star className="text-warning" size={21} />
                              </NavLink>
                            </NavItem>
                          </ul>
                        </div>
                        <ul className="nav navbar-nav float-right">
                          <NavItem className="dropdown-language">
                            <NavLink tag="a">
                              <ReactCountryFlag code="us" svg /> English
                            </NavLink>
                          </NavItem>
                          <NavItem className="nav-search">
                            <NavLink className="nav-link-search">
                              <Search size={21} />
                            </NavLink>
                          </NavItem>
                          <NavItem className="dropdown-notification">
                            <NavLink className="nav-link-label">
                              <Bell size={21} />
                              <Badge pill color="danger" className="badge-up">
                                5
                              </Badge>
                            </NavLink>
                          </NavItem>
                          <NavItem tag="li" className="dropdown-user">
                            <NavLink className="dropdown-user-link">
                              <div className="user-nav d-sm-flex d-none">
                                <span className="user-name text-bold-600">
                                  John Doe
                                </span>
                                <span className="user-status">Available</span>
                              </div>
                              <span>
                                <img
                                  src={userImg}
                                  className="round"
                                  height="40"
                                  width="40"
                                  alt="avatar"
                                />
                              </span>
                            </NavLink>
                          </NavItem>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Navbar>

                <Navbar className="header-navbar navbar-expand-lg navbar navbar-with-menu floating-nav navbar-light navbar-shadow bg-info mb-2">
                  <div className="navbar-wrapper">
                    <div className="navbar-container content">
                      <div className="navbar-collapse" id="navbar-mobile">
                        <div className="mr-auto float-left bookmark-wrapper d-flex align-items-center">
                          <ul className="navbar-nav d-xl-none">
                            <NavItem className="mobile-menu mr-auto">
                              <NavLink className="nav-menu-main menu-toggle hidden-xs is-active">
                                <Menu className="ficon" />
                              </NavLink>
                            </NavItem>
                          </ul>
                          <ul className="nav navbar-nav bookmark-icons">
                            <NavItem className="nav-item d-none d-lg-block">
                              <NavLink to="/app-todo" id="appTodo">
                                <CheckSquare size={21} />
                              </NavLink>
                            </NavItem>
                            <NavItem className="nav-item d-none d-lg-block">
                              <NavLink>
                                <MessageSquare size={21} />
                              </NavLink>
                            </NavItem>
                            <NavItem className="nav-item d-none d-lg-block">
                              <NavLink>
                                <Mail size={21} />
                              </NavLink>
                            </NavItem>
                            <NavItem className="nav-item d-none d-lg-block">
                              <NavLink>
                                <Calendar size={21} />
                              </NavLink>
                            </NavItem>
                            <NavItem className="nav-item d-none d-lg-block">
                              <NavLink>
                                <Star className="text-warning" size={21} />
                              </NavLink>
                            </NavItem>
                          </ul>
                        </div>
                        <ul className="nav navbar-nav float-right">
                          <NavItem className="dropdown-language">
                            <NavLink tag="a">
                              <ReactCountryFlag code="us" svg /> English
                            </NavLink>
                          </NavItem>
                          <NavItem className="nav-search">
                            <NavLink className="nav-link-search">
                              <Search size={21} />
                            </NavLink>
                          </NavItem>
                          <NavItem className="dropdown-notification">
                            <NavLink className="nav-link-label">
                              <Bell size={21} />
                              <Badge pill color="danger" className="badge-up">
                                5
                              </Badge>
                            </NavLink>
                          </NavItem>
                          <NavItem tag="li" className="dropdown-user">
                            <NavLink className="dropdown-user-link">
                              <div className="user-nav d-sm-flex d-none">
                                <span className="user-name text-bold-600">
                                  John Doe
                                </span>
                                <span className="user-status">Available</span>
                              </div>
                              <span>
                                <img
                                  src={userImg}
                                  className="round"
                                  height="40"
                                  width="40"
                                  alt="avatar"
                                />
                              </span>
                            </NavLink>
                          </NavItem>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Navbar>

                <Navbar className="header-navbar navbar-expand-lg navbar navbar-with-menu floating-nav navbar-light navbar-shadow bg-danger mb-2">
                  <div className="navbar-wrapper">
                    <div className="navbar-container content">
                      <div className="navbar-collapse" id="navbar-mobile">
                        <div className="mr-auto float-left bookmark-wrapper d-flex align-items-center">
                          <ul className="navbar-nav d-xl-none">
                            <NavItem className="mobile-menu mr-auto">
                              <NavLink className="nav-menu-main menu-toggle hidden-xs is-active">
                                <Menu className="ficon" />
                              </NavLink>
                            </NavItem>
                          </ul>
                          <ul className="nav navbar-nav bookmark-icons">
                            <NavItem className="nav-item d-none d-lg-block">
                              <NavLink to="/app-todo" id="appTodo">
                                <CheckSquare size={21} />
                              </NavLink>
                            </NavItem>
                            <NavItem className="nav-item d-none d-lg-block">
                              <NavLink>
                                <MessageSquare size={21} />
                              </NavLink>
                            </NavItem>
                            <NavItem className="nav-item d-none d-lg-block">
                              <NavLink>
                                <Mail size={21} />
                              </NavLink>
                            </NavItem>
                            <NavItem className="nav-item d-none d-lg-block">
                              <NavLink>
                                <Calendar size={21} />
                              </NavLink>
                            </NavItem>
                            <NavItem className="nav-item d-none d-lg-block">
                              <NavLink>
                                <Star className="text-warning" size={21} />
                              </NavLink>
                            </NavItem>
                          </ul>
                        </div>
                        <ul className="nav navbar-nav float-right">
                          <NavItem className="dropdown-language">
                            <NavLink tag="a">
                              <ReactCountryFlag code="us" svg /> English
                            </NavLink>
                          </NavItem>
                          <NavItem className="nav-search">
                            <NavLink className="nav-link-search">
                              <Search size={21} />
                            </NavLink>
                          </NavItem>
                          <NavItem className="dropdown-notification">
                            <NavLink className="nav-link-label">
                              <Bell size={21} />
                              <Badge pill color="primary" className="badge-up">
                                5
                              </Badge>
                            </NavLink>
                          </NavItem>
                          <NavItem tag="li" className="dropdown-user">
                            <NavLink className="dropdown-user-link">
                              <div className="user-nav d-sm-flex d-none">
                                <span className="user-name text-bold-600">
                                  John Doe
                                </span>
                                <span className="user-status">Available</span>
                              </div>
                              <span>
                                <img
                                  src={userImg}
                                  className="round"
                                  height="40"
                                  width="40"
                                  alt="avatar"
                                />
                              </span>
                            </NavLink>
                          </NavItem>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Navbar>

                <Navbar className="header-navbar navbar-expand-lg navbar navbar-with-menu floating-nav navbar-light navbar-shadow bg-warning mb-2">
                  <div className="navbar-wrapper">
                    <div className="navbar-container content">
                      <div className="navbar-collapse" id="navbar-mobile">
                        <div className="mr-auto float-left bookmark-wrapper d-flex align-items-center">
                          <ul className="navbar-nav d-xl-none">
                            <NavItem className="mobile-menu mr-auto">
                              <NavLink className="nav-menu-main menu-toggle hidden-xs is-active">
                                <Menu className="ficon" />
                              </NavLink>
                            </NavItem>
                          </ul>
                          <ul className="nav navbar-nav bookmark-icons">
                            <NavItem className="nav-item d-none d-lg-block">
                              <NavLink to="/app-todo" id="appTodo">
                                <CheckSquare size={21} />
                              </NavLink>
                            </NavItem>
                            <NavItem className="nav-item d-none d-lg-block">
                              <NavLink>
                                <MessageSquare size={21} />
                              </NavLink>
                            </NavItem>
                            <NavItem className="nav-item d-none d-lg-block">
                              <NavLink>
                                <Mail size={21} />
                              </NavLink>
                            </NavItem>
                            <NavItem className="nav-item d-none d-lg-block">
                              <NavLink>
                                <Calendar size={21} />
                              </NavLink>
                            </NavItem>
                            <NavItem className="nav-item d-none d-lg-block">
                              <NavLink>
                                <Star className="text-warning" size={21} />
                              </NavLink>
                            </NavItem>
                          </ul>
                        </div>
                        <ul className="nav navbar-nav float-right">
                          <NavItem className="dropdown-language">
                            <NavLink tag="a">
                              <ReactCountryFlag code="us" svg /> English
                            </NavLink>
                          </NavItem>
                          <NavItem className="nav-search">
                            <NavLink className="nav-link-search">
                              <Search size={21} />
                            </NavLink>
                          </NavItem>
                          <NavItem className="dropdown-notification">
                            <NavLink className="nav-link-label">
                              <Bell size={21} />
                              <Badge pill color="danger" className="badge-up">
                                5
                              </Badge>
                            </NavLink>
                          </NavItem>
                          <NavItem tag="li" className="dropdown-user">
                            <NavLink className="dropdown-user-link">
                              <div className="user-nav d-sm-flex d-none">
                                <span className="user-name text-bold-600">
                                  John Doe
                                </span>
                                <span className="user-status">Available</span>
                              </div>
                              <span>
                                <img
                                  src={userImg}
                                  className="round"
                                  height="40"
                                  width="40"
                                  alt="avatar"
                                />
                              </span>
                            </NavLink>
                          </NavItem>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Navbar>

                <Navbar className="header-navbar navbar-expand-lg navbar navbar-with-menu floating-nav navbar-light navbar-shadow bg-dark">
                  <div className="navbar-wrapper">
                    <div className="navbar-container content">
                      <div className="navbar-collapse" id="navbar-mobile">
                        <div className="mr-auto float-left bookmark-wrapper d-flex align-items-center">
                          <ul className="navbar-nav d-xl-none">
                            <NavItem className="mobile-menu mr-auto">
                              <NavLink className="nav-menu-main menu-toggle hidden-xs is-active">
                                <Menu className="ficon" />
                              </NavLink>
                            </NavItem>
                          </ul>
                          <ul className="nav navbar-nav bookmark-icons">
                            <NavItem className="nav-item d-none d-lg-block">
                              <NavLink to="/app-todo" id="appTodo">
                                <CheckSquare size={21} />
                              </NavLink>
                            </NavItem>
                            <NavItem className="nav-item d-none d-lg-block">
                              <NavLink>
                                <MessageSquare size={21} />
                              </NavLink>
                            </NavItem>
                            <NavItem className="nav-item d-none d-lg-block">
                              <NavLink>
                                <Mail size={21} />
                              </NavLink>
                            </NavItem>
                            <NavItem className="nav-item d-none d-lg-block">
                              <NavLink>
                                <Calendar size={21} />
                              </NavLink>
                            </NavItem>
                            <NavItem className="nav-item d-none d-lg-block">
                              <NavLink>
                                <Star className="text-warning" size={21} />
                              </NavLink>
                            </NavItem>
                          </ul>
                        </div>
                        <ul className="nav navbar-nav float-right">
                          <NavItem className="dropdown-language">
                            <NavLink tag="a">
                              <ReactCountryFlag code="us" svg /> English
                            </NavLink>
                          </NavItem>
                          <NavItem className="nav-search">
                            <NavLink className="nav-link-search">
                              <Search size={21} />
                            </NavLink>
                          </NavItem>
                          <NavItem className="dropdown-notification">
                            <NavLink className="nav-link-label">
                              <Bell size={21} />
                              <Badge pill color="danger" className="badge-up">
                                5
                              </Badge>
                            </NavLink>
                          </NavItem>
                          <NavItem tag="li" className="dropdown-user">
                            <NavLink className="dropdown-user-link">
                              <div className="user-nav d-sm-flex d-none">
                                <span className="user-name text-bold-600">
                                  John Doe
                                </span>
                                <span className="user-status">Available</span>
                              </div>
                              <span>
                                <img
                                  src={userImg}
                                  className="round"
                                  height="40"
                                  width="40"
                                  alt="avatar"
                                />
                              </span>
                            </NavLink>
                          </NavItem>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Navbar>
              </TabPane>
              <TabPane className="component-code px-2" tabId="2">
                {navbarColors}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default NavbarColors
