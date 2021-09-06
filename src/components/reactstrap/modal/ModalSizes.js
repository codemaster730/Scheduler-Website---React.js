import React from "react"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from "reactstrap"
import classnames from "classnames"
import { Eye, Code } from "react-feather"
import { modalSizes } from "./ModalSourceCode"

const ModalConfig = [
  {
    id: 1,
    btnTitle: "Extra Small",
    modalTitle: "Extra Small modal",
    modalClass: "modal-xs"
  },
  {
    id: 2,
    btnTitle: "Small Modal",
    modalTitle: "Small Modal",
    modalClass: "modal-sm"
  },
  {
    id: 3,
    btnTitle: "Default Modal",
    modalTitle: "Default Modal",
    modalClass: ""
  },
  {
    id: 4,
    btnTitle: "Large Modal",
    modalTitle: "Large Modal",
    modalClass: "modal-lg"
  },
  {
    id: 5,
    btnTitle: "Extra Large Modal",
    modalTitle: "Extra Large Modal",
    modalClass: "modal-xl"
  }
]

class ModalSizes extends React.Component {
  state = {
    activeTab: "1",
    modal: null
  }

  toggleTab = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab })
    }
  }

  toggleModal = id => {
    if (this.state.modal !== id) {
      this.setState({
        modal: id
      })
    } else {
      this.setState({
        modal: null
      })
    }
  }

  render() {
    const renderModal = ModalConfig.map(item => {
      return (
        <React.Fragment key={item.id}>
          <div className="d-inline-block mr-1 mb-1">
            <Button.Ripple
              color="warning"
              onClick={() => this.toggleModal(item.id)}
              key={item.title}
              outline
            >
              {item.btnTitle}
            </Button.Ripple>
          </div>
          <Modal
            isOpen={this.state.modal === item.id}
            toggle={() => this.toggleModal(item.id)}
            className={`modal-dialog-centered ${item.modalClass}`}
            key={item.id}
          >
            <ModalHeader toggle={() => this.toggleModal(item.id)}>
              {item.modalTitle}
              {item.title}
            </ModalHeader>
            <ModalBody>
              Halvah powder wafer. Chupa chups pie topping carrot cake cake.
              Tootsie roll sesame snaps jelly-o marshmallow marshmallow jelly
              jujubes candy. Chupa chups cheesecake gingerbread chupa chups cake
              candy canes sweet roll.
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                onClick={() => this.toggleModal(item.id)}
                outline
              >
                Accept
              </Button>
            </ModalFooter>
          </Modal>
        </React.Fragment>
      )
    })

    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            <CardTitle>Modal Sizes</CardTitle>
            <div className="views">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "1"
                    })}
                    onClick={() => {
                      this.toggleTab("1")
                    }}
                  >
                    <Eye size={15} />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "2"
                    })}
                    onClick={() => {
                      this.toggleTab("2")
                    }}
                  >
                    <Code size={15} />
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </CardHeader>
          <CardBody>
            <p>
              Use class <code>.modal-[xs/sm/lg/xl]</code> with{" "}
              <code>ModalHeader</code> to change modal Size.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">{renderModal}</TabPane>
              <TabPane className="component-code" tabId="2">
                {modalSizes}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default ModalSizes
