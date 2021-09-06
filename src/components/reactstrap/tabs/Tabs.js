import React from "react"
import { Row, Col } from "reactstrap"
import BreadCrumbs from "../../@vuexy/breadCrumbs/BreadCrumb"
import TabsBasic from "./TabsBasic"
import TabsVerticalLeft from "./TabsVerticalLeft"
import TabsVerticalRight from "./TabsVerticalRight"
import TabsFilled from "./TabsFilled"
import TabsJustified from "./TabsJustified"
import TabsCentered from "./TabsCentered"
import TabsEnd from "./TabsEnd"
import Prism from "prismjs"
import "prismjs/components/prism-jsx.min"
class Tabs extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
  }
  render() {
    return (
      <React.Fragment>
        <BreadCrumbs
          breadCrumbTitle="Tabs"
          breadCrumbParent="Components"
          breadCrumbActive="Tabs"
        />
        <Row>
          <Col sm="12">
            <TabsBasic />
          </Col>
        </Row>
        <Row>
          <Col xl="6" lg="12">
            <TabsVerticalLeft />
          </Col>
          <Col xl="6" lg="12">
            <TabsVerticalRight />
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <TabsFilled />
          </Col>
          <Col sm="12">
            <TabsJustified />
          </Col>
          <Col sm="12">
            <TabsCentered />
          </Col>
          <Col sm="12">
            <TabsEnd />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default Tabs
