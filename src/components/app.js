import React, {Component} from 'react';
import NavigationBar from './navigation_bar';
// import Authentication from './Authentication';

export default class App extends Component {
  render() {
    // const ComposedComponent = Authentication(NavigationBar);
    return (
      <div>
        <NavigationBar />
        {this.props.children}
        {/*Footer*/}
      </div>
    );
  }
}