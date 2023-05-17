import React, { Component } from 'react';

class MainSubText extends Component {
	render() {
		return (
			<div className="flex-column">
				<p>{this.props.main}</p>
				<p>{this.props.sub}</p>
			</div>
		);
	}
}

export default MainSubText;
