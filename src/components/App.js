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
            type: 'x'
          }
        },
        dataLabels: {
          enabled: false
        },
        grid: {
          xaxis: {
            showLines: true
          },
          yaxis: {
            showLines: true
          },
        },
        xaxis: {
          type: 'datetime',
        }
      },
      series: [{
        data: []
      }],
    }
  }
  componentDidMount() {
    let clientID = 3
    let clientData = []
    dataFromServer.forEach(element => {
      if (element.client_id == clientID && element.day !== null) {
        clientData.push(element)
      }
    })
    console.log(clientData)
    console.log(this.getSeries(clientData))
    this.setState({
      series:[{
        data: this.getSeries(clientData)
      }]
    })
    
  }
  // creating series servwer data
  getSeries(clientData) {
    let clientSeries = []
    clientData.forEach(element => {
      let series = {
        x:`${element.month}/${element.day}/${element.year}`,
        y: element.total
      }
      clientSeries.push(series)
    })
    return clientSeries
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
