import React from 'react';
import { connect } from "react-redux";
import Chart from 'react-apexcharts'
import Axios from 'axios';

class ChartComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            chartType: 'line',
            options: {
                chart: {
                    type: 'scatter',
                    height: 380,
                    width: "100%",
                    animations: {
                        enabled: false
                    }
                },
                legend: {
                    show: true
                },
                xaxis: {
                    type: 'datetime'
                },
                yaxis: {
                    min: 0,
                    max: 30
                },
            },
            series: [
                {
                    name: '',
                    data: []
                }
            ]
        }
    }
    setChartData() {
        if (this.props.clientId === 'all') {
         
        } else {
            Axios.post('http://localhost:8090/front/users_activity', {
                clientId: this.props.clientId,
                accuracy: this.props.accuracyType
            }).then(response => {
                let series = response.data.map(element => {
                    let date = new Date(element.year, element.month, element.day, element.hour).getTime()
                    return {
                        x: date,
                        y: element.total
                    }
                })
                this.setState({
                    series: [{
                        name: `Aktywność klienta: ${this.props.clientId}`,
                        data: series
                    }]
                })
            }).catch(error => console.log(error))
        }

    }
    render() {
        return (
            <div>
                <div className="alert alert-primary">
                    Klient: {this.props.clientId}
                </div>
                <div className="alert alert-secondary" role="alert">
                    Aktywność: {this.props.activityType}
                </div>
                <div className="alert alert-warning" >
                    Dokładność: {this.props.accuracyType}
                </div>
                <button type="button" onClick={() => this.setChartData()} className="btn btn-primary m-2">Generuj Wykres</button>
                <Chart options={this.state.options} series={this.state.series} type={this.state.chartType} height="350" />
            </div>

        )
    }

}

const mapStateToProps = state => {
    return {
        clientId: state.selectedClient,
        activityType: state.selectedActivity,
        accuracyType: state.selectedAccuracy
    }
}
const mapDispatchToProps = dispach => {
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChartComponent);

