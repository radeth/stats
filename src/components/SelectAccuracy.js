import React from 'react';
import { connect } from "react-redux";
import accuracyAction from '../redux/actions/accuracyAction'

class SelectAccuracy extends React.Component {
    constructor() {
        super()

    }
    componentDidMount() {

    }

    render() {
        return (
            <div className="row">
                <div className="col">
                <h2>Dokładnośc</h2>
                    <button onClick={() => {
                        this.props.setAccuracy('month')
                    }} type="button" className="btn btn-secondary m-1">Miesięcnza</button>
                    <button onClick={() => {
                        this.props.setAccuracy('day')
                    }} type="button" className="btn btn-secondary m-1">Według Dnia</button>
                    <button onClick={() => {
                        this.props.setAccuracy('hour')
                    }} type="button" className="btn btn-secondary m-1">Godzinowa</button>
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
        setAccuracy: accuracyType => {
            dispach(accuracyAction(accuracyType))
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectAccuracy);

