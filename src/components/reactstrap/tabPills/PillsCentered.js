import React from "react"
import {
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
import { pillsCentered } from "./TabPillsSourceCode"

class PillsCentered extends React.Component {
  state = {
    activeTab: "1",
    active: "1"
  }

  toggleTab = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab })
    }
  }

  toggle = tab => {
    if (this.state.active !== tab) {
      this.setState({ active: tab })
    }
  }
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            <CardTitle>Centered</CardTitle>
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
              Use class <code>.justify-content-center</code> to align your menu
              to center
            </p>
            <TabContent className="py-50" activeTab={this.state.activeTab}>
              <TabPane tabId="1">
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
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {pillsCentered}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default PillsCentered
