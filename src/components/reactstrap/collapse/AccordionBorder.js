import React from "react"
import {
  Collapse,
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
import { Eye, Code, ChevronDown } from "react-feather"
import { accordionBorder } from "./CollapseSourceCode"

const collapseItems = [
  {
    id: 1,
    title: "Accordion Item 1",
    content:
      "Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping powder candy. Sugar plum brownie brownie cotton candy."
  },
  {
    id: 2,
    title: "Accordion Item 2",
    content:
      "Jelly-o brownie marshmallow soufflé I love jelly beans oat cake. I love gummies chocolate bar marshmallow sugar plum."
  },
  {
    id: 3,
    title: "Accordion Item 3",
    content:
      "Pudding lollipop dessert chocolate gingerbread. Cake cupcake bonbon cupcake marshmallow. Gummi bears carrot cake bonbon cake."
  },
  {
    id: 4,
    title: "Accordion Item 4",
    content:
      "Brownie sweet carrot cake dragée caramels fruitcake. Gummi bears tootsie roll croissant gingerbread dragée tootsie roll."
  }
]

class AccordionBorder extends React.Component {
  state = {
    activeTab: "1",
    collapseID: "",
    status: "Closed"
  }

  toggleTab = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab })
    }
  }

  toggleCollapse = collapseID => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }))
  }

  onEntered = id => {
    if (id === this.state.collapseID) this.setState({ status: "Opened" })
  }
  onEntering = id => {
    if (id === this.state.collapseID) this.setState({ status: "Opening..." })
  }

  onExited = id => {
    if (id === this.state.collapseID) this.setState({ status: "Closed" })
  }

  onExiting = id => {
    if (id === this.state.collapseID) this.setState({ status: "Closing..." })
  }

  render() {
    const accordionBorderItems = collapseItems.map(collapseItem => {
      return (
        <Card
          key={collapseItem.id}
          onClick={() => this.toggleCollapse(collapseItem.id)}
          className={classnames("collapse-border-item", {
            "collapse-collapsed":
              this.state.status === "Closed" &&
              this.state.collapseID === collapseItem.id,
            "collapse-shown":
              this.state.status === "Opened" &&
              this.state.collapseID === collapseItem.id,
            closing:
              this.state.status === "Closing..." &&
              this.state.collapseID === collapseItem.id,
            opening:
              this.state.status === "Opening..." &&
              this.state.collapseID === collapseItem.id
          })}
        >
          <CardHeader>
            <CardTitle className="lead collapse-title collapsed">
              {collapseItem.title}
            </CardTitle>
            <ChevronDown size={15} className="collapse-icon" />
          </CardHeader>
          <Collapse
            isOpen={collapseItem.id === this.state.collapseID}
            onEntering={() => this.onEntering(collapseItem.id)}
            onEntered={() => this.onEntered(collapseItem.id)}
            onExiting={() => this.onExiting(collapseItem.id)}
            onExited={() => this.onExited(collapseItem.id)}
          >
            <CardBody>{collapseItem.content}</CardBody>
          </Collapse>
        </Card>
      )
    })

    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            <CardTitle>Accordion Border</CardTitle>
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
              Use class <code>.collapse-border-item</code> with your collapsible
              card.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <div className="vx-collapse">{accordionBorderItems}</div>
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {accordionBorder}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default AccordionBorder
