import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import Chart from "react-apexcharts"

class ApexRadialCharts extends React.Component {
  state = {
    options: {
      colors: this.props.themeColors,
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "12px"
            },
            value: {
              fontSize: "12px"
            },
            total: {
              show: true,
              formatter: function(w) {
                return 249
              }
            }
          }
        }
      },
      labels: ["Bananas"]
    },
    series: [67]
  }

  render() {
    return (
        <Chart
        options={this.state.options}
        series={this.state.series}
        type="radialBar"
        width={150}
        height={150}
        style={{marginLeft: '-26px', marginTop: '-13px'}}
        />
    )
  }
}
export default ApexRadialCharts
