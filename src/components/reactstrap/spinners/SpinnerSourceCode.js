import React from "react"

export const spinnerBorder = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Spinner} from "reactstrap"

class SpinnerBorder extends React.Component {

  render() {
    return(
      <Spinner color="primary" />
    )
  }
}
export default SpinnerBorder
`}
    </code>
  </pre>
)

export const spinnerColors = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Spinner} from "reactstrap"

class SpinnerColors extends React.Component {

  render() {
    return(
      <Spinner color="primary" />
      <Spinner color="success" />
      <Spinner color="info" />
      <Spinner color="danger" />
      <Spinner color="warning" />
      <Spinner color="light" />
      <Spinner color="dark" />
    )
  }
}
export default SpinnerColors
`}
    </code>
  </pre>
)

export const spinnerGrowing = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Spinner} from "reactstrap"

class SpinnerGrowing extends React.Component {

  render() {
    return(
      <Spinner type="grow" color="primary" />
    )
  }
}
export default SpinnerGrowing
`}
    </code>
  </pre>
)

export const spinnerGrowColors = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {Spinner} from "reactstrap"

  class SpinnerColors extends React.Component {

    render() {
      return(
        <Spinner type="grow" color="primary" />
        <Spinner type="grow" color="success" />
        <Spinner type="grow" color="info" />
        <Spinner type="grow" color="danger" />
        <Spinner type="grow" color="warning" />
        <Spinner type="grow" color="light" />
        <Spinner type="grow" color="dark" />
      )
    }
  }
  export default SpinnerColors
        `}
    </code>
  </pre>
)

export const spinnerFlex = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Spinner} from "reactstrap"

class SpinnerFlex extends React.Component {

  render() {
    return(
      <div className="d-flex justify-content-between align-items-center">
        <strong>Loading...</strong>
        <Spinner color="primary" />
      </div>
    )
  }
}
export default SpinnerFlex
`}
    </code>
  </pre>
)

export const spinnerFloat = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Spinner} from "reactstrap"

class SpinnerFloat extends React.Component {

  render() {
    return(
        <Spinner color="primary" className="float-right" />
    )
  }
}
export default SpinnerFloat
`}
    </code>
  </pre>
)

export const spinnerTextAlignment = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Spinner} from "reactstrap"

class SpinnerTextAlignment extends React.Component {

  render() {
    return(
      <div className="text-center">
        <Spinner color="primary" />
      </div>
    )
  }
}
export default SpinnerTextAlignment
`}
    </code>
  </pre>
)

export const spinnerSizes = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Spinner} from "reactstrap"

class SpinnerSizes extends React.Component {

  render() {
    return(
      <Spinner color="primary" size="sm" />
      <Spinner type="grow" color="primary" size="sm" />

      <Spinner color="primary" />
      <Spinner type="grow" color="primary" />

      <Spinner color="primary" size="lg" />
      <Spinner type="grow" color="primary" size="lg" />
    )
  }
}
export default SpinnerSizes
`}
    </code>
  </pre>
)

export const spinnerButton = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Spinner} from "reactstrap"

class SpinnerButton extends React.Component {

  render() {
    return(
        <Button color="primary" className="mr-1 mb-1">
          <Spinner color="white" size="sm" />
        </Button>

        <Button color="primary" className="mr-1 mb-1">
          <Spinner color="white" size="sm" />
          <span className="ml-50">Loading...</span>
        </Button>

        <Button color="primary" className="mr-1 mb-1">
          <Spinner color="white" size="sm" type="grow" />
        </Button>

        <Button color="primary" className="mb-1">
          <Spinner color="white" size="sm" type="grow" />
          <span className="ml-50">Loading...</span>
        </Button>
    )
  }
}
export default SpinnerButton
`}
    </code>
  </pre>
)
