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
import { mediaLeft } from "./MediaObjectSourceCode"
import mediaImg1 from "../../../assets/img/portrait/small/avatar-s-3.jpg"
import mediaImg2 from "../../../assets/img/portrait/small/avatar-s-4.jpg"
import mediaImg3 from "../../../assets/img/portrait/small/avatar-s-5.jpg"

class MediaLeft extends React.Component {
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
            <CardTitle>Left Aligned Media Objects</CardTitle>
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
              Use <code>left</code> attribute with media tag to align you media
              to left.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <div className="media-list">
                  <Media>
                    <Media left href="#">
                      <Media
                        object
                        src={mediaImg1}
                        height="64"
                        width="64"
                        alt="Generic placeholder image"
                      />
                    </Media>
                    <Media body>
                      <Media heading>Cookie candy</Media>
                      Cookie candy dragée marzipan gingerbread pie pudding.
                      Brownie fruitcake wafer bonbon gummi bears apple pie.
                      Brownie lemon drops chocolate cake donut croissant cotton
                      candy.
                    </Media>
                  </Media>

                  <Media>
                    <Media left href="#">
                      <Media
                        object
                        src={mediaImg2}
                        height="64"
                        width="64"
                        alt="Generic placeholder image"
                      />
                    </Media>
                    <Media body>
                      <Media heading>Tootsie roll dessert</Media>
                      Tootsie roll dessert tart candy canes ice cream
                      gingerbread cookie. Jelly jelly-o bear claw bear claw
                      halvah. Biscuit icing pastry tootsie roll gingerbread
                      croissant chupa chups.
                    </Media>
                  </Media>

                  <Media>
                    <Media left href="#">
                      <Media
                        object
                        src={mediaImg3}
                        height="64"
                        width="64"
                        alt="Generic placeholder image"
                      />
                    </Media>
                    <Media body>
                      <Media heading>Jelly chocolate cake</Media>
                      Jelly chocolate cake lemon drops halvah dragée caramels
                      jelly-o biscuit. Fruitcake jelly beans marzipan sesame
                      snaps.Jelly beans cake chocolate cake gummi bears
                      lollipop.
                    </Media>
                  </Media>
                </div>
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {mediaLeft}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default MediaLeft
