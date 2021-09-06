import React from "react"
import { Card, CardBody } from "reactstrap"
import Chart from "react-apexcharts"

class ApexAreaCharts extends React.Component {
  state = {
    options: {
      chart: {
        id: "areaChart",
        toolbar: {
          show: false,
        }
      },
      xaxis: {
        categories: [
          "06:00",
          "09:00",
          "12:00",
          "15:00",
          "18:00",
          "21:00",
          "00:00"
        ]
      },
      yaxis: [
        {
          
        },
        {
          opposite: true,
        }
      ],
      stroke: {
        curve: "smooth"
      },
      dataLabels: {
        enabled: false
      },
      colors: this.props.themeColors,
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5
        }
      },

      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    },
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100]
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41]
      },
      {
        name: "series3",
        data: [9, 30, 25, 52, 14, 22, 31]
      }
    ]
  }

  render() {
    return (
      <Card className="property-price-chart">
        <CardBody>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="area"
            height={350}
          />
        </CardBody>
      </Card>
    )
  }
}
export default ApexAreaCharts
