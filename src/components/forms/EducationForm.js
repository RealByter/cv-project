import React, { Component } from 'react';

class EducationForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			universityName: '',
			subject: '',
			from: '',
			to: '',
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
					onChange={e => this.onChange(e, 'universityName')}
					value={this.state.universityName}
					placeholder="University name"
				/>
				<input
					type="text"
					onChange={e => this.onChange(e, 'subject')}
					value={this.state.subject}
					placeholder="Subject"
				/>
				<input
					type="text"
					onChange={e => this.onChange(e, 'from')}
					value={this.state.from}
					placeholder="From"
				/>
				<input
					type="text"
					onChange={e => this.onChange(e, 'to')}
					value={this.state.to}
					placeholder="To"
				/>
			</form>
		);
	}
}

export default EducationForm;
