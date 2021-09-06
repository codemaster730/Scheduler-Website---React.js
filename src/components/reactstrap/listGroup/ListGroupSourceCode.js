import React from "react"

export const listGroupSimple = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
  ListGroup,
  ListGroupItem
  } from "reactstrap"

  class ListGroupSimple extends React.Component {
    render() {
      return(
        <ListGroup>
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Morbi leo risus</ListGroupItem>
          <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
      )
    }
  }
  export default ListGroupSimple
  `}
    </code>
  </pre>
)

export const listGroupDisabled = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
  ListGroup,
  ListGroupItem
  } from "reactstrap"

  class ListGroupDisabled extends React.Component {
    render() {
      return(
        <ListGroup>
          <ListGroupItem disabled>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Morbi leo risus</ListGroupItem>
          <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
      )
    }
  }
  export default ListGroupDisabled
  `}
    </code>
  </pre>
)

export const listGroupIcons = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
  ListGroup,
  ListGroupItem
  } from "reactstrap"
  import {Facebook, Instagram, Twitter } from "react-feather"

  class ListGroupIcons extends React.Component {
    render() {
      return(
        <ListGroup>
          <ListGroupItem>
            <p className="float-left mb-0 mr-1">
              <Instagram size={16} />
            </p>
            <span>Cupcake sesame snaps dessert marzipan.</span>
          </ListGroupItem>
          <ListGroupItem>
            <p className="float-left mb-0 mr-1">
              <Facebook size={16} />
            </p>
            <span>
              Jelly beans jelly-o gummi bears chupa chups marshmallow.
            </span>
          </ListGroupItem>
          <ListGroupItem>
            <p className="float-left mb-0 mr-1">
              <Twitter size={16} />
            </p>
            <span>Bonbon macaroon gummies pie jelly.</span>
          </ListGroupItem>
        </ListGroup>
      )
    }
  }
  export default ListGroupIcons
  `}
    </code>
  </pre>
)

export const listGroupBadges = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
  Badge,
  ListGroup,
  ListGroupItem
  } from "reactstrap"
  import {Facebook, Instagram, Twitter } from "react-feather"

  class ListGroupBadges extends React.Component {
    render() {
      return(
        <ListGroup>
          <ListGroupItem className="d-flex justify-content-between align-items-center">
            <span>Biscuit jelly beans macaroon danish pudding.</span>
            <Badge color="primary" pill>
              4
            </Badge>
          </ListGroupItem>
          <ListGroupItem className="d-flex justify-content-between align-items-center">
            <span>chocolate cheesecake candy.</span>
            <Badge color="primary" pill>
              2
            </Badge>
          </ListGroupItem>
          <ListGroupItem className="d-flex justify-content-between align-items-center">
            <span>Oat cake icing pastry pie carrot.</span>
            <Badge color="primary" pill>
              1
            </Badge>
          </ListGroupItem>
      </ListGroup>
      )
    }
  }
  export default ListGroupBadges
  `}
    </code>
  </pre>
)

export const listGroupTag = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
  Badge,
  ListGroup,
  ListGroupItem
  } from "reactstrap"

  class ListGroupTag extends React.Component {
    render() {
      return(
        <ListGroup tag="div">
          <ListGroupItem tag="a" href="#" active>
            Cras justo odio
          </ListGroupItem>
          <ListGroupItem tag="a" href="#">
            Dapibus ac facilisis in
          </ListGroupItem>
          <ListGroupItem tag="a" href="#">
            Morbi leo risus
          </ListGroupItem>
          <ListGroupItem tag="a" href="#">
            Porta ac consectetur ac
          </ListGroupItem>
          <ListGroupItem tag="a" href="#" disabled>
            Vestibulum at eros
          </ListGroupItem>
      </ListGroup>
      )
    }
  }
  export default ListGroupTag
  `}
    </code>
  </pre>
)

export const listGroupContextual = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
  Badge,
  ListGroup,
  ListGroupItem
  } from "reactstrap"

  class ListGroupContextual extends React.Component {
    render() {
      return(
        <ListGroup>
          <ListGroupItem color="primary">
            A simple primary list group item
          </ListGroupItem>
          <ListGroupItem color="success">
            A simple success list group item
          </ListGroupItem>
          <ListGroupItem color="info">
            A simple info list group item
          </ListGroupItem>
          <ListGroupItem color="danger">
            A simple danger list group item
          </ListGroupItem>
          <ListGroupItem color="warning">
            A simple warning list group item
          </ListGroupItem>
          <ListGroupItem color="light">
            A simple light list group item
          </ListGroupItem>
          <ListGroupItem color="dark">
            A simple dark list group item
          </ListGroupItem>
      </ListGroup>
      )
    }
  }
  export default ListGroupContextual
  `}
    </code>
  </pre>
)

export const listGroupCustom = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
  Badge,
  ListGroup,
  ListGroupItem
  } from "reactstrap"

  class ListGroupCustom extends React.Component {
    render() {
      return(
        <ListGroup>
          <ListGroupItem active>
            <div className="d-flex justify-content-between w-100">
              <h5 className="mb-1 text-white">
                List group item heading
              </h5>
              <small>3 days ago</small>
            </div>
            <p className="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas
              sed diam eget risus varius blandit.
            </p>
            <small>Donec id elit non mi porta.</small>
          </ListGroupItem>
          <ListGroupItem>
            <div className="d-flex justify-content-between w-100">
              <h5 className="mb-1">List group item heading</h5>
              <small>3 days ago</small>
            </div>
            <p className="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas
              sed diam eget risus varius blandit.
            </p>
            <small>Donec id elit non mi porta.</small>
          </ListGroupItem>
          <ListGroupItem>
            <div className="d-flex justify-content-between w-100">
              <h5 className="mb-1">List group item heading</h5>
              <small>3 days ago</small>
            </div>
            <p className="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas
              sed diam eget risus varius blandit.
            </p>
            <small>Donec id elit non mi porta.</small>
          </ListGroupItem>
      </ListGroup>
      )
    }
  }
  export default ListGroupCustom
  `}
    </code>
  </pre>
)

export const listGroupFlush = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
  ListGroup,
  ListGroupItem
  } from "reactstrap"

  class ListGroupFlush extends React.Component {
    render() {
      return(
        <ListGroup flush>
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Morbi leo risus</ListGroupItem>
          <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
          <ListGroupItem>
            Lorem ipsum Quibusdam, voluptas.
          </ListGroupItem>
        </ListGroup>
      )
    }
  }
  export default ListGroupFlush
  `}
    </code>
  </pre>
)

export const listGroupHorizontal = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
  ListGroup,
  ListGroupItem
  } from "reactstrap"

  class ListGroupHorizontal extends React.Component {
    render() {
      return(
        <ListGroup className="list-group-horizontal-sm">
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Morbi leo risus</ListGroupItem>
          <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
          <ListGroupItem>
            Lorem ipsum Quibusdam, voluptas.
          </ListGroupItem>
        </ListGroup>
      )
    }
  }
  export default ListGroupHorizontal
  `}
    </code>
  </pre>
)

export const listGroupNavigation = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  TabPane,
  TabContent
  } from "reactstrap"
  import classnames from "classnames"

  class ListGroupNavigation extends React.Component {

    state = {
      activeList: "1"
    }

    toggleList = list => {
      if (this.state.activeList !== list) {
        this.setState({ activeList: list })
      }
    }

    render() {
      return(
        <Row>
          <Col md="4" sm="12">
            <ListGroup tag="div">
            <ListGroupItem
            className={classnames({
              active: this.state.activeList === "1"
            })}
            onClick={() => this.toggleList("1")}
            action
          >
            Home
          </ListGroupItem>
          <ListGroupItem
            className={classnames({
              active: this.state.activeList === "2"
            })}
            onClick={() => this.toggleList("2")}
            action
          >
            Profile
          </ListGroupItem>
          <ListGroupItem
            className={classnames({
              active: this.state.activeList === "3"
            })}
            onClick={() => this.toggleList("3")}
            action
          >
            Messages
          </ListGroupItem>
            </ListGroup>
          </Col>
          <Col md="8" sm="12" className="mt-1">
            <TabContent activeTab={this.state.activeList}>
              <TabPane tabId="1">
                Croissant jelly-o halvah chocolate sesame snaps. Brownie
                caramels candy canes chocolate cake marshmallow icing
                lollipop I love.
              </TabPane>
              <TabPane tabId="2">
                Jelly beans topping I love chocolate cake. Lemon drops
                jujubes jelly I love I love marshmallow gummies icing.
                Liquorice jelly-o lemon drops sugar plum.
              </TabPane>
              <TabPane tabId="3">
                Wafer cheesecake cheesecake. Pastry bonbon chocolate
                pastry pudding topping sweet roll lollipop. I love
                macaroon gummi bears cookie topping chocolate bar
                carrot.
              </TabPane>
              <TabPane tabId="4">
                CCaramels chocolate lollipop marshmallow croissant jelly
                beans jelly donut I love. Gummies toffee marshmallow ice
                cream biscuit. Candy sweet cupcake.
              </TabPane>
            </TabContent>
          </Col>
      </Row>
      )
    }
  }
  export default ListGroupNavigation
  `}
    </code>
  </pre>
)
