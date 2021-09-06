import React from "react"
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap"
import classnames from "classnames"
import { Eye, Code } from "react-feather"
import { buttonBlock } from "./ButtonsSourceCode"

class ButtonBlock extends React.Component {
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
            <CardTitle>Block Level Buttons</CardTitle>
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
              Create block level buttons—those that span the full width of a
              parent—by adding <code>.btn-block</code>.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col lg={6} md={12}>
                    <Button.Ripple
                      block
                      className="btn-block"
                      color="primary"
                      size="lg"
                    >
                      Block Level Button
                    </Button.Ripple>
                  </Col>
                  <Col lg={6} md={12}>
                    <Button.Ripple
                      block
                      outline
                      className="btn-block"
                      color="primary"
                      size="lg"
                    >
                      Block Level Button
                    </Button.Ripple>
                  </Col>
                </Row>
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {buttonBlock}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default ButtonBlock
