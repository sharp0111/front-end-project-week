import React from 'react';
import { connect } from 'react-redux';
import { signUp, signIn } from '../actions';
import { withRouter } from "react-router-dom";

class Login extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleSignUp = () => {
      this.props.signUp(this.state); 
  }

  handleSignIn = () => {
      this.props.signIn(this.state);
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  
  render() {
    if(this.props.misc.loggedIn){
      console.log(this.props.misc.loggedIn);
      console.log(this.props.history);
      this.props.history.push('/app/list');
      // return <Redirect to='/app/list' />;
    }
    return (
      <div className="login">
        <div className="title">Lambda Notes</div>
        <div className="login_error">{this.props.misc.loginError}</div>
        <input name="email" value={this.state.value} placeholder="Email" onChange={this.handleOnChange}/><br />
        <input name="password" type="password" value={this.state.value} placeholder="Password" onChange={this.handleOnChange}/><br />
        <button className="signin" onClick={() => {this.handleSignIn()}}>Sign in</button><br />
        <div>- or -</div>
        <button onClick={() => {this.handleSignUp()}}>Sign up</button><br />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    misc: state.misc
  } 
}

export default withRouter(connect(mapStateToProps, {signUp, signIn})(Login));