import React, { Component } from 'react';

import Comments from './comments';

export default class PostDetail extends Component {
  render() {
    return (
      <div>
        This is detail for post id = {this.props.params.postid}
        {/*This will be <PostContent/> Component*/}
        <Comments />
      </div>
    )
  }
}