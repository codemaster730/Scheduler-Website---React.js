import React from "react"
import FilledButtons from "./ButtonsFilled"
import OutlineButtons from "./ButtonsOutline"
import FlatButtons from "./ButtonsFlat"
import GradientButtons from "./ButtonsGradient"
import ReliefButtons from "./ButtonsRelief"
import SquareButtons from "./ButtonsSquare"
import RoundButtons from "./ButtonsRound"
import TextColorButtons from "./ButtonsTextColor"
import IconButtons from "./ButtonsIcon"
import IconOnlyButtons from "./ButtonsIconOnly"
import ButtonGroups from "./ButtonGroup"
import ButtonSizes from "./ButtonSizes"
import ButtonBlock from "./ButtonBlock"
import ButtonTags from "./ButtonTags"
import ButtonGroupVertical from "./ButtonGroupVertical"
import BreadCrumbs from "../../@vuexy/breadCrumbs/BreadCrumb"
import Prism from "prismjs"
import "prismjs/components/prism-jsx.min"
class Buttons extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
  }
  render() {
    return (
      <React.Fragment>
        <BreadCrumbs
          breadCrumbTitle="Buttons"
          breadCrumbParent="Components"
          breadCrumbActive="Buttons"
        />
        <FilledButtons />
        <OutlineButtons />
        <FlatButtons />
        <GradientButtons />
        <ReliefButtons />
        <SquareButtons />
        <RoundButtons />
        <TextColorButtons />
        <IconButtons />
        <IconOnlyButtons />
        <ButtonGroups />
        <ButtonSizes />
        <ButtonBlock />
        <ButtonTags />
        <ButtonGroupVertical />
      </React.Fragment>
    )
  }
}
export default Buttons
