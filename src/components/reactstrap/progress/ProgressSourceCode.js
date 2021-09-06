import React from "react"

export const progressBasic = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Progress} from "reactstrap"

class ProgressBasic extends React.Component {

  render() {
    return(
      <div className="text-center">0%</div>
      <Progress />
      <div className="text-center">25%</div>
      <Progress value="25" />
      <div className="text-center">50%</div>
      <Progress value={50} />
      <div className="text-center">75%</div>
      <Progress value={75} />
      <div className="text-center">100%</div>
      <Progress value="100" />
    )
  }
}
export default ProgressBasic
`}
    </code>
  </pre>
)

export const progressColored = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Progress} from "reactstrap"

class ProgressColored extends React.Component {

  render() {
    return(
      <Progress value={2 * 5} />
      <Progress color="success" value="25" />
      <Progress color="info" value={50} />
      <Progress color="warning" value={75} />
      <Progress color="danger" value="100" />
      <Progress multi>
        <Progress bar value="15" />
        <Progress bar color="success" value="30" />
        <Progress bar color="info" value="25" />
        <Progress bar color="warning" value="20" />
        <Progress bar color="danger" value="5" />
      </Progress>
    )
  }
}
export default ProgressColored
`}
    </code>
  </pre>
)

export const progressLabeled = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Progress} from "reactstrap"

class ProgressLabeled extends React.Component {

  render() {
    return(
      <Progress className="progress-lg" value="25" color="danger">
        25%
      </Progress>
      <Progress className="progress-lg" value={50} color="warning">
        1/2
      </Progress>
      <Progress className="progress-lg" value={75} color="info">
        You're almost there!
      </Progress>
      <Progress className="progress-lg" color="success" value="100">
        You did it!
      </Progress>
    )
  }
}
export default ProgressLabeled
`}
    </code>
  </pre>
)

export const progressStriped = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Progress} from "reactstrap"

class ProgressStriped extends React.Component {

  render() {
    return(
      <Progress striped value={2 * 5} />
      <Progress striped color="success" value="25" />
      <Progress striped color="info" value={50} />
      <Progress striped color="warning" value={75} />
      <Progress striped color="danger" value="100" />
    )
  }
}
export default ProgressStriped
`}
    </code>
  </pre>
)

export const progressAnimated = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Progress} from "reactstrap"

class ProgressAnimated extends React.Component {

  render() {
    return(
      <Progress animated value={2 * 5} />
      <Progress animated color="success" value="25" />
      <Progress animated color="info" value={50} />
      <Progress animated color="warning" value={75} />
      <Progress animated color="danger" value="100" />
    )
  }
}
export default ProgressAnimated
`}
    </code>
  </pre>
)

export const progressSizes = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {Progress} from "reactstrap"

class ProgressSizes extends React.Component {

  render() {
    return(
      <Progress className="progress-xl" value={20} color="primary" />
      <Progress className="progress-lg" value={40} color="success" />
      <Progress className="progress-md" value={60} color="danger" />
      <Progress className="progress-sm" value={80} color="info" />
    )
  }
}
export default ProgressSizes
`}
    </code>
  </pre>
)
