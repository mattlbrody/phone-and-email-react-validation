import React, { Component } from 'react';

export default class EmailAndPhone extends Component {
	state = { phoneNumber: '', email: '', phoneFail: '', emailFail: ''};

	onFormSubmit = (event) => {
		event.preventDefault()

		//remove all special characters
		var digitsOnly = this.state.phoneNumber.replace(/\D/g, '');
		
		var number = /^\d{10}$/.test(this.state.phoneNumber);
		if(!number) {
			this.setState({ phoneFail: 'enter numbers only' })
		} else {
			this.setState({ phoneFail: '' })
		}



		var email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email);
		if(!email) {
			this.setState({ emailFail: 'enter a valid email address' })
		} else {
			this.setState({ emailFail: '' })
		}
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onFormSubmit} className="ui form">
				  <div className="field">
				    <input type="text" name="phone-number" placeholder="Phone Number" onChange={e => this.setState({ phoneNumber: e.target.value })}/>
				    <h3>{this.state.phoneFail}</h3>
				  </div>
				  <div className="field">
				    <input type="text" name="email" placeholder="Email" onChange={e => this.setState({ email: e.target.value })} />
				    <h3>{this.state.emailFail}</h3>
				  </div>
				  <div className="field">
				  </div>
				  <button className="ui button" type="submit">Submit</button>
				</form>
			</div>
		);
	}
}