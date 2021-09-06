import React from "react"
import { Row, Col } from "reactstrap"
import BreadCrumbs from "../../@vuexy/breadCrumbs/BreadCrumb"
import PillsBasic from "./PillsBasic"
import PillsActiveBorder from "./PillActiveBorder"
import PillsFilled from "./PillsFilled"
import PillsJustified from "./PillsJustified"
import PillsCentered from "./PillsCentered"
import PillsEnd from "./PillsEnd"
import PillsVertical from "./PillsVertical"
import PillThemes from "./PillThemes"
import Prism from "prismjs"
import "prismjs/components/prism-jsx.min"
class PillTabs extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
  }
  render() {
    return (
      <React.Fragment>
        <BreadCrumbs
          breadCrumbTitle="Pills"
          breadCrumbParent="Components"
          breadCrumbActive="Pills"
        />
        <Row>
          <Col xl="6" lg="12">
            <PillsBasic />
          </Col>
          <Col xl="6" lg="12">
            <PillsActiveBorder />
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <PillsFilled />
          </Col>
          <Col sm="12">
            <PillsJustified />
          </Col>
          <Col sm="12">
            <PillsCentered />
          </Col>
          <Col sm="12">
            <PillsEnd />
          </Col>
          <Col sm="12">
            <PillsVertical />
          </Col>
          <Col sm="12">
            <PillThemes />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default PillTabs
