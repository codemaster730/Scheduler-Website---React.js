import React from "react"
import { Row, Col } from "reactstrap"
import BreadCrumbs from "../../@vuexy/breadCrumbs/BreadCrumb"
import TooltipControlled from "./TooltipControlled"
import TooltipUncontrolled from "./TooltipUncontrolled"
import TooltipPositions from "./TooltipPositions"
import Prism from "prismjs"
import "prismjs/components/prism-jsx.min"
class Tooltips extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
  }
  render() {
    return (
      <React.Fragment>
        <BreadCrumbs
          breadCrumbTitle="Tooltips"
          breadCrumbParent="Components"
          breadCrumbActive="Tooltips"
        />
        <Row>
          <Col xl="6" lg="12">
            <TooltipControlled />
          </Col>
          <Col xl="6" lg="12">
            <TooltipUncontrolled />
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <TooltipPositions />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default Tooltips
