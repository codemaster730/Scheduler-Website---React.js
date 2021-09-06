import React from "react"
import { Row, Col } from "reactstrap"
import BreadCrumbs from "../../@vuexy/breadCrumbs/BreadCrumb"
import ToastTranslucent from "./ToastTranslucent"
import ToastBasic from "./ToastBasic"
import ToastHeaderIcons from "./ToastHeaderIcons"
import Prism from "prismjs"
import "prismjs/components/prism-jsx.min"
class Toasts extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
  }
  render() {
    return (
      <React.Fragment>
        <BreadCrumbs
          breadCrumbTitle="Toasts"
          breadCrumbParent="Components"
          breadCrumbActive="Toasts"
        />
        <Row>
          <Col sm="12">
            <ToastTranslucent />
          </Col>
          <Col sm="12">
            <ToastHeaderIcons />
          </Col>
          <Col sm="12">
            <ToastBasic />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default Toasts
