import React from "react"
import { Row, Col } from "reactstrap"
import BreadCrumbs from "../../@vuexy/breadCrumbs/BreadCrumb"
import BadgePillContextual from "./BadgePillContextual"
import BadgeGlow from "./BadgePillGlow"
import BadgePillIcons from "./BadgePillIcons"
import BadgeNotification from "./BadgeNotification"
import BadgePillBlock from "./BadgeBlock"
import BadgePillLink from "./BadgePillLink"
import BadgePillSizes from "./BadgePillSizes"
import BadgePillLight from "./BadgePillLight"
import Prism from "prismjs"
import "prismjs/components/prism-jsx.min"
class BadgePill extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
  }
  render() {
    return (
      <React.Fragment>
        <BreadCrumbs
          breadCrumbTitle="Pill Badges"
          breadCrumbParent="Components"
          breadCrumbActive="Pill Badges"
        />
        <Row>
          <Col sm="12">
            <BadgePillContextual />
          </Col>
          <Col sm="12">
            <BadgeGlow />
          </Col>
          <Col sm="12">
            <BadgePillLight />
          </Col>
          <Col sm="12">
            <BadgePillIcons />
          </Col>
          <Col sm="12">
            <BadgeNotification />
          </Col>
        </Row>
        <Row>
          <Col md="6" sm="12">
            <BadgePillLink />
          </Col>
          <Col md="6" sm="12">
            <BadgePillBlock />
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <BadgePillSizes />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default BadgePill
