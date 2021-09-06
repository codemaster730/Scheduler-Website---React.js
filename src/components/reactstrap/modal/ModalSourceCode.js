import React from "react"

export const modalBasic = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
  } from "reactstrap"

  class ModalBasic extends React.Component {

    state = {
      modal: false
    }

    toggleModal = () => {
      this.setState(prevState => ({
        modal: !prevState.modal
      }))
    }

    render() {
      return(
        <Button
        color="primary"
        className="btn-block"
        size="lg"
        outline
        onClick={this.toggleModal}
      >
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggleModal}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggleModal}>
            Basic Modal
          </ModalHeader>
          <ModalBody>
            <h5>Check First Paragraph</h5>
            Oat cake ice cream candy chocolate cake chocolate cake
            cotton candy dragée apple pie. Brownie carrot cake candy
            canes bonbon fruitcake topping halvah. Cake sweet roll cake
            cheesecake cookie chocolate cake liquorice.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleModal}>
              Accept
            </Button>{" "}
          </ModalFooter>
        </Modal>
      )
    }
  }
  export default ModalBasic
  `}
    </code>
  </pre>
)

export const modalCentered = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
  } from "reactstrap"

  class ModalBasic extends React.Component {

    state = {
      modal: false
    }

    toggleModal = () => {
      this.setState(prevState => ({
        modal: !prevState.modal
      }))
    }

    render() {
      return(
        <Button
        color="primary"
        className="btn-block"
        size="lg"
        outline
        onClick={this.toggleModal}
      >
        Launch Modal
      </Button>
      <Modal
        isOpen={this.state.modal}
        toggle={this.toggleModal}
        className="modal-dialog-centered"
      >
        <ModalHeader toggle={this.toggleModal}>
          Vertically Centered
        </ModalHeader>
        <ModalBody className="modal-dialog-centered">
          Oat cake ice cream candy chocolate cake chocolate cake
          cotton candy dragée apple pie. Brownie carrot cake candy
          canes bonbon fruitcake topping halvah. Cake sweet roll cake
          cheesecake cookie chocolate cake liquorice.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggleModal}>
            Accept
          </Button>{" "}
        </ModalFooter>
      </Modal>
      )
    }
  }
  export default ModalBasic
  `}
    </code>
  </pre>
)

export const modalBackdrop = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
  } from "reactstrap"

  class modalBackdrop extends React.Component {

    state = {
      modal: false
    }

    toggleModal = () => {
      this.setState(prevState => ({
        modal: !prevState.modal
      }))
    }

    render() {
      return(
        <Button
        color="primary"
        className="btn-block"
        size="lg"
        outline
        onClick={this.toggleModal}
      >
        Launch Modal
      </Button>
      <Modal
        isOpen={this.state.modal}
        toggle={this.toggleModal}
        className="modal-dialog-centered"
        backdrop={false}
      >
        <ModalHeader toggle={this.toggleModal}>
          Vertically Centered
        </ModalHeader>
        <ModalBody className="modal-dialog-centered">
          Candy oat cake topping topping chocolate cake. Icing pudding
          jelly beans I love chocolate carrot cake wafer candy canes.
          Biscuit croissant fruitcake bonbon soufflé.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggleModal}>
            Accept
          </Button>{" "}
        </ModalFooter>
      </Modal>
      )
    }
  }
  export default modalBackdrop
  `}
    </code>
  </pre>
)

export const modalFade = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
  } from "reactstrap"

  class modalFade extends React.Component {

    state = {
      modal: false
    }

    toggleModal = () => {
      this.setState(prevState => ({
        modal: !prevState.modal
      }))
    }

    render() {
      return(
        <Button
        color="primary"
        className="btn-block"
        size="lg"
        outline
        onClick={this.toggleModal}
      >
        Launch Modal
      </Button>
      <Modal
        isOpen={this.state.modal}
        toggle={this.toggleModal}
        className="modal-dialog-centered"
        fade={false}
      >
        <ModalHeader toggle={this.toggleModal}>
          Vertically Centered
        </ModalHeader>
        <ModalBody className="modal-dialog-centered">
          Candy oat cake topping topping chocolate cake. Icing pudding
          jelly beans I love chocolate carrot cake wafer candy canes.
          Biscuit croissant fruitcake bonbon soufflé.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggleModal}>
            Accept
          </Button>{" "}
        </ModalFooter>
      </Modal>
      )
    }
  }
  export default modalFade
  `}
    </code>
  </pre>
)

export const modalTheme = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
  } from "reactstrap"

  class modalTheme extends React.Component {

    state = {
      modal: false
    }

    toggleModal = () => {
      this.setState(prevState => ({
        modal: !prevState.modal
      }))
    }

    render() {
      return(
        <Button
        color="primary"
        className="btn-block"
        size="lg"
        outline
        onClick={this.toggleModal}
      >
        Launch Modal
      </Button>
      <Modal
        isOpen={this.state.modal}
        toggle={this.toggleModal}
        className="modal-dialog-centered"
      >
        <ModalHeader toggle={this.toggleModal} className="bg-primary">
          Primary
        </ModalHeader>
        <ModalBody className="modal-dialog-centered">
        Tart lemon drops macaroon oat cake chocolate toffee chocolate bar icing.
        Pudding jelly beans carrot cake pastry gummies cheesecake lollipop.
        I love cookie lollipop cake I love sweet gummi bears cupcake dessert.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggleModal}>
            Accept
          </Button>{" "}
        </ModalFooter>
      </Modal>
      )
    }
  }
  export default modalTheme
  `}
    </code>
  </pre>
)

export const modalSizes = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
  } from "reactstrap"

  class modalSizes extends React.Component {

    state = {
      modal: false
    }

    toggleModal = () => {
      this.setState(prevState => ({
        modal: !prevState.modal
      }))
    }

    render() {
      return(
        <Button
        color="warning"
        outline
        onClick={this.toggleModal}
      >
        Large Modal
      </Button>
      <Modal
        isOpen={this.state.modal}
        toggle={this.toggleModal}
        className="modal-dialog-centered modal-lg"
      >
        <ModalHeader toggle={this.toggleModal} className="bg-primary">
        Large Modal
        </ModalHeader>
        <ModalBody className="modal-dialog-centered">
        Halvah powder wafer. Chupa chups pie topping carrot cake cake.
        Tootsie roll sesame snaps jelly-o marshmallow marshmallow jelly jujubes candy.
        Chupa chups cheesecake gingerbread chupa chups cake candy canes sweet roll.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggleModal}>
            Accept
          </Button>{" "}
        </ModalFooter>
      </Modal>
      )
    }
  }
  export default modalSizes
  `}
    </code>
  </pre>
)

export const modalForm = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
  } from "reactstrap"

  class ModalForm extends React.Component {

    state = {
      modal: false
    }

    toggleModal = () => {
      this.setState(prevState => ({
        modal: !prevState.modal
      }))
    }

    render() {
      return(
      <Button color="success" outline onClick={this.toggleModal}>
        Launch Modal
      </Button>
      <Modal
        isOpen={this.state.modal}
        toggle={this.toggleModal}
        className="modal-dialog-centered"
      >
        <ModalHeader toggle={this.toggleModal}>
          Login Form
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="email">Email:</Label>
            <Input
              type="email"
              id="email"
              placeholder="Email Address"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password:</Label>
            <Input
              type="password"
              id="password"
              placeholder="Password"
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggleModal}>
            Login
          </Button>{" "}
        </ModalFooter>
      </Modal>
      )
    }
  }
  export default ModalForm
  `}
    </code>
  </pre>
)

export const modalDestructuring = (
  <pre>
    <code className="language-jsx">
      {`
import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap'

class ModalExample extends React.Component {

  state = {
    modal: false,
    unmountOnClose: true
  }

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  changeUnmountOnClose = e => {
    let value = e.target.value
    this.setState({ unmountOnClose: JSON.parse(value) })
  }

    render() {
        return (
          <Form inline onSubmit={e => e.preventDefault()}>
            <FormGroup>
              <Label for="unmountOnClose">UnmountOnClose value</Label>{" "}
              <Input
                type="select"
                name="unmountOnClose"
                id="unmountOnClose"
                onChange={this.changeUnmountOnClose}
              >
                <option value="true">true</option>
                <option value="false">false</option>
              </Input>
            </FormGroup>{" "}
            <Button color="success" outline onClick={this.toggleModal}>
              Launch modal
            </Button>
          </Form>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggleModal}
            className={this.props.className}
            unmountOnClose={this.state.unmountOnClose}
          >
            <ModalHeader toggle={this.toggleModal}>
              Modal title
            </ModalHeader>
            <ModalBody>
              <Input
                type="textarea"
                placeholder="Write something (data should remain in modal if unmountOnClose is set to false)"
                rows={5}
              />
            </ModalBody>
            <ModalFooter>
              <Button outline color="primary" onClick={this.toggleModal}>
                Accept
              </Button>{" "}
            </ModalFooter>
          </Modal>
        )
    }
}

export default ModalExample
        `}
    </code>
  </pre>
)

export const modalFocus = (
  <pre>
    <code className="language-jsx">
      {`
import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap'

class ModalFocus extends React.Component {

  state = {
    modal: false,
    focusAfterClose: true
  }

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  handleSelectChange({ target: { value } }) {
    this.setState({ focusAfterClose: JSON.parse(value) })
  }

    render() {
        return (
          <Form inline onSubmit={e => e.preventDefault()}>
            <FormGroup>
              <Label for="focusAfterClose" className="mr-1">
                Focus After Close
              </Label>{" "}
              <Input
                type="select"
                name="focusAfterClose"
                id="focusAfterClose"
                onChange={this.handleSelectChange}
              >
                <option value="true">Yes</option>
                <option value="fasle">No</option>
              </Input>
            </FormGroup>{" "}
          <Button
            color="success"
            className="ml-1"
            outline
            onClick={this.toggleModal}
          >
            Launch modal
          </Button>
        </Form>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggleModal}
          className={this.props.className}
          returnFocusAfterClose={this.state.focusAfterClose}
        >
          <ModalHeader toggle={this.toggleModal}>
            Modal title
          </ModalHeader>
          <ModalBody>
            <Input
              type="textarea"
              placeholder="Write something (data should remain in modal if unmountOnClose is set to false)"
              rows={5}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" outline onClick={this.toggleModal}>
              Accept
            </Button>{" "}
          </ModalFooter>
        </Modal>
        )
    }
}

export default ModalFocus
        `}
    </code>
  </pre>
)
