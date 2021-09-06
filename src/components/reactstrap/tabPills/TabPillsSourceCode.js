import React from "react"

export const pillBasic = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap"

class PillBasic extends React.Component {

  state = {
    active: "1"
  }

  toggle = tab => {
    if (this.state.active !== tab) {
      this.setState({ active: tab })
    }
  }

  render() {
    return(
      <Nav pills>
      <NavItem>
        <NavLink
          className={classnames({
            active: this.state.active === "1"
          })}
          onClick={() => {
            this.toggle("1")
          }}
        >
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={classnames({
            active: this.state.active === "2"
          })}
          onClick={() => {
            this.toggle("2")
          }}
        >
          Service
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled>Disabled</NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={classnames({
            active: this.state.active === "3"
          })}
          onClick={() => {
            this.toggle("3")
          }}
        >
          Account
        </NavLink>
      </NavItem>
    </Nav>
    <TabContent activeTab={this.state.active}>
      <TabPane tabId="1">
        Candy canes donut chupa chups candy canes lemon drops oat
        cake wafer. Cotton candy candy canes marzipan carrot cake.
        Sesame snaps lemon drops candy marzipan donut brownie
        tootsie roll. Icing croissant bonbon biscuit gummi bears.
      </TabPane>
      <TabPane tabId="2">
        Pudding candy canes sugar plum cookie chocolate cake powder
        croissant. Carrot cake tiramisu danish candy cake muffin
        croissant tart dessert. Tiramisu caramels candy canes
        chocolate cake sweet roll liquorice icing cupcake.
      </TabPane>
      <TabPane tabId="3">
        Carrot cake dragée chocolate. Lemon drops ice cream wafer
        gummies dragée. Chocolate bar liquorice cheesecake cookie
        chupa chups marshmallow oat cake biscuit. Dessert toffee
        fruitcake ice cream powder tootsie roll cake.
      </TabPane>
    </TabContent>
    )
  }
}
export default PillBasic
`}
    </code>
  </pre>
)

export const pillActiveBorder = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap"

class PillActiveBorder extends React.Component {

  state = {
    active: "1"
  }

  toggle = tab => {
    if (this.state.active !== tab) {
      this.setState({ active: tab })
    }
  }

  render() {
    return(
      <Nav pills className="nav-active-bordered-pill">
      <NavItem>
        <NavLink
          className={classnames({
            active: this.state.active === "1"
          })}
          onClick={() => {
            this.toggle("1")
          }}
        >
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={classnames({
            active: this.state.active === "2"
          })}
          onClick={() => {
            this.toggle("2")
          }}
        >
          Service
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled>Disabled</NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={classnames({
            active: this.state.active === "3"
          })}
          onClick={() => {
            this.toggle("3")
          }}
        >
          Account
        </NavLink>
      </NavItem>
    </Nav>
    <TabContent activeTab={this.state.active}>
      <TabPane tabId="1">
        Candy canes donut chupa chups candy canes lemon drops oat
        cake wafer. Cotton candy candy canes marzipan carrot cake.
        Sesame snaps lemon drops candy marzipan donut brownie
        tootsie roll. Icing croissant bonbon biscuit gummi bears.
      </TabPane>
      <TabPane tabId="2">
        Pudding candy canes sugar plum cookie chocolate cake powder
        croissant. Carrot cake tiramisu danish candy cake muffin
        croissant tart dessert. Tiramisu caramels candy canes
        chocolate cake sweet roll liquorice icing cupcake.
      </TabPane>
      <TabPane tabId="3">
        Carrot cake dragée chocolate. Lemon drops ice cream wafer
        gummies dragée. Chocolate bar liquorice cheesecake cookie
        chupa chups marshmallow oat cake biscuit. Dessert toffee
        fruitcake ice cream powder tootsie roll cake.
      </TabPane>
    </TabContent>
    )
  }
}
export default PillActiveBorder
`}
    </code>
  </pre>
)

export const pillsFilled = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap"

class PillsFilled extends React.Component {

  state = {
    active: "1"
  }

  toggle = tab => {
    if (this.state.active !== tab) {
      this.setState({ active: tab })
    }
  }

  render() {
    return(
      <Nav pills className="nav-fill">
      <NavItem>
        <NavLink
          className={classnames({
            active: this.state.active === "1"
          })}
          onClick={() => {
            this.toggle("1")
          }}
        >
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={classnames({
            active: this.state.active === "2"
          })}
          onClick={() => {
            this.toggle("2")
          }}
        >
          Service
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled>Disabled</NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={classnames({
            active: this.state.active === "3"
          })}
          onClick={() => {
            this.toggle("3")
          }}
        >
          Account
        </NavLink>
      </NavItem>
    </Nav>
    <TabContent activeTab={this.state.active}>
      <TabPane tabId="1">
        Candy canes donut chupa chups candy canes lemon drops oat
        cake wafer. Cotton candy candy canes marzipan carrot cake.
        Sesame snaps lemon drops candy marzipan donut brownie
        tootsie roll. Icing croissant bonbon biscuit gummi bears.
      </TabPane>
      <TabPane tabId="2">
        Pudding candy canes sugar plum cookie chocolate cake powder
        croissant. Carrot cake tiramisu danish candy cake muffin
        croissant tart dessert. Tiramisu caramels candy canes
        chocolate cake sweet roll liquorice icing cupcake.
      </TabPane>
      <TabPane tabId="3">
        Carrot cake dragée chocolate. Lemon drops ice cream wafer
        gummies dragée. Chocolate bar liquorice cheesecake cookie
        chupa chups marshmallow oat cake biscuit. Dessert toffee
        fruitcake ice cream powder tootsie roll cake.
      </TabPane>
    </TabContent>
    )
  }
}
export default PillsFilled
`}
    </code>
  </pre>
)

export const pillsJustified = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap"

class PillsJustified extends React.Component {

  state = {
    active: "1"
  }

  toggle = tab => {
    if (this.state.active !== tab) {
      this.setState({ active: tab })
    }
  }

  render() {
    return(
      <Nav pills className="nav-justified">
      <NavItem>
        <NavLink
          className={classnames({
            active: this.state.active === "1"
          })}
          onClick={() => {
            this.toggle("1")
          }}
        >
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={classnames({
            active: this.state.active === "2"
          })}
          onClick={() => {
            this.toggle("2")
          }}
        >
          Service
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled>Disabled</NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={classnames({
            active: this.state.active === "3"
          })}
          onClick={() => {
            this.toggle("3")
          }}
        >
          Account
        </NavLink>
      </NavItem>
    </Nav>
    <TabContent activeTab={this.state.active}>
      <TabPane tabId="1">
        Candy canes donut chupa chups candy canes lemon drops oat
        cake wafer. Cotton candy candy canes marzipan carrot cake.
        Sesame snaps lemon drops candy marzipan donut brownie
        tootsie roll. Icing croissant bonbon biscuit gummi bears.
      </TabPane>
      <TabPane tabId="2">
        Pudding candy canes sugar plum cookie chocolate cake powder
        croissant. Carrot cake tiramisu danish candy cake muffin
        croissant tart dessert. Tiramisu caramels candy canes
        chocolate cake sweet roll liquorice icing cupcake.
      </TabPane>
      <TabPane tabId="3">
        Carrot cake dragée chocolate. Lemon drops ice cream wafer
        gummies dragée. Chocolate bar liquorice cheesecake cookie
        chupa chups marshmallow oat cake biscuit. Dessert toffee
        fruitcake ice cream powder tootsie roll cake.
      </TabPane>
    </TabContent>
    )
  }
}
export default PillsJustified
`}
    </code>
  </pre>
)

export const pillsCentered = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap"

class PillsCentered extends React.Component {

  state = {
    active: "1"
  }

  toggle = tab => {
    if (this.state.active !== tab) {
      this.setState({ active: tab })
    }
  }

  render() {
    return(
      <Nav pills className="justify-content-center">
      <NavItem>
        <NavLink
          className={classnames({
            active: this.state.active === "1"
          })}
          onClick={() => {
            this.toggle("1")
          }}
        >
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={classnames({
            active: this.state.active === "2"
          })}
          onClick={() => {
            this.toggle("2")
          }}
        >
          Service
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled>Disabled</NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={classnames({
            active: this.state.active === "3"
          })}
          onClick={() => {
            this.toggle("3")
          }}
        >
          Account
        </NavLink>
      </NavItem>
    </Nav>
    <TabContent activeTab={this.state.active}>
      <TabPane tabId="1">
        Candy canes donut chupa chups candy canes lemon drops oat
        cake wafer. Cotton candy candy canes marzipan carrot cake.
        Sesame snaps lemon drops candy marzipan donut brownie
        tootsie roll. Icing croissant bonbon biscuit gummi bears.
      </TabPane>
      <TabPane tabId="2">
        Pudding candy canes sugar plum cookie chocolate cake powder
        croissant. Carrot cake tiramisu danish candy cake muffin
        croissant tart dessert. Tiramisu caramels candy canes
        chocolate cake sweet roll liquorice icing cupcake.
      </TabPane>
      <TabPane tabId="3">
        Carrot cake dragée chocolate. Lemon drops ice cream wafer
        gummies dragée. Chocolate bar liquorice cheesecake cookie
        chupa chups marshmallow oat cake biscuit. Dessert toffee
        fruitcake ice cream powder tootsie roll cake.
      </TabPane>
    </TabContent>
    )
  }
}
export default PillsCentered
`}
    </code>
  </pre>
)

export const pillsEnd = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap"

class PillsEnd extends React.Component {

  state = {
    active: "1"
  }

  toggle = tab => {
    if (this.state.active !== tab) {
      this.setState({ active: tab })
    }
  }

  render() {
    return(
      <Nav pills className="justify-content-end">
      <NavItem>
        <NavLink
          className={classnames({
            active: this.state.active === "1"
          })}
          onClick={() => {
            this.toggle("1")
          }}
        >
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={classnames({
            active: this.state.active === "2"
          })}
          onClick={() => {
            this.toggle("2")
          }}
        >
          Service
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled>Disabled</NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={classnames({
            active: this.state.active === "3"
          })}
          onClick={() => {
            this.toggle("3")
          }}
        >
          Account
        </NavLink>
      </NavItem>
    </Nav>
    <TabContent activeTab={this.state.active}>
      <TabPane tabId="1">
        Candy canes donut chupa chups candy canes lemon drops oat
        cake wafer. Cotton candy candy canes marzipan carrot cake.
        Sesame snaps lemon drops candy marzipan donut brownie
        tootsie roll. Icing croissant bonbon biscuit gummi bears.
      </TabPane>
      <TabPane tabId="2">
        Pudding candy canes sugar plum cookie chocolate cake powder
        croissant. Carrot cake tiramisu danish candy cake muffin
        croissant tart dessert. Tiramisu caramels candy canes
        chocolate cake sweet roll liquorice icing cupcake.
      </TabPane>
      <TabPane tabId="3">
        Carrot cake dragée chocolate. Lemon drops ice cream wafer
        gummies dragée. Chocolate bar liquorice cheesecake cookie
        chupa chups marshmallow oat cake biscuit. Dessert toffee
        fruitcake ice cream powder tootsie roll cake.
      </TabPane>
    </TabContent>
    )
  }
}
export default PillsEnd
`}
    </code>
  </pre>
)

export const pillsVertical = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {TabContent, TabPane, Nav, NavItem, NavLink, Row, Col} from "reactstrap"

class PillsVertical extends React.Component {

  state = {
    active: "1"
  }

  toggle = tab => {
    if (this.state.active !== tab) {
      this.setState({ active: tab })
    }
  }

  render() {
    return(
      <Row>
      <Col md="2" sm="12">
        <Nav pills vertical>
          <NavItem>
            <NavLink
              className={classnames({
                active: this.state.active === "1"
              })}
              onClick={() => {
                this.toggle("1")
              }}
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: this.state.active === "2"
              })}
              onClick={() => {
                this.toggle("2")
              }}
            >
              Service
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled>Disabled</NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: this.state.active === "3"
              })}
              onClick={() => {
                this.toggle("3")
              }}
            >
              Account
            </NavLink>
          </NavItem>
        </Nav>
      </Col>
      <Col md="10" sm="12">
        <TabContent activeTab={this.state.active}>
          <TabPane tabId="1">
            Candy canes donut chupa chups candy canes lemon drops
            oat cake wafer. Cotton candy candy canes marzipan carrot
            cake. Sesame snaps lemon drops candy marzipan donut
            brownie tootsie roll. Icing croissant bonbon biscuit
            gummi bears.
          </TabPane>
          <TabPane tabId="2">
            Pudding candy canes sugar plum cookie chocolate cake
            powder croissant. Carrot cake tiramisu danish candy cake
            muffin croissant tart dessert. Tiramisu caramels candy
            canes chocolate cake sweet roll liquorice icing cupcake.
          </TabPane>
          <TabPane tabId="3">
            Carrot cake dragée chocolate. Lemon drops ice cream
            wafer gummies dragée. Chocolate bar liquorice cheesecake
            cookie chupa chups marshmallow oat cake biscuit. Dessert
            toffee fruitcake ice cream powder tootsie roll cake.
          </TabPane>
        </TabContent>
      </Col>
    </Row>
    )
  }
}
export default PillsVertical
`}
    </code>
  </pre>
)

export const pillThemes = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap"

class PillsThemes extends React.Component {

  render() {
    return(
      <h6>Success</h6>
      <Nav pills className="nav-pill-success my-2">
        <NavItem>
          <NavLink active>Active</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled>Disabled</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Link</NavLink>
        </NavItem>
      </Nav>

      <h6>Danger</h6>

      <Nav pills className="nav-pill-danger my-2">
        <NavItem>
          <NavLink active>Active</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled>Disabled</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Link</NavLink>
        </NavItem>
      </Nav>

      <h6>Info</h6>

      <Nav pills className="nav-pill-info my-2">
        <NavItem>
          <NavLink active>Active</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled>Disabled</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Link</NavLink>
        </NavItem>
      </Nav>

      <h6>Warning</h6>

      <Nav pills className="nav-pill-warning my-2">
        <NavItem>
          <NavLink active>Active</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled>Disabled</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Link</NavLink>
        </NavItem>
      </Nav>
    )
  }
}
export default PillsThemes
`}
    </code>
  </pre>
)
