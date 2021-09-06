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
import { modalTheme } from "./ModalSourceCode"

const ModalConfig = [
  {
    id: 1,
    title: "Primary",
    bgColor: "bg-primary",
    btnColor: "primary"
  },
  {
    id: 2,
    title: "Success",
    bgColor: "bg-success",
    btnColor: "success"
  },
  {
    id: 3,
    title: "Info",
    bgColor: "bg-info",
    btnColor: "info"
  },
  {
    id: 4,
    title: "Danger",
    bgColor: "bg-danger",
    btnColor: "danger"
  },
  {
    id: 5,
    title: "Warning",
    bgColor: "bg-warning",
    btnColor: "warning"
  },
  {
    id: 6,
    title: "Dark",
    bgColor: "bg-dark",
    btnColor: "dark"
  }
]

class ModalTheme extends React.Component {
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
              color={item.btnColor}
              onClick={() => this.toggleModal(item.id)}
              key={item.title}
              outline
            >
              {item.title}
            </Button.Ripple>
          </div>
          <Modal
            isOpen={this.state.modal === item.id}
            toggle={() => this.toggleModal(item.id)}
            className="modal-dialog-centered"
            key={item.id}
          >
            <ModalHeader
              toggle={() => this.toggleModal(item.id)}
              className={item.bgColor}
            >
              {item.title}
            </ModalHeader>
            <ModalBody>
              Tart lemon drops macaroon oat cake chocolate toffee chocolate bar
              icing. Pudding jelly beans carrot cake pastry gummies cheesecake
              lollipop. I love cookie lollipop cake I love sweet gummi bears
              cupcake dessert.
            </ModalBody>
            <ModalFooter>
              <Button
                color={item.btnColor}
                onClick={() => this.toggleModal(item.id)}
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
            <CardTitle>Modal Themes</CardTitle>
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
              Use class <code>.bg-*</code> with <code>ModalHeader</code> to
              change modal theme.
            </p>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">{renderModal}</TabPane>
              <TabPane className="component-code" tabId="2">
                {modalTheme}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default ModalTheme
