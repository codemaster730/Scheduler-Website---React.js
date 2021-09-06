import React from "react"

export const breadcrumbsDefault = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {BreadcrumbItem, Breadcrumb} from "reactstrap"

class BreadcrumbsDefault extends React.Component {
    render() {
    return(
        <Breadcrumb>
            <BreadcrumbItem>
            <Link to="#"> Home </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
            <Link to="#"> Library </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
            <Link to="#"> Data </Link>
            </BreadcrumbItem>
        </Breadcrumb>
    )
    }
}
export default BreadcrumbsDefault
    `}
    </code>
  </pre>
)

export const breadcrumbsStyles = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {BreadcrumbItem, Breadcrumb} from "reactstrap"

  class BreadcrumbsStyles extends React.Component {
      render() {
      return(
        <Breadcrumb className="breadcrumb-slash">
          <BreadcrumbItem>
            <Link to="#"> Home </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="#"> Library </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="#"> Data </Link>
          </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb className="breadcrumb-dots">
        <BreadcrumbItem>
          <Link to="#"> Home </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="#"> Library </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="#"> Data </Link>
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb className="breadcrumb-dashes">
        <BreadcrumbItem>
          <Link to="#"> Home </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="#"> Library </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="#"> Data </Link>
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb className="breadcrumb-pipes">
        <BreadcrumbItem>
          <Link to="#"> Home </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="#"> Library </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="#"> Data </Link>
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb className="breadcrumb-chevron">
        <BreadcrumbItem>
          <Link to="#"> Home </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="#"> Library </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="#"> Data </Link>
        </BreadcrumbItem>
      </Breadcrumb>
      )
      }
  }
  export default BreadcrumbsStyles
      `}
    </code>
  </pre>
)

export const breadcrumbsAlignment = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {BreadcrumbItem, Breadcrumb} from "reactstrap"

  class BreadcrumbsAlignment extends React.Component {
      render() {
      return(
        <div className="justify-content-start breadcrumb-wrapper">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="#"> Home </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="#"> Library </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="#"> Data </Link>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div className="justify-content-center breadcrumb-wrapper">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="#"> Home </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="#"> Library </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="#"> Data </Link>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div className="justify-content-end breadcrumb-wrapper">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="#"> Home </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="#"> Library </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="#"> Data </Link>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      )
      }
  }
  export default BreadcrumbsAlignment
      `}
    </code>
  </pre>
)
