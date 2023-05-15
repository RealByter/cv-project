import React, { Component } from 'react';

class ExperienceForm extends Component {
	constructor(props) {
		super(props);

		this.onChange = this.onChange.bind(this);
	}

	onChange(e, field) {
		this.props.onChange({ ...this.props.value, [field]: e.target.value });
	}

	render() {
		const { companyName, position, to, from } = this.props.value;

		return (
			<form>
				<input
					type="text"
					onChange={e => this.onChange(e, 'companyName')}
					value={companyName}
					placeholder="Company"
				/>
				<input
					type="text"
					onChange={e => this.onChange(e, 'position')}
					value={position}
					placeholder="Position"
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

export default ExperienceForm;
