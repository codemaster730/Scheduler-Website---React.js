import React from "react"
import BreadCrumbs from "../../@vuexy/breadCrumbs/BreadCrumb"
import { Row, Col } from "reactstrap"
import DropdownControlled from "./DropdownControlled"
import DropdownUncontrolled from "./DropdownUncontrolled"
import DropdownBasic from "./DropdownBasic"
import DropdownSplit from "./DropdownSplit"
import DropdownOutline from "./DropdownOutline"
import DropdownFlat from "./DropdownFlat"
import DropdownGradient from "./DropdownGradient"
import DropdownSizes from "./DropdownSizes"
import DropdownDirections from "./DropdownDirections"
import DropdownVariations from "./DropdownVariations"
import Prism from "prismjs"
import "prismjs/components/prism-jsx.min"
class Dropdowns extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
  }
  render() {
    return (
      <React.Fragment>
        <BreadCrumbs
          breadCrumbTitle="Dropdowns"
          breadCrumbParent="Components"
          breadCrumbActive="Dropdowns"
        />
        <Row>
          <Col md="6" sm="12">
            <DropdownControlled />
          </Col>
          <Col md="6" sm="12">
            <DropdownUncontrolled />
          </Col>
          <Col sm="12">
            <DropdownBasic />
          </Col>
          <Col sm="12">
            <DropdownSplit />
          </Col>
          <Col sm="12">
            <DropdownOutline />
          </Col>
          <Col sm="12">
            <DropdownFlat />
          </Col>
          <Col sm="12">
            <DropdownGradient />
          </Col>
          <Col sm="12">
            <DropdownSizes />
          </Col>
          <Col sm="12">
            <DropdownDirections />
          </Col>
          <Col sm="12">
            <DropdownVariations />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default Dropdowns
