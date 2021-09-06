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
import { mediaVertical } from "./MediaObjectSourceCode"
import mediaImg1 from "../../../assets/img/portrait/small/avatar-s-9.jpg"
import mediaImg2 from "../../../assets/img/portrait/small/avatar-s-2.jpg"
import mediaImg3 from "../../../assets/img/portrait/small/avatar-s-5.jpg"

class MediaVertical extends React.Component {
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
            <CardTitle>Media alignment</CardTitle>
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
              Use <code>.align-self-[center/end]</code> classes to vertically
              align your media
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <div className="media-list media-bordered">
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
                      <p>
                        Chocolate bar apple pie lollipop pastry candy canes.
                        Candy soufflé brownie toffee tootsie roll. Brownie lemon
                        drops chocolate cake donut croissant cotton candy ice
                        cream. Chocolate pudding jelly beans powder carrot cake
                        pastry. Sweet candy dragée cake brownie cheesecake jelly
                        beans tart lemon drops. Liquorice cake fruitcake dragée
                        sesame snaps candy canes biscuit pastry.
                      </p>
                      <p>
                        Cookie caramels brownie carrot cake macaroon brownie
                        pastry. Donut powder croissant tootsie roll cake
                        cupcake. Cake tart icing jelly-o ice cream tootsie roll
                        bear claw toffee brownie. Sugar plum danish muffin gummi
                        bears. Bonbon chocolate bar candy canes sugar plum pie
                        gingerbread wafer chupa chups gummi bears. Carrot cake
                        oat cake jujubes cookie. Marzipan topping jelly brownie
                        bear claw. Bonbon gummies fruitcake liquorice tart
                        sesame snaps.
                      </p>
                    </Media>
                  </Media>

                  <Media>
                    <Media left href="#" className="align-self-center">
                      <Media
                        object
                        src={mediaImg2}
                        height="64"
                        width="64"
                        alt="Generic placeholder image"
                        middle
                      />
                    </Media>
                    <Media body>
                      <Media heading>Tootsie roll dessert</Media>
                      <p>
                        Tootsie roll dessert tart candy canes ice cream
                        gingerbread cookie. Jelly jelly-o bear claw bear claw
                        halvah. Biscuit icing pastry tootsie roll gingerbread
                        croissant chupa chups.
                      </p>
                      <p>
                        Dragée topping chocolate dragée icing gingerbread. Ice
                        cream jujubes pie sweet roll sweet roll marshmallow
                        powder. Cotton candy dessert apple pie chocolate cake
                        dessert lemon drops topping gingerbread biscuit. Sugar
                        plum tootsie roll sweet gummi bears soufflé cake gummies
                        lollipop jelly beans. Gummies sugar plum apple pie apple
                        pie cake bear claw. Jelly beans gingerbread biscuit
                        lollipop.
                      </p>
                    </Media>
                  </Media>

                  <Media>
                    <Media left href="#" className="align-self-end">
                      <Media
                        object
                        src={mediaImg3}
                        height="64"
                        width="64"
                        alt="Generic placeholder image"
                        bottom
                      />
                    </Media>
                    <Media body>
                      <Media heading>Jelly chocolate cake</Media>
                      <p>
                        Jelly chocolate cake lemon drops halvah dragée caramels
                        jelly-o biscuit. Fruitcake jelly beans marzipan sesame
                        snaps.Jelly beans cake chocolate cake gummi bears
                        lollipop.
                      </p>
                      <p>
                        Sweet sesame snaps dragée chocolate tiramisu cotton
                        candy sweet roll bonbon dessert. Chocolate cake tiramisu
                        dragée. Carrot cake pudding marshmallow fruitcake carrot
                        cake. Cotton candy pastry chocolate bar. Apple pie
                        sesame snaps macaroon muffin cookie toffee bonbon
                        gummies candy canes. Soufflé chocolate bar soufflé tart
                        fruitcake muffin. Macaroon sweet roll apple pie jelly
                        beans powder pudding.
                      </p>
                    </Media>
                  </Media>
                </div>
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {mediaVertical}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default MediaVertical
