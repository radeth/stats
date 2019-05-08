import React from 'react';
import { connect } from "react-redux";
import activityAction from './../redux/actions/activityAction'


class SelectActivity extends React.Component {
    constructor() {
        super()

    }
    componentDidMount() {

    }

    render() {
        return (
            <div className="row">
                <div className="col">
                    <button onClick={() => {
                        this.props.activityAction('all')
                    }} type="button" className="btn btn-secondary m-1">Ogólna aktywność</button>
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
        activityAction: (actionType) => {
            dispach(activityAction(actionType))
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectActivity);

