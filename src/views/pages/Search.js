import React from "react"
import { 
  Row, Col, Card, ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  TabContent,
  TabPane
} from "reactstrap"
import { Eye, Code, ChevronDown } from "react-feather"
import { dropdownControlled } from "../../components/reactstrap/dropdowns/DropdownsSourceCode"
import * as Icon from "react-feather"

import map from "../../assets/img/custom/map.png"
import goThere from "../../assets/img/custom/gothere.png"
import redDown from "../../assets/img/custom/red-down.png"
import greenUp from "../../assets/img/custom/green-up.png"
import schedule from "../../assets/img/custom/schedule.png"
import dounat from "../../assets/img/custom/dounat.png"
import scheduleBelow from "../../assets/img/custom/schedule-below.png"
import arrowDownWhite from "../../assets/img/custom/arrow-down-white.png"
import arrowDownBlack from "../../assets/img/custom/arrow-down-black.png"
import arrowRightActive from "../../assets/img/custom/arrow-right-active.png"
import arrowLeftInactive from "../../assets/img/custom/arrow-left-inactive.png"
import emailNotificationToggle from "../../assets/img/custom/email-notification-toggle.png"
import building from "../../assets/img/custom/building.png"
import building1 from "../../assets/img/custom/building1.png"
import location from "../../assets/img/custom/location.png"
import demandChartLabel from "../../assets/img/custom/demand-chart-label.png"
import demandChart from "../../assets/img/custom/demand-chart.png"
import purpleRect from "../../assets/img/custom/purple-rect.png"
import greenRect from "../../assets/img/custom/green-rect.png"
import blueRect from "../../assets/img/custom/blue-rect.png"
import purple1Rect from "../../assets/img/custom/purple1-rect.png"
import numberListing from "../../assets/img/custom/number-listing.png"
import numberSales from "../../assets/img/custom/number-sales.png"
import expectedPrice from "../../assets/img/custom/expected-price.png"
import salesPrice from "../../assets/img/custom/sales-price.png"
import group from "../../assets/img/custom/group.png"
import students from "../../assets/img/custom/students.png"
import union from "../../assets/img/custom/union.png"
import cashFlowTable from "../../assets/img/custom/cash-flow-table.png"

class Search extends React.Component{
  state = {
    activeTab: "1",
    dropdownOpen: false
  }
  
  toggleTab = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab })
    }
  }

  toggleDropdown = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  render(){
    return (
      <React.Fragment>
        <div className="filter-btn-group">
          <div className="filter-btn">Demographic</div>
          <div className="filter-btn">Needs / wants</div>
          <div className="filter-btn-active">Market Analysis</div>
          <div className="filter-btn">Property</div>
          <div className="filter-btn">Ratings</div>
          <div className="filter-btn">Demand</div>
          <div className="filter-btn">Hotspots</div>
        </div>
        <div className="m-t-32"></div>
        <div className="custom-card map-container">
          <div>
            <img src={map} />          
          </div>
          <div className="map-line">
            <div className="custom-text text-normal text-bold">
              LEGEND
            </div>
            <div className="m-t-16"></div>
            <div className="map-line-item">
              <div className="line-item-circle1"></div>
              <div className="custom-text text-normal">0%-10%</div>
            </div>
            <div className="m-t-16"></div>
            <div className="map-line-item">
              <div className="line-item-circle2"></div>
              <div className="custom-text text-normal">10%-20%</div>
            </div>
            <div className="m-t-16"></div>
            <div className="map-line-item">
              <div className="line-item-circle3"></div>
              <div className="custom-text text-normal">30%-40%</div>
            </div>
            <div className="m-t-16"></div>
            <div className="map-line-item">
              <div className="line-item-circle4"></div>
              <div className="custom-text text-normal">50%-60%</div>
            </div>
            <div className="m-t-16"></div>
            <div className="map-line-item">
              <div className="line-item-circle5"></div>
              <div className="custom-text text-normal">70%-100%</div>
            </div>
            <div className="m-t-16"></div>
          </div>
          <div className="map-tools">
            <div className="map-tool">

            </div>
          </div>
          <div className="map-btn-group">
            <div className="map-btn"><Icon.Plus size={16}/></div>
            <div className="map-btn"><Icon.Minus size={16}/></div>
            <div className="map-btn"><Icon.RefreshCw size={16}/></div>
            <div className="map-btn"></div>
            <div className="map-btn"></div>
            <div className="map-btn"></div>
            <div className="map-btn"></div>
            <div className="map-btn"></div>
          </div>  
        </div>
        <div className="m-t-32"></div>
        <Row className="match-height">
          <Col lg="6" md="6" sm="12">
            <div className="block-title">
              DEMAND ANALYSIS
            </div>
            <Row className="custom-card">
              <Col md="9">
                <span><img src={demandChartLabel} /></span><img src={demandChart} className="demand-chart" />
                <Row>
                  <Col sm="4">
                    <TabContent activeTab={this.state.activeTab}>
                      <TabPane tabId="1">
                        <div className="dropdown">
                          <ButtonDropdown
                            isOpen={this.state.dropdownOpen}
                            toggle={this.toggleDropdown}
                          >
                            <DropdownToggle color="primary" className="custom-dropdown" caret>
                              House Type
                              <ChevronDown size={15} />
                            </DropdownToggle>
                            <DropdownMenu className="custom-dropdown-content">
                              <DropdownItem tag="a">Rental Yield</DropdownItem>
                              <DropdownItem tag="a">Market activity</DropdownItem>
                              <DropdownItem tag="a">Price growth</DropdownItem>
                              <DropdownItem tag="a">Number sales</DropdownItem>
                            </DropdownMenu>
                          </ButtonDropdown>
                        </div>
                      </TabPane>
                      <TabPane className="component-code" tabId="2">
                        {dropdownControlled}
                      </TabPane>
                    </TabContent>
                    <div className="m-t-32"></div>
                    <TabContent activeTab={this.state.activeTab}>
                      <TabPane tabId="1">
                        <div className="dropdown">
                          <ButtonDropdown
                            isOpen={this.state.dropdownOpen}
                            toggle={this.toggleDropdown}
                          >
                            <DropdownToggle color="primary" className="custom-dropdown" caret>
                              Location
                              <ChevronDown size={15} />
                            </DropdownToggle>
                            <DropdownMenu className="custom-dropdown-content">
                              <DropdownItem tag="a">Rental Yield</DropdownItem>
                              <DropdownItem tag="a">Market activity</DropdownItem>
                              <DropdownItem tag="a">Price growth</DropdownItem>
                              <DropdownItem tag="a">Number sales</DropdownItem>
                            </DropdownMenu>
                          </ButtonDropdown>
                        </div>
                      </TabPane>
                      <TabPane className="component-code" tabId="2">
                        {dropdownControlled}
                      </TabPane>
                    </TabContent>
                  </Col>
                  <Col sm="8">
                    <div className="m-t-16"></div>
                    <div className="custom-text text-normal text-small"><span className="addon-prev"><img src={salesPrice} /></span>Sales price</div>
                    <div className="m-t-8"></div>
                    <div className="custom-text text-normal text-small"><span className="addon-prev"><img src={expectedPrice} /></span>Expected price</div>
                    <div className="m-t-8"></div>
                    <div className="custom-text text-normal text-small"><span className="addon-prev"><img src={numberListing} /></span>Number listings by type</div>
                    <div className="m-t-8"></div>
                    <div className="custom-text text-normal text-small"><span className="addon-prev"><img src={numberSales} /></span>Number sales by type</div>
                  </Col>
                </Row>
              </Col>
              <Col md="3">
                <img src={group} className="group-chart" />
                <div>
                  <div className="m-t-32"></div>
                  <div className="custom-text text-normal text-small"><span className="addon-prev"><img src={purpleRect} /></span> Listing by type</div>
                  <div className="m-t-8"></div>
                  <div className="custom-text text-normal text-small"><span className="addon-prev"><img src={greenRect} /></span>% Unoccupied buildings</div>
                  <div className="m-t-8"></div>
                  <di className="custom-text text-normal text-small"v><span className="addon-prev"><img src={blueRect} /></span> Sales by type</di>
                  <div className="m-t-8"></div>
                  <div className="custom-text text-normal text-small"><span className="addon-prev"><img src={purple1Rect} /></span> Number of house by type</div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg="6" md="6" sm="12">
            <div className="block-title">
              MELBOURNE PROPERTY PRICE INDEX
            </div>
            <Row className="custom-card">
              <Col md="7">
                <div className="area-chart">
                  <img src={schedule} />
                </div>
                <div className="area-chart-below">
                  <img src={scheduleBelow} />
                </div>
                <div className="filter-button-group">
                  <div className="filter-btn-active">Gross Yield<span className="filter-addon"><img src={arrowDownWhite} /></span></div>
                  <div className="filter-btn">Number sales<span className="filter-addon"><img src={arrowDownBlack} /></span></div>
                  <div className="filter-btn">Gross Yield<span className="filter-addon"><img src={arrowDownBlack} /></span></div>
                </div>
              </Col>
              <Col md="5">
                <div className="circle-chart">
                  {/* chart component */}
                </div>
                <div className="price-index-description">
                  <div className="desc-title">
                    Change in dwelling value
                  </div>
                  <div className="desc-content">
                    <div className="desc-content-left">Three months</div>
                    <div className="desc-content-right red"><span><img src={redDown} alt="red-down" /></span>-0.8%</div>
                  </div>
                  <div className="desc-content">
                    <div className="desc-content-left">Twelve months</div>
                    <div className="desc-content-right green"><span><img src={greenUp} alt="red-down" /></span>-0.8%</div>
                  </div>
                  <div className="desc-content">
                    <div className="desc-content-left">Avg.angular growth past decade</div>
                    <div className="desc-content-right green"><span><img src={greenUp} alt="red-down" /></span>-0.8%</div>
                  </div>
                </div>
                <div className="price-index-description">
                  <div className="desc-title">
                    Median value
                  </div>
                  <div className="desc-content">
                    <div className="desc-content-left">Median dwelling value</div>
                    <div className="desc-content-right">$686,798</div>
                  </div>
                  <div className="desc-content">
                    <div className="desc-content-left">Median house value</div>
                    <div className="desc-content-right">$809,274</div>
                  </div>
                  <div className="desc-content">
                    <div className="desc-content-left">Median unit value</div>
                    <div className="desc-content-right">$580,009</div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="m-t-32"></div>
        <div className="m-t-32"></div>
      </React.Fragment>
    );
  }
}

export default Search