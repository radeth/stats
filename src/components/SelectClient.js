import React from 'react';
import { connect } from "react-redux";
import Axios from 'axios'
import Select from 'react-select';
import selectClientAction from "../redux/actions/clientAction"
import listAction from './../redux/actions/listAction'
import {clientsListUrl} from './../urlsMix'
class SelectClient extends React.Component {
    constructor() {
        super()
        this.state = {
            clients_list: []
        }
        console.log(clientsListUrl)
    }
    componentDidMount() {
        Axios.post(clientsListUrl).then(response => {
            let list = response.data.map(element => {
                return {
                    value: element.id,
                    label: element.clientName
                }
            })
            this.props.listAction(list)
            list.push({
                value: 'all',
                label: 'all'
            })
            this.setState({
                clients_list: list
            })
           
        }).catch(error => console.log(error))
    }
    
    render() {
        return (
            <div className="row">
                <div className="col text-center">
                    <Select
                        onChange={selectedOption => {
                            this.props.selectClientAction(selectedOption.value)
                        }}
                        options={this.state.clients_list}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}
const mapDispatchToProps = dispach => {
    return {
        selectClientAction: (clientId) => {
            dispach(selectClientAction(clientId))
        },
        listAction: (list) => {
            dispach(listAction(list))
        }

    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectClient);

