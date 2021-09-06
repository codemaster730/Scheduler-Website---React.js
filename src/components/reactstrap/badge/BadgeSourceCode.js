import React from "react"

export const badgeContextual = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Badge} from "reactstrap"

class BadgeContextual extends React.Component {

  render() {
    return(
      <Badge color="primary">Primary</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="info">Info</Badge>
      <Badge color="danger">Danger</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="dark">Dark</Badge>
    )
  }
}
export default BadgeContextual
`}
    </code>
  </pre>
)

export const badgeGlow = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Badge} from "reactstrap"

class BadgeGlow extends React.Component {

  render() {
    return(
      <Badge className="badge-glow" color="primary">Primary</Badge>
      <Badge className="badge-glow" color="success">Success</Badge>
      <Badge className="badge-glow" color="info">Info</Badge>
      <Badge className="badge-glow" color="danger">Danger</Badge>
      <Badge className="badge-glow" color="warning">Warning</Badge>
      <Badge className="badge-glow" color="dark">Dark</Badge>
    )
  }
}
export default BadgeGlow
`}
    </code>
  </pre>
)

export const badgeLight = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Badge} from "reactstrap"

class BadgeLight extends React.Component {

  render() {
    return(
      <Badge color="light-primary">Primary</Badge>
      <Badge color="light-success">Success</Badge>
      <Badge color="light-info">Info</Badge>
      <Badge color="light-danger">Danger</Badge>
      <Badge color="light-warning">Warning</Badge>
    )
  }
}
export default BadgeLight
`}
    </code>
  </pre>
)

export const badgeIcons = (
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

class BadgeIcons extends React.Component {

  render() {
    return(
      <Badge color="primary" className="mr-1 mb-1">
        <Facebook size={12} />
        <span>Primary</span>
      </Badge>
      <Badge color="success" className="mr-1 mb-1">
        <Instagram size={12} />
        <span>Success</span>
      </Badge>
      <Badge color="info" className="mr-1 mb-1">
        <Twitter size={12} />
        <span>Info</span>
      </Badge>
      <Badge color="danger" className="mr-1 mb-1">
        <GitHub size={12} />
        <span>Danger</span>
      </Badge>
      <Badge color="warning" className="mr-1 mb-1">
        <Sun size={12} />
        <span>Warning</span>
      </Badge>
    )
  }
}
export default BadgeIcons
`}
    </code>
  </pre>
)

export const badgeSquareIcons = (
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
class BadgeSquareIcons extends React.Component {

  render() {
    return(
      <Badge color="primary" className="mr-1 mb-1 badge-square">
        <Facebook size={12} />
        <span>Primary</span>
      </Badge>
      <Badge color="success" className="mr-1 mb-1 badge-square">
        <Instagram size={12} />
        <span>Success</span>
      </Badge>
      <Badge color="info" className="mr-1 mb-1 badge-square">
        <Twitter size={12} />
        <span>Info</span>
      </Badge>
      <Badge color="danger" className="mr-1 mb-1 badge-square">
        <GitHub size={12} />
        <span>Danger</span>
      </Badge>
      <Badge color="warning" className="mr-1 mb-1 badge-square">
        <Sun size={12} />
        <span>Warning</span>
      </Badge>
    )
  }
}
export default BadgeSquareIcons
`}
    </code>
  </pre>
)

export const badgeIconsOnly = (
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

class BadgeIconsOnly extends React.Component {

  render() {
    return(
      <Badge color="primary" className="mr-1 mb-1">
        <Facebook size={12} />
      </Badge>
      <Badge color="success" className="mr-1 mb-1">
        <Instagram size={12} />
      </Badge>
      <Badge color="info" className="mr-1 mb-1">
        <Twitter size={12} />
      </Badge>
      <Badge color="danger" className="mr-1 mb-1">
        <GitHub size={12} />
      </Badge>
      <Badge color="warning" className="mr-1 mb-1">
        <Sun size={12} />
      </Badge>
    )
  }
}
export default BadgeIconsOnly
`}
    </code>
  </pre>
)

export const badgeLink = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Badge} from "reactstrap"
import {
  Link
} from "react-feather"

class BadgeLink extends React.Component {

  render() {
    return(
      <Badge href="#" color="primary">
        <Link size={12} />
        Link Badge
      </Badge>
    )
  }
}
export default BadgeLink
`}
    </code>
  </pre>
)

export const badgeBlock = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Badge} from "reactstrap"

class BadgeBlock extends React.Component {

  render() {
    return(
      <Badge color="primary" className="block">
        Block Badge
      </Badge>
    )
  }
}
export default BadgeBlock
`}
    </code>
  </pre>
)

export const badgeSizes = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Badge} from "reactstrap"

class BadgeSizes extends React.Component {

  render() {
    return(
      <Badge color="primary" className="badge-xl">
        <span>Extra Large</span>
      </Badge>
      <Badge color="primary" className="badge-lg">
        <span>Large</span>
      </Badge>
      <Badge color="primary" className="badge-md">
        <span>Medium</span>
      </Badge>
      <Badge color="primary" className="badge-sm">
        <span>Small</span>
      </Badge>
    )
  }
}
export default BadgeSizes
`}
    </code>
  </pre>
)
