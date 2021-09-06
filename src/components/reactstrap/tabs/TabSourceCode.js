import React from "react"

export const tabsBasic = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap"

class TabsBasic extends React.Component {

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
      <Nav tabs>
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
export default TabsBasic
`}
    </code>
  </pre>
)

export const tabsVerticalLeft = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap"

class TabsVerticalLeft extends React.Component {

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
    <div className="nav-vertical">
      <Nav tabs className="nav-left">
        <NavItem>
          <NavLink
            className={classnames({
              active: this.state.active === "1"
            })}
            onClick={() => {
              this.toggle("1")
            }}
          >
            Tab 1
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
            Tab 2
          </NavLink>
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
            Tab 3
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={this.state.active}>
        <TabPane tabId="1">
          Oat cake marzipan cake lollipop caramels wafer pie jelly
          beans. Icing halvah chocolate cake carrot cake. Jelly beans
          carrot cake marshmallow gingerbread chocolate cake. Gummies
          cupcake croissant.
        </TabPane>
        <TabPane tabId="2">
          Sugar plum tootsie roll biscuit caramels. Liquorice brownie
          pastry cotton candy oat cake fruitcake jelly chupa chups.
          Pudding caramels pastry powder cake soufflé wafer caramels.
          Jelly-o pie cupcake.
        </TabPane>
        <TabPane tabId="3">
          Biscuit ice cream halvah candy canes bear claw ice cream
          cake chocolate bar donut. Toffee cotton candy liquorice. Oat
          cake lemon drops gingerbread dessert caramels. Sweet dessert
          jujubes powder sweet sesame snaps.
        </TabPane>
    </TabContent>
  </div>
    )
  }
}
export default TabsVerticalLeft
`}
    </code>
  </pre>
)

export const tabsVerticalRight = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap"

class TabsVerticalRight extends React.Component {

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
    <div className="nav-vertical">
      <Nav tabs className="nav-right">
        <NavItem>
          <NavLink
            className={classnames({
              active: this.state.active === "1"
            })}
            onClick={() => {
              this.toggle("1")
            }}
          >
            Tab 1
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
            Tab 2
          </NavLink>
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
            Tab 3
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={this.state.active}>
        <TabPane tabId="1">
          Oat cake marzipan cake lollipop caramels wafer pie jelly
          beans. Icing halvah chocolate cake carrot cake. Jelly beans
          carrot cake marshmallow gingerbread chocolate cake. Gummies
          cupcake croissant.
        </TabPane>
        <TabPane tabId="2">
          Sugar plum tootsie roll biscuit caramels. Liquorice brownie
          pastry cotton candy oat cake fruitcake jelly chupa chups.
          Pudding caramels pastry powder cake soufflé wafer caramels.
          Jelly-o pie cupcake.
        </TabPane>
        <TabPane tabId="3">
          Biscuit ice cream halvah candy canes bear claw ice cream
          cake chocolate bar donut. Toffee cotton candy liquorice. Oat
          cake lemon drops gingerbread dessert caramels. Sweet dessert
          jujubes powder sweet sesame snaps.
        </TabPane>
    </TabContent>
  </div>
    )
  }
}
export default TabsVerticalRight
`}
    </code>
  </pre>
)

export const tabsFilled = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap"

class TabsFilled extends React.Component {

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
      <Nav tabs className="nav-fill">
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
export default TabsFilled
`}
    </code>
  </pre>
)

export const tabsJustified = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap"

class TabsJustified extends React.Component {

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
      <Nav tabs className="nav-justified">
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
export default TabsJustified
`}
    </code>
  </pre>
)

export const tabsCentered = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap"

class TabsCentered extends React.Component {

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
      <Nav tabs className="justify-content-center">
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
export default TabsCentered
`}
    </code>
  </pre>
)

export const tabsEnd = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap"

class TabsEnd extends React.Component {

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
      <Nav tabs className="justify-content-end">
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
export default TabsEnd
`}
    </code>
  </pre>
)
