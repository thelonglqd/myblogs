import React, { Component } from 'react';
import { comment } from '../actions/';

export default class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: '' };
    this.handlerTypingAction = this.handlerTypingAction.bind(this);
    this.handleCommentAction = this.handleCommentAction.bind(this);
  }

  handleCommentAction(event) {
    event.preventDefault();
    this.props.commentHandler(this.state.comment);
  }

  handlerTypingAction(event) {
    this.setState({ comment: event.target.value });
  }

  render() {
    return (
      <div>
        <h5>Comments</h5>
        <ul>
          {this.props.comments.map(c => {
            return (
              <li key={c.id}>
                <b>{c.author ? c.author : `anonymous`}</b> : {c.comment}
              </li>
            )
          })}
        </ul>
        <form className="form-group">
          <input onChange={this.handlerTypingAction} type="textarea" className="form-control" />
          <button onClick={this.handleCommentAction} className="form-control btn btn-default btn-primary">Comment</button>
        </form>
      </div>
    );
  }
}