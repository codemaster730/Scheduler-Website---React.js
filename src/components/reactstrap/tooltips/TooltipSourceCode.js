import React from "react"
// eslint-disable-next-line
import prism from "prismjs"

export const tooltipControlled = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Button, Tooltip} from "reactstrap"

class TooltipControlled extends React.Component {

  state = {
    tooltipOpen: false
  }

  toggleTooltip = () => {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    })
  }

  render() {
    return(
      <Button color="primary" id="ControlledExample">
      Controlled
      </Button>
      <Tooltip
        placement="top"
        isOpen={this.state.tooltipOpen}
        target="ControlledExample"
        toggle={this.toggleTooltip}
      >
        Hello World !
      </Tooltip>
    )
  }
}
export default TooltipControlled
`}
    </code>
  </pre>
)

export const tooltipUncontrolled = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Button, UncontrolledTooltip} from "reactstrap"

class TooltipUncontrolled extends React.Component {


  render() {
    return(
      <Button color="primary" id="UncontrolledExample">
      Controlled
      </Button>
      <UncontrolledTooltip
        placement="top"
        target="UncontrolledExample"
      >
        Hello World !
      </UncontrolledTooltip>
    )
  }
}
export default TooltipUncontrolled
`}
    </code>
  </pre>
)

export const tooltipPosition = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Button, UncontrolledTooltip} from "reactstrap"

class TooltipPosition extends React.Component {


  render() {
    return(
    <Button
      color="primary"
      className="mr-1 mb-1"
      outline
      id="positionTop"
    >
      Top
    </Button>
    <UncontrolledTooltip placement="top" target="positionTop">
      Tooltip on Top
    </UncontrolledTooltip>

    <Button
      color="primary"
      className="mr-1 mb-1"
      outline
      id="positionRight"
    >
      Right
    </Button>
    <UncontrolledTooltip placement="right" target="positionRight">
      Tooltip on Right
    </UncontrolledTooltip>

    <Button
      color="primary"
      className="mr-1 mb-1"
      outline
      id="positionBottom"
    >
      Bottom
    </Button>
    <UncontrolledTooltip placement="bottom" target="positionBottom">
      Tooltip on Bottom
    </UncontrolledTooltip>

    <Button
      color="primary"
      className="mb-1"
      outline
      id="positionLeft"
    >
      Left
    </Button>
    <UncontrolledTooltip placement="left" target="positionLeft">
      Tooltip on Left
    </UncontrolledTooltip>
    )
  }
}
export default TooltipPosition
`}
    </code>
  </pre>
)
