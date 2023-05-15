import React, { Component } from 'react';

class ExperienceForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			companyName: '',
			position: '',
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
					onChange={e => this.onChange(e, 'companyName')}
					value={this.state.companyName}
					placeholder="Company"
				/>
				<input
					type="text"
					onChange={e => this.onChange(e, 'position')}
					value={this.state.position}
					placeholder="Position"
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

export default ExperienceForm;