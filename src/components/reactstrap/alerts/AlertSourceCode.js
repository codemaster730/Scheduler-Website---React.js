import React from "react"
export const defaultAlert = (
  <pre className="language-jsx">
    <code className="language-jsx">
      {`
  import React from "react"
  import {Alert} from "reactstrap"

  class DefaultAlert extends React.Component {
    render() {
      return  <Alert color="primary">This is a primary alert — check it out!</Alert>
    }
  }
  export default DefaultAlert
  `}
    </code>
  </pre>
)

export const alertTitle = (
  <pre>
    <code className="language-jsx">
      {`
 import React from "react"
 import {Alert} from "reactstrap"

 class AlertTitle extends React.Component {
  render() {
    return  (
      <Alert color="warning">
        <div className="alert-heading">
        Lorem ipsum dolor sit amet
        </div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, laborum!.
      </Alert>
    )
  }
}
export default AlertTitle

`}
    </code>
  </pre>
)

export const alertColors = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Alert} from "reactstrap"

class AlertColors extends React.Component {
 render() {
   return  (
    <Alert color="primary">
      <div className="alert-heading">Primary</div>
      Tootsie roll lollipop lollipop icing. Wafer cookie danish
      macaroon. Liquorice fruitcake apple pie I love cupcake
      cupcake.
    </Alert>

    <Alert color="success">
      <div className="alert-heading">Success</div>
      Tootsie roll lollipop lollipop icing. Wafer cookie danish
      macaroon. Liquorice fruitcake apple pie I love cupcake
      cupcake.
    </Alert>

    <Alert color="danger">
      <div className="alert-heading">Danger</div>
      Tootsie roll lollipop lollipop icing. Wafer cookie danish
      macaroon. Liquorice fruitcake apple pie I love cupcake
      cupcake.
    </Alert>

    <Alert color="warning">
      <div className="alert-heading">Warning</div>
      Tootsie roll lollipop lollipop icing. Wafer cookie danish
      macaroon. Liquorice fruitcake apple pie I love cupcake
      cupcake.
    </Alert>

    <Alert color="dark">
      <div className="alert-heading">Dark</div>
      Tootsie roll lollipop lollipop icing. Wafer cookie danish
      macaroon. Liquorice fruitcake apple pie I love cupcake
      cupcake.
    </Alert>

    <Alert color="info">
      <div className="alert-heading">Info</div>
      Tootsie roll lollipop lollipop icing. Wafer cookie danish
      macaroon. Liquorice fruitcake apple pie I love cupcake
      cupcake.
    </Alert>

    <Alert color="light">
      <div className="alert-heading">Light</div>
      Tootsie roll lollipop lollipop icing. Wafer cookie danish
      macaroon. Liquorice fruitcake apple pie I love cupcake
      cupcake.
    </Alert>
   )
 }
}
export default AlertColors
`}
    </code>
  </pre>
)

export const alertDismissable = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {Alert} from "reactstrap"

  class AlertDismissable extends React.Component {
    render() {

      state = {
        activeTab: "1",
        visible: true
      }

      dismissAlert = () => {
        this.setState({ visible: false })
      }
      return (
      <Alert color="info" isOpen={this.state.visible} toggle={this.dismissAlert}>
        Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I
        love wafer I love wafer.
      </Alert>
      )
    }
  }
  export default AlertDismissable
    `}
    </code>
  </pre>
)

export const alertUncontrolled = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {UncontrolledAlert} from "reactstrap"

  class AlertUncontrolled extends React.Component {
    render(){
      return(
      <UncontrolledAlert color="danger">
        Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I
        love wafer.
      </UncontrolledAlert>
      )
    }
  }
  export default AlertUncontrolled
      `}
    </code>
  </pre>
)

export const alertIcon = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {Alert} from "reactstrap"

  class AlertIcon extends React.Component {
    render(){
      return(
      <Alert color="primary">
        <Star size={10} /> Chupa chups topping bonbon. Jelly-o toffee
        I love. Sweet I love wafer I love wafer.
      </Alert>
      )
    }
  }
  export default AlertIcon
        `}
    </code>
  </pre>
)

export const alertExample = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {Alert} from "reactstrap"

  class AlertExample extends React.Component {

    state = {
      visible: true
    }

    handleInput = e => {
      this.setState({ inputTerm: e.target.value })
      if (isNaN(this.state.inputTerm)) {
        this.setState({ visible: true })
      } else {
        this.setState({ visible: false })
      }
    }

    render(){
      return(
        <React.Fragment>
          <FormGroup>
          <Label htmlFor="numbers">Enter numbers only</Label>
          <Input
            className="w-25 h-25 pl-1"
            placeholder="0123456789"
            value={this.state.inputTerm}
            onChange={this.handleInput}
          />
        </FormGroup>
        <Alert color="danger" isOpen={this.state.visible}>
          <AlertCircle size={15} />
          <span>
            the value is <strong>invalid</strong> you can only enter
            numbers
          </span>
        </Alert>
        </React.Fragment>
      )
    }
  }
  export default AlertExample
        `}
    </code>
  </pre>
)
