import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMyInfo } from '../../actions';

import TabsContainer from './tabs_container';

class Me extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchMyInfo();
  }

  render() {
    return (
      <div>
        <TabsContainer />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    myInfo: state.myInfo
  }
}

export default connect(mapStateToProps, { fetchMyInfo })(Me);