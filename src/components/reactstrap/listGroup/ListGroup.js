import React from "react"
import { Row, Col } from "reactstrap"
import BreadCrumbs from "../../@vuexy/breadCrumbs/BreadCrumb"
import ListGroupSimple from "./ListGroupSimple"
import ListGroupDisabled from "./ListGroupDisabled"
import ListGroupIcons from "./ListGroupIcons"
import ListGroupBadges from "./ListGroupBadges"
import ListGroupTags from "./ListGroupTag"
import ListGroupContextual from "./ListGroupContextual"
import ListGroupCustom from "./ListGroupCustom"
import ListGroupFlush from "./ListGroupFlush"
import ListGroupHorizontal from "./ListGroupHorizontal"
import ListGroupNavigation from "./ListGroupNavigation"
import Prism from "prismjs"
import "prismjs/components/prism-jsx.min"
class ListGroup extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
  }
  render() {
    return (
      <React.Fragment>
        <BreadCrumbs
          breadCrumbTitle="List Group"
          breadCrumbParent="Components"
          breadCrumbActive="List Group"
        />
        <Row>
          <Col xl="6" lg="12">
            <ListGroupSimple />
          </Col>
          <Col xl="6" lg="12">
            <ListGroupDisabled />
          </Col>
          <Col xl="6" lg="12">
            <ListGroupIcons />
          </Col>
          <Col xl="6" lg="12">
            <ListGroupBadges />
          </Col>
          <Col xl="6" lg="12">
            <ListGroupTags />
          </Col>
          <Col xl="6" lg="12">
            <ListGroupContextual />
          </Col>
          <Col xl="6" lg="12">
            <ListGroupCustom />
          </Col>
          <Col xl="6" lg="12">
            <ListGroupFlush />
          </Col>
          <Col xl="6" lg="12">
            <ListGroupHorizontal />
          </Col>
          <Col xl="6" lg="12">
            <ListGroupNavigation />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default ListGroup
