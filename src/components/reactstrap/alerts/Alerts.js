import React from "react"
import DefaultAlert from "./DefaultAlert"
import AlertTitle from "./AlertTitle"
import AlertColors from "./AlertColors"
import AlertDismissable from "./AlertDismissable"
import AlertUncontrolled from "./AlertUncontrolled"
import AlertIcon from "./AlertIcon"
import AlertExample from "./AlertExample"
import Prism from "prismjs"
import BreadCrumbs from "../../@vuexy/breadCrumbs/BreadCrumb"
import "prismjs/components/prism-jsx.min"
class Alerts extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
  }

  render() {
    return (
      <React.Fragment>
        <BreadCrumbs
          breadCrumbTitle="Alerts"
          breadCrumbParent="Components"
          breadCrumbActive="Alerts"
        />
        <DefaultAlert />
        <AlertTitle />
        <AlertColors />
        <AlertDismissable />
        <AlertUncontrolled />
        <AlertIcon />
        <AlertExample />
      </React.Fragment>
    )
  }
}
export default Alerts
