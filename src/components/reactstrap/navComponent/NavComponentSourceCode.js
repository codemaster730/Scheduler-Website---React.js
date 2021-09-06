import React from "react"

export const navBasic = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
  Nav,
  NavItem,
  NavLink
  } from "reactstrap"

  class NavBasic extends React.Component {

    render() {
      return(
        <Nav>
          <NavItem>
            <NavLink href="#" active>
              Active
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">
              Disabled
            </NavLink>
          </NavItem>
      </Nav>
      )
    }
  }
  export default NavBasic
  `}
    </code>
  </pre>
)

export const navBorder = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
  Nav,
  NavItem,
  NavLink
  } from "reactstrap"

  class NavBorder extends React.Component {

    render() {
      return(
        <Nav className="wrap-border">
          <NavItem>
            <NavLink href="#" active>
              Active
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">
              Disabled
            </NavLink>
          </NavItem>
      </Nav>
      )
    }
  }
  export default NavBorder
  `}
    </code>
  </pre>
)

export const navCenter = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
  Nav,
  NavItem,
  NavLink
  } from "reactstrap"

  class NavCenter extends React.Component {

    render() {
      return(
        <Nav className="justify-content-center">
          <NavItem>
            <NavLink href="#" active>
              Active
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">
              Disabled
            </NavLink>
          </NavItem>
      </Nav>
      )
    }
  }
  export default NavCenter
  `}
    </code>
  </pre>
)

export const navEnd = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
  Nav,
  NavItem,
  NavLink
  } from "reactstrap"

  class NavEnd extends React.Component {

    render() {
      return(
        <Nav className="justify-content-end">
          <NavItem>
            <NavLink href="#" active>
              Active
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">
              Disabled
            </NavLink>
          </NavItem>
      </Nav>
      )
    }
  }
  export default NavEnd
  `}
    </code>
  </pre>
)

export const navVertical = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
  Nav,
  NavItem,
  NavLink
  } from "reactstrap"

  class NavVertical extends React.Component {

    render() {
      return(
        <Nav vertical>
          <NavItem>
            <NavLink href="#" active>
              Active
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">
              Disabled
            </NavLink>
          </NavItem>
      </Nav>
      )
    }
  }
  export default NavVertical
  `}
    </code>
  </pre>
)

export const navVerticalBorder = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
  Nav,
  NavItem,
  NavLink
  } from "reactstrap"

  class NavVerticalBorder extends React.Component {

    render() {
      return(
        <Nav vertical className="wrap-border">
          <NavItem>
            <NavLink href="#" active>
              Active
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">
              Disabled
            </NavLink>
          </NavItem>
      </Nav>
      )
    }
  }
  export default NavVerticalBorder
  `}
    </code>
  </pre>
)

export const navSquareBorder = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
  Nav,
  NavItem,
  NavLink
  } from "reactstrap"

  class NavSquareBorder extends React.Component {

    render() {
      return(
        <Nav vertical className="wrap-border square-border">
          <NavItem>
            <NavLink href="#" active>
              Active
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">
              Disabled
            </NavLink>
          </NavItem>
      </Nav>
      )
    }
  }
  export default NavSquareBorder
  `}
    </code>
  </pre>
)

export const navDivider = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
  Nav,
  NavItem,
  NavLink
  } from "reactstrap"

  class NavDivider extends React.Component {

    render() {
      return(
        <Nav vertical className="wrap-border square-border">
          <NavItem>
            <NavLink href="#" active>
              Active
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem divider>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">
              Disabled
            </NavLink>
          </NavItem>
      </Nav>
      )
    }
  }
  export default NavDivider
  `}
    </code>
  </pre>
)
