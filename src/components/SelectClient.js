import React from 'react';
import { connect } from "react-redux";
import Axios from 'axios'
import Select from 'react-select';
import selectClientAction from "../redux/actions/clientAction"

class SelectClient extends React.Component {
    constructor() {
        super()
        this.state = {
            clients_list: []
        }
    }
    componentDidMount() {
        Axios.post('http://localhost:8090/front/clients_list').then(response => {
            let options = response.data.map(element => {
                return {
                    value: element.id,
                    label: element.id
                }
            })
            options.push({
                value:'all',
                label:'all'
            })
            this.setState({
                clients_list: options
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
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectClient);

