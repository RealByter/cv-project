import React, { Component } from 'react';
import MainSubText from './MainSubText';

class TimePeriod extends Component {
	render() {
		return (
			<div className="time-period">
				<p>
					{this.props.from} - {this.props.to}
				</p>
				<MainSubText main={this.props.main} sub={this.props.sub} />
			</div>
		);
	}
}

export default TimePeriod;
