import React from 'react';
import selectRangeAction from './../redux/actions/rangeAction'
import { connect } from "react-redux";

class SelectRange extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                    <input onChange={(e) => {
                        let date = e.target.value.split('-')
                        this.props.selectRange(date)
                    }} type="date"></input>
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
        selectRange: (date) => {
            dispach(selectRangeAction(date))
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectRange);

