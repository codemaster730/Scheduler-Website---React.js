import React from "react"

export const filledButtons = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Button} from "reactstrap"

class FilledButtons extends React.Component {
  render() {
    return(
        <Button.Ripple color="primary">Primary</Button.Ripple>

        <Button.Ripple color="success">Success</Button.Ripple>

        <Button.Ripple color="info">Info</Button.Ripple>

        <Button.Ripple color="warning">Warning</Button.Ripple>

        <Button.Ripple color="danger">Danger</Button.Ripple>

        <Button.Ripple color="light">Light</Button.Ripple>

        <Button.Ripple color="dark">Dark</Button.Ripple>
    )
  }
}
export default FilledButtons
`}
    </code>
  </pre>
)

export const outlineButtons = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {Button} from "reactstrap"

  class OutlineButtons extends React.Component {
    render() {
      return(
          <Button.Ripple outline color="primary">Primary</Button.Ripple>

          <Button.Ripple outline color="success">Success</Button.Ripple>

          <Button.Ripple outline color="info">Info</Button.Ripple>

          <Button.Ripple outline color="warning">Warning</Button.Ripple>

          <Button.Ripple outline color="danger">Danger</Button.Ripple>

          <Button.Ripple outline color="light">Light</Button.Ripple>

          <Button.Ripple outline color="dark">Dark</Button.Ripple>
      )
    }
  }
  export default OutlineButtons
  `}
    </code>
  </pre>
)

export const flatButtons = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Button} from "reactstrap"

class FlatButtons extends React.Component {
    render() {
    return(
        <Button.Ripple className="mr-1 mb-1" color="flat-primary">Primary</Button.Ripple>

        <Button.Ripple className="mr-1 mb-1" color="flat-success">Success</Button.Ripple>

        <Button.Ripple className="mr-1 mb-1" color="flat-info">Info</Button.Ripple>

        <Button.Ripple className="mr-1 mb-1" color="flat-warning">Warning</Button.Ripple>

        <Button.Ripple className="mr-1 mb-1" color="flat-danger">Danger</Button.Ripple>

        <Button.Ripple className="mr-1 mb-1" color="flat-light">Light</Button.Ripple>

        <Button.Ripple className="mr-1 mb-1" color="flat-dark">Dark</Button.Ripple>
    )
    }
}
export default FlatButtons
    `}
    </code>
  </pre>
)

export const gradientButtons = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Button} from "reactstrap"

class GradientButtons extends React.Component {
render() {
    return(
        <Button.Ripple className="mr-1 mb-1 bg-gradient-primary" color="none">Primary</Button.Ripple>

        <Button.Ripple className="mr-1 mb-1 bg-gradient-success" color="none">Success</Button.Ripple>

        <Button.Ripple className="mr-1 mb-1 bg-gradient-info" color="none">Info</Button.Ripple>

        <Button.Ripple className="mr-1 mb-1 bg-gradient-warning" color="none">Warning</Button.Ripple>

        <Button.Ripple className="mr-1 mb-1 bg-gradient-danger" color="none">Danger</Button.Ripple>

        <Button.Ripple className="mr-1 mb-1 bg-gradient-dark" color="none">Dark</Button.Ripple>
    )
}
}
export default GradientButtons
      `}
    </code>
  </pre>
)

export const reliefButtons = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Button} from "reactstrap"

class ReliefButtons extends React.Component {
    render() {
    return(
        <Button.Ripple className="mr-1 mb-1" color="relief-primary">Primary</Button.Ripple>

        <Button.Ripple className="mr-1 mb-1" color="relief-success">Success</Button.Ripple>

        <Button.Ripple className="mr-1 mb-1" color="relief-info">Info</Button.Ripple>

        <Button.Ripple className="mr-1 mb-1" color="relief-warning">Warning</Button.Ripple>

        <Button.Ripple className="mr-1 mb-1" color="relief-danger">Danger</Button.Ripple>

        <Button.Ripple className="mr-1 mb-1" color="relief-dark">Dark</Button.Ripple>
    )
    }
}
export default ReliefButtons
        `}
    </code>
  </pre>
)

export const squareButtons = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Button} from "reactstrap"

class SqaureButtons extends React.Component {
    render() {
    return(
    <Button.Ripple className="mr-1 mb-1 square" outline color="primary">
      Primary
    </Button.Ripple>

    <Button.Ripple className="mr-1 mb-1 square" outline color="success">
      Success
    </Button.Ripple>

    <Button.Ripple className="mr-1 mb-1 square" outline color="info">
      Info
    </Button.Ripple>

    <Button.Ripple className="mr-1 mb-1 square" outline color="warning">
      Warning
    </Button.Ripple>

    <Button.Ripple className="mr-1 mb-1 square" outline color="danger">
      Danger
    </Button.Ripple>

    <Button.Ripple className="mr-1 mb-1 square" outline color="light">
      Light
    </Button.Ripple>

    <Button.Ripple className="mr-1 mb-1 square" outline color="dark">
      Dark
    </Button.Ripple>
    )
    }
}
export default SqaureButtons
          `}
    </code>
  </pre>
)

export const roundButtons = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Button} from "reactstrap"

class RoundButtons extends React.Component {
    render() {
    return(
      <Button.Ripple className="mr-1 mb-1 round" outline color="primary">
      Primary
    </Button.Ripple>

    <Button.Ripple className="mr-1 mb-1 round" outline color="success">
      Success
    </Button.Ripple>

    <Button.Ripple className="mr-1 mb-1 round" outline color="info">
      Info
    </Button.Ripple>

    <Button.Ripple className="mr-1 mb-1 round" outline color="warning">
      Warning
    </Button.Ripple>

    <Button.Ripple className="mr-1 mb-1 round" outline color="danger">
      Danger
    </Button.Ripple>

    <Button.Ripple className="mr-1 mb-1 round" outline color="light">
      Light
    </Button.Ripple>

    <Button.Ripple className="mr-1 mb-1 round" outline color="dark">
      Dark
    </Button.Ripple>
    )
    }
}
export default RoundButtons
            `}
    </code>
  </pre>
)

export const textColorButtons = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Button} from "reactstrap"

class TextColorButtons extends React.Component {
    render() {
    return(
    <Button.Ripple className="mr-1 mb-1  border-primary text-primary" color="flat-primary">
      Primary
    </Button.Ripple>

    <Button.Ripple className="mr-1 mb-1  border-primary text-success" color="flat-success">
      Success
    </Button.Ripple>

    <Button.Ripple className="mr-1 mb-1  border-primary text-info" color="flat-info">
      Info
    </Button.Ripple>

    <Button.Ripple className="mr-1 mb-1  border-primary text-warning" color="flat-warning">
      Warning
    </Button.Ripple>

    <Button.Ripple className="mr-1 mb-1  border-primary text-danger" color="flat-danger">
      Danger
    </Button.Ripple>

    <Button.Ripple className="mr-1 mb-1  border-primary text-light" color="flat-light">
      Light
    </Button.Ripple>

    <Button.Ripple className="mr-1 mb-1  border-primary text-dark" color="flat-dark">
      Dark
    </Button.Ripple>
    )
    }
}
export default TextColorButtons
              `}
    </code>
  </pre>
)

export const iconButtons = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Button} from "reactstrap"

class IconButtons extends React.Component {
  render() {
  return(
    <Button.Ripple className="mr-1 mb-1" outline color="primary">
      <Home size={14} />
      Home
    </Button.Ripple>

    <Button.Ripple className="mr-1 mb-1" color="warning">
      <Star size={14} />
       Star
    </Button.Ripple>

    <Button.Ripple className="mr-1 mb-1" color="flat-success">
      <Check size={14} />
      Done
    </Button.Ripple>

    <Button.Ripple className="mr-1 mb-1" outline color="primary" disabled>
      Home size={14} />
      Home
    </Button.Ripple>
  )
  }
}
export default IconButtons
              `}
    </code>
  </pre>
)

export const iconOnlyButtons = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Button} from "reactstrap"
import { Search, Inbox, Camera } from "react-feather"

class IconOnlyButtons extends React.Component {
  render() {
  return(
    <Button.Ripple className="mr-1 mb-1" outline color="primary">
      <Search size={14} />
    </Button.Ripple>

    <Button.Ripple className="mr-1 mb-1" color="warning">
      <Inbox size={14} />
    </Button.Ripple>

    <Button.Ripple className="mr-1 mb-1" color="flat-success">
      <Camera size={14} />
    </Button.Ripple>

    <Button.Ripple className="mr-1 mb-1" outline color="primary" disabled>
      <Search size={14} />
    </Button.Ripple>

    <Button.Ripple
      className="mr-1 mb-1 rounded-circle"
      outline
      color="primary"
    >
      <Search size={14} />
    </Button.Ripple>

    <Button.Ripple className="mr-1 mb-1 rounded-circle" color="warning">
      <Inbox size={14} />
    </Button.Ripple>

    <Button.Ripple
      className="mr-1 mb-1 rounded-circle"
      color="flat-success"
    >
      <Camera size={14} />
    </Button.Ripple>

    <Button.Ripple
      className="mr-1 mb-1 rounded-circle"
      outline
      color="primary"
      disabled
    >
      <Search size={14} />
    </Button.Ripple>
  )
  }
}
export default IconOnlyButtons
              `}
    </code>
  </pre>
)

export const buttonGroup = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Button, ButtonGroup, Row, Col} from "reactstrap"
import { Facebook, Instagram, Twitter } from "react-feather"

class ButtonGroups extends React.Component {
  render() {
  return(
    <Row>
    <Col md={6} sm={12}>
      <Button.RippleGroup>
        <Button.Ripple color="primary">Left</Button.Ripple>{" "}
        <Button.Ripple color="danger">Middle</Button.Ripple>{" "}
        <Button.Ripple color="info">Right</Button.Ripple>{" "}
      </ButtonGroup>
    </Col>

    <Col md={6} sm={12}>
      <Button.RippleGroup>
        <Button.Ripple outline color="primary">
          <Facebook size={15} />
        </Button.Ripple>{" "}
        <Button.Ripple outline color="danger">
          <Twitter size={15} />
        </Button.Ripple>{" "}
        <Button.Ripple outline color="info">
          <Instagram size={15} />
        </Button.Ripple>{" "}
      </ButtonGroup>
    </Col>
  </Row>
  )
  }
}
export default ButtonGroups
              `}
    </code>
  </pre>
)

export const buttonSizes = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Button, Row, Col} from "reactstrap"

class ButtonSizes extends React.Component {
  render() {
  return(
    <Row>
      <Col md={6} sm={12}>
        <Button.Ripple className="mr-1 mb-1" color="primary" size="lg">
          Large
        </Button.Ripple>{" "}
        <Button.Ripple className="mr-1 mb-1" color="danger">
          Default
        </Button.Ripple>{" "}
        <Button.Ripple className="mb-1" color="info" size="sm">
          Small
        </Button.Ripple>{" "}
      </Col>
      <Col md={6} sm={12}>
        <Button.Ripple
          outline
          className="mr-1 mb-1"
          color="primary"
          size="lg"
        >
          Large
        </Button.Ripple>{" "}
        <Button.Ripple outline className="mr-1 mb-1" color="danger">
          Default
        </Button.Ripple>{" "}
        <Button.Ripple outline className="mb-1" color="info" size="sm">
          Small
        </Button.Ripple>
      </Col>
  </Row>
  )
  }
}
export default ButtonSizes
              `}
    </code>
  </pre>
)

export const buttonBlock = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Button, Row, Col} from "reactstrap"

class ButtonBlock extends React.Component {
  render() {
  return(
    <Row>
      <Col lg={6} md={12}>
        <Button.Ripple className="mr-1 mb-1 btn-block" color="primary" size="lg">
          Block Level Button
        </Button.Ripple>
      </Col>
      <Col lg={6} md={12}>
        <Button.Ripple outline className="mr-1 mb-1 btn-block" color="primary" size="lg">
          Block Level Button
        </Button.Ripple>
      </Col>
    </Row>
  )
  }
}
export default ButtonBlock
              `}
    </code>
  </pre>
)

export const buttonTags = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Button} from "reactstrap"

class ButtonTags extends React.Component {
  render() {
  return(
    <a
      className="mr-1 mb-1 btn btn-primary"
      color="primary"
      href="https://pixinvent.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Link
    </a>
    <Button.Ripple className="mr-1 mb-1" color="primary" tag="button">
      Button
    </Button.Ripple>
    <input
      className="mr-1 mb-1 btn btn-primary"
      type="button"
      value="Input"
    />
    <input
      className="mr-1 mb-1 btn btn-primary"
      type="submit"
      value="Submit"
    />
  )
  }
}
export default ButtonTags
              `}
    </code>
  </pre>
)

export const buttonGroupVertical = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Button, ButtonGroup, Row, Col} from "reactstrap"

class ButtonGroupsVertical extends React.Component {
  render() {
  return(
    <Row>
      <Col md={4} sm={12}>
        <Button.RippleGroup vertical className="mb-1">
          <Button.Ripple color="primary">Button</Button.Ripple>{" "}
          <Button.Ripple color="primary">Button</Button.Ripple>{" "}
          <Button.Ripple color="primary">Button</Button.Ripple>{" "}
          <Button.Ripple color="primary">Button</Button.Ripple>{" "}
          <Button.Ripple color="primary">Button</Button.Ripple>{" "}
        </ButtonGroup>
      </Col>
      <Col md={4} sm={12}>
        <Button.RippleGroup vertical className="mb-1">
          <Button.Ripple color="primary">Primary</Button.Ripple>{" "}
          <Button.Ripple color="success">Success</Button.Ripple>{" "}
          <Button.Ripple color="info">Info</Button.Ripple>{" "}
          <Button.Ripple color="warning">Warning</Button.Ripple>{" "}
          <Button.Ripple color="danger">Danger</Button.Ripple>{" "}
        </ButtonGroup>
      </Col>
      <Col md={4} sm={12}>
        <Button.RippleGroup vertical className="mb-1">
          <Button.Ripple outline color="primary">
            Button
          </Button.Ripple>{" "}
          <Button.Ripple outline color="success">
            Button
          </Button.Ripple>{" "}
          <Button.Ripple outline color="info">
            Button
          </Button.Ripple>{" "}
          <Button.Ripple outline color="warning">
            Button
          </Button.Ripple>{" "}
          <Button.Ripple outline color="danger">
            Button
          </Button.Ripple>{" "}
        </ButtonGroup>
      </Col>
  </Row>
  )
  }
}
export default ButtonGroupsVertical
              `}
    </code>
  </pre>
)
