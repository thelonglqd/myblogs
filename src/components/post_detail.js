import React, { Component } from 'react';
import { connect } from 'react-redux';

import Comments from './comments';
import { makeComment } from '../actions';

class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.commentHandler = this.commentHandler.bind(this);
  }
  componentWillMount() {
    // Will load the post with id here
  }

  commentHandler(comment) {
    this.props.makeComment(comment);
  }

  render() {
    return (
      <div>
        This is detail for post id = {this.props.params.postid}
        {/*This will be <PostContent/> Component*/}
        <Comments commentHandler={this.commentHandler} comments={this.props.postDetail.comments}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    postDetail: state.postDetail
  }
}

export default connect(mapStateToProps, { makeComment })(PostDetail);