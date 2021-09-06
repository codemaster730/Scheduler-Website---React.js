import React from "react"
import { Card, CardBody } from "reactstrap"
import Chart from "react-apexcharts"

class ApexRadialCharts extends React.Component {
  state = {
    options: {
      colors: this.props.themeColors,
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px",
              show: false
            },
            value: {
              fontSize: "22px"
            },
            total: {
              show: true,
              formatter: function(w) {
                return '101'
              }
            }
          }
        }
      },
     
    },
    series: [44]
  }

  render() {
    return (
      <Card className="circle-chart">
        <CardBody>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="radialBar"
            height={150}
            width={150}
          />
        </CardBody>
      </Card>
    )
  }
}
export default ApexRadialCharts
