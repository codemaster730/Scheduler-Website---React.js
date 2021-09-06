import React from "react"
import { Row, Col } from "reactstrap"
import BreadCrumbs from "../../@vuexy/breadCrumbs/BreadCrumb"
import NavBasic from "./NavBasic"
import NavBorder from "./NavBorder"
import NavCenter from "./NavCenter"
import NavEnd from "./NavEnd"
import NavVertical from "./NavVertical"
import NavVerticalBorder from "./NavVerticalBorder"
import NavSquareBorder from "./NavSquareBorder"
import NavDivider from "./NavDivider"
import Prism from "prismjs"
import "prismjs/components/prism-jsx.min"
class NavComponent extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
  }
  render() {
    return (
      <React.Fragment>
        <BreadCrumbs
          breadCrumbTitle="Navs"
          breadCrumbParent="Components"
          breadCrumbActive="Navs"
        />
        <Row>
          <Col md="6" sm="12">
            <NavBasic />
          </Col>
          <Col md="6" sm="12">
            <NavBorder />
          </Col>
          <Col md="6" sm="12">
            <NavCenter />
          </Col>
          <Col md="6" sm="12">
            <NavEnd />
          </Col>
          <Col md="6" sm="12">
            <NavVertical />
          </Col>
          <Col md="6" sm="12">
            <NavVerticalBorder />
          </Col>
          <Col md="6" sm="12">
            <NavSquareBorder />
          </Col>
          <Col md="6" sm="12">
            <NavDivider />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default NavComponent
