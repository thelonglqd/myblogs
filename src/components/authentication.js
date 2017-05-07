// import React, { Component } from 'react';
// import { connect } from 'react-redux';

// export default function(ComposedComponent) {
//   class Authentication extends Component {
//     componentWillReceiveProps(nextProps) {
//       if (!nextProps.formSubmitResult.SigninForm.submitFailed) {

//       }
//     }

//     render() {
//       return (
//         <ComposedComponent {...this.props}/>
//       )
//     }
//   }

//   function mapStateToProps(state) {
//     return { formSubmitResult: state.form }
//   }

//   return connect(mapStateToProps)(Authentication);
// }