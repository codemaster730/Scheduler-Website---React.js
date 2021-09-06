import React from "react"
import { Row, Col } from "reactstrap"
import BreadCrumbs from "../../@vuexy/breadCrumbs/BreadCrumb"
import PaginationBasic from "./PaginationBasic"
import PaginationSeprated from "./PaginationSeprated"
import PaginationIconText from "./PaginationIconsAndText"
import PaginationIcon from "./PaginationIcons"
import PaginationSuccess from "./PaginationSuccess"
import PaginationDanger from "./PaginationDanger"
import PaginationInfo from "./PaginationInfo"
import PaginationWarning from "./PaginationWarning"
import PaginationPositions from "./PaginationPositions"
import PaginationSizes from "./PaginationSizes"
import Prism from "prismjs"
import "prismjs/components/prism-jsx.min"
class Pagination extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
  }
  render() {
    return (
      <React.Fragment>
        <BreadCrumbs
          breadCrumbTitle="Pagination"
          breadCrumbParent="Components"
          breadCrumbActive="Pagination"
        />
        <Row>
          <Col md="6" sm="12">
            <PaginationBasic />
          </Col>
          <Col md="6" sm="12">
            <PaginationSeprated />
          </Col>
          <Col md="6" sm="12">
            <PaginationIconText />
          </Col>
          <Col md="6" sm="12">
            <PaginationIcon />
          </Col>
          <Col md="6" sm="12">
            <PaginationSuccess />
          </Col>
          <Col md="6" sm="12">
            <PaginationDanger />
          </Col>
          <Col md="6" sm="12">
            <PaginationInfo />
          </Col>
          <Col md="6" sm="12">
            <PaginationWarning />
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <PaginationPositions />
          </Col>
          <Col sm="12">
            <PaginationSizes />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default Pagination
