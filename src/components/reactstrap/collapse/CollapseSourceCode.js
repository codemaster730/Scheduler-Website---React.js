import React from "react"

export const accordion = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Collapse} from "reactstrap"

const collapseItems = [
  {
    id: 1,
    title: "Accordion Item 1",
    content:
      "Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping powder candy. Sugar plum brownie brownie cotton candy."
  },
  {
    id: 2,
    title: "Accordion Item 2",
    content:
      "Jelly-o brownie marshmallow soufflé I love jelly beans oat cake. I love gummies chocolate bar marshmallow sugar plum."
  },
  {
    id: 3,
    title: "Accordion Item 3",
    content:
      "Pudding lollipop dessert chocolate gingerbread. Cake cupcake bonbon cupcake marshmallow. Gummi bears carrot cake bonbon cake."
  },
  {
    id: 4,
    title: "Accordion Item 4",
    content:
      "Brownie sweet carrot cake dragée caramels fruitcake. Gummi bears tootsie roll croissant gingerbread dragée tootsie roll."
  }
]

class Accordion extends React.Component {

  state = { collapseID: ""}

  toggleCollapse = collapseID => {
      this.setState(prevState => ({
        collapseID: prevState.collapseID !== collapseID ? collapseID : ""
      }))
    }


  render() {

      const accordionItems = collapseItems.map(collapseItem => {
          return (
            <Card
              key={collapseItem.id}
              onClick={() => this.toggleCollapse(collapseItem.id)}
            >
              <CardHeader>
                <CardTitle className="lead collapse-title collapsed">
                  {collapseItem.title}
                </CardTitle>
              </CardHeader>
              <Collapse
                isOpen={collapseItem.id === this.state.collapseID}
                onEntering={this.onEntering}
                onEntered={this.onEntered}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <CardBody>{collapseItem.content}</CardBody>
              </Collapse>
            </Card>
          )
        })

    return(
      <div className="collapse-bordered vx-collapse collapse-icon accordion-icon-rotate">
      {accordionItems}
    </div>
    )
  }
}
export default Accordion`}
    </code>
  </pre>
)

export const accordionShadow = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Collapse} from "reactstrap"
import classnames from "classnames"

const collapseItems = [
  {
    id: 1,
    title: "Accordion Item 1",
    content:
      "Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping powder candy. Sugar plum brownie brownie cotton candy."
  },
  {
    id: 2,
    title: "Accordion Item 2",
    content:
      "Jelly-o brownie marshmallow soufflé I love jelly beans oat cake. I love gummies chocolate bar marshmallow sugar plum."
  },
  {
    id: 3,
    title: "Accordion Item 3",
    content:
      "Pudding lollipop dessert chocolate gingerbread. Cake cupcake bonbon cupcake marshmallow. Gummi bears carrot cake bonbon cake."
  },
  {
    id: 4,
    title: "Accordion Item 4",
    content:
      "Brownie sweet carrot cake dragée caramels fruitcake. Gummi bears tootsie roll croissant gingerbread dragée tootsie roll."
  }
]

class AccordionShadow extends React.Component {

  state = { collapseID: ""}

  toggleCollapse = collapseID => {
      this.setState(prevState => ({
        collapseID: prevState.collapseID !== collapseID ? collapseID : ""
      }))
    }


  render() {

      const accordionShadowItems = collapseItems.map(collapseItem => {
          return (
            <Card
              className={classnames({
                open: collapseItem.id === this.state.collapseID
              })}
              key={collapseItem.id}
              onClick={() => this.toggleCollapse(collapseItem.id)}
            >
              <CardHeader>
                <CardTitle className="lead collapse-title collapsed">
                  {collapseItem.title}
                </CardTitle>
              </CardHeader>
              <Collapse
                isOpen={collapseItem.id === this.state.collapseID}
                onEntering={this.onEntering}
                onEntered={this.onEntered}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <CardBody>{collapseItem.content}</CardBody>
              </Collapse>
            </Card>
          )
        })

    return(
      <div className="collapse-bordered vx-collapse collapse-icon accordion-icon-rotate accordion-shadow">
      {accordionShadowItems}
    </div>
    )
  }
}
export default AccordionShadow`}
    </code>
  </pre>
)

export const accordionBorder = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Collapse} from "reactstrap"

const collapseItems = [
  {
    id: 1,
    title: "Accordion Item 1",
    content:
      "Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping powder candy. Sugar plum brownie brownie cotton candy."
  },
  {
    id: 2,
    title: "Accordion Item 2",
    content:
      "Jelly-o brownie marshmallow soufflé I love jelly beans oat cake. I love gummies chocolate bar marshmallow sugar plum."
  },
  {
    id: 3,
    title: "Accordion Item 3",
    content:
      "Pudding lollipop dessert chocolate gingerbread. Cake cupcake bonbon cupcake marshmallow. Gummi bears carrot cake bonbon cake."
  },
  {
    id: 4,
    title: "Accordion Item 4",
    content:
      "Brownie sweet carrot cake dragée caramels fruitcake. Gummi bears tootsie roll croissant gingerbread dragée tootsie roll."
  }
]

class AccordionBorder extends React.Component {

  state = { collapseID: ""}

  toggleCollapse = collapseID => {
      this.setState(prevState => ({
        collapseID: prevState.collapseID !== collapseID ? collapseID : ""
      }))
    }


  render() {

      const accordionBorderItems = collapseItems.map(collapseItem => {
          return (
            <Card
              className="collapse-border-item"
              key={collapseItem.id}
              onClick={() => this.toggleCollapse(collapseItem.id)}
            >
              <CardHeader>
                <CardTitle className="lead collapse-title collapsed">
                  {collapseItem.title}
                </CardTitle>
              </CardHeader>
              <Collapse
                isOpen={collapseItem.id === this.state.collapseID}
                onEntering={this.onEntering}
                onEntered={this.onEntered}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <CardBody>{collapseItem.content}</CardBody>
              </Collapse>
            </Card>
          )
        })

    return(
      <div className="collapse-bordered vx-collapse collapse-icon accordion-icon-rotate collapse-border">
      {accordionBorderItems}
    </div>
    )
  }
}
export default AccordionBorder`}
    </code>
  </pre>
)

export const accordionMargin = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Collapse} from "reactstrap"

const collapseItems = [
  {
    id: 1,
    title: "Accordion Item 1",
    content:
      "Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping powder candy. Sugar plum brownie brownie cotton candy."
  },
  {
    id: 2,
    title: "Accordion Item 2",
    content:
      "Jelly-o brownie marshmallow soufflé I love jelly beans oat cake. I love gummies chocolate bar marshmallow sugar plum."
  },
  {
    id: 3,
    title: "Accordion Item 3",
    content:
      "Pudding lollipop dessert chocolate gingerbread. Cake cupcake bonbon cupcake marshmallow. Gummi bears carrot cake bonbon cake."
  },
  {
    id: 4,
    title: "Accordion Item 4",
    content:
      "Brownie sweet carrot cake dragée caramels fruitcake. Gummi bears tootsie roll croissant gingerbread dragée tootsie roll."
  }
]

class AccordionMargin extends React.Component {

  state = { collapseID: ""}

  toggleCollapse = collapseID => {
      this.setState(prevState => ({
        collapseID: prevState.collapseID !== collapseID ? collapseID : ""
      }))
    }


  render() {

      const accordionMarginItems = collapseItems.map(collapseItem => {
          return (
            <Card
              key={collapseItem.id}
              onClick={() => this.toggleCollapse(collapseItem.id)}
            >
              <CardHeader>
                <CardTitle className="lead collapse-title collapsed">
                  {collapseItem.title}
                </CardTitle>
              </CardHeader>
              <Collapse
                isOpen={collapseItem.id === this.state.collapseID}
                onEntering={this.onEntering}
                onEntered={this.onEntered}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <CardBody>{collapseItem.content}</CardBody>
              </Collapse>
            </Card>
          )
        })

    return(
      <div className="vx-collapse collapse-icon accordion-icon-rotate">
      {accordionMarginItems}
    </div>
    )
  }
}
export default AccordionMargin`}
    </code>
  </pre>
)

export const accordionHover = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Collapse} from "reactstrap"

const collapseItems = [
  {
    id: 1,
    title: "Accordion Item 1",
    content:
      "Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping powder candy. Sugar plum brownie brownie cotton candy."
  },
  {
    id: 2,
    title: "Accordion Item 2",
    content:
      "Jelly-o brownie marshmallow soufflé I love jelly beans oat cake. I love gummies chocolate bar marshmallow sugar plum."
  },
  {
    id: 3,
    title: "Accordion Item 3",
    content:
      "Pudding lollipop dessert chocolate gingerbread. Cake cupcake bonbon cupcake marshmallow. Gummi bears carrot cake bonbon cake."
  },
  {
    id: 4,
    title: "Accordion Item 4",
    content:
      "Brownie sweet carrot cake dragée caramels fruitcake. Gummi bears tootsie roll croissant gingerbread dragée tootsie roll."
  }
]

class AccordionHover extends React.Component {

  state = { collapseID: ""}

  toggleCollapse = collapseID => {
      this.setState(prevState => ({
        collapseID: prevState.collapseID !== collapseID ? collapseID : ""
      }))
    }


  render() {

      const accordionHoverItems = collapseItems.map(collapseItem => {
          return (
            <Card
              key={collapseItem.id}
              onClick={() => this.toggleCollapse(collapseItem.id)}
            >
              <CardHeader>
                <CardTitle className="lead collapse-title collapsed">
                  {collapseItem.title}
                </CardTitle>
              </CardHeader>
              <Collapse
                isOpen={collapseItem.id === this.state.collapseID}
                onEntering={this.onEntering}
                onEntered={this.onEntered}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <CardBody>{collapseItem.content}</CardBody>
              </Collapse>
            </Card>
          )
        })

    return(
      <div className="vx-collapse collapse-icon accordion-icon-rotate">
      {accordionHoverItems}
    </div>
    )
  }
}
export default AccordionHover
  `}
    </code>
  </pre>
)

export const collapseUncontrolled = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {UncontrolledCollaspe} from "reactstrap"

class CollapseUncontrolled extends React.Component {

  render() {
    return(
      <div className="vx-collapse collapse-bordered collapse-icon accordion-icon-rotate">
        <Card>
          <CardHeader id="item-1">
            <CardTitle className="lead collapse-title collapsed">
              Collapse Item 1
            </CardTitle>
          </CardHeader>
          <UncontrolledCollapse toggler="#item-1">
            <CardBody>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellat, voluptates?Lorem ipsum dolor sit amet.
            </CardBody>
          </UncontrolledCollapse>
        </Card>
        <Card>
          <CardHeader id="item-2">
            <CardTitle className="lead collapse-title collapsed">
              Collapse Item 2
            </CardTitle>
          </CardHeader>
          <UncontrolledCollapse toggler="#item-2">
            <CardBody>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellat, voluptates?Lorem ipsum dolor sit amet.
            </CardBody>
          </UncontrolledCollapse>
        </Card>
        <Card>
          <CardHeader id="item-3">
            <CardTitle className="lead collapse-title collapsed">
              Collapse Item 3
            </CardTitle>
          </CardHeader>
          <UncontrolledCollapse toggler="#item-3">
            <CardBody>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellat, voluptates?Lorem ipsum dolor sit amet.
            </CardBody>
          </UncontrolledCollapse>
        </Card>
        <Card>
          <CardHeader id="item-4">
            <CardTitle className="lead collapse-title collapsed">
              Collapse Item 4
            </CardTitle>
          </CardHeader>
          <UncontrolledCollapse toggler="#item-4">
            <CardBody>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellat, voluptates?Lorem ipsum dolor sit amet.
            </CardBody>
          </UncontrolledCollapse>
        </Card>
    </div>
    )
  }
}
export default CollapseUncontrolled
  `}
    </code>
  </pre>
)

export const collapseDefault = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Collaspe} from "reactstrap"

const collapseItems = [
  {
    id: 0,
    title: "Collapse Item 1",
    content:
      "Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping powder candy. Sugar plum brownie brownie cotton candy."
  },
  {
    id: 1,
    title: "Collapse Item 2",
    content:
      "Jelly-o brownie marshmallow soufflé I love jelly beans oat cake. I love gummies chocolate bar marshmallow sugar plum."
  },
  {
    id: 2,
    title: "Collapse Item 3",
    content:
      "Pudding lollipop dessert chocolate gingerbread. Cake cupcake bonbon cupcake marshmallow. Gummi bears carrot cake bonbon cake."
  },
  {
    id: 3,
    title: "Collapse Item 4",
    content:
      "Brownie sweet carrot cake dragée caramels fruitcake. Gummi bears tootsie roll croissant gingerbread dragée tootsie roll."
  }
]

class CollapseDefault extends React.Component {

  state = {
    collapseItems: []
  }

  toggleCollapse = collapseID => {
    let index = this.state.collapseItems.indexOf(collapseID)
    if (index >= 0) {
      let items = this.state.collapseItems
      items.splice(index, index + 1)
      this.setState({ collapseItems: items })
    } else {
      let items = this.state.collapseItems
      items.push(collapseID)
      this.setState({ collapseItems: items })
    }
  }

  render() {

    const renderCollapse = collapseItems.map(collapseItem => {
      return (
        <Card
          key={collapseItem.id}
          onClick={() => this.toggleCollapse(collapseItem.id)}
        >
          <CardHeader>
            <CardTitle className="lead collapse-title collapsed">
              {collapseItem.title}
            </CardTitle>
          </CardHeader>
          <Collapse
            isOpen={this.state.collapseItems.includes(collapseItem.id)}
            onEntering={this.onEntering}
            onEntered={this.onEntered}
            onExiting={this.onExiting}
            onExited={this.onExited}
          >
            <CardBody>{collapseItem.content}</CardBody>
          </Collapse>
        </Card>
      )
    })

    return(
      <div className="vx-collapse collapse-bordered collapse-icon accordion-icon-rotate">
        {renderCollapse}
      </div>
    )
  }
}
export default CollapseDefault
  `}
    </code>
  </pre>
)
