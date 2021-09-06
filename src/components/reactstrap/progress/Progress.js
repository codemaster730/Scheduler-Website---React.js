import React from "react"
import { Row, Col } from "reactstrap"
import BreadCrumbs from "../../@vuexy/breadCrumbs/BreadCrumb"
import ProgressBasic from "./ProgressBasic"
import ProgressColored from "./ProgressColored"
import ProgressLabeled from "./ProgressLabeled"
import ProgressStriped from "./ProgressStriped"
import ProgressAnimated from "./ProgressAnimated"
import ProgressSizes from "./ProgressSizes"
import Prism from "prismjs"
import "prismjs/components/prism-jsx.min"
class Progress extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
  }
  render() {
    return (
      <React.Fragment>
        <BreadCrumbs
          breadCrumbTitle="Progress"
          breadCrumbParent="Components"
          breadCrumbActive="Progress"
        />
        <Row>
          <Col xl="6" lg="12">
            <ProgressBasic />
          </Col>
          <Col xl="6" lg="12">
            <ProgressColored />
          </Col>
          <Col xl="6" lg="12">
            <ProgressLabeled />
          </Col>
          <Col xl="6" lg="12">
            <ProgressStriped />
          </Col>
          <Col xl="6" lg="12">
            <ProgressAnimated />
          </Col>
          <Col xl="6" lg="12">
            <ProgressSizes />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default Progress
