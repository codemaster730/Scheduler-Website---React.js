import React from "react"
import BreadCrumbs from "../../@vuexy/breadCrumbs/BreadCrumb"
import CollapseDefault from "./CollapseDefault"
import CollapseUncontrolled from "./CollapseUncontrolled"
import Accordion from "./Accordion"
import AccordionShadow from "./AccordionShadow"
import AccordionBorder from "./AccordionBorder"
import AccordionMargin from "./AccordionMargin"
import AccordionHover from "./AccordionHover"
import { Row, Col } from "reactstrap"
import Prism from "prismjs"
import "prismjs/components/prism-jsx.min"
class Collaspe extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
  }
  render() {
    return (
      <React.Fragment>
        <BreadCrumbs
          breadCrumbTitle="Collapse"
          breadCrumbParent="Components"
          breadCrumbActive="Collapse"
        />
        <Row>
          <Col xl="6" lg="12">
            <CollapseDefault />
          </Col>
          <Col xl="6" lg="12">
            <CollapseUncontrolled />
          </Col>
          <Col xl="6" lg="12">
            <Accordion />
          </Col>
          <Col xl="6" lg="12">
            <AccordionShadow />
          </Col>
          <Col xl="6" lg="12">
            <AccordionBorder />
          </Col>
          <Col xl="6" lg="12">
            <AccordionMargin />
          </Col>
        </Row>
        <AccordionHover />
      </React.Fragment>
    )
  }
}
export default Collaspe
