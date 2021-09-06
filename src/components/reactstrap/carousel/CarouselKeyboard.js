import React from "react"
import {
  UncontrolledCarousel,
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
import { carouselKeyboard } from "./CarouselSourceCode"
import sliderImage1 from "../../../assets/img/slider/04.jpg"
import sliderImage2 from "../../../assets/img/slider/01.jpg"
import sliderImage3 from "../../../assets/img/slider/05.jpg"

const images = [
  {
    src: sliderImage1,
    id: 1,
    altText: "Slide 1",
    caption: "Slide 1",
    header: "Slide 1 Header"
  },
  {
    src: sliderImage2,
    id: 2,
    altText: "Slide 2",
    caption: "Slide 2",
    header: "Slide 2 Header"
  },
  {
    src: sliderImage3,
    id: 3,
    altText: "Slide 3",
    caption: "Slide 3",
    header: "Slide 3 Header"
  }
]

class CarouselKeyboard extends React.Component {
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
            <CardTitle>Keyboard Example</CardTitle>
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
              Use <code>Keyboard</code> attribute to control carousel with
              keyboard default is <code>true</code>.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <UncontrolledCarousel items={images} keyboard={false} />
              </TabPane>
               <TabPane className="component-code" tabId="2">{carouselKeyboard}</TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default CarouselKeyboard
