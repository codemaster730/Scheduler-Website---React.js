import React from "react"
import { Row, Col } from "reactstrap"
import BreadCrumbs from "../../@vuexy/breadCrumbs/BreadCrumb"
import ModalBasic from "./ModalBasic"
import ModalCentered from "./ModalCentered"
import ModalBackdrop from "./ModalBackdrop"
import ModalFade from "./ModalFade"
import ModalThemes from "./ModalThemes"
import ModalSizes from "./ModalSizes"
import ModalForm from "./ModalForm"
import ModalUnmount from "./ModalDestructuring"
import ModalFocus from "./ModalFocus"
import Prism from "prismjs"
import "prismjs/components/prism-jsx.min"
class Modals extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
  }
  render() {
    return (
      <React.Fragment>
        <BreadCrumbs
          breadCrumbTitle="Modal"
          breadCrumbParent="Components"
          breadCrumbActive="Modal"
        />
        <Row>
          <Col lg="3" md="6" sm="12">
            <ModalBasic />
          </Col>
          <Col lg="3" md="6" sm="12">
            <ModalCentered />
          </Col>
          <Col lg="3" md="6" sm="12">
            <ModalBackdrop />
          </Col>
          <Col lg="3" md="6" sm="12">
            <ModalFade />
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <ModalThemes />
          </Col>
          <Col sm="12">
            <ModalSizes />
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="6" sm="12">
            <ModalUnmount />
          </Col>
          <Col lg="4" md="6" sm="12">
            <ModalForm />
          </Col>
          <Col lg="4" md="6" sm="12">
            <ModalFocus />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default Modals
