import React from "react"

export const paginationBasic = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
  Pagination,
  PaginationItem,
  PaginationLink
  } from "reactstrap"

  class PaginationBasic extends React.Component {

    render() {
      return(
        <Pagination className="d-flex justify-content-center mt-3">
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem active>
            <PaginationLink href="#">
              4
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">6</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">7</PaginationLink>
          </PaginationItem>
        </Pagination>
      )
    }
  }
  export default PaginationBasic
  `}
    </code>
  </pre>
)

export const paginationSeprated = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
  Pagination,
  PaginationItem,
  PaginationLink
  } from "reactstrap"
  import {ChevronLeft, ChevronRight} from "react-feather"

  class PaginationSeprated extends React.Component {

    render() {
      return(
        <Pagination className="d-flex justify-content-center mt-3">
          <PaginationItem href="#" className="prev-item">
            <PaginationLink href="#" first>
              <ChevronLeft />{" "}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem active>
            <PaginationLink href="#">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">6</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">7</PaginationLink>
          </PaginationItem>
          <PaginationItem href="#" className="next-item">
            <PaginationLink href="#" last>
              <ChevronRight />
            </PaginationLink>
          </PaginationItem>
      </Pagination>
      )
    }
  }
  export default PaginationSeprated
  `}
    </code>
  </pre>
)

export const paginationIconsAndText = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
  Pagination,
  PaginationItem,
  PaginationLink
  } from "reactstrap"
  import {ChevronsLeft, ChevronsRight} from "react-feather"

  class PaginationIconsAndText extends React.Component {

    render() {
      return(
        <Pagination className="d-flex justify-content-center mt-3">
          <PaginationItem href="#" className="prev-item">
            <PaginationLink href="#" first>
              <ChevronsLeft /> Prev
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem active>
            <PaginationLink href="#">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>
          <PaginationItem href="#" className="next-item">
            <PaginationLink href="#" last>
             Next  <ChevronsRight />
            </PaginationLink>
          </PaginationItem>
      </Pagination>
      )
    }
  }
  export default PaginationIconsAndText
  `}
    </code>
  </pre>
)

export const paginationIcons = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
  Pagination,
  PaginationItem,
  PaginationLink
  } from "reactstrap"
  import {ChevronLeft, ChevronRight} from "react-feather"

  class PaginationIcons extends React.Component {

    render() {
      return(
        <Pagination className="d-flex justify-content-center mt-3">
          <PaginationItem href="#" className="prev-item">
            <PaginationLink href="#" first>
              <ChevronLeft />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem active>
            <PaginationLink href="#">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>
          <PaginationItem href="#" className="next-item">
            <PaginationLink href="#" last>
               <ChevronRight />
            </PaginationLink>
          </PaginationItem>
      </Pagination>
      )
    }
  }
  export default PaginationIcons
  `}
    </code>
  </pre>
)

export const paginationSuccess = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
  Pagination,
  PaginationItem,
  PaginationLink
  } from "reactstrap"
  import {ChevronLeft, ChevronRight} from "react-feather"

  class PaginationSuccess extends React.Component {

    render() {
      return(
        <Pagination className="d-flex justify-content-center mt-3 pagination-success">
          <PaginationItem href="#">
            <PaginationLink href="#" first>
              <ChevronLeft />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem active>
            <PaginationLink href="#">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">6</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">7</PaginationLink>
          </PaginationItem>
          <PaginationItem href="#">
            <PaginationLink href="#" last>
              <ChevronRight />
            </PaginationLink>
          </PaginationItem>
      </Pagination>
      )
    }
  }
  export default PaginationSuccess
  `}
    </code>
  </pre>
)

export const paginationDanger = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
  Pagination,
  PaginationItem,
  PaginationLink
  } from "reactstrap"
  import {ChevronLeft, ChevronRight} from "react-feather"

  class PaginationDanger extends React.Component {

    render() {
      return(
        <Pagination className="d-flex justify-content-center mt-3 pagination-danger">
          <PaginationItem href="#">
            <PaginationLink href="#" first>
              <ChevronLeft />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem active>
            <PaginationLink href="#">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">6</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">7</PaginationLink>
          </PaginationItem>
          <PaginationItem href="#">
            <PaginationLink href="#" last>
              <ChevronRight />
            </PaginationLink>
          </PaginationItem>
      </Pagination>
      )
    }
  }
  export default PaginationDanger
  `}
    </code>
  </pre>
)

export const paginationInfo = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
  Pagination,
  PaginationItem,
  PaginationLink
  } from "reactstrap"
  import {ChevronLeft, ChevronRight} from "react-feather"

  class PaginationInfo extends React.Component {

    render() {
      return(
        <Pagination className="d-flex justify-content-center mt-3 pagination-info">
          <PaginationItem href="#">
            <PaginationLink href="#" first>
              <ChevronLeft />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem active>
            <PaginationLink href="#">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">6</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">7</PaginationLink>
          </PaginationItem>
          <PaginationItem href="#">
            <PaginationLink href="#" last>
              <ChevronRight />
            </PaginationLink>
          </PaginationItem>
      </Pagination>
      )
    }
  }
  export default PaginationInfo
  `}
    </code>
  </pre>
)

export const paginationWarning = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
  Pagination,
  PaginationItem,
  PaginationLink
  } from "reactstrap"
  import {ChevronLeft, ChevronRight} from "react-feather"

  class PaginationWarning extends React.Component {

    render() {
      return(
        <Pagination className="d-flex justify-content-center mt-3 pagination-warning">
          <PaginationItem href="#">
            <PaginationLink href="#" first>
              <ChevronLeft />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem active>
            <PaginationLink href="#">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">6</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">7</PaginationLink>
          </PaginationItem>
          <PaginationItem href="#">
            <PaginationLink href="#" last>
              <ChevronRight />
            </PaginationLink>
          </PaginationItem>
      </Pagination>
      )
    }
  }
  export default PaginationWarning
  `}
    </code>
  </pre>
)

export const paginationPositions = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Col
  } from "reactstrap"

  class PaginationPositions extends React.Component {

    render() {
      return(
        <Row>
          <Col xl="4" lg="12">
            <Pagination className="d-flex justify-content-start mt-3">
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem active>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">4</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">5</PaginationLink>
              </PaginationItem>
            </Pagination>
          </Col>
          <Col xl="4" lg="12">
            <Pagination className="d-flex justify-content-center mt-3">
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem active>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">4</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">5</PaginationLink>
              </PaginationItem>
            </Pagination>
          </Col>
          <Col xl="4" lg="12">
            <Pagination className="d-flex justify-content-end mt-3">
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem active>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">4</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">5</PaginationLink>
              </PaginationItem>
            </Pagination>
          </Col>
      </Row>
      )
    }
  }
  export default PaginationPositions
  `}
    </code>
  </pre>
)

export const paginationSizes = (
  <pre>
    <code className="language-jsx">
      {`
  import React from "react"
  import {
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Col
  } from "reactstrap"

  class PaginationSizes extends React.Component {

    render() {
      return(
        <Row>
          <Col xl="4" lg="12">
            <Pagination size="lg">
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem active>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">4</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">5</PaginationLink>
              </PaginationItem>
            </Pagination>
          </Col>
          <Col xl="4" lg="12">
            <Pagination>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem active>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">4</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">5</PaginationLink>
              </PaginationItem>
            </Pagination>
          </Col>
          <Col xl="4" lg="12">
            <Pagination size="sm">
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem active>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">4</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">5</PaginationLink>
              </PaginationItem>
            </Pagination>
          </Col>
      </Row>
      )
    }
  }
  export default PaginationSizes
  `}
    </code>
  </pre>
)
