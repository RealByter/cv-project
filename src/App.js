import React, { Component } from 'react';
import './normalize.css';
import './reset.css';
import './App.css';
import Form from './components/layout/Form';
import Preview from './components/layout/Preview';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			personal: {
				firstName: '',
				lastName: '',
				email: '',
				phoneNumber: '',
			},
			experience: [
				{
					companyName: '',
					position: '',
					from: '',
					to: '',
				},
			],
			education: [
				{
					universityName: '',
					subject: '',
					from: '',
					to: '',
				},
			],
		};

		this.onChange = this.onChange.bind(this);
	}

	onChange(value) {
		this.setState(value);
	}

	render() {
		return (
			<>
				<h1 className="page-title">CV CREATOR</h1>
				<Form value={this.state} onChange={this.onChange} />
				<Preview info={this.state} />
			</>
		);
	}
}

export default App;
