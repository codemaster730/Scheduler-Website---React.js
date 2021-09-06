import React from "react"
import {
  Alert,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  FormGroup,
  Label,
  Input
} from "reactstrap"
import classnames from "classnames"
import { Eye, Code, AlertCircle } from "react-feather"
import { alertExample } from "./AlertSourceCode"

class AlertExample extends React.Component {
  state = {
    activeTab: "1",
    inputTerm: "",
    visible: true
  }

  toggleTab = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab })
    }
  }

  handleInput = e => {
    this.setState({ inputTerm: e.target.value })

    if (e.target.value.length > 0 && isNaN(e.target.value)) {
      this.setState({ visible: true })
    } else {
      this.setState({ visible: false })
    }
  }

  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            <CardTitle>Example</CardTitle>
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
              An example would be to have an input and when a condition is met,
              show the alert.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <FormGroup>
                  <Label htmlFor="numbers">Enter numbers only</Label>
                  <Input
                    className="w-25 h-25 pl-1"
                    placeholder="0123456789"
                    value={this.state.inputTerm}
                    onChange={this.handleInput}
                  />
                </FormGroup>
                <Alert color="danger" isOpen={this.state.visible}>
                  <AlertCircle size={15} />{" "}
                  <span>
                    the value is <strong>invalid</strong> you can only enter
                    numbers
                  </span>
                </Alert>
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {alertExample}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default AlertExample
