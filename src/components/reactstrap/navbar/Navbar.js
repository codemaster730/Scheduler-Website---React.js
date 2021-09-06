import React from "react"
import BreadCrumbs from "../../@vuexy/breadCrumbs/BreadCrumb"
import NavbarBasic from "./BasicNavbar"
import NavbarColors from "./NavbarColors"
import NavbarCollapse from "./NavbarCollapse"
import Prism from "prismjs"
import "prismjs/components/prism-jsx.min"
class Navbars extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
  }
  render() {
    return (
      <React.Fragment>
        <BreadCrumbs
          breadCrumbTitle="Navbar"
          breadCrumbParent="Components"
          breadCrumbActive="Navbar"
        />
        <div id="navbar-component">
          <NavbarBasic />
          <NavbarColors />
          <NavbarCollapse />
        </div>
      </React.Fragment>
    )
  }
}
export default Navbars
