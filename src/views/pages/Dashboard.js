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
import ApexAreaCharts from './charts/ApexAreaChart'
import ApexRadialCharts from './charts/ApexRadialChart'
import ApexDonutCharts from './charts/ApexDonutChart'
import Spreadsheet from "react-spreadsheet";

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

let $primary = "#7367F0",
  $success = "#28C76F",
  $warning = "#FF9F43"

let themeColors = [$primary, $success, $warning]

const RangeView = ({ cell, getValue }) => (
  <input
    type="range"
    value={getValue({ data: cell })}
    disabled
    style={{ pointerEvents: "none" }}
  />
);
 
const RangeEdit = ({ getValue, cell, onChange }) => (
  <input
    type="range"
    onChange={(e) => {
      onChange({ ...cell, value: e.target.value });
    }}
    value={getValue({ data: cell }) || 0}
    autoFocus
  />
);
 
const data = [
  [{ value: "Flavors" }, { value: "Flavors" }, { value: "Flavors" }, { value: "Flavors" }, { value: "Flavors" }],
  [{ value: "Flavors" }, { value: "Flavors" }, { value: "Flavors" }, { value: "Flavors" }, { value: "Flavors" }],
  [{ value: "Flavors" }, { value: "Flavors" }, { value: "Flavors" }, { value: "Flavors" }, { value: "Flavors" }],
  [{ value: "Flavors" }, { value: "Flavors" }, { value: "Flavors" }, { value: "Flavors" }, { value: "Flavors" }],
  [{ value: "Flavors" }, { value: "Flavors" }, { value: "Flavors" }, { value: "Flavors" }, { value: "Flavors" }],
  [{ value: "Flavors" }, { value: "Flavors" }, { value: "Flavors" }, { value: "Flavors" }, { value: "Flavors" }],
  [{ value: "Flavors" }, { value: "Flavors" }, { value: "Flavors" }, { value: "Flavors" }, { value: "Flavors" }],
  [{ value: "Flavors" }, { value: "Flavors" }, { value: "Flavors" }, { value: "Flavors" }, { value: "Flavors" }],
  [{ value: "Flavors" }, { value: "Flavors" }, { value: "Flavors" }, { value: "Flavors" }, { value: "Flavors" }],
  [{ value: "Flavors" }, { value: "Flavors" }, { value: "Flavors" }, { value: "Flavors" }, { value: "Flavors" }],
  [{ value: "Flavors" }, { value: "Flavors" }, { value: "Flavors" }, { value: "Flavors" }, { value: "Flavors" }],
  [{ value: "Flavors" }, { value: "Flavors" }, { value: "Flavors" }, { value: "Flavors" }, { value: "Flavors" }],
  [{ value: "Flavors" }, { value: "Flavors" }, { value: "Flavors" }, { value: "Flavors" }, { value: "Flavors" }],
  [{ value: "Flavors" }, { value: "Flavors" }, { value: "Flavors" }, { value: "Flavors" }, { value: "Flavors" }]
];

class Dashboard extends React.Component{
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
        <Row className="match-height">
          <Col lg="7" md="6" sm="12">
            <div className="block-title">
              MELBOURNE PROPERTY PRICE INDEX
            </div>
            <Card className="card-block">
              <Row className="custom-card">
                <Col md="7">
                  <div className="area-chart">
                    <ApexAreaCharts />
                  </div>
                  <div className="filter-button-group">
                    <div className="filter-btn-active">Gross Yield<span className="filter-addon"><img src={arrowDownWhite} /></span></div>
                    <div className="filter-btn">Number sales<span className="filter-addon"><img src={arrowDownBlack} /></span></div>
                    <div className="filter-btn">Gross Yield<span className="filter-addon"><img src={arrowDownBlack} /></span></div>
                  </div>
                </Col>
                <Col md="5">
                  <div className="circle-chart">
                    <ApexRadialCharts />
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
                <div className="goThere">
                  <img src={goThere} />
                </div>
                <div className="prev-next">
                  <div><img src={arrowLeftInactive} /></div>
                  <div><img src={arrowRightActive} /></div>
                </div>
              </Row>
            </Card>
          </Col>
          <Col lg="5" md="6" sm="12">
            <div className="block-title">
              RECENT SEARCH
            </div>
            <Card className="card-block recent-search">
              <div className="email-notification-title">
                Email notification
                <span className="email-notification-switch">
                  <img src={emailNotificationToggle} />
                </span>
              </div>
              <div className="image-card">
                <div className="image-card-left">
                  <img src={building} />
                </div>
                <div className="image-card-right">
                  <div className="custom-text text-bold text-normal">
                    Address EST.value
                  </div>
                  <div className="m-t-8"></div>
                  <div className="custom-text text-bold text-normal">
                    $1.2m
                  </div>
                  <div className="m-t-8"></div>
                  <div className="custom-text text-bold text-normal">
                    Headline
                  </div>
                  <div className="m-t-16"></div>
                  <div className="readmore-btn">READ MORE</div>
                </div>
              </div>
              <div className="image-card">
                <div className="image-card-left">
                  <img src={location} />
                </div>
                <div className="image-card-right">
                  <div className="custom-text text-bold text-normal">
                    Address EST.value
                  </div>
                  <div className="m-t-8"></div>
                  <div className="custom-text text-small">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                  </div>
                </div>
              </div>

              <div className="goThere">
                <img src={goThere} />
              </div>
            </Card>
          </Col>
        </Row>
        <div className="m-t-32"></div>
        <Row>
          <Col lg="7" md="6" sm="12">
            <div className="block-title">
              LOCATION ANALYSER
            </div>
            <Card className="card-block location-analyser">
              <div className="custom-card">
                <Row>
                  <Col md="7">
                    <div className="custom-text text-bold text-small-title">Search Address</div>
                    <div className="m-t-8"></div>
                    <div className="custom-text text-normal">"Carlton" House Price Index</div>
                    <div className="m-t-8"></div>
                    <div className="area-chart">
                      {/* <img src={schedule} /> */}
                      <ApexAreaCharts />
                    </div>
                  </Col>
                  <Col md="5" style={{'position': 'relative'}}>
                    <div className="m-t-40"></div>
                    <div className="m-t-16"></div>
                    <TabContent activeTab={this.state.activeTab}>
                      <TabPane tabId="1">
                        <div className="dropdown">
                          <ButtonDropdown
                            isOpen={this.state.dropdownOpen}
                            toggle={this.toggleDropdown}
                          >
                            <DropdownToggle color="primary" className="custom-dropdown" caret>
                              Rental Yield
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
                    <div className="filter-btn-active"><span className="crop-icon"><Icon.Crop size={20}/></span>Select location</div>
                  </Col>
                </Row>
                <div className="m-t-32"></div>
                <Row>
                  <Col md="5">
                    <div className="custom-text text-bold text-normal">Demand</div>
                    <div className="m-t-16"></div>
                    <div className="dounat-chart">
                      {/* <img src={dounat} /> */}
                      <ApexDonutCharts />
                    </div>
                    <div className="custom-text text-bold text-normal op-6">Carlton Demand By House Type</div>
                  </Col>
                  <Col md="7" className="demand-description">
                    <div className="m-t-16"></div>
                    <div className="custom-text text-bold text-normal">Heading</div>
                    <div className="m-t-8"></div>
                    <div className="custom-text text-bold text-small-title">Sub heading</div>
                    <div className="m-t-16"></div>
                    <div className="custom-text text-normal">CARLTON has a higher demand for <span className="text-bold purple">2 Beds</span> homes has <span className="text-bold yellow">2.5%</span> annual house price growth</div>
                    <div className="m-t-32"></div>
                    <div className="readmore-btn">READ MORE</div>
                  </Col>
                </Row>
                <div className="goThere">
                  <img src={goThere} />
                </div>
                <div className="prev-next">
                  <div><img src={arrowLeftInactive} /></div>
                  <div><img src={arrowRightActive} /></div>
                </div>
              </div>
            </Card>
          </Col>
          <Col lg="5" md="6" sm="12">
            <div className="block-title">
              POST OF THE WEEK
            </div>
            <div className="image-card">
              <div className="image-card-left">
                <img src={building1} className="building1" /> 
              </div>
              <div className="image-card-right post-description">
                <div className="m-t-16"></div>
                <div className="custom-text text-bold text-normal">Heading</div>
                <div className="m-t-8"></div>
                <div className="custom-text text-bold text-small-title">Sub heading</div>
                <div className="m-t-16"></div>
                <div className="custom-text text-small op-6">Carlton is a lively neighbourhood known for its “Little Italy” scene on Lygon Street, lined with old-school trattorias and casual pizzerias. University of Melbourne students hang out in fashionable cafes around Elgin Street, near the iconic Readings book store and La Mama Theatre. The Royal Exhibition Building, a grand 19th-century pavilion, is the centrepiece of Carlton Gardens, popular for picnics and jogging</div>
                <div className="m-t-32"></div>
                <div className="readmore-btn">READ MORE</div>
              </div>
              <div className="goThere">
                <img src={goThere} />
              </div>
            </div>
            <div className="m-t-32"></div>
            <div className="block-title">
              HOTSPOT OF THE MONTH
            </div>
            <div className="image-card">
              <div className="image-card-left">
                <img src={location} /> 
              </div>
              <div className="image-card-right hotspot-description">
                <div className="m-t-16"></div>
                <div className="custom-text text-bold text-normal">Address</div>
                <div className="m-t-16"></div>
                <div className="custom-text text-small op-6">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</div>
                <div className="m-t-32"></div>
                <div className="readmore-btn">JOIN NEWSLETTER (email)</div>
              </div>
            </div>
          </Col>
        </Row>
        <div className="m-t-32"></div>
        <Card className="card-block">
        <div className="m-t-40"></div>
          <div className="custom-text text-normal text-center"> Did you know Harpoon is a carbon neutral business?</div>
          <div className="m-t-16"></div>
          <div className="custom-text text-normal text-center">Read <span className="blue">this</span> to find out how we achieve this</div>
        </Card>
        <div className="m-t-32"></div>
        <Row>
          <Col lg="7" md="6" sm="12">
            <div className="block-title">
              DEMAND ANALYSIS
            </div>
            <Card className="card-block demand-analysis">
              <Row className="custom-card">
                <Col md="9">
                  <div className="m-t-40"></div>
                  {/* <span><img src={demandChartLabel} /></span><img src={demandChart} className="demand-chart" /> */}
                  <ApexAreaCharts />
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
                  <div className="m-t-40"></div>
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
                <div className="goThere">
                  <img src={goThere} />
                </div>
                <div className="m-t-16"></div>
                
                <div className="custom-text text-normal text-small"> 
                  <div className="m-t-32"></div>
                  NORTH MELBOURNE has a <span className="blue">Growing</span> demand for 2 bed apartments. Strong growth over the last Year and an increase of 1.5% in Transactions
                  <div className="m-t-16"></div>
                </div>
              </Row>
            </Card>
          </Col>
          <Col lg="5" md="6" sm="12">
            <div className="block-title">
              CASH FLOW CALCULATOR
            </div>
            <Card className="card-block cash-flow">
              <div className="custom-card">
                {/* <img src={cashFlowTable} className="cashFlowTable" /> */}
                <Spreadsheet style={{'width': '100%'}} data={data} />
                <div className="m-t-16"></div>
                <div className="m-t-8"></div>
                <div className="cash-description">
                  <div className="circle-chart">
                    {/* chart component */}
                    <ApexRadialCharts />
                  </div>
                  <div className="cash-desc-content custom-text text-normal">
                    % of Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  </div>
                </div>
                <div className="m-t-16"></div>
                <div className="cash-desc-bottom">
                  <div className="custom-text text-normal op-6">Lorem Ipsum dolor</div>
                  <div className="custom-text text-big text-bold">$1,526</div>
                </div>
                <div className="cash-desc-bottom">
                  <div className="custom-text text-normal op-6">Lorem Ipsum dolor</div>
                  <div className="custom-text text-big text-bold">$10,000</div>
                </div>
                <div className="goThere">
                  <img src={goThere} />
                </div>
              </div>
            </Card>
          </Col>
        </Row>
        <div className="m-t-32"></div>
        <Row>
          <Col lg="7" md="6" sm="12">
            <div className="block-title">
              THE STUDENT HOUSING BUBBLE
            </div>
            <div className="image-card students">
              <div className="image-card-left">
                <img src={students} />  
              </div>
              <div className="image-card-right">
                <div className="m-t-16"></div>
                <div className="custom-text text-normal text-bold">Heading</div>
                <div className="m-t-8"></div>
                <div className="custom-text text-small-title text-bold">Sub heading</div>
                <div className="m-t-16"></div>
                <div className="custom-text text-small">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </div>
                <div className="m-t-32"></div>
                <div className="readmore-btn">READ MORE</div>
              </div>
              <div className="goThere">
                <img src={goThere} />
              </div>
            </div>
          </Col>
          <Col lg="5" md="6" sm="12">
            <div className="block-title">
              MY REPORTS
            </div>
            <Card className="card-block my-reports">
              <div className="union-card">
                <div className="custom-text text-normal"><span><img src={union} /></span>21 Colins street</div>
                <div className="custom-text text-small-title op-6">31/07/2020</div>
              </div>
              <div className="m-t-16"></div>
              <div className="union-card">
                <div className="custom-text text-normal"><span><img src={union} /></span>52 Swanston street</div>
                <div className="custom-text text-small-title op-6">31/07/2020</div>
              </div>
              <div className="m-t-16"></div>
              <div className="union-card">
                <div className="custom-text text-normal"><span><img src={union} /></span>21 Carlton report</div>
                <div className="custom-text text-small-title op-6">31/07/2020</div>
              </div>
              <div className="m-t-16"></div>
              <div className="union-card">
                <div className="custom-text text-normal"><span><img src={union} /></span>21 Lorem Ipsum</div>
                <div className="custom-text text-small-title op-6">31/07/2020</div>
              </div>
              <div className="m-t-16"></div>
              <div className="union-card">
                <div className="custom-text text-normal"><span><img src={union} /></span>21 Lorem Ipsum</div>
                <div className="custom-text text-small-title op-6">31/07/2020</div>
              </div>
              <div className="plus">
                +
              </div>
            </Card>
          </Col>
        </Row>        
        <div className="m-t-40"></div>
      </React.Fragment>
    )
  }
}

export default Dashboard