import React from "react"
import { Row, Col } from "reactstrap"
import BreadCrumbs from "../../@vuexy/breadCrumbs/BreadCrumb"
import PopoverControlled from "./PopoverControlled"
import PopoverUncontrolled from "./PopoverUncontrolled"
import PopoverPositions from "./PopoverPositions"
import PopoverTriggers from "./PopoverTriggers"
import Prism from "prismjs"
import "prismjs/components/prism-jsx.min"
class Popover extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
  }
  render() {
    return (
      <React.Fragment>
        <BreadCrumbs
          breadCrumbTitle="Popovers"
          breadCrumbParent="Components"
          breadCrumbActive="Popovers"
        />
        <Row>
          <Col md="6" sm="12">
            <PopoverControlled />
          </Col>
          <Col md="6" sm="12">
            <PopoverUncontrolled />
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <PopoverPositions />
          </Col>
          <Col sm="12">
            <PopoverTriggers />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default Popover
