import React, { Component } from 'react';

class Button extends Component {
	render() {
		return <button onClick={this.props.onClick} className={`button button-${this.props.error ? 'red' : 'green'}`}>{this.props.text}</button>;
	}
}

export default Button;
