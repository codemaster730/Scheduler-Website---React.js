import React from "react"

export const dropdownControlled = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from "reactstrap"
  import { ChevronDown } from "react-feather"
  class Dropdowncontrolled extends React.Component {

    state = {
      dropdownOpen: false
    }

    togggleDropdown = () => {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      })
    }

    render() {
      return(
        <div className="dropdown">
          <ButtonDropdown
          isOpen={this.state.dropdownOpen}
          toggle={this.toggleDropdown}
        >
          <DropdownToggle color="primary" caret>
            Controlled
            <ChevronDown size={15} />
            </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a" header>Header</DropdownItem>
            <DropdownItem tag="a" disabled>Action</DropdownItem>
            <DropdownItem tag="a">Another Action</DropdownItem>
            <DropdownItem tag="a" divider />
            <DropdownItem tag="a">Another Action</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
        </div>
      )
    }
  }
  export default Dropdowncontrolled
  `}
    </code>
  </pre>
)

export const dropdownUncontrolled = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from "reactstrap"
  import { ChevronDown } from "react-feather"
  class DropdownUncontrolled extends React.Component {
    render() {
      return(
        <div className="dropdown">
          <ButtonDropdown
          isOpen={this.state.dropdownOpen}
          toggle={this.toggleDropdown}
        >
          <DropdownToggle color="primary" caret>
            Controlled
            <ChevronDown size={15} />
            </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a" header>Header</DropdownItem>
            <DropdownItem tag="a" disabled>Action</DropdownItem>
            <DropdownItem tag="a">Another Action</DropdownItem>
            <DropdownItem tag="a" divider />
            <DropdownItem tag="a">Another Action</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
        </div>
      )
    }
  }
  export default DropdownUncontrolled
  `}
    </code>
  </pre>
)

export const dropdownBasic = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from "reactstrap"
  import { ChevronDown } from "react-feather"
  class DropdownBasic extends React.Component {

    render() {
      return(
        <div className="dropdown mr-1 mb-1">
        <UncontrolledButtonDropdown>
          <DropdownToggle color="primary" caret>
            Primary
            <ChevronDown size={15} />
            </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a">Option 1</DropdownItem>
            <DropdownItem tag="a">Option 2</DropdownItem>
            <DropdownItem tag="a">Option 3</DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </div>

      <div className="dropdown mr-1 mb-1">
        <UncontrolledButtonDropdown>
          <DropdownToggle color="success" caret>
            Success
            <ChevronDown size={15} />
            </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a">Option 1</DropdownItem>
            <DropdownItem tag="a">Option 2</DropdownItem>
            <DropdownItem tag="a">Option 3</DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </div>

      <div className="dropdown mr-1 mb-1">
        <UncontrolledButtonDropdown>
          <DropdownToggle color="info" caret>
            Info
            <ChevronDown size={15} />
            </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a">Option 1</DropdownItem>
            <DropdownItem tag="a">Option 2</DropdownItem>
            <DropdownItem tag="a">Option 3</DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </div>

      <div className="dropdown mr-1 mb-1">
        <UncontrolledButtonDropdown>
          <DropdownToggle color="danger" caret>
            Danger
            <ChevronDown size={15} />
            </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a">Option 1</DropdownItem>
            <DropdownItem tag="a">Option 2</DropdownItem>
            <DropdownItem tag="a">Option 3</DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </div>

      <div className="dropdown mr-1 mb-1">
        <UncontrolledButtonDropdown>
          <DropdownToggle color="warning" caret>
            Warning
            <ChevronDown size={15} />
            </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a">Option 1</DropdownItem>
            <DropdownItem tag="a">Option 2</DropdownItem>
            <DropdownItem tag="a">Option 3</DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </div>

      <div className="dropdown mr-1 mb-1">
        <UncontrolledButtonDropdown>
          <DropdownToggle color="light" caret>
            Light
            <ChevronDown size={15} />
            </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a">Option 1</DropdownItem>
            <DropdownItem tag="a">Option 2</DropdownItem>
            <DropdownItem tag="a">Option 3</DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </div>

      <div className="dropdown mr-1 mb-1">
        <UncontrolledButtonDropdown>
          <DropdownToggle color="dark" caret>
            Dark
            <ChevronDown size={15} />
            </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a">Option 1</DropdownItem>
            <DropdownItem tag="a">Option 2</DropdownItem>
            <DropdownItem tag="a">Option 3</DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </div>
      )
    }
  }
  export default DropdownBasic
  `}
    </code>
  </pre>
)

export const dropdownSplit = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
    Button,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from "reactstrap"
  import { ChevronDown } from "react-feather"
  class DropdownSplit extends React.Component {
    render() {
      return(
        <div className="dropdown mr-1 mb-1 d-inline-block">
          <UncontrolledButtonDropdown>
            <Button color="primary">Primary</Button>
            <DropdownToggle color="primary" caret />
            <DropdownMenu>
              <ChevronDown size={15} />
            <DropdownItem tag="a">Option 1</DropdownItem>
              <DropdownItem tag="a">Option 2</DropdownItem>
              <DropdownItem tag="a">Option 3</DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </div>
        <div className="dropdown mr-1 mb-1 d-inline-block">
          <UncontrolledButtonDropdown>
            <Button color="success">Success</Button>
            <DropdownToggle color="success" caret>
            <ChevronDown size={15} />
            </DropdownToggle>
            <DropdownMenu>
            <DropdownItem tag="a">Option 1</DropdownItem>
              <DropdownItem tag="a">Option 2</DropdownItem>
              <DropdownItem tag="a">Option 3</DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </div>
        <div className="dropdown mr-1 mb-1 d-inline-block">
          <UncontrolledButtonDropdown>
            <Button color="info">Info</Button>
            <DropdownToggle color="info" caret>
            <ChevronDown size={15} />
            </DropdownToggle>
            <DropdownMenu>
            <DropdownItem tag="a">Option 1</DropdownItem>
              <DropdownItem tag="a">Option 2</DropdownItem>
              <DropdownItem tag="a">Option 3</DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </div>
        <div className="dropdown mr-1 mb-1 d-inline-block">
          <UncontrolledButtonDropdown>
            <Button color="danger">Danger</Button>
            <DropdownToggle color="danger" caret/>
            <ChevronDown size={15} />
            </DropdownToggle>
            <DropdownMenu>
            <DropdownItem tag="a">Option 1</DropdownItem>
              <DropdownItem tag="a">Option 2</DropdownItem>
              <DropdownItem tag="a">Option 3</DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </div>
        <div className="dropdown mr-1 mb-1 d-inline-block">
          <UncontrolledButtonDropdown>
            <Button color="warning">Warning</Button>
            <DropdownToggle color="warning" caret>
            <ChevronDown size={15} />
            </DropdownToggle>
            <DropdownMenu>
            <DropdownItem tag="a">Option 1</DropdownItem>
              <DropdownItem tag="a">Option 2</DropdownItem>
              <DropdownItem tag="a">Option 3</DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </div>
        <div className="dropdown mr-1 mb-1 d-inline-block">
          <UncontrolledButtonDropdown>
            <Button color="light">Light</Button>
            <DropdownToggle color="light" caret>
            <ChevronDown size={15} />
            </DropdownToggle>
            <DropdownMenu>
            <DropdownItem tag="a">Option 1</DropdownItem>
              <DropdownItem tag="a">Option 2</DropdownItem>
              <DropdownItem tag="a">Option 3</DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </div>
        <div className="dropdown mr-1 mb-1 d-inline-block">
          <UncontrolledButtonDropdown>
            <Button color="dark">Dark</Button>
            <DropdownToggle color="dark" caret>
            <ChevronDown size={15} />
            </DropdownToggle>
            <DropdownMenu>
            <DropdownItem tag="a">Option 1</DropdownItem>
              <DropdownItem tag="a">Option 2</DropdownItem>
              <DropdownItem tag="a">Option 3</DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </div>
      )
    }
  }
  export default DropdownSplit
  `}
    </code>
  </pre>
)

export const dropdownOutline = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
    Button,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from "reactstrap"
  import { ChevronDown } from "react-feather"
  class DropdownOutline extends React.Component {

    render() {
      return(
        <div className="dropdown mr-1 mb-1 d-inline-block">
        <UncontrolledButtonDropdown>
          <DropdownToggle color="primary" caret>
            Primary
            <ChevronDown size={15} />
            </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a">Option 1</DropdownItem>
            <DropdownItem tag="a">Option 2</DropdownItem>
            <DropdownItem tag="a">Option 3</DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </div>
      <div className="dropdown mr-1 mb-1 d-inline-block">
        <UncontrolledButtonDropdown>
          <DropdownToggle color="success" caret>
            Success
            <ChevronDown size={15} />
            </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a">Option 1</DropdownItem>
            <DropdownItem tag="a">Option 2</DropdownItem>
            <DropdownItem tag="a">Option 3</DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </div>
      <div className="dropdown mr-1 mb-1 d-inline-block">
        <UncontrolledButtonDropdown>
          <DropdownToggle color="info" caret>
            Info
            <ChevronDown size={15} />
            </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a">Option 1</DropdownItem>
            <DropdownItem tag="a">Option 2</DropdownItem>
            <DropdownItem tag="a">Option 3</DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </div>
      <div className="dropdown mr-1 mb-1 d-inline-block">
        <UncontrolledButtonDropdown>
          <DropdownToggle color="danger" caret>
            Danger
            <ChevronDown size={15} />
            </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a">Option 1</DropdownItem>
            <DropdownItem tag="a">Option 2</DropdownItem>
            <DropdownItem tag="a">Option 3</DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </div>
      <div className="dropdown mr-1 mb-1 d-inline-block">
        <UncontrolledButtonDropdown>
          <Button color="warning">Warning</Button>
          <DropdownToggle
            className="dropdown-toggle-split"
            color="warning"
            caret
            />
            <ChevronDown size={15} />
          <DropdownMenu>
            <DropdownItem tag="a">Option 1</DropdownItem>
            <DropdownItem tag="a">Option 2</DropdownItem>
            <DropdownItem tag="a">Option 3</DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </div>
      <div className="dropdown mr-1 mb-1 d-inline-block">
        <UncontrolledButtonDropdown>
          <Button color="light">Light</Button>
          <DropdownToggle
            className="dropdown-toggle-split"
            color="light"
            caret
            />
            <ChevronDown size={15} />
          <DropdownMenu>
            <DropdownItem tag="a">Option 1</DropdownItem>
            <DropdownItem tag="a">Option 2</DropdownItem>
            <DropdownItem tag="a">Option 3</DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </div>
      <div className="dropdown mr-1 mb-1 d-inline-block">
        <UncontrolledButtonDropdown>
          <Button color="dark">Dark</Button>
          <DropdownToggle
            className="dropdown-toggle-split"
            color="dark"
            caret
            />
            <ChevronDown size={15} />
          <DropdownMenu>
            <DropdownItem tag="a">Option 1</DropdownItem>
            <DropdownItem tag="a">Option 2</DropdownItem>
            <DropdownItem tag="a">Option 3</DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </div>
      )
    }
  }
  export default DropdownOutline
  `}
    </code>
  </pre>
)

export const dropdownFlat = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
    Button,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from "reactstrap"
  import { ChevronDown } from "react-feather"
  class DropdownFlat extends React.Component {

    render() {
      return(
        <div className="dropdown mr-1 mb-1 d-inline-block">
        <UncontrolledButtonDropdown>
          <DropdownToggle
            color="flat-primary"
            caret
            >
            Primary
            <ChevronDown size={15} />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a">Option 1</DropdownItem>
            <DropdownItem tag="a">Option 2</DropdownItem>
            <DropdownItem tag="a">Option 3</DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </div>
      <div className="dropdown mr-1 mb-1 d-inline-block">
        <UncontrolledButtonDropdown>
          <DropdownToggle
            color="flat-success"
            caret
            >
            Success
            <ChevronDown size={15} />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a">Option 1</DropdownItem>
            <DropdownItem tag="a">Option 2</DropdownItem>
            <DropdownItem tag="a">Option 3</DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </div>
      <div className="dropdown mr-1 mb-1 d-inline-block">
        <UncontrolledButtonDropdown>
          <DropdownToggle
            color="flat-info"
            caret
            >
            Info
            <ChevronDown size={15} />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a">Option 1</DropdownItem>
            <DropdownItem tag="a">Option 2</DropdownItem>
            <DropdownItem tag="a">Option 3</DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </div>
      <div className="dropdown mr-1 mb-1 d-inline-block">
        <UncontrolledButtonDropdown>
          <DropdownToggle
            color="flat-danger"
            caret
            >
            Danger
            <ChevronDown size={15} />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a">Option 1</DropdownItem>
            <DropdownItem tag="a">Option 2</DropdownItem>
            <DropdownItem tag="a">Option 3</DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </div>
      <div className="dropdown mr-1 mb-1 d-inline-block">
        <UncontrolledButtonDropdown>
          <DropdownToggle
            color="flat-warning"
            caret
            >
            Warning
            <ChevronDown size={15} />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a">Option 1</DropdownItem>
            <DropdownItem tag="a">Option 2</DropdownItem>
            <DropdownItem tag="a">Option 3</DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </div>
      <div className="dropdown mr-1 mb-1 d-inline-block">
        <UncontrolledButtonDropdown>
          <DropdownToggle
            color="flat-light"
            caret
            >
            Light
            <ChevronDown size={15} />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a">Option 1</DropdownItem>
            <DropdownItem tag="a">Option 2</DropdownItem>
            <DropdownItem tag="a">Option 3</DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </div>
      <div className="dropdown mr-1 mb-1 d-inline-block">
        <UncontrolledButtonDropdown>
          <DropdownToggle
            color="flat-dark"
            caret
            >
            Dark
            <ChevronDown size={15} />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a">Option 1</DropdownItem>
            <DropdownItem tag="a">Option 2</DropdownItem>
            <DropdownItem tag="a">Option 3</DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </div>
      )
    }
  }
  export default DropdownFlat
  `}
    </code>
  </pre>
)

export const dropdownGradient = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
    Button,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from "reactstrap"
  import { ChevronDown } from "react-feather"
  class DropdownGradient extends React.Component {


    render() {
      return(
        <div className="dropdown mr-1 mb-1 d-inline-block">
        <UncontrolledButtonDropdown>
          <DropdownToggle
            className="bg-gradient-primary"
            color="none"
            caret
            >
            Primary
            <ChevronDown size={15} />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a">Option 1</DropdownItem>
            <DropdownItem tag="a">Option 2</DropdownItem>
            <DropdownItem tag="a">Option 3</DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </div>
      <div className="dropdown mr-1 mb-1 d-inline-block">
        <UncontrolledButtonDropdown>
          <DropdownToggle
            className="bg-gradient-success"
            color="none"
            caret
            >
            Success
            <ChevronDown size={15} />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a">Option 1</DropdownItem>
            <DropdownItem tag="a">Option 2</DropdownItem>
            <DropdownItem tag="a">Option 3</DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </div>
      <div className="dropdown mr-1 mb-1 d-inline-block">
        <UncontrolledButtonDropdown>
          <DropdownToggle
            className="bg-gradient-info"
            color="none"
            caret
            >
            Info
            <ChevronDown size={15} />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a">Option 1</DropdownItem>
            <DropdownItem tag="a">Option 2</DropdownItem>
            <DropdownItem tag="a">Option 3</DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </div>
      <div className="dropdown mr-1 mb-1 d-inline-block">
        <UncontrolledButtonDropdown>
          <DropdownToggle
            className="bg-gradient-danger"
            color="none"
            caret
            >
            Danger
            <ChevronDown size={15} />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a">Option 1</DropdownItem>
            <DropdownItem tag="a">Option 2</DropdownItem>
            <DropdownItem tag="a">Option 3</DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </div>
      <div className="dropdown mr-1 mb-1 d-inline-block">
        <UncontrolledButtonDropdown>
          <DropdownToggle
            className="bg-gradient-warning"
            color="none"
            caret
            >
            Warning
            <ChevronDown size={15} />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a">Option 1</DropdownItem>
            <DropdownItem tag="a">Option 2</DropdownItem>
            <DropdownItem tag="a">Option 3</DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </div>
      <div className="dropdown mr-1 mb-1 d-inline-block">
        <UncontrolledButtonDropdown>
          <DropdownToggle
            className="bg-gradient-light"
            color="none"
            caret
            >
            Light
            <ChevronDown size={15} />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a">Option 1</DropdownItem>
            <DropdownItem tag="a">Option 2</DropdownItem>
            <DropdownItem tag="a">Option 3</DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </div>
      <div className="dropdown mr-1 mb-1 d-inline-block">
        <UncontrolledButtonDropdown>
          <DropdownToggle
            className="bg-gradient-dark"
            color="none"
            caret
            >
            Dark
            <ChevronDown size={15} />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a">Option 1</DropdownItem>
            <DropdownItem tag="a">Option 2</DropdownItem>
            <DropdownItem tag="a">Option 3</DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </div>
      )
    }
  }
  export default DropdownGradient
  `}
    </code>
  </pre>
)

export const dropdownSizes = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
    Button,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Row,
    Col
  } from "reactstrap"
  import { ChevronDown } from "react-feather"
  class DropdownSizes extends React.Component {

    render() {
      return(
        <Row>
        <Col md="6" sm="12">
          <div className="dropdown mr-1 mb-1 d-inline-block">
            <UncontrolledButtonDropdown>
              <DropdownToggle color="primary" size="lg" caret>
                Large
                <ChevronDown size={15} />
                </DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag="a">Option 1</DropdownItem>
                <DropdownItem tag="a">Option 2</DropdownItem>
                <DropdownItem tag="a">Option 3</DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>
          <div className="dropdown mr-1 mb-1 d-inline-block">
            <UncontrolledButtonDropdown>
              <DropdownToggle color="primary" caret>
                Default
                <ChevronDown size={15} />
                </DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag="a">Option 1</DropdownItem>
                <DropdownItem tag="a">Option 2</DropdownItem>
                <DropdownItem tag="a">Option 3</DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>
          <div className="dropdown mr-1 mb-1 d-inline-block">
            <UncontrolledButtonDropdown>
              <DropdownToggle color="primary" size="sm" caret>
                Small
                <ChevronDown size={15} />
                </DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag="a">Option 1</DropdownItem>
                <DropdownItem tag="a">Option 2</DropdownItem>
                <DropdownItem tag="a">Option 3</DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>
        </Col>
        <Col md="6" sm="12">
          <div className="dropdown mr-1 mb-1 d-inline-block">
            <UncontrolledButtonDropdown>
              <Button color="primary" size="lg">
                Large
              </Button>
              <DropdownToggle
                className="dropdown-toggle-split"
                color="primary"
                caret
                size="lg"
                >
                <ChevronDown size={15} />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag="a">Option 1</DropdownItem>
                <DropdownItem tag="a">Option 2</DropdownItem>
                <DropdownItem tag="a">Option 3</DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>{" "}
          <div className="dropdown mr-1 mb-1 d-inline-block">
            <UncontrolledButtonDropdown>
              <Button color="primary">Default</Button>
              <DropdownToggle
                className="dropdown-toggle-split"
                color="primary"
                caret
                >
                <ChevronDown size={15} />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag="a">Option 1</DropdownItem>
                <DropdownItem tag="a">Option 2</DropdownItem>
                <DropdownItem tag="a">Option 3</DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>{" "}
          <div className="dropdown mr-1 mb-1 d-inline-block">
            <UncontrolledButtonDropdown>
              <Button color="primary" size="sm">
                Small
              </Button>
              <DropdownToggle
                className="dropdown-toggle-split"
                color="primary"
                caret
                >
                <ChevronDown size={15} />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag="a">Option 1</DropdownItem>
                <DropdownItem tag="a">Option 2</DropdownItem>
                <DropdownItem tag="a">Option 3</DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>
        </Col>
      </Row>
      )
    }
  }
  export default DropdownSizes
  `}
    </code>
  </pre>
)

export const dropdownDirections = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
    Button,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Row,
    Col
  } from "reactstrap"
  import { ChevronDown } from "react-feather"
  class DropdownDirections extends React.Component {

    render() {
      return(
        <div className="dropdown mr-1 mb-1 d-inline-block">
        <UncontrolledButtonDropdown>
          <DropdownToggle color="primary" caret>
            Drop bottom right
            <ChevronDown size={15} />
            </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem tag="a">Option 1</DropdownItem>
            <DropdownItem tag="a">Option 2</DropdownItem>
            <DropdownItem tag="a">Option 3</DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </div>
      <div className="dropup mr-1 mb-1 d-inline-block">
        <UncontrolledButtonDropdown direction="up">
          <DropdownToggle color="primary" caret>
            Drop Up
            <ChevronDown size={15} />
            </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a">Option 1</DropdownItem>
            <DropdownItem tag="a">Option 2</DropdownItem>
            <DropdownItem tag="a">Option 3</DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </div>
      <div className="dropright mr-1 mb-1 d-inline-block">
        <UncontrolledButtonDropdown direction="right">
          <DropdownToggle color="primary" caret>
            Drop Right
            <ChevronDown size={15} />
            </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a">Option 1</DropdownItem>
            <DropdownItem tag="a">Option 2</DropdownItem>
            <DropdownItem tag="a">Option 3</DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </div>
      <div className="dropleft mr-1 mb-1 d-inline-block">
        <UncontrolledButtonDropdown direction="left">
          <DropdownToggle color="primary" caret>
            Drop Left
            <ChevronDown size={15} />
            </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a">Option 1</DropdownItem>
            <DropdownItem tag="a">Option 2</DropdownItem>
            <DropdownItem tag="a">Option 3</DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
      </div>
      )
    }
  }
  export default DropdownDirections
  `}
    </code>
  </pre>
)

export const dropdownVariations = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,

  } from "reactstrap"

  import {
    Eye,
    Code,
    Wifi,
    WifiOff,
    PhoneOff,
    BellOff,
    Bell,
    VolumeX,
    Volume2,
    ChevronDown
  } from "react-feather"

  const icons = [
    {
      id: 1,
      item: <WifiOff size={15} />
    },
    {
      id: 2,
      item: <VolumeX size={15} />
    },
    {
      id: 3,
      item: <Volume2 size={15} />
    },
    {
      id: 4,
      item: <Bell size={15} />
    },
    {
      id: 5,
      item: <BellOff size={15} />
    },
    {
      id: 6,
      item: <PhoneOff size={15} />
    }
  ]


  class DropdownVariations extends React.Component {

    state = {
      dropdownOpen: false,
      activeIcon: <Wifi size={15} />
    }


  toggleIcon = icon => {
    this.setState({ activeIcon: icon })
  }


    render() {

      const iconItem = icons.map(icon => {
        return (
          <DropdownItem tag="a"
            tag="li"
            key={icon.id}
            onClick={() => this.toggleIcon(icon.item)}
          >
            {icon.item}
          </DropdownItem>
        )
      })
      return(
        <div className="dropup mr-1 mb-1 d-inline-block">
          <UncontrolledButtonDropdown direction="up">
            <DropdownToggle color="primary" caret>
              Group
              <ChevronDown size={15} />
              </DropdownToggle>
            <DropdownMenu>
              <DropdownItem tag="a" header>Group 1</DropdownItem>
              <DropdownItem tag="a">Option 1</DropdownItem>
              <DropdownItem tag="a">Option 2</DropdownItem>
              <DropdownItem tag="a" divider />
              <DropdownItem tag="a" header>Group 2</DropdownItem>
              <DropdownItem tag="a">Option 1</DropdownItem>
              <DropdownItem tag="a">Option 2</DropdownItem>
              <DropdownItem tag="a" divider />
              <DropdownItem tag="a" header>Group 3</DropdownItem>
              <DropdownItem tag="a">Option 1</DropdownItem>
              <DropdownItem tag="a">Option 2</DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </div>
        <div className="dropup dropdown-icon mr-1 mb-1 d-inline-block">
          <UncontrolledButtonDropdown direction="up">
            <Button color="primary">Icons</Button>
            <DropdownToggle
              className="dropdown-toggle-split"
              color="primary"
              caret
            >
              {this.state.activeIcon}
            </DropdownToggle>
            <DropdownMenu tag="ul">{iconItem}</DropdownMenu>
          </UncontrolledButtonDropdown>
        </div>
        <div className="dropup mr-1 mb-1 d-inline-block">
          <UncontrolledButtonDropdown direction="up">
            <DropdownToggle color="primary" caret>
              Form
              <ChevronDown size={15} />
              </DropdownToggle>
            <DropdownMenu>
              <Form className="px-2 py-2">
                <FormGroup>
                  <Label for="ddEmail">Email</Label>
                  <Input
                    type="email"
                    placeholder="Email"
                    name="ddemail"
                    id="ddEmail"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="ddPassword">Password</Label>
                  <Input
                    type="password"
                    placeholder="Password"
                    name="ddPassword"
                    id="ddPassword"
                  />
                </FormGroup>
                <FormGroup>
                  <div className="form-check">
                    <Input
                      type="checkbox"
                      className="form-check-input"
                      name="ddCheck"
                      id="ddCheck"
                    />
                    <Label for="ddCheck">Remember Me</Label>
                  </div>
                </FormGroup>
                <Button color="primary" type="submit">
                  {" "}
                  Submit{" "}
                </Button>
              </Form>
              <DropdownItem tag="a" divider />
              <DropdownItem tag="a" tag="a" href="#">
                {" "}
                New around here? Sign up
              </DropdownItem>
              <DropdownItem tag="a" tag="a" href="#">
                {" "}
                Forgot password?
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </div>
      )
    }
  }
  export default DropdownVariations
  `}
    </code>
  </pre>
)
