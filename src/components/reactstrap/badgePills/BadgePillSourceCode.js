import React from "react"

export const badgePillLight = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Badge} from "reactstrap"

class BadgePillsLight extends React.Component {

  render() {
    return(
      <Badge pill color="light-primary">Primary</Badge>
      <Badge pill color="light-success">Success</Badge>
      <Badge pill color="light-info">Info</Badge>
      <Badge pill color="light-danger">Danger</Badge>
      <Badge pill color="light-warning">Warning</Badge>
    )
  }
}
export default BadgePillsLight
`}
    </code>
  </pre>
)

export const badgePillGlow = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Badge} from "reactstrap"

class BadgeGlow extends React.Component {

  render() {
    return(
      <Badge pill className="badge-glow" color="primary">Primary</Badge>
      <Badge pill className="badge-glow" color="success">Success</Badge>
      <Badge pill className="badge-glow" color="info">Info</Badge>
      <Badge pill className="badge-glow" color="danger">Danger</Badge>
      <Badge pill className="badge-glow" color="warning">Warning</Badge>
      <Badge pill className="badge-glow" color="dark">Dark</Badge>
    )
  }
}
export default BadgeGlow
`}
    </code>
  </pre>
)

export const badgePillContextual = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Badge} from "reactstrap"

class BadgeContextual extends React.Component {

  render() {
    return(
      <Badge pill color="primary">Primary</Badge>
      <Badge pill color="success">Success</Badge>
      <Badge pill color="info">Info</Badge>
      <Badge pill color="danger">Danger</Badge>
      <Badge pill color="warning">Warning</Badge>
      <Badge pill color="dark">Dark</Badge>
    )
  }
}
export default BadgeContextual
`}
    </code>
  </pre>
)

export const badgePillIcons = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Badge} from "reactstrap"
import {
  Facebook,
  Instagram,
  GitHub,
  Twitter,
  Sun
} from "react-feather"

class BadgePillIcons extends React.Component {

  render() {
    return(
      <Badge pill color="primary" className="mr-1 mb-1">
        <Facebook size={12} />
      </Badge>
      <Badge pill color="success" className="mr-1 mb-1">
        <Instagram size={12} />
      </Badge>
      <Badge pill color="info" className="mr-1 mb-1">
        <Twitter size={12} />
      </Badge>
      <Badge pill color="danger" className="mr-1 mb-1">
        <GitHub size={12} />
      </Badge>
      <Badge pill color="warning" className="mr-1 mb-1">
        <Sun size={12} />
      </Badge>
    )
  }
}
export default BadgePillIcons
`}
    </code>
  </pre>
)

export const badgePillNotification = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Badge} from "reactstrap"
import {
  Facebook,
  Instagram,
  Twitter,
} from "react-feather"

class BadgeNotification extends React.Component {

  render() {
    return(
      <div className="d-inline-block position-relative mr-2">
        <Badge pill color="primary" className="badge-up">
          <Facebook size={12} />
        </Badge>
    </div>
    <div className="d-inline-block position-relative mr-2">
      <Badge pill color="success" className="badge-up">
        <Instagram size={12} />
      </Badge>
    </div>
    <div className="d-inline-block position-relative">
      <Badge pill color="info" className="badge-up">
        <Twitter size={12} />
      </Badge>
    </div>
    )
  }
}
export default BadgeNotification
`}
    </code>
  </pre>
)

export const badgePillLink = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Badge} from "reactstrap"
import {
  Link
} from "react-feather"

class BadgePillLink extends React.Component {

  render() {
    return(
      <Badge pill href="#" color="primary">
        <Link size={12} />
        Link Badge
      </Badge>
    )
  }
}
export default BadgePillLink
`}
    </code>
  </pre>
)

export const badgePillBlock = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Badge} from "reactstrap"

class BadgePillBlock extends React.Component {

  render() {
    return(
      <Badge color="primary" pill className="block">
        Block Badge Pill
      </Badge>
    )
  }
}
export default BadgePillBlock
`}
    </code>
  </pre>
)

export const badgePillSizes = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Badge} from "reactstrap"

class BadgePillSizes extends React.Component {

  render() {
    return(
      <Badge color="primary" pill className="badge-xl">
        <span>Extra Large</span>
      </Badge>
      <Badge color="primary" pill className="badge-lg">
        <span>Large</span>
      </Badge>
      <Badge color="primary" pill className="badge-md">
        <span>Medium</span>
      </Badge>
      <Badge color="primary" pill className="badge-sm">
        <span>Small</span>
      </Badge>
    )
  }
}
export default BadgePillSizes
`}
    </code>
  </pre>
)
