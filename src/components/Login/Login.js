import React from 'react';
import './Login.css';
//import {checkValidAddress, getWeb3} from '../../utils/utils.js' ;

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	submit = event => {
		//Handle Metamask here
		event.preventDefault();
		window.location.reload();
  };

	render() {
		return (
			<div className="Login">
				<form className="login-form" onSubmit={this.submit}>
        <h2 className="title">Knxt</h2>
					<button className="login-button"> {/*disabled if no web3 object*/}
						Log in
					</button>
          <div className="signup">
  					<p>
  						Don't have an account?
  						<a href="/" className="signup-link">
  							Sign up
  						</a>
  					</p>
  				</div>
				</form>
			</div>
		);
	}
}
