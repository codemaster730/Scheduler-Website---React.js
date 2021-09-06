import React from "react"

export const carouselBasic = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from "reactstrap"
import sliderImage1 from "../../../assets/img/slider/01.jpg"
import sliderImage2 from "../../../assets/img/slider/02.jpg"
import sliderImage3 from "../../../assets/img/slider/03.jpg"

const images = [
  {
    src: sliderImage1,
    id: 1
  },
  {
    src: sliderImage2,
    id: 2
  },
  {
    src: sliderImage3,
    id: 3
  }
]

class CarouselBasic extends React.Component {
  state = {
    activeIndex: 0
  }

  onExiting = () => {
    this.animating = true
  }

  onExited = () => {
    this.animating = false
  }

  next = () => {
    if (this.animating) return
    const nextIndex =
      this.state.activeIndex === images.length - 1
        ? 0
        : this.state.activeIndex + 1
    this.setState({ activeIndex: nextIndex })
  }

  previous = () => {
    if (this.animating) return
    const nextIndex =
      this.state.activeIndex === images.length - 1
        ? 0
        : this.state.activeIndex - 1
    this.setState({ activeIndex: nextIndex })
  }

  goToIndex = newIndex => {
    if (this.animating) return
    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    const slides = images.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.id}
        >
          <img src={item.src} className="img-fluid" alt={item.id} />
        </CarouselItem>
      )
    })
    return (
      <React.Fragment>
        <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
        >
            <CarouselIndicators
            items={images}
            activeIndex={activeIndex}
            onClickHandler={this.goToIndex}
            />
            {slides}
            <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={this.previous}
            />
            <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={this.next}
            />
        </Carousel>
    </React.Fragment>
    )
  }
}
export default CarouselBasic

    `}
    </code>
  </pre>
)

export const carouselCaptions = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap"
import sliderImage1 from "../../../assets/img/slider/03.jpg"
import sliderImage2 from "../../../assets/img/slider/04.jpg"
import sliderImage3 from "../../../assets/img/slider/05.jpg"

const images = [
  {
      src: sliderImage1,
      id: 1,
      header: "Slide 1",
      caption: "Cupcake ipsum dolor sit amet toffee lemon drops bonbon."
  },
  {
      src: sliderImage2,
      id: 2,
      header: "Slide 2",
      caption: "Cheesecake caramels wafer pie lollipop."
  },
  {
      src: sliderImage3,
      id: 3,
      header: "Slide 3",
      caption: "Candy canes toffee gummies soufflé fruitcake dragée icing."
  }
]

class CarouselCaption extends React.Component {
  state = {
    activeIndex: 0
  }

  onExiting = () => {
    this.animating = true
  }

  onExited = () => {
    this.animating = false
  }

  next = () => {
    if (this.animating) return
    const nextIndex =
      this.state.activeIndex === images.length - 1
        ? 0
        : this.state.activeIndex + 1
    this.setState({ activeIndex: nextIndex })
  }

  previous = () => {
    if (this.animating) return
    const nextIndex =
      this.state.activeIndex === images.length - 1
        ? 0
        : this.state.activeIndex - 1
    this.setState({ activeIndex: nextIndex })
  }

  goToIndex = newIndex => {
    if (this.animating) return
    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    const slides = images.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.id}
        >
          <img src={item.src} className="img-fluid" alt={item.id} />
          <CarouselCaption captionText={item.caption} captionHeader={item.header} />
        </CarouselItem>
      )
    })
    return (
      <React.Fragment>
        <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
        >
            <CarouselIndicators
            items={images}
            activeIndex={activeIndex}
            onClickHandler={this.goToIndex}
            />
            {slides}
            <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={this.previous}
            />
            <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={this.next}
            />
        </Carousel>
    </React.Fragment>
    )
  }
}
export default CarouselCaption

    `}
    </code>
  </pre>
)

export const carouselUncontrolled = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import { UncontrolledCarousel } from "reactstrap"
import sliderImage1 from "../../../assets/img/slider/03.jpg"
import sliderImage2 from "../../../assets/img/slider/04.jpg"
import sliderImage3 from "../../../assets/img/slider/05.jpg"

const images = [
  {
      src: sliderImage1,
      id: 1,
      header: "Slide 1",
      caption: "Cupcake ipsum dolor sit amet toffee lemon drops bonbon."
  },
  {
      src: sliderImage2,
      id: 2,
      header: "Slide 2",
      caption: "Cheesecake caramels wafer pie lollipop."
  },
  {
      src: sliderImage3,
      id: 3,
      header: "Slide 3",
      caption: "Candy canes toffee gummies soufflé fruitcake dragée icing."
  }
]

class CarouselUncontrolled extends React.Component {
  state = {
    activeTab: "1",
  }

  render() {
    return (
      <React.Fragment>
        <UncontrolledCarousel items={images} />
    </React.Fragment>
    )
  }
}
export default CarouselUncontrolled

        `}
    </code>
  </pre>
)

export const carouselInterval = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import { UncontrolledCarousel } from "reactstrap"
import sliderImage1 from "../../../assets/img/slider/05.jpg"
import sliderImage2 from "../../../assets/img/slider/02.jpg"
import sliderImage3 from "../../../assets/img/slider/03.jpg"

const images = [
  {
      src: sliderImage1,
      id: 1,
      header: "Slide 1",
      caption: "Cupcake ipsum dolor sit amet toffee lemon drops bonbon."
  },
  {
      src: sliderImage2,
      id: 2,
      header: "Slide 2",
      caption: "Cheesecake caramels wafer pie lollipop."
  },
  {
      src: sliderImage3,
      id: 3,
      header: "Slide 3",
      caption: "Candy canes toffee gummies soufflé fruitcake dragée icing."
  }
]

class CarouselInterval extends React.Component {
  state = {
    activeTab: "1",
  }

  render() {
    return (
      <React.Fragment>
        <UncontrolledCarousel interval="500" items={images} />
    </React.Fragment>
    )
  }
}
export default CarouselInterval`}
    </code>
  </pre>
)

export const carouselKeyboard = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import { UncontrolledCarousel } from "reactstrap"
import sliderImage1 from "../../../assets/img/slider/05.jpg"
import sliderImage2 from "../../../assets/img/slider/01.jpg"
import sliderImage3 from "../../../assets/img/slider/03.jpg"

const images = [
  {
      src: sliderImage1,
      id: 1,
      header: "Slide 1",
      caption: "Cupcake ipsum dolor sit amet toffee lemon drops bonbon."
  },
  {
      src: sliderImage2,
      id: 2,
      header: "Slide 2",
      caption: "Cheesecake caramels wafer pie lollipop."
  },
  {
      src: sliderImage3,
      id: 3,
      header: "Slide 3",
      caption: "Candy canes toffee gummies soufflé fruitcake dragée icing."
  }
]

class CarouselKeyboard extends React.Component {
  state = {
    activeTab: "1",
  }

  render() {
    return (
      <React.Fragment>
        <UncontrolledCarousel keyboard={false} items={images} />
    </React.Fragment>
    )
  }
}
export default CarouselKeyboard

            `}
    </code>
  </pre>
)

export const carouselPause = (
  <pre>
    <code className="language-jsx">
      {`
import React from "react"
import { UncontrolledCarousel } from "reactstrap"
import sliderImage1 from "../../../assets/img/slider/05.jpg"
import sliderImage2 from "../../../assets/img/slider/01.jpg"
import sliderImage3 from "../../../assets/img/slider/03.jpg"

const images = [
  {
      src: sliderImage1,
      id: 1,
      header: "Slide 1",
      caption: "Cupcake ipsum dolor sit amet toffee lemon drops bonbon."
  },
  {
      src: sliderImage2,
      id: 2,
      header: "Slide 2",
      caption: "Cheesecake caramels wafer pie lollipop."
  },
  {
      src: sliderImage3,
      id: 3,
      header: "Slide 3",
      caption: "Candy canes toffee gummies soufflé fruitcake dragée icing."
  }
]

class CarouselKeyboard extends React.Component {
  state = {
    activeTab: "1",
  }

  render() {
    return (
      <React.Fragment>
        <UncontrolledCarousel pause items={images} />
    </React.Fragment>
    )
  }
}
export default CarouselPause`}
    </code>
  </pre>
)
