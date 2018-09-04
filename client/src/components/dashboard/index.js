import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getProfile } from './actions';

class Dashboard extends Component {

  componentWillMount(){
    this.props.getProfile()
  }

    render(){
        return (
            <div>Dashboard</div>
        )
    }
}


const withConnect = connect(null, {getProfile});

export default withConnect(Dashboard);



