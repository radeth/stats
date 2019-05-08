import React from 'react';
import { connect } from "react-redux";
import Chart from 'react-apexcharts'
import Axios from 'axios';

class ChartComponent extends React.Component {
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
        console.log(this.props.clientId)

    }

    render() {
        return (
            <div>
                <button type="button" onClick={this.setChartData.bind(this)} className="btn btn-primary mt-5">Generuj Wykres</button>
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="scatter"
                />
            </div>

        )
    }
    setChartData() {
        Axios.post('http://localhost:8090/front/users_activity', {
            clientId: this.props.clientId
        }).then(response => {
            let series = response.data.map(element => {
                return {
                    x: `${element.month}/${element.day}/${element.year}`,
                    y: element.total
                }
            })
            console.log(series)
            this.setState({
                series:[{
                    data:series
                }]
            })
        }).catch(error => console.log(error))
    }

}

const mapStateToProps = state => {
    return {
        clientId: state.selectedClient
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

