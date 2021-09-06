import React from "react"
import { Row, Col } from "reactstrap"
import BreadCrumbs from "../../@vuexy/breadCrumbs/BreadCrumb"
import BadgeContextual from "./BadgeContextual"
import BadgeIcons from "./BadgeIcons"
import BadgeSquareIcons from "./BadgeSquareIcons"
import BadgeIconsOnly from "./BadgeIconOnly"
import BadgeLink from "./BadgeLink"
import BadgeBlock from "./BadgeBlock"
import BadgeSizes from "./BadgeSizes"
import BadgeGlow from "./BadgeGlow"
import BadgeLight from "./BadgeLight"
import Prism from "prismjs"
import "prismjs/components/prism-jsx.min"
class Badges extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
  }
  render() {
    return (
      <React.Fragment>
        <BreadCrumbs
          breadCrumbTitle="Badges"
          breadCrumbParent="Components"
          breadCrumbActive="Badges"
        />
        <Row>
          <Col sm="12">
            <BadgeContextual />
          </Col>
          <Col sm="12">
            <BadgeGlow />
          </Col>
          <Col sm="12">
            <BadgeLight />
          </Col>
          <Col sm="12">
            <BadgeIcons />
          </Col>
          <Col sm="12">
            <BadgeSquareIcons />
          </Col>
          <Col sm="12">
            <BadgeIconsOnly />
          </Col>
        </Row>
        <Row>
          <Col md="6" sm="12">
            <BadgeLink />
          </Col>
          <Col md="6" sm="12">
            <BadgeBlock />
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <BadgeSizes />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default Badges
