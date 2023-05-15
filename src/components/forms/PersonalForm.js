import React, { Component } from 'react';

class PersonalForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			phoneNumber: '',
		};

		this.onChange = this.onChange.bind(this);
	}

	onChange(e, field) {
		this.setState({ [field]: e.target.value });
		this.props.onChange(this.state);
	}

	render() {
		return (
			<form>
				<input
					type="text"
					onChange={e => this.onChange(e, 'firstName')}
					value={this.state.firstName}
					placeholder="First name"
				/>
				<input
					type="text"
					onChange={e => this.onChange(e, 'lastName')}
					value={this.state.lastName}
					placeholder="Last name"
				/>
				<input
					type="email"
					onChange={e => this.onChange(e, 'email')}
					value={this.state.email}
					placeholder="Email"
				/>
				<input
					type="tel"
					onChange={e => this.onChange(e, 'phoneNumber')}
					value={this.state.phoneNumber}
					placeholder="Phone number"
				/>
			</form>
		);
	}
}

export default PersonalForm;
