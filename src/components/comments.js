import React, {Component} from 'react';

export default class Comments extends Component {
  render() {
    return (
      <div>
        <h5>Comments</h5>
        <ul>
          <li>Thanks for sharing</li>
          <li>Great post</li>
          <li>it is the shit, thanks !!!</li>
        </ul>
        <form className="form-group">
          <input type="textarea" className="form-control"/>
          <button className="form-control btn btn-default btn-primary">Comment</button>
        </form>
      </div>
    );
  }
}