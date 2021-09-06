import React from "react"
import { Row, Col } from "reactstrap"
import BreadCrumbs from "../../@vuexy/breadCrumbs/BreadCrumb"
import SpinnerBorder from "./SpinnerBorder"
import SpinnerColors from "./SpinnerColors"
import SpinnerGrow from "./SpinnerGrowing"
import SpinnerGrowColors from "./SpinnerGrowingColored"
import SpinnerFlex from "./SpinnerFlex"
import SpinnerFloat from "./SpinnerFloat"
import SpinnerTextAlignment from "./SpinnerTextAlignment"
import SpinnerSizes from "./SpinnerSizes"
import SpinnerButtons from "./SpinnerButtons"
import Prism from "prismjs"
import "prismjs/components/prism-jsx.min"
class Spinners extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
  }
  render() {
    return (
      <React.Fragment>
        <BreadCrumbs
          breadCrumbTitle="Spinners"
          breadCrumbParent="Components"
          breadCrumbActive="Spinners"
        />
        <Row>
          <Col md="6" sm="12">
            <SpinnerBorder />
          </Col>
          <Col md="6" sm="12">
            <SpinnerColors />
          </Col>
          <Col md="6" sm="12">
            <SpinnerGrow />
          </Col>
          <Col md="6" sm="12">
            <SpinnerGrowColors />
          </Col>
          <Col md="6" sm="12">
            <SpinnerFlex />
          </Col>
          <Col md="6" sm="12">
            <SpinnerFloat />
          </Col>
          <Col md="6" sm="12">
            <SpinnerTextAlignment />
          </Col>
          <Col md="6" sm="12">
            <SpinnerSizes />
          </Col>
          <Col md="6" sm="12">
            <SpinnerButtons />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default Spinners
