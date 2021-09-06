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
import { tabsJustified } from "./TabSourceCode"

class TabsJustified extends React.Component {
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
            <CardTitle>Justified</CardTitle>
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
              For equal-width elements, use
              <code>.nav-justified</code> All horizontal space will be occupied
              by nav links, but unlike the <code>.nav-fill</code> above, every
              nav item will be the same width.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
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
                <TabContent className="py-50" activeTab={this.state.active}>
                  <TabPane tabId="1">
                    Macaroon danish gummies icing sesame snaps macaroon jelly-o
                    carrot cake pastry. Apple pie macaroon jelly-o dragée tart
                    sweet lollipop candy. Lemon drops ice cream cake gingerbread
                    I love liquorice lollipop carrot cake. Dragée cake muffin. I
                    love I love apple pie biscuit carrot cake croissant macaroon
                    candy. Cheesecake I love cupcake I love candy canes I love.
                    Cupcake macaroon bonbon biscuit jelly sesame snaps tart I
                    love gingerbread.
                  </TabPane>
                  <TabPane tabId="2">
                    Pie muffin cake macaroon marzipan pudding pastry. Marzipan
                    muffin oat cake sweet roll tootsie roll I love marshmallow
                    pie pastry. Jelly beans I love pie sugar plum sugar plum
                    soufflé liquorice bonbon sesame snaps. Bear claw sugar plum
                    apple pie sesame snaps wafer chocolate bar chocolate cookie
                    gingerbread. Gummies chocolate cake jujubes tart halvah. I
                    love sesame snaps apple pie. Cupcake cookie bear claw pie
                    cotton candy gummies.
                  </TabPane>
                  <TabPane tabId="3">
                    Biscuit icing jelly halvah apple pie croissant cookie.
                    Toffee chupa chups brownie dessert biscuit wafer lemon
                    drops. Bear claw jujubes I love I love. Marshmallow apple
                    pie sugar plum chocolate cake.Dragée cake muffin. I love I
                    love apple pie biscuit carrot cake croissant macaroon candy.
                    Cheesecake I love cupcake I love candy canes I love. Cupcake
                    macaroon bonbon biscuit jelly sesame snaps tart I love
                    gingerbread.Cupcake cookie bear claw pie cotton candy
                    gummies.
                  </TabPane>
                </TabContent>
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {tabsJustified}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default TabsJustified
