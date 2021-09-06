import React from "react"

export const toastTranslucent = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Toast, ToastHeader, ToastBody} from "reactstrap"
import transparentBg from "../../../assets/img/svg/transparent.svg"

class ToastTransclucent extends React.Component {

  render() {
    return(
      <Row>
        <Col md="6" sm="12">
          <div className="p-3 my-2 rounded">
            <Toast>
              <ToastHeader>Reactstrap</ToastHeader>
              <ToastBody>
                This is a toast on a white background — check it out!
              </ToastBody>
            </Toast>
          </div>
        </Col>
        <Col md="6" sm="12">
          <div className="p-3 my-2 rounded bg-docs-transparent-grid">
            <Toast>
              <ToastHeader>Reactstrap</ToastHeader>
              <ToastBody>
                This is a toast on a gridded background — check it
                out!
              </ToastBody>
            </Toast>
          </div>
        </Col>
        <Col md="6" sm="12">
          <div className="p-3 bg-primary my-2 rounded">
            <Toast>
              <ToastHeader>Reactstrap</ToastHeader>
              <ToastBody>
                This is a toast on a primary background — check it
                out!
              </ToastBody>
            </Toast>
          </div>
        </Col>
        <Col md="6" sm="12">
          <div className="p-3 bg-secondary my-2 rounded">
            <Toast>
              <ToastHeader>Reactstrap</ToastHeader>
              <ToastBody>
                This is a toast on a secondary background — check it
                out!
              </ToastBody>
            </Toast>
          </div>
        </Col>
        <Col md="6" sm="12">
          <div className="p-3 bg-success my-2 rounded">
            <Toast>
              <ToastHeader>Reactstrap</ToastHeader>
              <ToastBody>
                This is a toast on a success background — check it
                out!
              </ToastBody>
            </Toast>
          </div>
        </Col>
        <Col md="6" sm="12">
          <div className="p-3 bg-danger my-2 rounded">
            <Toast>
              <ToastHeader>Reactstrap</ToastHeader>
              <ToastBody>
                This is a toast on a danger background — check it out!
              </ToastBody>
            </Toast>
          </div>
        </Col>
        <Col md="6" sm="12">
          <div className="p-3 bg-warning my-2 rounded">
            <Toast>
              <ToastHeader>Reactstrap</ToastHeader>
              <ToastBody>
                This is a toast on a warning background — check it
                out!
              </ToastBody>
            </Toast>
          </div>
        </Col>
        <Col md="6" sm="12">
          <div className="p-3 bg-info my-2 rounded">
            <Toast>
              <ToastHeader>Reactstrap</ToastHeader>
              <ToastBody>
                This is a toast on an info background — check it out!
              </ToastBody>
            </Toast>
          </div>
        </Col>

        <Col md="6" sm="12">
          <div className="p-3 bg-dark my-2 rounded">
            <Toast>
              <ToastHeader>Reactstrap</ToastHeader>
              <ToastBody>
                This is a toast on an dark background — check it out!
              </ToastBody>
            </Toast>
          </div>
        </Col>

        <Col md="6" sm="12">
          <div
            className="p-3 my-2 rounded"
            style={{
              background: url({transparentBg})
            }}
          >
            <Toast>
              <ToastHeader>Reactstrap</ToastHeader>
              <ToastBody>
                This is a toast on an transparent background — check it out!
              </ToastBody>
            </Toast>
          </div>
        </Col>
      </Row>
    )
  }
}
export default ToastTransclucent
`}
    </code>
  </pre>
)

export const toastBasic = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Toast, ToastHeader, ToastBody} from "reactstrap"

state={
  show : false
}

toggleToast = () => {
  this.setState({
    show: !this.state.show
  })
}

class ToastBasic extends React.Component {

  render() {
    return(
      <Button color="primary" onClick={this.toggleToast}>
      Launch Toast
      </Button>

      <Toast isOpen={this.state.show}>
        <ToastHeader toggle={this.toggle}>Toast title</ToastHeader>
        <ToastBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </ToastBody>
      </Toast>
    )
  }
}
export default ToastBasic
`}
    </code>
  </pre>
)

export const toastHeaderIcons = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Toast, ToastHeader, ToastBody} from "reactstrap"
import logo from "../../../assets/img/logo/logo.png"


class ToastHeaderIcons extends React.Component {

  render() {
    return(
      <Row>
        <Col md="6" sm="12">
          <Toast>
            <ToastHeader icon="primary">Vuexy</ToastHeader>
            <ToastBody>
              This is a toast with a primary icon — check it out!
            </ToastBody>
          </Toast>
        </Col>
        <Col md="6" sm="12">
          <Toast>
            <ToastHeader icon="success">Vuexy</ToastHeader>
            <ToastBody>
              This is a toast with a success icon — check it out!
            </ToastBody>
          </Toast>
        </Col>
        <Col md="6" sm="12">
          <Toast>
            <ToastHeader icon="info">Vuexy</ToastHeader>
            <ToastBody>
              This is a toast with a info icon — check it out!
            </ToastBody>
          </Toast>
        </Col>
        <Col md="6" sm="12">
          <Toast>
            <ToastHeader icon="danger">Vuexy</ToastHeader>
            <ToastBody>
              This is a toast with a danger icon — check it out!
            </ToastBody>
          </Toast>
        </Col>
        <Col md="6" sm="12">
          <Toast>
            <ToastHeader icon="warning">Vuexy</ToastHeader>
            <ToastBody>
              This is a toast with a warning icon — check it out!
            </ToastBody>
          </Toast>
        </Col>
        <Col md="6" sm="12">
          <Toast>
            <ToastHeader icon="dark">Vuexy</ToastHeader>
            <ToastBody>
              This is a toast with a dark icon — check it out!
            </ToastBody>
          </Toast>
        </Col>

        <Col md="6" sm="12">
          <Toast>
            <ToastHeader icon={<Spinner size="sm" color="primary" />}>
              Vuexy
            </ToastHeader>
            <ToastBody>
              This is a toast with a spinner — check it out!
            </ToastBody>
          </Toast>
        </Col>

        <Col md="6" sm="12">
          <Toast>
            <ToastHeader>
              <img src={logo} alt="logo" className="mr-1" />
              Vuexy
            </ToastHeader>
            <ToastBody>
              This is a toast with a logo — check it out!
            </ToastBody>
          </Toast>
      </Col>
      </Row>
    )
  }
}
export default ToastHeaderIcons
`}
    </code>
  </pre>
)
