import React, { Component } from 'react';

export default class TabContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 'general' };
  }

  onClickGeneral = () => {
    this.setState({ activeTab: 'general' });
  }

  onClickProjects = () => {
    this.setState({ activeTab: 'projects' });
  }

  onClickContact = () => {
    this.setState({ activeTab: 'contact'});
  }

  render() {
    return (
      <div id="meTab" className="container">
        <ul className="nav nav-pills">
          <li className="active" data-toggle="tab"><a onClick={this.onClickGeneral} href="#general">General</a></li>
          <li data-toggle="tab"><a onClick={this.onClickProjects} href="#projects">Projects</a></li>
          <li data-toggle="tab"><a onClick={this.onClickContact} href="#contact">Contact</a></li>
        </ul>
        <div className="tab-content clearfix">
          <div className={ this.state.activeTab === 'general' ? `tab-pane active` : 'tab-pane' } id ="general">
            <h3>Content's background color is the same for the tab</h3>
          </div>
          <div className={ this.state.activeTab === 'projects' ? `tab-pane active` : `tab-pane` }>
            <h3>We use the class nav-pills instead of nav-tabs which automatically creates a background color for the tab</h3>
				  </div>
          <div className={ this.state.activeTab === 'contact' ? `tab-pane active` : `tab-pane`} id="contact">
            <h3>We applied clearfix to the tab-content to rid of the gap between the tab and the content</h3>
				  </div>
        </div>
      </div>
    )
  }
}