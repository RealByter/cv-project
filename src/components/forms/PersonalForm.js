import React, { Component } from 'react';

class PersonalForm extends Component {
	constructor(props) {
		super(props);

		this.onChange = this.onChange.bind(this);
	}

	onChange(e, field) {
		this.props.onChange({ ...this.props.value, [field]: e.target.value });
	}

	render() {
    const {firstName, lastName, email, phoneNumber } = this.props.value;

		return (
			<form>
				<input
					type="text"
					onChange={e => this.onChange(e, 'firstName')}
					value={firstName}
					placeholder="First name"
				/>
				<input
					type="text"
					onChange={e => this.onChange(e, 'lastName')}
					value={lastName}
					placeholder="Last name"
				/>
				<input
					type="email"
					onChange={e => this.onChange(e, 'email')}
					value={email}
					placeholder="Email"
				/>
				<input
					type="tel"
					onChange={e => this.onChange(e, 'phoneNumber')}
					value={phoneNumber}
					placeholder="Phone number"
				/>
			</form>
		);
	}
}

export default PersonalForm;
