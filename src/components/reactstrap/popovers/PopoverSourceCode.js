import React from "react"

export const popoverControlled = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Button,  Popover, PopoverHeader, PopoverBody,} from "reactstrap"

class PopoverControlled extends React.Component {

  state = {
    popoverOpen: false
  }

  togglePopover = () => {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    })
  }

  render() {
    return(
      <Button color="primary" outline id="controlledPopover">
        Controlled
      </Button>
      <Popover
        placement="top"
        target="controlledPopover"
        isOpen={this.state.popoverOpen}
        toggle={this.togglePopover}
      >
        <PopoverHeader>Controlled Popover</PopoverHeader>
        <PopoverBody>
          Macaroon chocolate candy. I love carrot cake gingerbread
          cake lemon drops. Muffin sugar plum marzipan pie.
        </PopoverBody>
      </Popover>
    )
  }
}
export default PopoverControlled
`}
    </code>
  </pre>
)

export const popoverUncontrolled = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Button,  UncontrolledPopover, PopoverHeader, PopoverBody,} from "reactstrap"

class PopoverUncontrolled extends React.Component {

  render() {
    return(
      <Button color="primary" outline id="uncontrolledPopover">
        Controlled
      </Button>
      <UncontrolledPopover placement="top" target="uncontrolledPopover">
        <PopoverHeader>Uncontrolled Popover</PopoverHeader>
        <PopoverBody>
          Macaroon chocolate candy. I love carrot cake gingerbread
          cake lemon drops. Muffin sugar plum marzipan pie.
        </PopoverBody>
      </UncontrolledPopover>
    )
  }
}
export default PopoverUncontrolled
`}
    </code>
  </pre>
)

export const popoverPositions = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Button,  UncontrolledPopover, PopoverHeader, PopoverBody,} from "reactstrap"

class PopoverPositions extends React.Component {

  render() {
    return(
      <Button
      color="primary"
      outline
      id="popTop"
      className="mr-1 mb-1"
    >
      Top
    </Button>
    <UncontrolledPopover placement="top" target="popTop">
      <PopoverHeader>Popover Top</PopoverHeader>
      <PopoverBody>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloremque, cumque.
      </PopoverBody>
    </UncontrolledPopover>

    <Button
      color="primary"
      outline
      id="popRight"
      className="mr-1 mb-1"
    >
      Right
    </Button>
    <UncontrolledPopover placement="right" target="popRight">
      <PopoverHeader>Popover Right</PopoverHeader>
      <PopoverBody>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloremque, cumque.
      </PopoverBody>
    </UncontrolledPopover>

    <Button
      color="primary"
      outline
      id="popBottom"
      className="mr-1 mb-1"
    >
      Bottom
    </Button>
    <UncontrolledPopover placement="bottom" target="popBottom">
      <PopoverHeader>Popover Bottom</PopoverHeader>
      <PopoverBody>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloremque, cumque.
      </PopoverBody>
    </UncontrolledPopover>

    <Button
      color="primary"
      outline
      id="popLeft"
      className="mr-1 mb-1"
    >
      Left
    </Button>
    <UncontrolledPopover placement="left" target="popLeft">
      <PopoverHeader>Popover Left</PopoverHeader>
      <PopoverBody>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloremque, cumque.
      </PopoverBody>
    </UncontrolledPopover>
    )
  }
}
export default PopoverPositions
`}
    </code>
  </pre>
)

export const popoverTriggers = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Button,  UncontrolledPopover, PopoverHeader, PopoverBody,} from "reactstrap"

class PopoverTriggers extends React.Component {

  render() {
    return(
      <Button
      color="primary"
      outline
      id="popFocus"
      className="mr-1 mb-1"
    >
      Focus
    </Button>
    <UncontrolledPopover
      trigger="focus"
      placement="top"
      target="popFocus"
    >
      <PopoverHeader>Focus Trigger</PopoverHeader>
      <PopoverBody>
        Focusing on the trigging element makes this popover appear.
        Blurring (clicking away) makes it disappear. You cannot
        select this text as the popover will disappear when you try.
      </PopoverBody>
    </UncontrolledPopover>

    <Button
      color="primary"
      outline
      id="popClick"
      className="mr-1 mb-1"
    >
      Click
    </Button>
    <UncontrolledPopover
      trigger="click"
      placement="top"
      target="popClick"
    >
      <PopoverHeader>Click Trigger</PopoverHeader>
      <PopoverBody>
        Clicking on the triggering element makes this popover
        appear. Clicking on it again will make it disappear. You can
        select this text, but clicking away (somewhere other than
        the triggering element) will not dismiss this popover.
      </PopoverBody>
    </UncontrolledPopover>

    <Button
      trigger="legacy"
      color="primary"
      outline
      id="popLegacy"
      className="mr-1"
    >
      Legacy
    </Button>
    <UncontrolledPopover placement="top" target="popLegacy">
      <PopoverHeader>Legacy Trigger</PopoverHeader>
      <PopoverBody>
        Legacy is a reactstrap special trigger value (outside of
        bootstrap's spec/standard). Before reactstrap correctly
        supported click and focus, it had a hybrid which was very
        useful and has been brought back as trigger="legacy". One
        advantage of the legacy trigger is that it allows the
        popover text to be selected while also closing when clicking
        outside the triggering element and popover itself.
      </PopoverBody>
    </UncontrolledPopover>
    )
  }
}
export default PopoverTriggers
`}
    </code>
  </pre>
)
