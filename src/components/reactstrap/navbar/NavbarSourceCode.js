import React from "react"

export const navbarBasic = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
  Nav,
  NavItem,
  NavLink,
  Navbar,
  UncontrolledDropdown,
  Badge,
  Media,
  UncontrolledTooltip,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
  } from "reactstrap"

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
    Bell,
    PlusSquare,
    DownloadCloud,
    AlertTriangle,
    CheckCircle,
    File,
    Power,
    User,
    Heart
  } from "react-feather"

  class NavbarBasic extends React.Component {

    render() {
      return(
        <Navbar className="header-navbar navbar-expand-lg navbar navbar-with-menu floating-nav navbar-light navbar-shadow">
          <div className="navbar-wrapper">
            <div className="navbar-container content">
              <div className="navbar-collapse" id="navbar-mobile">
                <div className="mr-auto float-left bookmark-wrapper d-flex align-items-center">
                  <ul className="navbar-nav d-xl-none">
                    <NavItem className="mobile-menu mr-auto">
                      <NavLink
                        className="nav-menu-main menu-toggle hidden-xs is-active"
                        onClick={this.props.sidebarVisibility}
                      >
                        <Menu className="ficon" />
                      </NavLink>
                    </NavItem>
                  </ul>
                  <ul className="nav navbar-nav bookmark-icons">
                    <NavItem className="nav-item d-none d-lg-block">
                      <NavLink to="/app-todo" id="appTodo">
                        <CheckSquare size={21} />
                      </NavLink>
                      <UncontrolledTooltip
                        placement="bottom"
                        target="appTodo"
                      >
                        Todo
                      </UncontrolledTooltip>
                    </NavItem>
                    <NavItem className="nav-item d-none d-lg-block">
                      <NavLink to="/app-chat" id="appChat">
                        <MessageSquare size={21} />
                      </NavLink>
                      <UncontrolledTooltip
                        placement="bottom"
                        target="appChat"
                      >
                        Chat
                      </UncontrolledTooltip>
                    </NavItem>
                    <NavItem className="nav-item d-none d-lg-block">
                      <NavLink to="/app-mail" id="appMail">
                        <Mail size={21} />
                      </NavLink>
                      <UncontrolledTooltip
                        placement="bottom"
                        target="appMail"
                      >
                        Mail
                      </UncontrolledTooltip>
                    </NavItem>
                    <NavItem className="nav-item d-none d-lg-block">
                      <NavLink to="/app-calendar" id="appCalendar">
                        <Calendar size={21} />
                      </NavLink>
                      <UncontrolledTooltip
                        placement="bottom"
                        target="appCalendar"
                      >
                        Calendar
                      </UncontrolledTooltip>
                    </NavItem>
                    <NavItem className="nav-item d-none d-lg-block">
                      <NavLink to="/">
                        <Star className="text-warning" size={21} />
                      </NavLink>
                    </NavItem>
                  </ul>
                </div>
                <ul className="nav navbar-nav float-right">
                  <UncontrolledDropdown
                    tag="li"
                    className="dropdown-language nav-item"
                  >
                    <DropdownToggle
                      tag="a"
                      data-toggle="dropdown"
                      className="nav-link"
                    >
                      <ReactCountryFlag code="us" svg /> English
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem tag="a">
                        <ReactCountryFlag code="us" svg /> English
                      </DropdownItem>
                      <DropdownItem tag="a">
                        <ReactCountryFlag code="fr" svg /> French
                      </DropdownItem>
                      <DropdownItem tag="a">
                        <ReactCountryFlag code="de" svg /> German
                      </DropdownItem>
                      <DropdownItem tag="a">
                        <ReactCountryFlag code="pt" svg /> Portuguese
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavItem className="nav-search">
                    <NavLink className="nav-link-search">
                      <Search size={21} />
                    </NavLink>
                  </NavItem>
                  <UncontrolledDropdown
                    className="dropdown-notification nav-item"
                    tag="li"
                  >
                    <DropdownToggle
                      tag="a"
                      data-toggle="dropdown"
                      aria-expanded={this.state.dropdownNotification}
                      className="nav-link nav-link-label"
                    >
                      <Bell size={21} />
                      <Badge pill color="primary" className="badge-up">
                        {" "}
                        5{" "}
                      </Badge>
                    </DropdownToggle>
                    <DropdownMenu
                      tag="ul"
                      right
                      className="dropdown-menu-media"
                    >
                      <li className="dropdown-menu-header">
                        <div className="dropdown-header mt-0">
                          <h3 className="text-white">5 New</h3>
                          <span className="notification-title">
                            App Notifications
                          </span>
                        </div>
                      </li>
                      <PerfectScrollbar
                        className="media-list overflow-hidden position-relative"
                        options={{
                          wheelPropagation: false
                        }}
                      >
                        <div className="d-flex justify-content-between">
                          <Media className="d-flex align-items-start">
                            <Media left href="#">
                              <PlusSquare
                                className="font-medium-5 primary"
                                size={21}
                              />
                            </Media>
                            <Media body>
                              <Media
                                heading
                                className="primary media-heading"
                                tag="h6"
                              >
                                You have new order!
                              </Media>
                              <small className="notification-text">
                                Are your going to meet me tonight?
                              </small>
                            </Media>
                            <small>
                              <time
                                className="media-meta"
                                dateTime="2015-06-11T18:29:20+08:00"
                              >
                                9 hours ago
                              </time>
                            </small>
                          </Media>
                        </div>
                        <div className="d-flex justify-content-between">
                          <Media className="d-flex align-items-start">
                            <Media left href="#">
                              <DownloadCloud
                                className="font-medium-5 success"
                                size={21}
                              />
                            </Media>
                            <Media body>
                              <Media
                                heading
                                className="success media-heading"
                                tag="h6"
                              >
                                99% Server load
                              </Media>
                              <small className="notification-text">
                                You got new order of goods?
                              </small>
                            </Media>
                            <small>
                              <time
                                className="media-meta"
                                dateTime="2015-06-11T18:29:20+08:00"
                              >
                                5 hours ago
                              </time>
                            </small>
                          </Media>
                        </div>
                        <div className="d-flex justify-content-between">
                          <Media className="d-flex align-items-start">
                            <Media left href="#">
                              <AlertTriangle
                                className="font-medium-5 danger"
                                size={21}
                              />
                            </Media>
                            <Media body>
                              <Media
                                heading
                                className="danger media-heading"
                                tag="h6"
                              >
                                Warning Notification
                              </Media>
                              <small className="notification-text">
                                Server has used 99% of CPU
                              </small>
                            </Media>
                            <small>
                              <time
                                className="media-meta"
                                dateTime="2015-06-11T18:29:20+08:00"
                              >
                                Today
                              </time>
                            </small>
                          </Media>
                        </div>
                        <div className="d-flex justify-content-between">
                          <Media className="d-flex align-items-start">
                            <Media left href="#">
                              <CheckCircle
                                className="font-medium-5 info"
                                size={21}
                              />
                            </Media>
                            <Media body>
                              <Media
                                heading
                                className="info media-heading"
                                tag="h6"
                              >
                                Complete the task
                              </Media>
                              <small className="notification-text">
                                One of your task is pending.
                              </small>
                            </Media>
                            <small>
                              <time
                                className="media-meta"
                                dateTime="2015-06-11T18:29:20+08:00"
                              >
                                Last week
                              </time>
                            </small>
                          </Media>
                        </div>
                        <div className="d-flex justify-content-between">
                          <Media className="d-flex align-items-start">
                            <Media left href="#">
                              <File
                                className="font-medium-5 warning"
                                size={21}
                              />
                            </Media>
                            <Media body>
                              <Media
                                heading
                                className="warning media-heading"
                                tag="h6"
                              >
                                Generate monthly report
                              </Media>
                              <small className="notification-text">
                                Reminder to generate monthly report
                              </small>
                            </Media>
                            <small>
                              <time
                                className="media-meta"
                                dateTime="2015-06-11T18:29:20+08:00"
                              >
                                Last month
                              </time>
                            </small>
                          </Media>
                        </div>
                      </PerfectScrollbar>
                      <li className="dropdown-menu-footer">
                        <DropdownItem
                          tag="a"
                          className="p-1 text-center"
                        >
                          {" "}
                          Read all notifications{" "}
                        </DropdownItem>
                      </li>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown
                    tag="li"
                    className="dropdown-user nav-item"
                  >
                    <DropdownToggle
                      tag="a"
                      data-toggle="dropdown"
                      className="nav-link dropdown-user-link"
                    >
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
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem tag="a" href="#">
                        <User size={14} className="mr-50" />
                        <span className="align-bottom">
                          Edit Profile
                        </span>
                      </DropdownItem>
                      <DropdownItem tag="a" href="#">
                        <Mail size={14} className="mr-50" />
                        <span>My Inbox</span>
                      </DropdownItem>
                      <DropdownItem tag="a" href="#">
                        <CheckSquare size={14} className="mr-50" />
                        <span>Tasks</span>
                      </DropdownItem>
                      <DropdownItem tag="a" href="#">
                        <MessageSquare size={14} className="mr-50" />
                        <span>Chats</span>
                      </DropdownItem>
                      <DropdownItem tag="a" href="#">
                        <Heart size={14} className="mr-50" />
                        <span>WishList</span>
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem tag="a" href="#">
                        <Power size={14} className="mr-50" />
                        <span>Log Out</span>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </ul>
              </div>
            </div>
          </div>
        </Navbar>
      )
    }
  }
  export default NavbarBasic
  `}
    </code>
  </pre>
)

export const navbarColors = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
  Nav,
  NavItem,
  NavLink
  } from "reactstrap"

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
    Bell,
    PlusSquare,
    DownloadCloud,
    AlertTriangle,
    CheckCircle,
    File,
    Power,
    User,
    Heart
  } from "react-feather"

  class NavbarColors extends React.Component {

    render() {
      return(
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
                    <Badge pill color="primary" className="badge-up">
                      {" "}
                      5{" "}
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
                    <Badge pill color="primary" className="badge-up">
                      {" "}
                      5{" "}
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
                    <Badge pill color="primary" className="badge-up">
                      {" "}
                      5{" "}
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
                      {" "}
                      5{" "}
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
                    <Badge pill color="primary" className="badge-up">
                      {" "}
                      5{" "}
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
                    <Badge pill color="primary" className="badge-up">
                      {" "}
                      5{" "}
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
      )
    }
  }
  export default NavbarColors
  `}
    </code>
  </pre>
)

export const navbarCollapse = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
  } from "reactstrap"



  class NavbarCollapse extends React.Component {

    state = {
      collapsed: true
    }

    toggleNavbar = () => {
      this.setState({
        collapsed: !this.state.collapsed
      })
    }

    render() {
      return(
        <Navbar color="dark" dark>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="#">Active</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Link</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Link</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      )
    }
  }
  export default NavbarCollapse
  `}
    </code>
  </pre>
)
