import React from "react"
import { Row, Col } from "reactstrap"
import BreadCrumbs from "../../@vuexy/breadCrumbs/BreadCrumb"
import MediaLeft from "./MediaLeft"
import MediaRight from "./MediaRight"
import MediaLeftBordered from "./MediaLeftBordered"
import MediaRightBordered from "./MediaRightBordered"
import MediaNested from "./MediaNested"
import MediaVertical from "./MediaVertical"
import Prism from "prismjs"
import "prismjs/components/prism-jsx.min"
class MediaObject extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
  }
  render() {
    return (
      <React.Fragment>
        <BreadCrumbs
          breadCrumbTitle="Media Object"
          breadCrumbParent="Components"
          breadCrumbActive="Media Object"
        />
        <Row>
          <Col xl="6" sm="12">
            <MediaLeft />
          </Col>
          <Col xl="6" sm="12">
            <MediaRight />
          </Col>
          <Col xl="6" sm="12">
            <MediaLeftBordered />
          </Col>
          <Col xl="6" sm="12">
            <MediaRightBordered />
          </Col>
          <Col sm="12">
            <MediaNested />
          </Col>
          <Col sm="12">
            <MediaVertical />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default MediaObject
