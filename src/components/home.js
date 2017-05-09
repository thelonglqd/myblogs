import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Home extends Component {
  renderPostPlotList() {
    const { authenticated } = this.props.authentication;
    console.log('this.props.authentication: ', this.props.authentication);
    return this.props.posts.posts.map((post) => {
      return (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.plot}</p>
          <Link to={`/posts/${post.id}`}>Continue reading ...</Link>
          {authenticated ? (<Link tp="#">Edit this post ...</Link>) : ''}
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderPostPlotList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    authentication: state.authentication
  }
}

export default connect(mapStateToProps)(Home);