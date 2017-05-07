import React, { Component } from 'react';
import { connect } from 'react-redux';

import Comments from './comments';
import { makeComment } from '../actions';

class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: '' };
  }
  componentWillMount() {
    // Will load the post with id here
  }

  handlerTypingAction = (event) => {
    this.setState({ comment: event.target.value });
  }

  handleCommentAction = (event) => {
    event.preventDefault();
    this.props.makeComment(this.state.comment);
    this.setState({ comment: '' });
  }

  render() {
    return (
      <div>
        This is detail for post id = {this.props.params.postid}
        {/*This will be <PostContent/> Component*/}
        <Comments
          value={this.state.comment}
          commentText={this.state.comment}
          handlerTypingAction={this.handlerTypingAction}
          handleCommentAction={this.handleCommentAction}
          commentHandler={this.commentHandler}
          comments={this.props.postDetail.comments}/>
          {this.state.comment}
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