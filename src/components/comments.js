import React, { Component } from 'react';
import { comment } from '../actions/';

export default class Comments extends Component {
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
          <input onChange={this.props.handlerTypingAction} type="textarea" className="form-control" value={this.props.value} />
          <button onClick={this.props.handleCommentAction} className="form-control btn btn-default btn-primary">Comment</button>
        </form>
      </div>
    );
  }
}