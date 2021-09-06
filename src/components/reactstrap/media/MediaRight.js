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
import { mediaRight } from "./MediaObjectSourceCode"
import mediaImg1 from "../../../assets/img/portrait/small/avatar-s-1.jpg"
import mediaImg2 from "../../../assets/img/portrait/small/avatar-s-6.jpg"
import mediaImg3 from "../../../assets/img/portrait/small/avatar-s-7.jpg"

class MediaRight extends React.Component {
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
            <CardTitle>Right Aligned Media With Round Images</CardTitle>
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
              Use <code>right</code> attribute with media tag to align you media
              to right.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <div className="media-list">
                  <Media>
                    <Media body>
                      <Media heading>Oat cake</Media>
                      Oat cake topping oat cake jelly soufflé donut jelly-o
                      tootsie roll. Candy sweet cake. Tiramisu cookie toffee
                      donut. Chocolate pie croissant gummi bears muffin dessert
                      chocolate.
                    </Media>
                    <Media right href="#">
                      <Media
                        className="rounded-circle"
                        object
                        src={mediaImg1}
                        height="64"
                        width="64"
                        alt="Generic placeholder image"
                      />
                    </Media>
                  </Media>

                  <Media>
                    <Media body>
                      <Media heading>Jelly chocolate cake</Media>
                      Jelly chocolate cake lemon drops halvah dragée caramels
                      jelly-o biscuit. Fruitcake jelly beans marzipan sesame
                      snaps.Jelly beans cake chocolate cake gummi bears lollipop
                      Fruitcake.
                    </Media>
                    <Media right href="#">
                      <Media
                        className="rounded-circle"
                        object
                        src={mediaImg2}
                        height="64"
                        width="64"
                        alt="Generic placeholder image"
                      />
                    </Media>
                  </Media>

                  <Media>
                    <Media body>
                      <Media heading>Pudding marshmallow</Media>Pudding
                      marshmallow cheesecake. Chocolate cake apple pie jelly-o
                      bear claw ice cream sugar plum biscuit. Lemon drops
                      brownie biscuit jelly-o biscuit gummies.
                    </Media>
                    <Media right href="#">
                      <Media
                        className="rounded-circle"
                        object
                        src={mediaImg3}
                        height="64"
                        width="64"
                        alt="Generic placeholder image"
                      />
                    </Media>
                  </Media>
                </div>
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {mediaRight}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default MediaRight
