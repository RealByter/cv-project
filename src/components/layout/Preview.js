import React, { Component } from 'react';
import Linebreak from '../elements/Linebreak';
import TimePeriod from '../elements/TimePeriod';

class Preview extends Component {
	render() {
		const { personal, education, experience } = this.props.info;

		return (
			<div>
				<div>
					<h1>
						{personal.firstName} {personal.lastName}
					</h1>
				</div>
				<div>
					<h3>Experience</h3>
					<Linebreak />
					{experience.map(exp => (
						<TimePeriod
							from={exp.from}
							to={exp.to}
							main={exp.position}
							sub={exp.companyName}
						/>
					))}
				</div>
				<div>
					<h3>Education</h3>
					<Linebreak />
					{education.map(edu => (
						<TimePeriod
							from={edu.from}
							to={edu.to}
							main={edu.universityName}
							sub={edu.subject}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default Preview;
