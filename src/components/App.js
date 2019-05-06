import React from 'react';
import dataFromServer from './../fixtures/dataFromServer'
import Chart from "react-apexcharts"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      options: {
        chart: {
          zoom: {
            enabled: true,
            type: 'x',
            zoomedArea: {
              fill: {
                color: '#90CAF9',
                opacity: 0.4
              },
              stroke: {
                color: '#0D47A1',
                opacity: 0.4,
                width: 1
              }
            }
          }
        },
        xaxis: {
          categories: []
        }
      },
      series: [
        {
          name: "Aktywność",
          data: []
        }
      ]
    };
  }
  componentDidMount() {
    let clientID = 2
    let clientData = []
    dataFromServer.forEach(element => {
      if (element.client_id == clientID && element.day !== null) {
        clientData.push(element)
      }
    })
    this.setState({
      options: {
        xaxis: {
          categories: this.getCategories(clientData)
        }
      },
      series: [
        {
          data: this.getSeries(clientData)
        }
      ]
    })

  }
  getSeries(clientData) {
    let clientSeries = []
    clientData.forEach(element => {
      clientSeries.push(element.total)
    })
    return clientSeries
  }
  getCategories(clientData) {
    let clientCategories = []
    clientData.forEach(element => {
      let category = `${element.year}/${element.month}/${element.day}`
      clientCategories.push(category)
    })
    return clientCategories
  }
  render() {
    return (
      <div id="chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="scatter"
          width="800"
        />
      </div>
    )
  }
}
export default App;
