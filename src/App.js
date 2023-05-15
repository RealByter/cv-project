import React, { Component } from 'react';
import './App.css';
import Form from './components/layout/Form';

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
			education: [],
			experience: [],
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
			</>
		);
	}
}

export default App;
