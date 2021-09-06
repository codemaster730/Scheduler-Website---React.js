import React from "react"
import { Row, Col } from "reactstrap"
import BreadCrumbs from "../../@vuexy/breadCrumbs/BreadCrumb"
import CarouselBasic from "./CarouselBasic"
import CarouselCaptions from "./CarouselCaptions"
import CarouselUncontrolled from "./CarouselUncontrolled"
import CarouselInterval from "./CarouselInterval"
import CarouselKeyboard from "./CarouselKeyboard"
import CarouselPause from "./CarouselPause"
import Prism from "prismjs"
import "prismjs/components/prism-jsx.min"
class Carousel extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
  }
  render() {
    return (
      <React.Fragment>
        <BreadCrumbs
          breadCrumbTitle="Carousel"
          breadCrumbParent="Components"
          breadCrumbActive="Carousel"
        />
        <Row>
          <Col md="6" sm="12">
            <CarouselBasic />
          </Col>
          <Col md="6" sm="12">
            <CarouselCaptions />
          </Col>
          <Col md="6" sm="12">
            <CarouselUncontrolled />
          </Col>
          <Col md="6" sm="12">
            <CarouselInterval />
          </Col>
          <Col md="6" sm="12">
            <CarouselKeyboard />
          </Col>
          <Col md="6" sm="12">
            <CarouselPause />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default Carousel
