import React from 'react';
import { connect } from "react-redux";
import Chart from 'react-apexcharts'
import Axios from 'axios';

class ChartComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            message: null,
            options: {
                chart: {
                    type: 'scatter',
                    height: 380,
                    width: "100%",
                    animations: {
                        enabled: false
                    }
                },

                xaxis: {
                    type: 'datetime',
                    label:{
                        formatter: function (value, timestamp) {
                            return new Date(timestamp) // The formatter function overrides format property
                          }, 
                    }
                },
                yaxis: {
                    forceNiceScale: true
                },
                dataLabels: {
                    enabled: true
                },
                markers: {
                    size: 5,
                }
            },
            series: [

            ],

        }

    }
    setChartData() {
        if (this.props.clientId === 'all') {
            this.setClientsIds()
        } else {
            this.setState({
                series: []
            })
            Axios.post('http://localhost:8090/front/users_activity', {
                clientId: this.props.clientId,
                accuracy: this.props.accuracyType,
                month: this.props.accuracyType === "hour" ? this.props.range.month : null,
                year: this.props.accuracyType === "hour" ? this.props.range.year : null,
                day: this.props.accuracyType === "hour" ? this.props.range.day : null,
            }).then(response => {
                if(response.data.length ===0){
                    window.alert('brak danych')
                }
                let series = response.data.map(element => {
                    let date = new Date(element.year, element.month, element.day, element.hour).getTime()
                    return {
                        x: date,
                        y: element.total
                    }
                })
                this.setState({
                    series: [{
                        name: this.setClientName(this.props.clientId),
                        data: series
                    }]
                })
            }).catch(error => console.log(error))
        }

    }
    setClientsIds() {
        Axios.post('http://localhost:8090/front/clients_list').then(response => {
            let clientsIds = response.data.map(element => {
                return element.id
            })
            this.setChartDataAllCLients(clientsIds)
        }).catch(error => console.log(error))
    }
    setChartDataAllCLients(clientsIds) {
        this.setState({
            series: []
        })
        clientsIds.forEach(id => {
            Axios.post('http://localhost:8090/front/users_activity', {
                clientId: id,
                accuracy: this.props.accuracyType,
                month: this.props.accuracyType === "hour" ? this.props.range.month : null,
                year: this.props.accuracyType === "hour" ? this.props.range.year : null,
                day: this.props.accuracyType === "hour" ? this.props.range.day : null,
            }).then(response => {
                let clientSeries = response.data.map(element => {
                    let date = new Date(element.year, element.month, element.day, element.hour).getTime()
                    return {
                        x: date,
                        y: element.total
                    }
                })
                this.setState({
                    series: [
                        ...this.state.series,
                        {
                            name: this.setClientName(id),
                            data: clientSeries
                        }

                    ]
                })
            }).catch(error => console.log(error))

        });
    }
    setClientName(id) {
        let name
        this.props.clientsList.forEach(element => {
            if (element.value === id) { 
                name = element.label }
        })
        return name
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
                <button type="button" onClick={() => {
                    this.setChartData()
                    this.forceUpdate()
                }} className="btn btn-primary m-2">Generuj Wykres</button>
                <Chart options={this.state.options} series={this.state.series} height="350" />
            </div>

        )
    }

}

const mapStateToProps = state => {
    return {
        clientId: state.selectedClient,
        activityType: state.selectedActivity,
        accuracyType: state.selectedAccuracy,
        range: state.selectedRange,
        clientsList: state.clientsList
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

