import React, {Component} from 'react';
import NavigationBar from './navigation_bar';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavigationBar />
        {this.props.children}
        {/*Footer*/}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authentication: state.authentication }
}

export default connect(mapStateToProps)(App);