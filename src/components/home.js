import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Home extends Component {
  renderPostPlotList() {
    return this.props.posts.posts.map((post) => {
      return (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.plot}</p>
          <Link to={`/posts/${post.id}`}>Continue reading ...</Link>
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
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home);