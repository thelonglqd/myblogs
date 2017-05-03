import React, {Component} from 'react';
import NavigationBar from './navigation_bar';

export default class App extends Component {
  render() {
    return (
      <div>
        {/*Header*/}
        <NavigationBar />
        {this.props.children}
        {/*Footer*/}
      </div>
    );
  }
}