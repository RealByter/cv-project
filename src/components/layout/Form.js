import React, { Component } from 'react';
import PersonalForm from '../forms/PersonalForm';

class Form extends Component {
	constructor(props) {
		super(props);

		this.onPersonalChange = this.onPersonalChange.bind(this);
	}

	onPersonalChange(value) {
		this.props.onChange({ personal: value });
	}

	render() {
		return (
			<div>
				<h2>Personal Information</h2>
				<PersonalForm
					value={this.props.value.personal}
					onChange={this.onPersonalChange}
				/>
				<h2>Experience</h2>
				{this.props.value.education.map(edu => (
					<></>
				))}
				<h2>Education</h2>
				{this.props.value.experience.map(exp => (
					<></>
				))}
			</div>
		);
	}
}

export default Form;
