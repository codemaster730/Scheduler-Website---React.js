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
import { tabsVerticalRight } from "./TabSourceCode"

class TabsVerticalRight extends React.Component {
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
            <CardTitle>Vertical Right Tabs</CardTitle>
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
              Wrap your <code>Nav</code> tag and <code>TabContent</code> with
              class <code>.nav-vertical</code> and use class{" "}
              <code>.nav-right</code> with <code>Nav</code> tag.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
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
                  <TabContent activeTab={this.state.active} className="mt-1">
                    <TabPane tabId="1">
                      Oat cake marzipan cake lollipop caramels wafer pie jelly
                      beans. Icing halvah chocolate cake carrot cake. Jelly
                      beans carrot cake marshmallow gingerbread chocolate cake.
                      Gummies cupcake croissant.
                    </TabPane>
                    <TabPane tabId="2">
                      Sugar plum tootsie roll biscuit caramels. Liquorice
                      brownie pastry cotton candy oat cake fruitcake jelly chupa
                      chups. Pudding caramels pastry powder cake soufflé wafer
                      caramels. Jelly-o pie cupcake.
                    </TabPane>
                    <TabPane tabId="3">
                      Biscuit ice cream halvah candy canes bear claw ice cream
                      cake chocolate bar donut. Toffee cotton candy liquorice.
                      Oat cake lemon drops gingerbread dessert caramels. Sweet
                      dessert jujubes powder sweet sesame snaps.
                    </TabPane>
                  </TabContent>
                </div>
              </TabPane>
               <TabPane className="component-code" tabId="2">{tabsVerticalRight}</TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default TabsVerticalRight
