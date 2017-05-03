import React, {Component} from 'react';

export default class Signin extends Component {
  render() {
    return (
      <div>
        <a className="btn btn-block btn-social btn-github">
          <span className="fa fa-github"></span>
          Sign in with Github
        </a>
        <a className="btn btn-block btn-social btn-facebook">
          <span className="fa fa-facebook"></span>
          Sign in with Facebook
        </a>
        <a className="btn btn-block btn-social btn-google">
          <span className="fa fa-google"></span>
          Sign in with Google
        </a>
        <form>
          <form-group>
            <label className="form-control">Email</label>
            <input type="text" className="form-control"/>
          </form-group>
          <form-group>
            <label className="form-control">Password</label>
            <input type="text" className="form-control"/>
          </form-group>
          <form-group>
            <label className="form-control">Confirmation</label>
            <input type="text" className="form-control"/>
          </form-group>
          <button className="btn btn-default btn-primary">Signin</button>
          <button className="btn btn-default btn-primary">Signup</button>
        </form>
      </div>
    );
  }
}