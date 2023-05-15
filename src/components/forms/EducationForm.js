import React, { Component } from 'react';

class EducationForm extends Component {
	constructor(props) {
		super(props);

		this.onChange = this.onChange.bind(this);
	}

	onChange(e, field) {
		this.props.onChange({ ...this.props.value, [field]: e.target.value });
	}

	render() {
		const { universityName, subject, from, to } = this.props.value;

		return (
			<form>
				<input
					type="text"
					onChange={e => this.onChange(e, 'universityName')}
					value={universityName}
					placeholder="University name"
				/>
				<input
					type="text"
					onChange={e => this.onChange(e, 'subject')}
					value={subject}
					placeholder="Subject"
				/>
				<input
					type="text"
					onChange={e => this.onChange(e, 'from')}
					value={from}
					placeholder="From"
				/>
				<input
					type="text"
					onChange={e => this.onChange(e, 'to')}
					value={to}
					placeholder="To"
				/>
			</form>
		);
	}
}

export default EducationForm;
