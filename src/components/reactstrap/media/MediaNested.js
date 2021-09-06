import React from "react"
import {
  Media,
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
import { mediaNested } from "./MediaObjectSourceCode"
import mediaImg1 from "../../../assets/img/portrait/small/avatar-s-1.jpg"
import mediaImg2 from "../../../assets/img/portrait/small/avatar-s-2.jpg"

class MediaNested extends React.Component {
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
            <CardTitle>Nested Media Objects</CardTitle>
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
              Add an extra media inside of your <code>MediaBody</code> to create
              a nested media.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <div className="media-list">
                  <Media>
                    <Media left href="#">
                      <Media
                        object
                        src={mediaImg1}
                        alt="Generic placeholder image"
                        height="64"
                        width="64"
                      />
                    </Media>
                    <Media body>
                      <Media heading>Media heading</Media>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin commodo. Cras purus
                      odio, vestibulum in vulputate at, tempus viverra turpis.
                      Fusce condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                      <Media>
                        <Media left href="#">
                          <Media
                            object
                            src={mediaImg2}
                            alt="Generic placeholder image"
                            height="64"
                            width="64"
                          />
                        </Media>
                        <Media body>
                          <Media heading>Nested media heading</Media>
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin commodo. Cras
                          purus odio, vestibulum in vulputate at, tempus viverra
                          turpis. Fusce condimentum nunc ac nisi vulputate
                          fringilla. Donec lacinia congue felis in faucibus.
                        </Media>
                      </Media>
                    </Media>
                  </Media>
                </div>
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {mediaNested}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default MediaNested
