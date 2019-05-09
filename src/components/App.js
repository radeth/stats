import React from 'react';
import SelectClient from './SelectClient'
import { connect } from "react-redux";
import SelectActivity from './SelectActivity'
import ChartComponent from './ChartComponent'
import SelectAccuary from './SelectAccuracy'
class App extends React.Component {

  render() {
    return (
      <div className="container-flex p-1">
        <div className="row">
          <div className="col-4">
            <SelectClient />
            {this.props.selectedClient ? <SelectActivity /> : null}
            {this.props.selectedActivity ? <SelectAccuary /> : null}
          </div>
          <div className="col-8">
          <ChartComponent />
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  console.log(state)
  return {
    selectedClient: state.selectedClient,
    selectedActivity: state.selectedActivity,
    selectedAccuary: state.selectedAccuary
  }
}
const mapDispatchToProps = dispach => {
  return {

  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

