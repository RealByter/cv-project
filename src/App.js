import React, { Component } from 'react';
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
			experience: [],
			education: [],
		};

		this.onChange = this.onChange.bind(this);
	}

	onChange(value) {
		this.setState(value);
	}

	render() {
		return (
			<>
				<Form value={this.state} onChange={this.onChange} />
				<Preview info={this.state} />
			</>
		);
	}
}

export default App;
